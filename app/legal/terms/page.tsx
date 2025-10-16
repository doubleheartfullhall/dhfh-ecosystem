const commitments = [
  {
    heading: "Demo-only access",
    body:
      "The DHFH ecosystem is currently a prototype. Content, availability, and features may change without notice.",
  },
  {
    heading: "Acceptable use",
    body:
      "Use the platform for educational, non-commercial purposes. Do not attempt to reverse engineer or resell the experience.",
  },
  {
    heading: "Feedback loop",
    body:
      "By continuing you agree that we may contact you for optional research sessions to improve bilingual learning tools.",
  },
];

export default function TermsOfUsePage(): JSX.Element {
  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-dhfh-jade">Terms of use</p>
          <h1 className="font-display text-4xl text-dhfh-ink">Our agreement with you</h1>
          <p className="text-lg text-dhfh-ink/80">
            These terms outline the expectations for families testing the Double Heart Full Hall demo platform.
          </p>
        </header>
        <div className="space-y-6">
          {commitments.map((commitment) => (
            <section key={commitment.heading} className="space-y-2">
              <h2 className="font-display text-2xl text-dhfh-ink">{commitment.heading}</h2>
              <p className="text-sm text-dhfh-ink/70">{commitment.body}</p>
            </section>
          ))}
        </div>
        <p className="text-sm text-dhfh-ink/60">
          Questions about these terms? Email <a href="mailto:legal@doubleheartfullhall.com" className="text-dhfh-red underline">legal@doubleheartfullhall.com</a>.
        </p>
      </div>
    </main>
  );
}
