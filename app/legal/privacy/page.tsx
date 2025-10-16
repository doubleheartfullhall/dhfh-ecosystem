const sections = [
  {
    heading: "Information we collect",
    body:
      "We store only the preferences you set during onboarding on this device. No personal data is transmitted while the memory client is active.",
  },
  {
    heading: "How we use data",
    body:
      "Preferences tailor story difficulty, bilingual balance, and consent tracking. Future releases will sync to a secure cloud when enabled.",
  },
  {
    heading: "Your choices",
    body:
      "You can clear stored data anytime in Settings. Doing so removes local preferences and resets demo progress.",
  },
];

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-dhfh-jade">Privacy policy</p>
          <h1 className="font-display text-4xl text-dhfh-ink">Protecting your family’s data</h1>
          <p className="text-lg text-dhfh-ink/80">
            This draft policy covers our demo environment. We will update it before launching live services.
          </p>
        </header>
        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-2">
              <h2 className="font-display text-2xl text-dhfh-ink">{section.heading}</h2>
              <p className="text-sm text-dhfh-ink/70">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="text-sm text-dhfh-ink/60">
          Questions? Email <a href="mailto:privacy@doubleheartfullhall.com" className="text-dhfh-red underline">privacy@doubleheartfullhall.com</a>.
        </p>
      </div>
    </main>
  );
}
