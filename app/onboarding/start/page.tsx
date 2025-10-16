import Link from "next/link";

import { getText } from "@/lib/i18n";

export default function OnboardingStartPage(): JSX.Element {
  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="font-display text-4xl text-dhfh-ink">{getText("onboarding.start.title")}</h1>
        <p className="text-lg text-dhfh-ink/80">{getText("onboarding.start.description")}</p>
        <Link
          href="/onboarding/age"
          className="inline-flex items-center justify-center rounded-full bg-dhfh-jade px-6 py-3 font-semibold text-white transition hover:bg-dhfh-jade/90"
        >
          {getText("onboarding.start.cta")}
        </Link>
        <p className="text-sm text-dhfh-ink/60">{getText("onboarding.start.note")}</p>
      </div>
    </main>
  );
}
