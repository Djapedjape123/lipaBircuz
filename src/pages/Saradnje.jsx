import React from 'react'
import { motion } from 'framer-motion'
import { FaHandshake, FaWineBottle, FaBeer, FaGlassWhiskey, FaGlassCheers, FaStar } from 'react-icons/fa'

// --- PODACI O SARADNICIMA (DODATI LINKOVI) ---
const PARTNERS = [
    { 
        id: 1, 
        name: "Pevac Destilerija", 
        type: "Premium Rakije", 
        icon: <FaGlassWhiskey />,
        link: "https://podrumpevac.rs/" // Primer linka, promeni ako je drugačiji
    },
    { 
        id: 2, 
        name: "Rubin Kruševac", 
        type: "Vina i Žestina", 
        icon: <FaWineBottle />,
        link: "https://www.rubin.rs/" 
    },
    { 
        id: 3, 
        name: "Vinarija Vojnović", 
        type: "Vrhunska Vina", 
        icon: <FaGlassCheers />,
        link: "https://novisad.travel/vinarije-single/vinarija-vojnovic/" 
    },
    { 
        id: 4, 
        name: "Valjevska pivara", 
        type: "Zanatski duh", 
        icon: <FaBeer />,
        link: "https://valjevskapivara.rs/" 
    },
    { 
        id: 5, 
        name: "Apatinska pivara", 
        type: "Tradicija piva", 
        icon: <FaBeer />,
        link: "https://apatinskapivara.rs/" 
    },
    { 
        id: 6, 
        name: "Banjalučka pivara", 
        type: "Nektar Pivo", 
        icon: <FaBeer />,
        link: "https://banjaluckapivara.com/" 
    },
    { 
        id: 7, 
        name: "Coca Cola Srbija", 
        type: "Bezalkoholna pića", 
        icon: <FaStar />,
        link: "https://rs.coca-colahellenic.com/" 
    },
];

function Saradnje() {
  return (
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
                        <FaHandshake className="text-lg" /> Mreža poverenja
                    </span>
                    
                    {/* Zlatni gradijent za naslov */}
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-10 bg-gradient-to-r from-amber-100 via-amber-400 to-amber-200 text-transparent bg-clip-text drop-shadow-sm">
                        Naši Partneri
                    </h1>
                    
                    {/* Tražena rečenica - Premium Glassmorphism Kartica */}
                    <div className="relative inline-block w-full max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-xl opacity-20"></div>
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                            <p className="text-emerald-50 text-xl md:text-2xl font-light leading-relaxed">
                                "Ponosni smo na dugogodišnju i stabilnu saradnju sa našim istaknutim partnerima, jer zajedno gradimo kvalitet koji naši gosti prepoznaju i vole."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- KARTICE SARADNIKA --- */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {PARTNERS.map((partner, index) => (
                    <motion.a 
                        key={partner.id}
                        href={partner.link}          // OVDE JE DODAT LINK
                        target="_blank"              // OTVARA U NOVOM TABU
                        rel="noopener noreferrer"    // BEZBEDNOST ZA SPOLJNE LINKOVE
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
                        whileHover={{ y: -10 }}
                        // Dodato 'block cursor-pointer' da bude očigledno da je link
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

                            {/* Ime i tip */}
                            <div className="relative z-10">
                                <h3 className="font-bold text-white text-xl mb-2 group-hover:text-amber-300 transition-colors duration-300">
                                    {partner.name}
                                </h3>
                                <span className="text-emerald-400/80 text-xs font-bold uppercase tracking-widest">
                                    {partner.type}
                                </span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Saradnje