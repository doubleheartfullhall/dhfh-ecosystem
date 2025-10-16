import Link from "next/link";

export default function AccountPage(): JSX.Element {
  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-dhfh-jade">Account</p>
          <h1 className="font-display text-4xl text-dhfh-ink">Manage your DHFH membership</h1>
          <p className="text-lg text-dhfh-ink/80">
            This page will connect with our auth memory client shortly. You will be able to view membership status,
            update email addresses, and download receipts.
          </p>
        </header>
        <section className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="font-display text-2xl text-dhfh-ink">Current status</h2>
          <p className="mt-2 text-sm text-dhfh-ink/70">
            Membership: <span className="font-semibold">FREE</span> · Renews monthly
          </p>
          <p className="mt-1 text-sm text-dhfh-ink/60">Upgrade options will appear when billing integration is ready.</p>
        </section>
        <section className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="font-display text-2xl text-dhfh-ink">Need help?</h2>
          <p className="mt-2 text-sm text-dhfh-ink/70">
            Reach out to <a href="mailto:hello@doubleheartfullhall.com" className="text-dhfh-red underline">hello@doubleheartfullhall.com</a> and we will follow up within two business days.
          </p>
        </section>
        <Link
          href="/legal/terms"
          className="inline-flex items-center justify-center rounded-full border border-dhfh-ink/20 px-6 py-3 font-semibold text-dhfh-ink transition hover:border-dhfh-ink/40"
        >
          Review terms of use
        </Link>
      </div>
    </main>
  );
}
