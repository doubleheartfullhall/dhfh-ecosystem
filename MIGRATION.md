# Migration Guide: Memory Client to Supabase Backend

This document outlines how to replace the in-memory auth/profile client with Supabase services while preserving the existing frontend function signatures. Follow the steps in order so the UI continues compiling without further changes.

## 1. Provision Supabase Project
1. Create a new Supabase project and note the project URL and service role key.
2. Enable the "Auth" and "Database" features. Configure email OTP or passwordless sign-in to match the planned authentication flow.
3. Store the following secrets in **Vercel**, **Codespaces**, and local `.env.local` (do **not** commit the file):
   ```env
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   ```

## 2. Database Schema
Run the SQL below inside the Supabase SQL editor to create required tables, enums, and indexes.

```sql
-- Users are provisioned by Supabase auth; app_user stores profile metadata.
create table app_user (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  created_at timestamptz default timezone('utc', now()),
  updated_at timestamptz default timezone('utc', now())
);

create table caregiver_profile (
  id uuid primary key default gen_random_uuid(),
  app_user_id uuid not null references app_user(id) on delete cascade,
  display_name text not null,
  relation text,
  created_at timestamptz default timezone('utc', now())
);

create table child_profile (
  id uuid primary key default gen_random_uuid(),
  app_user_id uuid not null references app_user(id) on delete cascade,
  display_name text not null,
  birthdate date,
  preferred_language text check (preferred_language in ('en', 'zh', 'bilingual')),
  prefers_pinyin text check (prefers_pinyin in ('show', 'hide', 'tap')),
  created_at timestamptz default timezone('utc', now())
);

create table membership (
  id uuid primary key default gen_random_uuid(),
  app_user_id uuid not null references app_user(id) on delete cascade,
  tier text not null,
  status text not null,
  expires_at timestamptz,
  created_at timestamptz default timezone('utc', now())
);

create table guardian (
  caregiver_id uuid not null references caregiver_profile(id) on delete cascade,
  child_id uuid not null references child_profile(id) on delete cascade,
  primary key (caregiver_id, child_id)
);

create table product_code (
  code text primary key,
  world text not null,
  stories text[] not null,
  max_redemptions int default 1,
  redemptions int default 0,
  active boolean default true,
  created_at timestamptz default timezone('utc', now())
);

create table entitlement (
  id uuid primary key default gen_random_uuid(),
  app_user_id uuid not null references app_user(id) on delete cascade,
  world text not null,
  stories text[] not null,
  granted_at timestamptz default timezone('utc', now())
);

create table consent_record (
  id uuid primary key default gen_random_uuid(),
  app_user_id uuid not null references app_user(id) on delete cascade,
  type text not null,
  version text not null,
  granted boolean not null,
  created_at timestamptz default timezone('utc', now())
);

create table story (
  id text primary key,
  world text not null,
  title_en text not null,
  title_zh text not null,
  payload jsonb not null,
  created_at timestamptz default timezone('utc', now())
);

create index on entitlement (app_user_id);
create index on membership (app_user_id);
create index on consent_record (app_user_id);
```

## 3. Row Level Security
Enable RLS on all tables and add policies to scope access to the authenticated user.

```sql
alter table app_user enable row level security;
alter table caregiver_profile enable row level security;
alter table child_profile enable row level security;
alter table membership enable row level security;
alter table guardian enable row level security;
alter table consent_record enable row level security;
alter table entitlement enable row level security;
alter table product_code enable row level security;
alter table story enable row level security;

-- Example policies
create policy "Users can read their own profile" on app_user
  for select using (auth.uid() = id);

create policy "Users manage their caregiver profile" on caregiver_profile
  using (exists (
    select 1 from app_user au
    where au.id = caregiver_profile.app_user_id
      and au.id = auth.uid()
  ));

create policy "Users manage their child profiles" on child_profile
  using (exists (
    select 1 from app_user au
    where au.id = child_profile.app_user_id
      and au.id = auth.uid()
  ));

create policy "Users read their membership" on membership
  for select using (app_user_id = auth.uid());

create policy "Users read their entitlements" on entitlement
  for select using (app_user_id = auth.uid());

create policy "Users insert their consents" on consent_record
  for insert with check (app_user_id = auth.uid());

create policy "Users read their consents" on consent_record
  for select using (app_user_id = auth.uid());

create policy "Allow claim lookups" on product_code
  for select using (active = true);

create policy "Public stories" on story
  for select using (true);
```

