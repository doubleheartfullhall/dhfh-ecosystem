import type { Program, ValuePoint } from "@/lib/content";

type ProgramsSectionProps = {
  programs: Program[];
  values: ValuePoint[];
  eyebrow: string;
};

export function ProgramsSection({ programs, values, eyebrow }: ProgramsSectionProps) {
  return (
    <section id="programs" className="rounded-2xl bg-white/90 p-10 shadow-soft ring-1 ring-dhfh-ink/5 sm:p-12">
      <div className="space-y-12">
        <header className="space-y-4 text-center sm:text-left">
          <span className="inline-flex items-center justify-center rounded-full bg-dhfh-jade/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-dhfh-jade">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl text-dhfh-ink sm:text-4xl">Programs that interlock</h2>
          <p className="mx-auto max-w-3xl text-base text-dhfh-ink/80 sm:text-lg">
            Each DHFH program stands on its own and shines brightest when combined. Books unlock new vocabulary, Play Labs
            reinforce discovery with movement, and Story Guides AI keeps the dialogue going between sessions.
          </p>
        </header>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="grid gap-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-dhfh-gold/20 bg-dhfh-porcelain/80 p-6 text-left shadow-soft"
              >
                <h3 className="font-display text-xl text-dhfh-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dhfh-ink/80">{value.description}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.name}
                className="flex h-full flex-col gap-4 rounded-2xl border border-dhfh-ink/10 bg-white p-6 shadow-soft"
              >
                <div className="space-y-2">
                  <h3 className="font-display text-xl text-dhfh-ink">{program.name}</h3>
                  <p className="text-sm leading-6 text-dhfh-ink/80">{program.description}</p>
                </div>
                <ul className="mt-auto space-y-2 text-sm text-dhfh-ink/70">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-dhfh-gold" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
