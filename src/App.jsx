import { useState,useEffect } from 'react'
import { Outlet,ScrollRestoration } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'
import splashImage from "./assets/loder.png";

// Uvozimo našu SEO komponentu
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

  if (loading) {
    return (
      <div
        className={`fixed inset-0 bg-white flex items-center justify-center transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* SEO dok traje uvodni ekran */}
        <SEO 
          title="Bircuz Lipa 1880 | Učitavanje..." 
          description="Dobrodošli u Bircuz Lipa, mesto gde se tradicija Novog Sada susreće sa modernim duhom."
        />
        <img
          src={splashImage}
          alt="Uvodna slika"
          className=" object-cover"
        />
      </div>
    );
  }

  return (
    <>
      {/* OSNOVNA SEO SIGURNOSNA MREŽA */}
      {/* Ako neka stranica nema svoj SEO, primeniće se ovaj! */}
      <SEO 
        title="Bircuz Lipa 1880 | Autentična kafana u srcu Novog Sada"
        description="Dobrodošli u Bircuz Lipa, mesto gde se tradicija Novog Sada susreće sa modernim duhom. Vrhunska pića, sjajna atmosfera i uspomene koje traju. Posetite nas u Miletićevoj 9!"
      />
      
      <NavBar />
      <Outlet/>
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default App