import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaChevronDown } from 'react-icons/fa'
import bgImage from '../assets/lipaPozadina.webp'

// Uvozimo našeg SEO agenta
import SEO from '../components/SEO'

import KakoDoNas from '../components/KakoDoNas'
import Najave from '../components/Najave'
import Uspomena from '../components/Uspomena'

function HomePage() {
  const { t } = useTranslation()

  // Funkcija za glatki skrol do prve sekcije
  // Funkcija za precizan glatki skrol sa odstojanjem
  const scrollToContent = () => {
    const nextSection = document.getElementById('najave-sekcija');
    if (nextSection) {
      // 1. Nalazimo gde se tačno nalazi sekcija na stranici
      const elementPosition = nextSection.getBoundingClientRect().top + window.scrollY;
      
      // 2. Definišemo "offset" (koliko piksela iznad sekcije želimo da se zaustavimo)
      // Ako ti je NavBar visok npr. 80px, stavi 100 da bi imao malo lufta.
      // *Slobodno smanji ili povećaj ovaj broj (npr. na 80 ili 120) dok ne bude savršeno!*
      const offset = 100; 

      // 3. Skrolujemo na tu izračunatu poziciju
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }

  return (
    <main>
      {/* --- SEO SEKCIJA ZA POČETNU STRANU --- */}
      <SEO
        title="Bircuz Lipa 1880 | Autentična kafana u srcu Novog Sada"
        description="Dobrodošli u Bircuz Lipa, mesto gde se tradicija Novog Sada susreće sa modernim duhom. Vrhunska pića, sjajna atmosfera i uspomene koje traju. Posetite nas u Miletićevoj 9!"
        type="website"
        image='https://res.cloudinary.com/duomot4hp/image/upload/q_auto/f_auto/v1777931592/lipalogo_ha5sow.jpg'
      />

      {/* --- HERO SEKCIJA --- */}
      <section className='relative min-h-screen w-full flex items-center justify-center overflow-hidden'>

        {/* Pozadinska slika sa Parallax efektom */}
        <div
          className='absolute inset-0 z-0'
          role="img"
          aria-label="Enterijer Bircuza Lipa"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Crni overlay */}
          <div className='absolute inset-0 bg-black/50'></div>
        </div>

        {/* Glavni sadržaj Hero sekcije */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>

          {/* Suptilan H2 za SEO pre glavnog H1 */}
          {/* Suptilan H2 za SEO pre glavnog H1 */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 block"
          >
            {t('home.tradition')} {/* OVDE SMO UBACILI PREVOD */}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-2xl'
          >
            {t('home.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-lg md:text-2xl text-gray-100 mb-10 font-light leading-relaxed drop-shadow-lg'
          >
            {t('home.subtitle_part1')} <br className="hidden md:block" />
            {t('home.subtitle_part2')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center w-full"
          >
            <a
              href="tel:0654613359"
              className='inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full text-sm md:text-lg uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(5,150,105,0.4)] border border-emerald-400/30'
            >
              <FaPhoneAlt />
              {t('home.cta_button')}
            </a>
          </motion.div>
        </div>

        {/* Animirana strelica - sada klikabilna */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-10 cursor-pointer p-2"
        >
          <FaChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- OSTATAK SAJTA --- */}
      {/* Svaki deo je sada u svom <section> tagu sa ID-em za navigaciju */}

      <div className="relative z-20 shadow-2xl">

        <section id="najave-sekcija">
          <Najave />
        </section>

        <section id="lokacija-sekcija">
          <KakoDoNas />
        </section>

        <section id="uspomena-sekcija">
          <Uspomena />
        </section>

      </div>
    </main>
  )
}

export default HomePage