const commitments = [
  {
    heading: "Parental involvement",
    body:
      "A parent or guardian must supervise young readers. Our demo does not allow unsupervised child accounts.",
  },
  {
    heading: "Limited data",
    body:
      "We only store age ranges, fluency, and display preferences locally to personalize stories.",
  },
  {
    heading: "Future updates",
    body:
      "As we expand to networked play, we will seek verified parental consent before enabling sharing features.",
  },
];

export default function ChildrenPrivacyPage(): JSX.Element {
  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-dhfh-jade">Children’s privacy</p>
          <h1 className="font-display text-4xl text-dhfh-ink">Our promise to young readers</h1>
          <p className="text-lg text-dhfh-ink/80">
            DHFH is built for families. These commitments explain how we protect children as we develop the platform.
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
          Contact <a href="mailto:family@doubleheartfullhall.com" className="text-dhfh-red underline">family@doubleheartfullhall.com</a> with any concerns.
        </p>
      </div>
    </main>
  );
}
