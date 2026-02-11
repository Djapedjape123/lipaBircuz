import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaPhoneAlt } from 'react-icons/fa' 
import bgImage from '../assets/lipaPozadina.jpeg' 

import KakoDoNas from '../components/KakoDoNas' 
import Najave from '../components/Najave'

function HomePage() {
  const { t } = useTranslation()

  return (
    // Koristimo React Fragment (<> ... </>) da grupišemo sekcije jednu ispod druge
    <>
      
      {/* --- 1. HERO SEKCIJA (PRVI EKRAN) --- */}
      <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        
        {/* Pozadinska slika */}
        <div 
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed' 
          }}
        >
          <div className='absolute inset-0 bg-black/60'></div>
        </div>

        {/* Glavni sadržaj Hero sekcije */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg'
          >
              Dobrodošli u Lipu
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-lg md:text-2xl text-gray-200 mb-10 font-light leading-relaxed drop-shadow-md'
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
              className='inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full text-lg uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(5,150,105,0.5)] border border-emerald-400/30'
            >
              <FaPhoneAlt />
              Rezerviši Sto
            </a>
          </motion.div>

        </div>
      </div>

      <div className="relative z-20">
          <Najave />
      </div>

      {/* --- 2. KAKO DO NAS SEKCIJA (ISPOD) --- */}
      {/* Sada je ovo potpuno odvojena sekcija koja ide ispod gornjeg dela */}
      <div className="relative z-20">
          <KakoDoNas />
      </div>

    </>
  )
}

export default HomePage