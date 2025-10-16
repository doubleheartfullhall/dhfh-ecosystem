import Link from "next/link";

import { getText } from "@/lib/i18n";

export default function OnboardingFluencyPage(): JSX.Element {
  const fluencyLevels = [
    {
      title: getText("onboarding.fluency.beginning.title"),
      description: getText("onboarding.fluency.beginning.description"),
    },
    {
      title: getText("onboarding.fluency.growing.title"),
      description: getText("onboarding.fluency.growing.description"),
    },
    {
      title: getText("onboarding.fluency.confident.title"),
      description: getText("onboarding.fluency.confident.description"),
    },
  ];

  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="uppercase tracking-wide text-sm font-semibold text-dhfh-jade">{getText("onboarding.fluency.step")}</p>
          <h1 className="font-display text-4xl text-dhfh-ink">{getText("onboarding.fluency.title")}</h1>
          <p className="text-lg text-dhfh-ink/80">{getText("onboarding.fluency.description")}</p>
        </header>
        <ul className="space-y-4">
          {fluencyLevels.map((level) => (
            <li key={level.title} className="rounded-2xl bg-white p-6 shadow-soft">
              <h2 className="font-display text-2xl text-dhfh-ink">{level.title}</h2>
              <p className="mt-2 text-sm text-dhfh-ink/70">{level.description}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <Link href="/onboarding/roles" className="text-sm font-semibold text-dhfh-ink underline">
            {getText("onboarding.navigation.back")}
          </Link>
          <Link
            href="/onboarding/display"
            className="inline-flex items-center justify-center rounded-full bg-dhfh-jade px-6 py-3 font-semibold text-white transition hover:bg-dhfh-jade/90"
          >
            {getText("onboarding.navigation.continue")}
          </Link>
        </div>
      </div>
    </main>
  );
}
