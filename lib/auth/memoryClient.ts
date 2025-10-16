export type DemoUser = {
  id: "demo-user";
  email: string;
  under18?: boolean;
};

export type Membership = {
  tier: "FREE";
  status: "active";
};

export type ClaimCodeSuccess = {
  ok: true;
  world: "kitchen";
  stories: ["story.kitchen.001"];
};

export type ClaimCodeFailure = {
  ok: false;
};

export type ClaimCodeResult = ClaimCodeSuccess | ClaimCodeFailure;

export type ConsentRecord = {
  type: string;
  version: string;
  granted: boolean;
};

const DEFAULT_EMAIL = "demo@local";

let currentUser: DemoUser | null = null;
let consentLog: ConsentRecord[] = [];
let unlockedWorlds: string[] = [];
let unlockedStories: string[] = [];

const membership: Membership = {
  tier: "FREE",
  status: "active",
};

function createUser(email: string, under18?: boolean): DemoUser {
  return {
    id: "demo-user",
    email,
    ...(typeof under18 !== "undefined" ? { under18 } : {}),
  };
}

export function getUser(): DemoUser | null {
  return currentUser;
}

export async function signIn(email: string): Promise<DemoUser> {
  const nextEmail = email || DEFAULT_EMAIL;
  currentUser = createUser(nextEmail, currentUser?.under18);
  return currentUser;
}

export async function signOut(): Promise<void> {
  currentUser = null;
  consentLog = [];
  unlockedWorlds = [];
  unlockedStories = [];
}

export function getMembership(): Membership {
  return membership;
}

export async function claimCode(code: string): Promise<ClaimCodeResult> {
  if (code === "DHFH-KITCHEN-STARTER-001") {
    const result: ClaimCodeSuccess = {
      ok: true,
      world: "kitchen",
      stories: ["story.kitchen.001"],
    };

    registerUnlock(result.world, result.stories);

    return result;
  }

  return { ok: false };
}

export function recordConsent(record: ConsentRecord): void {
  consentLog = [...consentLog, record];
}

export function getConsents(): ConsentRecord[] {
  return [...consentLog];
}

export function registerUnlock(world: string, stories: string[]): void {
  if (!unlockedWorlds.includes(world)) {
    unlockedWorlds = [...unlockedWorlds, world];
  }

  const additions = stories.filter((story) => !unlockedStories.includes(story));
  if (additions.length > 0) {
    unlockedStories = [...unlockedStories, ...additions];
  }
}

export function getUnlockedWorlds(): string[] {
  return [...unlockedWorlds];
}

export function getUnlockedStories(): string[] {
  return [...unlockedStories];
}

export function setUnder18(value: boolean): void {
  const email = currentUser?.email ?? DEFAULT_EMAIL;
  currentUser = createUser(email, value);
}

export function hydrateAuthState({
  user,
  consents,
  worlds,
  stories,
}: {
  user?: DemoUser | null;
  consents?: ConsentRecord[];
  worlds?: string[];
  stories?: string[];
}): void {
  currentUser = user ? createUser(user.email, user.under18) : null;
  consentLog = consents ? [...consents] : [];
  unlockedWorlds = worlds ? [...worlds] : [];
  unlockedStories = stories ? [...stories] : [];
}

export function exportAuthState(): {
  user: DemoUser | null;
  consents: ConsentRecord[];
  worlds: string[];
  stories: string[];
} {
  return {
    user: currentUser ? createUser(currentUser.email, currentUser.under18) : null,
    consents: [...consentLog],
    worlds: [...unlockedWorlds],
    stories: [...unlockedStories],
  };
}
