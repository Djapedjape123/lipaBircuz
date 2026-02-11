import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//pages
import HomePage from './pages/HomePage'
import Prodaja from './pages/Prodaja.jsx'
import Cene from './pages/Cene.jsx'

//prevod
import './i18n'

//router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import NajavePage from './pages/NajavePage.jsx'
import Fudbal from './pages/Fudbal.jsx'

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
        element: <About/>
      },
      {
        path: '/najave',
        element: <NajavePage />
      },
      {
        path: '/mali-fudbal',
        element: <Fudbal />
      },



    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
