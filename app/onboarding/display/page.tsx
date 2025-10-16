import Link from "next/link";

import { getText } from "@/lib/i18n";

export default function OnboardingDisplayPage(): JSX.Element {
  const displayModes = [
    {
      title: getText("onboarding.display.mode.chinese.title"),
      description: getText("onboarding.display.mode.chinese.description"),
    },
    {
      title: getText("onboarding.display.mode.english.title"),
      description: getText("onboarding.display.mode.english.description"),
    },
    {
      title: getText("onboarding.display.mode.bilingual.title"),
      description: getText("onboarding.display.mode.bilingual.description"),
    },
  ];

  const pinyinOptions = [
    {
      title: getText("onboarding.display.pinyin.show.title"),
      description: getText("onboarding.display.pinyin.show.description"),
    },
    {
      title: getText("onboarding.display.pinyin.hide.title"),
      description: getText("onboarding.display.pinyin.hide.description"),
    },
    {
      title: getText("onboarding.display.pinyin.tap.title"),
      description: getText("onboarding.display.pinyin.tap.description"),
    },
  ];

  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-3">
          <p className="uppercase tracking-wide text-sm font-semibold text-dhfh-jade">{getText("onboarding.display.step")}</p>
          <h1 className="font-display text-4xl text-dhfh-ink">{getText("onboarding.display.title")}</h1>
          <p className="text-lg text-dhfh-ink/80">{getText("onboarding.display.description")}</p>
        </header>
        <section className="space-y-4">
          <h2 className="font-display text-2xl text-dhfh-ink">{getText("onboarding.display.modeHeading")}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {displayModes.map((mode) => (
              <article key={mode.title} className="rounded-2xl bg-white p-6 shadow-soft">
                <h3 className="font-display text-xl text-dhfh-ink">{mode.title}</h3>
                <p className="mt-2 text-sm text-dhfh-ink/70">{mode.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="font-display text-2xl text-dhfh-ink">{getText("onboarding.display.pinyinHeading")}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {pinyinOptions.map((option) => (
              <article key={option.title} className="rounded-2xl bg-white p-6 shadow-soft">
                <h3 className="font-display text-xl text-dhfh-ink">{option.title}</h3>
                <p className="mt-2 text-sm text-dhfh-ink/70">{option.description}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="flex items-center justify-between">
          <Link href="/onboarding/fluency" className="text-sm font-semibold text-dhfh-ink underline">
            {getText("onboarding.navigation.back")}
          </Link>
          <Link
            href="/onboarding/audio"
            className="inline-flex items-center justify-center rounded-full bg-dhfh-jade px-6 py-3 font-semibold text-white transition hover:bg-dhfh-jade/90"
          >
            {getText("onboarding.navigation.continue")}
          </Link>
        </div>
      </div>
    </main>
  );
}
