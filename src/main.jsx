import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//pages
import HomePage from './pages/HomePage'
import Prodaja from './pages/Prodaja.jsx'
import Cene from './pages/Cene.jsx'
import About from './pages/About.jsx'
import NajavePage from './pages/NajavePage.jsx'
import Fudbal from './pages/Fudbal.jsx'
import Kviz from './pages/Kviz.jsx'
import LipaSvuda from './pages/LipaSvuda.jsx'
import Saradnje from './pages/Saradnje.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Dogadjaj from './pages/Dogadjaj.jsx'
//prevod
import './i18n'

//router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//helmet
import { HelmetProvider } from 'react-helmet-async'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/shop',
        element: <Prodaja />
      },
      {
        path: '/cene',
        element: <Cene />
      },
      {
        path: '/o-kafani',
        element: <About />
      },
      {
        path: '/najave',
        element: <NajavePage />
      },
      {
        path: '/mali-fudbal',
        element: <Fudbal />
      },
      {
        path: '/lipa-kviz',
        element: <Kviz />
      },
      {
        path: '/lipa-svuda',
        element: <LipaSvuda />
      },
      {
        path: '/saradnje',
        element: <Saradnje />
      },
      {
        path: '/kontakt',
        element: <Kontakt />
      },
      {
        path: '/dogadjaj',
        element: <Dogadjaj />
      },



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
