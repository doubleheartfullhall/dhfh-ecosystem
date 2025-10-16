import Link from "next/link";

import { getText } from "@/lib/i18n";

export default function OnboardingRolesPage(): JSX.Element {
  const roles = [
    {
      title: getText("onboarding.roles.caregiver.title"),
      description: getText("onboarding.roles.caregiver.description"),
    },
    {
      title: getText("onboarding.roles.reader.title"),
      description: getText("onboarding.roles.reader.description"),
    },
    {
      title: getText("onboarding.roles.partner.title"),
      description: getText("onboarding.roles.partner.description"),
    },
  ];

  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="uppercase tracking-wide text-sm font-semibold text-dhfh-jade">{getText("onboarding.roles.step")}</p>
          <h1 className="font-display text-4xl text-dhfh-ink">{getText("onboarding.roles.title")}</h1>
          <p className="text-lg text-dhfh-ink/80">{getText("onboarding.roles.description")}</p>
        </header>
        <ul className="space-y-4">
          {roles.map((role) => (
            <li key={role.title} className="rounded-2xl bg-white p-6 shadow-soft">
              <h2 className="font-display text-2xl text-dhfh-ink">{role.title}</h2>
              <p className="mt-2 text-sm text-dhfh-ink/70">{role.description}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <Link href="/onboarding/age" className="text-sm font-semibold text-dhfh-ink underline">
            {getText("onboarding.navigation.back")}
          </Link>
          <Link
            href="/onboarding/fluency"
            className="inline-flex items-center justify-center rounded-full bg-dhfh-jade px-6 py-3 font-semibold text-white transition hover:bg-dhfh-jade/90"
          >
            {getText("onboarding.navigation.continue")}
          </Link>
        </div>
      </div>
    </main>
  );
}
