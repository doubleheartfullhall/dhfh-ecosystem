import Link from "next/link";

const sections = [
  {
    title: "Profile",
    description: "Update names, avatars, and preferred pronouns for every reader.",
  },
  {
    title: "Language",
    description: "Adjust bilingual balance, switch between simplified and traditional, or tweak pinyin hints.",
  },
  {
    title: "Accessibility",
    description: "Control font sizes, contrast, captions, and motion cues for comfortable reading.",
  },
];

export default function SettingsPage(): JSX.Element {
  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-dhfh-jade">Settings</p>
          <h1 className="font-display text-4xl text-dhfh-ink">Tune the DHFH experience</h1>
          <p className="text-lg text-dhfh-ink/80">
            These controls will connect to your in-memory profile shortly. For now, explore what options will be
            available.
          </p>
        </header>
        <div className="space-y-4">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl bg-white p-6 shadow-soft">
              <h2 className="font-display text-2xl text-dhfh-ink">{section.title}</h2>
              <p className="mt-2 text-sm text-dhfh-ink/70">{section.description}</p>
            </section>
          ))}
        </div>
        <Link href="/account" className="inline-flex items-center justify-center rounded-full bg-dhfh-jade px-6 py-3 font-semibold text-white transition hover:bg-dhfh-jade/90">
          Manage account
        </Link>
      </div>
    </main>
  );
}
