import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build, loadEnv } from "vite";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

function readSiteUrl(value) {
  const help =
    "Set SITE_URL to the live domain in .env.production or your host's build settings, e.g. SITE_URL=https://www.example.com";
  if (!value) throw new Error(`SITE_URL is required. ${help}`);

  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`SITE_URL "${value}" is not a valid URL. ${help}`);
  }
  if (!/^https?:$/.test(url.protocol) || url.pathname !== "/" || url.search || url.hash) {
    throw new Error(`SITE_URL "${value}" must be only a protocol and domain. ${help}`);
  }
  return url.origin;
}

const outputFile = (path) =>
  path === "/404"
    ? join(distDir, "404.html")
    : join(distDir, ...path.split("/").filter(Boolean), "index.html");

async function findFontPreloads() {
  const files = await readdir(join(distDir, "assets"));
  return [/^cormorant-garamond-latin-600-normal-.*\.woff2$/, /^dm-sans-latin-wght-normal-.*\.woff2$/].map(
    (pattern) => {
      const file = files.find((name) => pattern.test(name));
      if (!file) throw new Error(`No built font matches ${pattern}`);
      return `/assets/${file}`;
    },
  );
}

const env = loadEnv("production", root, "");
const siteUrl = readSiteUrl(env.SITE_URL);
const verification = env.GOOGLE_SITE_VERIFICATION?.trim();

await build({ root, logLevel: "warn" });
await build({
  root,
  logLevel: "warn",
  build: { ssr: "src/entry-server.jsx", outDir: "dist-ssr", emptyOutDir: true },
});

try {
  const server = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
  const template = await readFile(join(distDir, "index.html"), "utf8");
  const fontPreloads = await findFontPreloads();

  for (const route of [...server.ROUTES, server.NOT_FOUND_ROUTE]) {
    const head = server.buildHead(route, { siteUrl, verification, fontPreloads });
    const title = route.title.replace(/&/g, "&amp;");
    const html = template
      .replace(/<title>.*?<\/title>/s, () => `<title>${title}</title>`)
      .replace("<!--seo-head-->", () => head)
      .replace(
        '<div id="root"><!--app--></div>',
        () => `<div id="root" data-route="${route.path}">${server.render(route.path)}</div>`,
      );

    const file = outputFile(route.path);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }

  const urls = server.ROUTES.map(
    (route) => `  <url>\n    <loc>${siteUrl}${route.path}</loc>\n  </url>`,
  ).join("\n");
  await writeFile(
    join(distDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  await writeFile(
    join(distDir, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  );

  console.log(`Prerendered ${server.ROUTES.length} pages for ${siteUrl}`);
} finally {
  await rm(ssrDir, { recursive: true, force: true });
}
