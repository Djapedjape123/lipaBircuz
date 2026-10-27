import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// "npm run preview": /cene -> dist/cene/index.html, nepoznata putanja -> dist/404.html (kao na Vercelu)
const prerenderedPreview = () => ({
  name: 'prerendered-preview',
  configurePreviewServer(server) {
    const dist = path.resolve('dist')
    server.middlewares.use((req, res, next) => {
      const pathname = decodeURIComponent(req.url.split('?')[0])
      if (pathname.includes('.') || pathname.endsWith('/')) return next()
      const page = path.join(dist, pathname, 'index.html')
      if (!page.startsWith(dist)) return next()
      if (fs.existsSync(page)) {
        req.url = `${pathname}/index.html`
        return next()
      }
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(fs.readFileSync(path.join(dist, '404.html')))
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderedPreview()],
  // react-helmet-async je u Node-u CommonJS (bez named exports), pa ga SSR build (prerender) ugrađuje u bundle
  ssr: { noExternal: ['react-helmet-async'] },
})
