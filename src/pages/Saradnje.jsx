import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaHandshake, FaWineBottle, FaBeer, FaGlassWhiskey, FaGlassCheers, FaStar } from 'react-icons/fa'

// Uvozimo našeg SEO agenta
import SEO from '../components/SEO'

// --- STATIČKI PODACI O SARADNICIMA (STRUKTURA) ---
// Imena i Tipovi su prebačeni u i18n.js
const PARTNERS_DATA = [
    { 
        id: 1, 
        icon: <FaGlassWhiskey />,
        link: "https://podrumpevac.rs/" 
    },
    { 
        id: 2, 
        icon: <FaWineBottle />,
        link: "https://www.rubin.rs/" 
    },
    { 
        id: 3, 
        icon: <FaGlassCheers />,
        link: "https://novisad.travel/vinarije-single/vinarija-vojnovic/" 
    },
    { 
        id: 4, 
        icon: <FaBeer />,
        link: "https://valjevskapivara.rs/" 
    },
    { 
        id: 5, 
        icon: <FaBeer />,
        link: "https://apatinskapivara.rs/" 
    },
    { 
        id: 6, 
        icon: <FaBeer />,
        link: "https://banjaluckapivara.com/" 
    },
    { 
        id: 7, 
        icon: <FaStar />,
        link: "https://rs.coca-colahellenic.com/" 
    },
    { 
        id: 8, 
        icon: <FaBeer />,
        link: "https://www.carlsbergsrbija.rs/" 
    },
];

function Saradnje() {
  const { t } = useTranslation();

  return (
    <>
        {/* --- SEO SEKCIJA --- */}
        <SEO 
            title="Naši Partneri i Saradnje | Bircuz Lipa Novi Sad"
            description="Ponosni smo na saradnju sa vrhunskim brendovima kao što su Podrum Pevac, Rubin, Vinarija Vojnović, Valjevska pivara i mnogi drugi."
        />

        <div className="min-h-screen bg-emerald-950 pt-32 pb-24 px-6 relative overflow-hidden flex flex-col items-center justify-center">
            
            {/* --- ULTRA MODERNA POZADINA --- */}
            {/* 1. Mreža (Tačkice) */}
            <div 
                className="absolute inset-0 opacity-20 pointer-events-none z-0"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* 2. Animirani svetlosni efekti (Aura) */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-amber-500 rounded-full blur-[150px] pointer-events-none z-0"
            ></motion.div>
            
            <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-emerald-400 rounded-full blur-[150px] pointer-events-none z-0"
            ></motion.div>


            <div className="max-w-7xl mx-auto relative z-10 w-full">
                
                {/* --- NASLOV I UVOD --- */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 flex items-center justify-center gap-2">
                            <FaHandshake className="text-lg" /> {t('partners_page.badge')}
                        </span>
                        
                        {/* Zlatni gradijent za naslov */}
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-10 bg-gradient-to-r from-amber-100 via-amber-400 to-amber-200 text-transparent bg-clip-text drop-shadow-sm">
                            {t('partners_page.title')}
                        </h1>
                        
                        {/* Tražena rečenica - Premium Glassmorphism Kartica */}
                        <div className="relative inline-block w-full max-w-4xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-xl opacity-20"></div>
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                                <p className="text-emerald-50 text-xl md:text-2xl font-light leading-relaxed">
                                    {t('partners_page.quote')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- KARTICE SARADNIKA --- */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {PARTNERS_DATA.map((partner, index) => (
                        <motion.a 
                            key={partner.id}
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
                            whileHover={{ y: -10 }}
                            className="group relative block cursor-pointer w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] xl:w-[calc(25%-24px)]"
                        >
                            {/* Efekat svetljenja iza kartice na hover */}
                            <div className="absolute inset-0 bg-amber-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Sama kartica (Tamno staklo) */}
                            <div className="relative h-full bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 group-hover:border-amber-400/50 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                                
                                {/* Unutrašnji odsjaj */}
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Ikonica sa zlatnim sjajem */}
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-amber-400 flex items-center justify-center text-4xl mb-6 border border-emerald-700/50 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-500 relative z-10">
                                    {partner.icon}
                                </div>

                                {/* Ime i tip - PREVOD SE UZIMA OVDE */}
                                <div className="relative z-10">
                                    <h3 className="font-bold text-white text-xl mb-2 group-hover:text-amber-300 transition-colors duration-300">
                                        {t(`partners_page.items.${partner.id}.name`)}
                                    </h3>
                                    <span className="text-emerald-400/80 text-xs font-bold uppercase tracking-widest">
                                        {t(`partners_page.items.${partner.id}.type`)}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </div>
    </>
  )
}

export default Saradnje