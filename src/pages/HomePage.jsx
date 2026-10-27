import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaChevronDown } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import bgImage from '../assets/lipaPozadina.webp'

import SEO from '../components/SEO'
import KakoDoNas from '../components/KakoDoNas'
import Najave from '../components/Najave'
import Uspomena from '../components/Uspomena'

function HomePage() {
  const { t } = useTranslation()

  const scrollToContent = () => {
    const nextSection = document.getElementById('najave-sekcija');
    if (nextSection) {
      const elementPosition = nextSection.getBoundingClientRect().top + window.scrollY;
      const offset = 100;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }

  return (
    <main>
      <SEO
        title="Bircuz Lipa 1880 | Autentična kafana u srcu Novog Sada"
        description="Dobrodošli u Bircuz Lipa, mesto gde se tradicija Novog Sada susreće sa modernim duhom. Vrhunska pića i sjajna atmosfera. Posetite nas u Miletićevoj 9!"
        type="website"
        image='https://res.cloudinary.com/duomot4hp/image/upload/q_auto/f_auto/v1777931592/lipalogo_ha5sow.jpg'
      />

      {/* Hero slika (pozadina) se učitava odmah, bez čekanja na CSS/JS */}
      <Helmet>
        <link rel="preload" as="image" href={bgImage} fetchPriority="high" />
      </Helmet>

      {/* --- PROMENJENO: min-h-screen je sada min-h-[100dvh] --- */}
      <section className='relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden'>

        <div
          className='absolute inset-0 z-0 bg-cover bg-center md:bg-fixed'
          role="img"
          aria-label="Enterijer Bircuza Lipa"
          style={{
            backgroundImage: `url(${bgImage})`
          }}
        >
          <div className='absolute inset-0 bg-black/50'></div>
        </div>

        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 block"
          >
            {t('home.tradition')}
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
