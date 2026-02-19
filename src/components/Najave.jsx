import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaCalendarAlt, FaMusic } from 'react-icons/fa'

function Najave() {
  const { t } = useTranslation()

  return (
    // py-12 je visina (dovoljno mala da bude uzana, dovoljno velika da stane tekst)
    <section className="bg-emerald-950 py-12 px-6 relative overflow-hidden border-t border-emerald-900">
      
      {/* Suptilna tekstura u pozadini - može da se doda ako želiš */}
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Zanimljiv mali naslov */}
          <div className="flex items-center justify-center gap-3 text-amber-500 mb-2 opacity-80">
             <FaMusic className="text-xs" /> 
             <span className="uppercase tracking-[0.2em] text-xs font-bold">
               {t('home_announcements.badge')}
             </span> 
             <FaMusic className="text-xs" />
          </div>

          {/* Glavni tekst */}
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">
            {t('home_announcements.title')}
          </h2>

          {/* Dugme */}
          <Link 
            to="/najave"
            className="inline-flex items-center gap-2 bg-transparent border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-emerald-950 hover:border-amber-500 font-bold py-2.5 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.1)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            <FaCalendarAlt />
            {t('home_announcements.button')}
          </Link>

        </motion.div>

      </div>
    </section>
  )
}

export default Najave