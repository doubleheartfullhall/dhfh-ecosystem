import Link from "next/link";

import { getText } from "@/lib/i18n";

const ageRanges = [
  "0-3 years",
  "4-6 years",
  "7-9 years",
  "10-12 years",
  "13+ years",
];

export default function OnboardingAgePage(): JSX.Element {
  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="uppercase tracking-wide text-sm font-semibold text-dhfh-jade">{getText("onboarding.age.step")}</p>
          <h1 className="font-display text-4xl text-dhfh-ink">{getText("onboarding.age.title")}</h1>
          <p className="text-lg text-dhfh-ink/80">{getText("onboarding.age.description")}</p>
        </header>
        <ul className="grid gap-4 md:grid-cols-2">
          {ageRanges.map((range) => (
            <li key={range} className="rounded-2xl border border-dhfh-gold/40 bg-white p-5 shadow-soft">
              <p className="font-semibold text-dhfh-ink">{range}</p>
              <p className="mt-2 text-sm text-dhfh-ink/70">{getText("onboarding.age.optionHint")}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <Link href="/onboarding/start" className="text-sm font-semibold text-dhfh-ink underline">
            {getText("onboarding.navigation.back")}
          </Link>
          <Link
            href="/onboarding/roles"
            className="inline-flex items-center justify-center rounded-full bg-dhfh-jade px-6 py-3 font-semibold text-white transition hover:bg-dhfh-jade/90"
          >
            {getText("onboarding.navigation.continue")}
          </Link>
        </div>
      </div>
    </main>
  );
}
