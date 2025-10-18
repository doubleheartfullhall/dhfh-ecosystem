import { readdir, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const PUB = path.join(process.cwd(), "public", "dhfh");
const isImg = n => /\.(png|jpe?g|webp|svg|gif|avif)$/i.test(n);

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function ls(rel="") {
  const dir = path.join(PUB, rel);
  try {
    const ents = await readdir(dir, { withFileTypes: true });
    console.log(`📂 ls ${path.relative(process.cwd(), dir)} -> ${ents.length} entries`);
    return ents.map(e => ({ name: e.name, dir: e.isDirectory() }));
  } catch (e) {
    console.log(`⚠️  cannot read ${path.relative(process.cwd(), dir)} (${e.code || e.message})`);
    return [];
  }
}

const sortCoverHero = (a, b) =>
  (+/cover|hero/i.test(b)) - (+/cover|hero/i.test(a)) || a.localeCompare(b);

const data = { root: [], icons: [], characters: [], worlds: [], stories: {} };

console.log("cwd =", process.cwd());
console.log("PUB =", PUB);

if (!(await exists(PUB))) {
  console.log("❌ public/dhfh does not exist. Creating empty manifest.");
} else {
  for (const e of await ls("")) if (!e.dir && isImg(e.name)) data.root.push(e.name);

  for (const bucket of ["icons","characters","worlds"]) {
    for (const e of await ls(bucket)) if (!e.dir && isImg(e.name)) data[bucket].push(e.name);
    data[bucket].sort(sortCoverHero);
  }

  for (const e of await ls("stories")) {
    if (!e.dir) continue;
    const slug = e.name;
    const files = (await ls(path.join("stories", slug)))
      .filter(x => !x.dir && isImg(x.name))
      .map(x => x.name)
      .sort((a,b) => (+/^cover\./i.test(b)) - (+/^cover\./i.test(a)) || a.localeCompare(b));
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
