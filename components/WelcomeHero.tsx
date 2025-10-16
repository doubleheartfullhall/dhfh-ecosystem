export default function WelcomeHero(): JSX.Element {
  return (
    <section className="relative rounded-2xl bg-porcelain p-8 text-dhfh-ink">
      <div className="max-w-xl space-y-4">
        <h1 className="font-display text-3xl">Double Heart Full Hall</h1>
        <p className="text-base opacity-80">Bilingual family reading, your way.</p>
        <div className="flex gap-3">
          <a className="rounded-xl bg-dhfh-red px-4 py-2 text-white" href="/qr">
            Scan / Enter Code
          </a>
          <a className="rounded-xl bg-dhfh-jade px-4 py-2 text-white" href="/world">
            Explore Worlds
          </a>
        </div>
      </div>
      {/* No image dependency; cover art will appear once uploaded */}
    </section>
  );
}
