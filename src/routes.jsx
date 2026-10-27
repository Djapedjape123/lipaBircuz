import App from './App.jsx'

// Svaka stranica je poseban chunk. Router je učita (lazy) pre prikaza, pa isti niz ruta
// koriste i klijent (main.jsx) i prerender u build-u (entry-server.jsx).
const page = (load) => ({
  lazy: async () => ({ Component: (await load()).default }),
})

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', ...page(() => import('./pages/HomePage')) },
      { path: '/shop', ...page(() => import('./pages/Prodaja.jsx')) },
      { path: '/cene', ...page(() => import('./pages/Cene.jsx')) },
      { path: '/o-kafani', ...page(() => import('./pages/About.jsx')) },
      { path: '/najave', ...page(() => import('./pages/NajavePage.jsx')) },
      { path: '/mali-fudbal', ...page(() => import('./pages/Fudbal.jsx')) },
      { path: '/lipa-kviz', ...page(() => import('./pages/Kviz.jsx')) },
      { path: '/lipa-svuda', ...page(() => import('./pages/LipaSvuda.jsx')) },
      { path: '/saradnje', ...page(() => import('./pages/Saradnje.jsx')) },
      { path: '/kontakt', ...page(() => import('./pages/Kontakt.jsx')) },
      { path: '/dogadjaj', ...page(() => import('./pages/Dogadjaj.jsx')) },
      // Sve ostalo: prava 404 stranica (noindex)
      { path: '*', ...page(() => import('./pages/NotFound.jsx')) },
    ]
  }
]

export default routes
