import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaChevronDown } from 'react-icons/fa' 
import bgImage from '../assets/lipaPozadina.jpeg' 

import KakoDoNas from '../components/KakoDoNas' 
import Najave from '../components/Najave'

function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      {/* --- 1. HERO SEKCIJA --- */}
      {/* min-h-screen osigurava da slika pokrije ceo ekran. Nema margin-top, da bi Navbar bio preko slike. */}
      <div className='relative min-h-screen w-full flex items-center justify-center overflow-hidden'>
        
        {/* Pozadinska slika sa Parallax efektom */}
        <div 
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed' // Ovo čini da slika stoji u mestu dok tekst ide preko
          }}
        >
          {/* Crni overlay - pojačan na 50% da bi se beli Navbar i tekst jasno videli */}
          <div className='absolute inset-0 bg-black/50'></div>
        </div>

        {/* Glavni sadržaj Hero sekcije */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-2xl'
          >
              Dobrodošli u Lipu
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-lg md:text-2xl text-gray-100 mb-10 font-light leading-relaxed drop-shadow-lg'
          >
              Mesto gde se tradicija sreće sa dobrim društvom. <br className="hidden md:block" />
              Opustite se uz najbolja pića i autentičnu atmosferu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="tel:0654613359" 
              className='inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full text-lg uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(5,150,105,0.4)] border border-emerald-400/30'
            >
              <FaPhoneAlt />
              Rezerviši Sto
            </a>
          </motion.div>

        </div>

        {/* Animirana strelica na dnu koja pokazuje da ima još sadržaja */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-10 cursor-pointer"
        >
            <FaChevronDown size={32} />
        </motion.div>
      </div>

      {/* --- OSTATAK SAJTA --- */}
      {/* relative z-20 i bg-white su bitni da prekriju hero sliku kad skroluješ dole */}
      <div className="relative z-20  shadow-2xl">
          
          <div className="">
            <Najave />
          </div>

          <div className="">
            <KakoDoNas />
          </div>

      </div>

    </>
  )
}

export default HomePage