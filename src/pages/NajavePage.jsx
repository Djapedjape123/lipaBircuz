import React from 'react'
import { motion } from 'framer-motion'
import { FaMusic, FaCalendarCheck, FaInstagram, FaPhoneAlt } from 'react-icons/fa'

function NajavePage() {

  // --- KADA BUDEŠ IMAO DOGAĐAJE, OVDE ĆEŠ IH UBACITI ---
  // Za sada je ovo prazno, pa se prikazuje "Empty State" ispod.
  const events = []; 
  
//    PRIMER KAKO ĆE IZGLEDATI PODACI KASNIJE:
//   const events = [
//       {
//           id: 1,
//           date: "14. FEB",
//           day: "PETAK",
//           title: "Zvezda-Partizan'",
//           desc: "Veciti derbi uz najbolje navijanje i atmosferu.",
//           image: "putanja/do/slike.jpg"
//       },
//       {
//           id: 2,
//           date: "15. FEB",
//           day: "SUBOTA",
//           title: "Bend 'Nesanica'",
//           desc: "Najbolji pop-rock hitovi.",
//           image: "putanja/do/slike2.jpg"
//       }
//   ];
  

  return (
    <div className="min-h-screen bg-stone-50 pt-36 pb-20 px-6 relative overflow-hidden">
        
        {/* Dekorativna pozadina (tačkice) */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
        </div>

        <div className="max-w-4xl mx-auto">
            
            {/* --- NASLOV --- */}
            <div className="text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Program & Zabava</span>
                <h1 className="text-4xl md:text-5xl font-serif font-medium text-emerald-950">
                    Muzika i Događaji
                </h1>
                <div className="w-24 h-1 bg-emerald-500 rounded-full mx-auto mt-6"></div>
            </div>

            {/* --- PRIKAZ: AKO NEMA DOGAĐAJA (CURRENT STATE) --- */}
            {events.length === 0 && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl p-10 md:p-16 text-center shadow-xl border border-emerald-100 relative overflow-hidden"
                >
                    {/* Dekoracija u pozadini kartice */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400"></div>
                    <FaMusic className="text-[10rem] text-emerald-50 absolute -bottom-10 -right-10 rotate-12" />

                    <div className="relative z-10 flex flex-col items-center">
                        
                        {/* Animirana ikonica */}
                        <motion.div 
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 shadow-inner"
                        >
                            <FaCalendarCheck size={40} />
                        </motion.div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Pripremamo nešto posebno...
                        </h2>
                        
                        <p className="text-gray-500 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                            Trenutno formiramo muzički program za naredni period. 
                            Pratite nas kako biste prvi saznali ko gostuje u Lipi!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            {/* Dugme za Instagram */}
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                            >
                                <FaInstagram size={20} /> Pratite najave na Instagramu
                            </a>

                            {/* Dugme za Rezervaciju */}
                            <a 
                                href="tel:0654613359" 
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:scale-105 transition-all"
                            >
                                <FaPhoneAlt size={18} /> Rezervišite na vreme
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}


            {/* --- PRIKAZ: KADA BUDEŠ IMAO DOGAĐAJE (FUTURE STATE) --- */}
            {/* Ovo će se automatski prikazati kad ubaciš podatke u 'events' niz gore */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                    <motion.div 
                        key={event.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                    >
                        {/* Slika Događaja */}
                        <div className="h-48 bg-gray-200 relative overflow-hidden">
                            {/* <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /> */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-center shadow-md">
                                <span className="block text-xs font-bold text-emerald-600">{event.day}</span>
                                <span className="block text-xl font-extrabold text-gray-900">{event.date}</span>
                            </div>
                        </div>

                        {/* Tekst Događaja */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{event.desc}</p>
                            <a  href="tel:0654613359" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:scale-105 transition-all">
                                Rezerviši Sto
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default NajavePage