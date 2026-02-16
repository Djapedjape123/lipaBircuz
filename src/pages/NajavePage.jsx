import React from 'react'
import { motion } from 'framer-motion'
import { FaMusic, FaCalendarCheck, FaInstagram, FaPhoneAlt } from 'react-icons/fa'

// --- UVOZ SLIKE ZA POZADINU ---
// Promeni putanju na svoju sliku (npr. atmosfera iz kafane)
import bgImage from '../assets/lipa3.png' 

function NajavePage() {

  // --- KADA BUDEŠ IMAO DOGAĐAJE, OVDE ĆEŠ IH UBACITI ---
  const events = []; 
  
//    PRIMER KAKO ĆE IZGLEDATI PODACI KASNIJE:
//   const events = [
//       {
//           id: 1,
//           date: "14. FEB",
//           day: "PETAK",
//           title: "Zvezda-Partizan",
//           desc: "Veciti derbi uz najbolje navijanje i atmosferu.",
//           image: "putanja/do/slike.jpg" // Slika za samu karticu događaja
//       }
//     ]
  

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-32 px-6">
        
        {/* --- 1. POZADINSKA SLIKA SA CRNIM OVERLAY-OM --- */}
        <div className="absolute inset-0 z-0">
            <img 
                src={bgImage} 
                alt="Pozadina" 
                className="w-full h-full object-cover"
            />
            {/* Crni overlay (zatamnjenje) da bi se tekst video */}
            <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="max-w-5xl w-full mx-auto relative z-10">
            
            {/* --- NASLOV (STAKLENI EFEKAT) --- */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl inline-block w-full"
            >
                <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Program & Zabava</span>
                <h1 className="text-4xl md:text-6xl font-serif font-medium text-white mb-2">
                    Muzika i Događaji
                </h1>
                <p className="text-gray-300 font-light text-lg mt-4 max-w-2xl mx-auto">
                    Najbolji provod u gradu, uživo muzika i sportske večeri.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mt-6"></div>
            </motion.div>

            {/* --- PRIKAZ: AKO NEMA DOGAĐAJA (CURRENT STATE) --- */}
            {events.length === 0 && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 text-center shadow-2xl border border-white/20 relative overflow-hidden"
                >
                    {/* Dekorativni sjaj */}
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        
                        {/* Animirana ikonica */}
                        <motion.div 
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-full flex items-center justify-center text-white mb-6 shadow-lg border border-white/20"
                        >
                            <FaCalendarCheck size={36} />
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                            Pripremamo nešto posebno...
                        </h2>
                        
                        <p className="text-gray-300 text-lg max-w-lg mx-auto mb-10 leading-relaxed font-light">
                            Trenutno formiramo muzički program za naredni period. 
                            Pratite nas kako biste prvi saznali ko gostuje u Lipi!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            {/* Dugme za Instagram */}
                            <a 
                                href="https://www.instagram.com/bircuzlipa/" 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all border border-white/10"
                            >
                                <FaInstagram size={20} /> Pratite najave
                            </a>

                            {/* Dugme za Rezervaciju */}
                            <a 
                                href="tel:0654613359" 
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/30 hover:bg-emerald-500 hover:scale-105 transition-all border border-white/10"
                            >
                                <FaPhoneAlt size={18} /> Rezervišite sto
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}


            {/* --- PRIKAZ: KADA BUDEŠ IMAO DOGAĐAJE (FUTURE STATE) --- */}
            {events.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event) => (
                        <motion.div 
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/20 group hover:bg-white/15 transition-all"
                        >
                            {/* Slika Događaja */}
                            <div className="h-56 bg-gray-900 relative overflow-hidden">
                                {/* Ovde će ići tvoja slika događaja */}
                                {/* <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" /> */}
                                
                                {/* Placeholder dok nema slike */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black"></div>

                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-center shadow-lg">
                                    <span className="block text-xs font-bold text-emerald-700 uppercase tracking-wider">{event.day}</span>
                                    <span className="block text-2xl font-black text-gray-900">{event.date}</span>
                                </div>
                            </div>

                            {/* Tekst Događaja */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{event.title}</h3>
                                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{event.desc}</p>
                                
                                <a href="tel:0654613359" className="inline-flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/50">
                                    Rezerviši Mesto
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

        </div>
    </div>
  )
}

export default NajavePage