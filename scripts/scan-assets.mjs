import { readdir, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const args = new Set(process.argv.slice(2));
const debug = args.has("--debug") || args.has("-d") || process.env.DEBUG_SCAN_ASSETS === "1";

const debugLog = (...values) => {
  if (debug) console.log(...values);
};

const PUB = path.join(process.cwd(), "public", "dhfh");
const isImg = n => /\.(png|jpe?g|webp|svg|gif|avif)$/i.test(n);

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function ls(rel="") {
  const dir = path.join(PUB, rel);
  try {
    const ents = await readdir(dir, { withFileTypes: true });
    debugLog(`📂 ls ${path.relative(process.cwd(), dir)} -> ${ents.length} entries`);
    return ents.map(e => ({ name: e.name, dir: e.isDirectory() }));
  } catch (e) {
    console.warn(`⚠️  cannot read ${path.relative(process.cwd(), dir)} (${e.code || e.message})`);
    return [];
  }
}

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
const byName = (a, b) => collator.compare(a, b);
const hasCoverHero = value => /(?:^|[^a-z])(cover|hero)(?:[^a-z]|$)/i.test(value);
const sortCoverHero = (a, b) =>
  (+hasCoverHero(b)) - (+hasCoverHero(a)) || byName(a, b);
const isCoverFile = value => /^cover\./i.test(value);
const sortStoryAssets = (a, b) =>
  (+isCoverFile(b)) - (+isCoverFile(a)) || sortCoverHero(a, b);

const data = { root: [], icons: [], characters: [], worlds: [], stories: {} };

debugLog("cwd =", process.cwd());
debugLog("PUB =", PUB);

if (!(await exists(PUB))) {
  console.log("❌ public/dhfh does not exist. Creating empty manifest.");
} else {
  for (const e of await ls("")) if (!e.dir && isImg(e.name)) data.root.push(e.name);
  data.root.sort(byName);

  for (const bucket of ["icons","characters","worlds"]) {
    for (const e of await ls(bucket)) if (!e.dir && isImg(e.name)) data[bucket].push(e.name);
    data[bucket].sort(sortCoverHero);
  }

  const storySlugs = (await ls("stories"))
    .filter(e => e.dir)
    .map(e => e.name)
    .sort(byName);

  for (const slug of storySlugs) {
    const files = (await ls(path.join("stories", slug)))
      .filter(x => !x.dir && isImg(x.name))
      .map(x => x.name)
      .sort(sortStoryAssets);
    data.stories[slug] = files;
  }
}

await mkdir(path.join(process.cwd(), "data"), { recursive: true });
const outputPath = path.join(process.cwd(), "data", "dhfhAssets.json");
await writeFile(outputPath, `${JSON.stringify(data, null, 2)}\n`);
console.log("✅ wrote data/dhfhAssets.json");
console.log("SUMMARY:", {
  root: data.root.length,
  icons: data.icons.length,
  characters: data.characters.length,
  worlds: data.worlds.length,
  stories: Object.keys(data.stories).length
});
