import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './i18n'

import { createBrowserRouter, matchRoutes, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import routes from './routes.jsx'

async function start() {
  // Chunk stranice na kojoj se nalazimo učitavamo PRE prvog rendera, da hydration vidi
  // isti markup kao prerenderovani HTML (bez praznine zbog Suspense-a i bez treptanja).
  const lazyMatches = matchRoutes(routes, window.location)?.filter((m) => m.route.lazy) ?? []
  await Promise.all(
    lazyMatches.map(async (m) => {
      const routeModule = await m.route.lazy()
      Object.assign(m.route, { ...routeModule, lazy: undefined })
    })
  )

  const router = createBrowserRouter(routes)

  const app = (
    <StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StrictMode>
  )

  const container = document.getElementById('root')

  // Build ubacuje prerenderovan HTML u #root (hydration); u dev režimu je #root prazan.
  if (container.hasChildNodes()) {
    hydrateRoot(container, app)
  } else {
    createRoot(container).render(app)
  }
}

start()
