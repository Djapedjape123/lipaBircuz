import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaShoppingBag, FaHammer } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Uvozimo našeg SEO agenta
import SEO from '../components/SEO'

function Prodaja() {
  const { t } = useTranslation();

  return (
    <>
      {/* --- SEO SEKCIJA ZA PRODAVNICU --- */}
      <SEO 
        title="Lipa Prodavnica (Uskoro) | Bircuz Lipa 1880 Novi Sad"
        description="Online prodavnica Bircuz Lipa je u pripremi! Uskoro ćete moći da naručite naše unikatne majice, suvenire i omiljena pića. Ostanite uz nas."
      />

      {/* pt-32 je tu zbog fiksnog navbara! */}
      <div className="min-h-screen pt-32 px-6 mb-10 bg-gray-50 flex flex-col items-center justify-center text-center overflow-hidden relative">
        
        {/* Pozadinski dekorativni krugovi (zamućeni) */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* GLAVNI SADRŽAJ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          
          {/* Ikonica koja lebdi */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="mx-auto w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center mb-8 border-4 border-emerald-50"
          >
            <FaShoppingBag className="text-4xl text-emerald-600" />
          </motion.div>

          {/* Naslov */}
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-950 mb-4">
            {t('shop_page.title_part1')} <span className="text-emerald-600">{t('shop_page.title_part2')}</span>
          </h1>

          {/* Tekst */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            {t('shop_page.desc_part1')} 
            <br className="hidden md:block" />
            {t('shop_page.desc_part2')}
          </p>

          {/* Progress Bar (Animacija učitavanja) */}
          <div className="w-full max-w-md mx-auto h-2 bg-gray-200 rounded-full overflow-hidden mb-10">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-emerald-500 rounded-full"
            />
          </div>

          {/* Bedž "Uskoro" */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold tracking-wide shadow-sm">
            <FaHammer className="animate-pulse" />
            {t('shop_page.badge')}
          </div>

          {/* Dugme za povratak */}
          <div className="mt-12">
              <Link to="/" className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors border-b-2 border-transparent hover:border-emerald-600 pb-1">
                  {t('shop_page.back_btn')}
              </Link>
          </div>

        </motion.div>
      </div>
    </>
  )
}

export default Prodaja