> Adjust policies as needed for admin or service role access. Service role operations (e.g., redemptions) should use server-side Supabase client without RLS restrictions.

## 4. Supabase Client Utility (`lib/auth/supabaseClient.ts`)
1. Install the Supabase JavaScript client packages (`@supabase/supabase-js`).
2. Create `lib/auth/supabaseClient.ts` exporting a singleton Supabase client configured with public keys for browser usage and a server-side helper for service role operations.
3. Provide helper functions mirroring the current memory client signatures:
   - `getUser()`, `signIn(email)`, `signOut()` mapping to Supabase Auth.
   - `getMembership()` querying the `membership` table for the active record.
   - `claimCode(code)` invoking a server-side RPC or function that:
     - validates the code from `product_code`
     - inserts an `entitlement`
     - increments redemption counts.
   - `recordConsent(record)` inserting into `consent_record`.
   - `getConsents()`, `setUnder18()`, `hydrateAuthState()`, `exportAuthState()` reimplemented via Supabase queries where relevant.
   - Add new helpers: `registerEntitlementsFromClaim(result)` to sync local state with Supabase responses.

## 5. API Route Updates
Update API handlers to call Supabase rather than the memory client.

### `/app/api/claim/route.ts`
- Replace the `memoryClient.claimCode` call with a Supabase server client instance.
- Use the service role key (via edge config or environment variables) to bypass RLS when validating codes and creating entitlements.
- Return the same shape (`{ ok, world, stories }` or `{ error }`) so UI code stays unchanged.
- After a successful claim, call a helper such as `registerClaimResult` to cache the unlocked worlds in local storage (if needed, emit the same payload and let the client handle it).

### `/app/api/consent/route.ts`
- Swap `memoryClient.recordConsent` for a Supabase insert into `consent_record` using the authenticated user session.
- Maintain the `{ ok: true }` response body on success; surface any error messages with a `{ error }` payload.

## 6. App Provider Integration (`components/auth/AppProvider.tsx`)
1. Import the new Supabase client helpers but keep the existing function names (`signIn`, `signOut`, `claimCode`, `recordConsent`, etc.).
2. Replace local state hydration with Supabase session checks (`supabase.auth.getSession()`).
3. Fetch membership, entitlements, and consent data via Supabase queries during hydration.
4. Persist minimal state to localStorage if offline caching is still desired, but source of truth should be Supabase responses.
5. Ensure `registerEntitlementsFromClaim` (or equivalent) updates unlocked world state after claims.

## 7. Testing and Validation
1. Run `npm run typecheck` and `npm run test` to confirm compile-time and unit tests still pass.
2. Execute an end-to-end smoke test:
   - Visit `/qr?code=DHFH-KITCHEN-STARTER-001` with a valid session.
   - Confirm the claim unlocks the Kitchen world via Supabase.
   - Navigate to `/world` and verify the realm shows as unlocked.
   - Open `/reader/story.kitchen.001` and ensure entitlements allow access.
3. Monitor Supabase logs for RLS violations or auth errors.

## 8. Deployment Notes
- Update Vercel environment variables with Supabase keys and redeploy.
- Grant the CI pipeline access to Supabase service role secrets for integration tests (store in GitHub Actions secrets if applicable).
- Consider creating database migrations under a `/supabase/migrations` directory so schema changes are tracked in version control.

---
By following the steps above, the project will move from an in-memory mock to a production-ready Supabase backend while keeping the existing frontend interfaces intact.
