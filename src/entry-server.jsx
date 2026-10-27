import { renderToString } from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './i18n'
import routes from './routes.jsx'

// Rute koje se prerenderuju (bez '*' rute: ona se renderuje posebno kao 404.html)
export const prerenderPaths = routes[0].children.map((r) => r.path).filter((p) => p !== '*')

// Vraća HTML aplikacije za dati URL i Helmet tagove (title, meta, link...) te stranice.
export async function render(url) {
  const { query, dataRoutes } = createStaticHandler(routes)
  const context = await query(new Request(new URL(url, 'https://www.bircuzlipa1880.com')))
  if (context instanceof Response) {
    throw new Error(`Neočekivan odgovor routera za ${url}: ${context.status}`)
  }

  const router = createStaticRouter(dataRoutes, context)
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </HelmetProvider>
  )

  return { html, helmet: helmetContext.helmet }
}
