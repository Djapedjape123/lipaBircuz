import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//uvoz s clauda
const IMAGES = [
    'https://res.cloudinary.com/duomot4hp/image/upload/v1777887328/kviz2_hoa0iu.jpg', // ZAMENI OVDE
    'https://res.cloudinary.com/duomot4hp/image/upload/v1777887363/kviz3_ue0xwr.jpg', // ZAMENI OVDE
    'https://res.cloudinary.com/duomot4hp/image/upload/v1777886070/svuda1_flgqfg.jpg'  // ZAMENI OVDE
];

function Uspomena() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatsko vrtenje slika unutar kruga (na svakih 5 sekundi)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#0a0a0a] py-12 px-6 border-t border-white/5 relative overflow-hidden">
            
            {/* Suptilan sjaj u pozadini */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
                
                
                {/* --- LEVA STRANA: Okrugli Slajder --- */}
                <div className="relative shrink-0">
                    {/* Dekorativni tanki beli prsten oko slike */}
                    <div className="absolute inset-[-10px] rounded-full border border-white/20 animate-[spin_20s_linear_infinite]"></div>
                    
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#1a1a1a] shadow-[0_0_40px_rgba(255,255,255,0.05)] bg-black relative">
                        
                        <AnimatePresence>
                            <motion.img
                                key={currentIndex}
                                src={IMAGES[currentIndex]}
                                alt="Uspomena"
                                // Čisto, glatko pretapanje providnosti (opacity)
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 2, ease: "easeInOut" }} // Usporeno na 2 sekunde za filmski efekat
                                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- DESNA STRANA: Pisani Tekst --- */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl text-white font-serif mb-2 tracking-wide">
                        Ime Gazdarice
                    </h2>
                    
                    <span className="text-gray-500 text-sm tracking-[0.3em] uppercase block mb-8">
                        Zauvek deo nas
                    </span>

                    {/* Glavni tekst - Koristimo onaj Font "Caveat" koji smo ubacili */}
                    <div className="relative">
                        <p style={{ fontFamily: "'Caveat', cursive" }} className="text-2xl md:text-4xl text-gray-200 leading-[1.6] font-light">
                            "Ovde će ići tekst. Font izgleda baš kao da je neko pisao rukom, olovkom po crnom papiru. To daje ogromnu toplinu, a slike se sa leve strane same polako smenjuju jedna u drugu..."
                        </p>
                    </div>

                    <p style={{ fontFamily: "'Caveat', cursive" }} className="text-xl md:text-3xl text-gray-400 mt-8">
                        Tvoj Dejan
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

export default Uspomena;