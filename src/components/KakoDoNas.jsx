import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaDirections } from 'react-icons/fa'

function KakoDoNas() {
  return (
    <section className="py-10 px-3 md:px-12 bg-gradient-to-br from-emerald-200 to-white relative overflow-hidden">
        
        {/* Dekorativna pozadina */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600  to-emerald-400"></div>

        <div className="w-full h-full mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
                
                {/* --- LEVA STRANA: INFO --- */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Lokacija</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-emerald-950 mb-8">
                        Kako do nas?
                    </h2>
                    
                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                        Nalazimo se u srcu starog grada, u ulici koja čuva tajne Novog Sada. 
                        Lako ćete nas prepoznati po mirisu dobre kafe i zvucima tamburice.
                    </p>

                    <div className="space-y-6">
                        
                        {/* Adresa */}
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors group">
                            <div className="bg-white p-3 rounded-full shadow-sm text-emerald-600 group-hover:text-emerald-800 transition-colors">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-emerald-950">Adresa</h4>
                                <p className="text-gray-600">Miletićeva 9, Novi Sad</p>
                            </div>
                        </div>

                        {/* Telefon */}
                        <a href="tel:0654613359" className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors group cursor-pointer">
                            <div className="bg-white p-3 rounded-full shadow-sm text-emerald-600 group-hover:text-emerald-800 transition-colors">
                                <FaPhoneAlt size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-emerald-950">Telefon</h4>
                                <p className="text-gray-600">065 46 13 359</p>
                            </div>
                        </a>

                        {/* Radno Vreme */}
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors group">
                            <div className="bg-white p-3 rounded-full shadow-sm text-emerald-600 group-hover:text-emerald-800 transition-colors">
                                <FaClock size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-emerald-950">Radno vreme</h4>
                                <p className="text-gray-600">Pon - Cet: 08:00 - 23:00</p>
                                <p className="text-gray-600">Pet - Sub: 08:00 - 01:00</p>
                            </div>
                        </div>

                    </div>

                    {/* Dugme za navigaciju */}
                    <motion.a 
                        href="https://www.google.com/maps/dir//Mileticeva+9+Novi+Sad"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-10 inline-flex items-center gap-3 bg-emerald-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-emerald-900/20 hover:bg-emerald-800 transition-all"
                    >
                        <FaDirections /> Pokreni Navigaciju
                    </motion.a>

                </motion.div>

                {/* --- DESNA STRANA: MAPA --- */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-stone-100"
                >
                    {/* Google Maps Iframe */}
                    <iframe 
                        title="Mapa Lipa"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        loading="lazy" 
                        allowFullScreen 
                        referrerPolicy="no-referrer-when-downgrade"
                        // Ovde sam stavio link ka Miletićevoj 18
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.561380739269!2d19.844149075086133!3d45.256661647263954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b106887a72093%3A0xff7d906f9addbb1e!2z0JHQuNGA0YbRg9C3INCb0LjQv9Cw!5e0!3m2!1ssr!2srs!4v1771002704780!5m2!1ssr!2srs"
                        className=" transition-all duration-700"
                    ></iframe>

                    {/* Pin Kartica preko mape */}
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-emerald-100 hidden sm:block">
                        <p className="text-emerald-900 font-bold text-sm">Kafana Lipa</p>
                        <p className="text-xs text-gray-500">Čekamo vas!</p>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
  )
}

export default KakoDoNas