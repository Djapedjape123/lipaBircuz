import { StrictMode, lazy } from 'react' // DODALI SMO 'lazy'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// --- OVO JE TAJNA: LAZY LOADING ---
// Umesto klasičnog importa, React će ove fajlove "povući" tek kada zatrebaju
const HomePage = lazy(() => import('./pages/HomePage'));
const Prodaja = lazy(() => import('./pages/Prodaja.jsx'));
const Cene = lazy(() => import('./pages/Cene.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const NajavePage = lazy(() => import('./pages/NajavePage.jsx'));
const Fudbal = lazy(() => import('./pages/Fudbal.jsx'));
const Kviz = lazy(() => import('./pages/Kviz.jsx'));
const LipaSvuda = lazy(() => import('./pages/LipaSvuda.jsx'));
const Saradnje = lazy(() => import('./pages/Saradnje.jsx'));
const Kontakt = lazy(() => import('./pages/Kontakt.jsx'));
const Dogadjaj = lazy(() => import('./pages/Dogadjaj.jsx'));

// Rute ostaju potpuno iste!
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shop', element: <Prodaja /> },
      { path: '/cene', element: <Cene /> },
      { path: '/o-kafani', element: <About /> },
      { path: '/najave', element: <NajavePage /> },
      { path: '/mali-fudbal', element: <Fudbal /> },
      { path: '/lipa-kviz', element: <Kviz /> },
      { path: '/lipa-svuda', element: <LipaSvuda /> },
      { path: '/saradnje', element: <Saradnje /> },
      { path: '/kontakt', element: <Kontakt /> },
      { path: '/dogadjaj', element: <Dogadjaj /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)