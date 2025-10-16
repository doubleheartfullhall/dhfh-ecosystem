import Link from "next/link";

import type { ValuePoint } from "@/lib/content";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  values: ValuePoint[];
};

export function Hero({ eyebrow, title, description, values }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 via-slate-900 to-sky-500/10" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-24 sm:px-12">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-purple-400/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-purple-200">
            {eyebrow}
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="text-lg text-slate-200 sm:text-xl">{description}</p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Link
              href="#programs"
              className="rounded-full bg-purple-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-purple-300"
            >
              Explore the ecosystem
            </Link>
            <Link
              href="mailto:hello@doubleheartfullhall.com"
              className="rounded-full border border-purple-200/40 px-6 py-3 text-sm font-semibold text-purple-100 transition hover:border-purple-100 hover:text-white"
            >
              Partner with DHFH
            </Link>
          </div>
        </div>

        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:grid-cols-3 sm:gap-8">
          {values.map((value) => (
            <article key={value.title} className="space-y-3">
              <h2 className="text-lg font-semibold text-white">{value.title}</h2>
              <p className="text-sm text-slate-200">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
