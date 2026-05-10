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
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const hideTimer = setTimeout(() => setLoading(false), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* 1. GLAVNI SEO (Default za ceo sajt) */}
      {/* Postavljamo ga ovde, izvan svih uslova, da bi bio odmah vidljiv botovima */}
      <SEO 
        title="Bircuz Lipa 1880 | Autentična kafana u srcu Novog Sada"
        description="Dobrodošli u Bircuz Lipa, najstariju dušu Novog Sada. Tradicija duga od 1880. godine, vrhunska pića i boemska atmosfera. Posetite nas u Miletićevoj 9!"
      />

      {/* 2. UVODNI EKRAN (Samo vizuelni sloj) */}
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* SEO tag je uklonjen odavde da ne bi zbunio Google botove sa naslovom "Učitavanje..." */}
          <img
            src={splashImage}
            alt="Bircuz Lipa Logo"
            className="object-cover"
          />
        </div>
      )}

      {/* 3. GLAVNI SADRŽAJ */}
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

