import type { Program } from "@/lib/content";

type ProgramsSectionProps = {
  programs: Program[];
};

export function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section id="programs" className="border-t border-white/10 bg-slate-900/60 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-12">
        <div className="space-y-4 text-center sm:text-left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Programs that interlock</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-200">
            Each DHFH program stands on its own and shines brightest when combined. Books unlock new vocabulary, Play Labs
            reinforce discovery with movement, and Story Guides AI keeps the dialogue going between sessions.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.name}
              className="flex h-full flex-col gap-4 rounded-2xl border border-purple-200/30 bg-slate-950/60 p-6 shadow-lg shadow-purple-500/10"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">{program.name}</h3>
                <p className="mt-2 text-sm text-slate-200">{program.description}</p>
              </div>
              <ul className="mt-auto space-y-2 text-sm text-slate-200/90">
                {program.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-300" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
