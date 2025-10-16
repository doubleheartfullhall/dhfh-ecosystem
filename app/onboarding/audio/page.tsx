import Link from "next/link";

import { getText } from "@/lib/i18n";

export default function OnboardingAudioPage(): JSX.Element {
  const audioPreferences = [
    {
      title: getText("onboarding.audio.preference.narrated.title"),
      description: getText("onboarding.audio.preference.narrated.description"),
    },
    {
      title: getText("onboarding.audio.preference.callResponse.title"),
      description: getText("onboarding.audio.preference.callResponse.description"),
    },
    {
      title: getText("onboarding.audio.preference.soundOff.title"),
      description: getText("onboarding.audio.preference.soundOff.description"),
    },
  ];

  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="uppercase tracking-wide text-sm font-semibold text-dhfh-jade">{getText("onboarding.audio.step")}</p>
          <h1 className="font-display text-4xl text-dhfh-ink">{getText("onboarding.audio.title")}</h1>
          <p className="text-lg text-dhfh-ink/80">{getText("onboarding.audio.description")}</p>
        </header>
        <ul className="space-y-4">
          {audioPreferences.map((preference) => (
            <li key={preference.title} className="rounded-2xl bg-white p-6 shadow-soft">
              <h2 className="font-display text-2xl text-dhfh-ink">{preference.title}</h2>
              <p className="mt-2 text-sm text-dhfh-ink/70">{preference.description}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <Link href="/onboarding/display" className="text-sm font-semibold text-dhfh-ink underline">
            {getText("onboarding.navigation.back")}
          </Link>
          <Link
            href="/onboarding/success"
            className="inline-flex items-center justify-center rounded-full bg-dhfh-jade px-6 py-3 font-semibold text-white transition hover:bg-dhfh-jade/90"
          >
            {getText("onboarding.navigation.continue")}
          </Link>
        </div>
      </div>
    </main>
  );
}
