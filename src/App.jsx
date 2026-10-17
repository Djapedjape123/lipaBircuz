import { useState, useEffect, Suspense } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'
import splashImage from "./assets/loder.png";
import SEO from './components/SEO'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const hideTimer = setTimeout(() => setLoading(false), 2500);

    // --- DODATO: Čistač Instagram i Facebook linkova ---
    if (window.location.search.includes('utm_') || window.location.search.includes('fbclid')) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <SEO 
        title="Bircuz Lipa 1880 | Autentična kafana u srcu Novog Sada"
        description="Dobrodošli u Bircuz Lipa, najstariju dušu Novog Sada. Tradicija duga od 1880. godine, vrhunska pića i boemska atmosfera. Posetite nas u Miletićevoj 9!"
      />

      {loading && (
        <div
          className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img
            src={splashImage}
            alt="Bircuz Lipa Logo"
            className="object-cover"
          />
        </div>
      )}

      <NavBar />

      {/* Ovde smo takođe promenili min-h-screen u min-h-[100dvh] za svaki slučaj */}
      <Suspense fallback={<div className="min-h-[100dvh] bg-[#fdfbf7]"></div>}>
        <Outlet/>
      </Suspense>
      <WhatsAppButton />
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default App
