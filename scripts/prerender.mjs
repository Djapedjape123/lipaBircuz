// Prerender: pokreće se posle `vite build` (klijent) i `vite build --ssr` (server).
// Za svaku rutu upisuje statički HTML (sa sadržajem stranice i njenim SEO tagovima), tako da
// botovi koji ne izvršavaju JavaScript (Facebook, Viber, WhatsApp, AI crawleri) vide pravi sadržaj.
// Izgled se ne menja: u browseru React hidrira isti markup.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')

const { render, prerenderPaths } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
)

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8')
for (const marker of ['<!-- seo:start', 'seo:end -->', '<div id="root"></div>']) {
  if (!template.includes(marker)) {
    throw new Error(`dist/index.html ne sadrži "${marker}" (već prerenderovan? pokreni ponovo "npm run build")`)
  }
}

function buildPage({ html, helmet }) {
  const head = ['title', 'meta', 'link', 'script', 'style', 'noscript']
    .map((key) => helmet[key].toString())
    .filter(Boolean)
    .join('\n    ')

  // Funkcije kao zamena: ni sadržaj stranice ni tagovi ne smeju da se tumače kao "$&" obrasci
  return template
    .replace(/<html[^>]*>/, () => `<html ${helmet.htmlAttributes.toString()}>`)
    .replace(/<!-- seo:start[\s\S]*?seo:end -->/, () => head)
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
}

// '/' -> dist/index.html, '/cene' -> dist/cene/index.html, '/404' -> dist/404.html
const targets = [
  ...prerenderPaths.map((url) => ({
    url,
    file: url === '/' ? 'index.html' : path.join(url.slice(1), 'index.html'),
  })),
  { url: '/404', file: '404.html' },
]

for (const { url, file } of targets) {
  const page = buildPage(await render(url))
  const out = path.join(distDir, file)
  await fs.mkdir(path.dirname(out), { recursive: true })
  await fs.writeFile(out, page)
  console.log(`prerender ${url.padEnd(14)} -> dist/${file.replace(/\\/g, '/')} (${(page.length / 1024).toFixed(1)} kB)`)
}
