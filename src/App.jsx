import { useState, useEffect, Suspense } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'
import splashImage from "./assets/loder.png";

import SEO from './components/SEO'

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Posle 1.8 sekundi kreće da bledi
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    // Posle 2.5 sekundi (kad skroz izbledi), brišemo loader iz HTML-a
    const hideTimer = setTimeout(() => setLoading(false), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* 1. UVODNI EKRAN (ZAVESA PREKO SAJTA) */}
      {/* Primećuješ da više nema onog 'if (loading)' koji blokira sve, već je loader ubačen iznad svega sa z-[9999] */}
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <SEO 
            title="Bircuz Lipa 1880 | Učitavanje..." 
            description="Dobrodošli u Bircuz Lipa, mesto gde se tradicija Novog Sada susreće sa modernim duhom."
          />
          <img
            src={splashImage}
            alt="Uvodna slika"
            className="object-cover"
          />
        </div>
      )}

      {/* 2. GLAVNI SAJT (Učitava se u pozadini ispod zavese) */}
      <SEO 
        title="Bircuz Lipa 1880 | Autentična kafana u srcu Novog Sada"
        description="Dobrodošli u Bircuz Lipa, mesto gde se tradicija Novog Sada susreće sa modernim duhom. Vrhunska pića, sjajna atmosfera i uspomene koje traju. Posetite nas u Miletićevoj 9!"
      />
      
      <NavBar />

      <Suspense fallback={<div className="min-h-screen bg-[#fdfbf7]"></div>}>
        <Outlet/>
      </Suspense>

      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default App