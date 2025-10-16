import Link from "next/link";

import { getText } from "@/lib/i18n";

export default function OnboardingSuccessPage(): JSX.Element {
  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 shadow-soft">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <p className="uppercase tracking-wide text-sm font-semibold text-dhfh-jade">{getText("onboarding.success.badge")}</p>
            <h1 className="font-display text-4xl text-dhfh-ink">{getText("onboarding.success.title")}</h1>
            <p className="text-lg text-dhfh-ink/80">{getText("onboarding.success.description")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/world"
                className="inline-flex items-center justify-center rounded-full bg-dhfh-red px-6 py-3 font-semibold text-white transition hover:bg-dhfh-red/90"
              >
                {getText("onboarding.success.enterHub")}
              </Link>
              <Link
                href="/settings"
                className="inline-flex items-center justify-center rounded-full border border-dhfh-ink/20 px-6 py-3 font-semibold text-dhfh-ink transition hover:border-dhfh-ink/40"
              >
                {getText("onboarding.success.adjustSettings")}
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center md:w-72">
            <div className="flex h-64 w-52 items-center justify-center rounded-2xl bg-gradient-to-br from-dhfh-sky/20 via-white to-dhfh-jade/20 text-center shadow-soft">
              <span className="px-4 text-xs font-semibold uppercase tracking-[0.3em] text-dhfh-ink/50">
                Story art placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
