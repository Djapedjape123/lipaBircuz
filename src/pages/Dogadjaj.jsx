import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next' // Uvoz za prevod
import { FaMusic, FaGlassCheers, FaCamera, FaTimes, FaCalendarAlt, FaStar } from 'react-icons/fa'

// --- UVOZ SLIKA ---
import img1 from '../assets/dog1.webp'
import img2 from '../assets/dog2.webp'
import img3 from '../assets/dog3.webp'
import img4 from '../assets/dog4.webp'
import img5 from '../assets/dog5.webp'
import img6 from '../assets/dog6.webp'
import img7 from '../assets/dog7.webp'

// --- PODACI O DOGAĐAJIMA (Samo struktura, tekst je u i18n) ---
const EVENTS_DATA = [
    { id: 1, image: img1, size: "large" },
    { id: 2, image: img2, size: "small" },
    { id: 3, image: img3, size: "small" },
    { id: 4, image: img4, size: "medium" },
    { id: 5, image: img5, size: "small" },
    { id: 6, image: img6, size: "small" },
    { id: 7, image: img7, size: "large" },
];

function Dogadjaj() {
    const { t } = useTranslation(); // Inicijalizacija prevoda
    const [selectedImage, setSelectedImage] = useState(null);

    // Blokiranje skrola pozadine kada je modal otvoren
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImage]);

    return (
        <div className="min-h-screen bg-[#f8f5f2] pt-32 pb-20 px-6 relative overflow-hidden">

            {/* Pozadinski dekorativni elementi */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 text-amber-500/20 text-9xl rotate-12">
                    <FaMusic />
                </div>
                <div className="absolute bottom-20 right-10 text-emerald-900/20 text-[15rem] -rotate-12">
                    <FaGlassCheers />
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* --- HERO SEKCIJA --- */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 flex items-center justify-center gap-2">
                            <FaCamera className="animate-pulse" /> {t('events.gallery_badge')}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-medium text-emerald-950 mb-6">
                            {t('events.title_prefix')} <span className="text-emerald-600 italic">{t('events.title_suffix')}</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            {t('events.subtitle')}
                        </p>
                    </motion.div>
                </div>

                {/* --- GRID GALERIJA (MASONRY STYLE) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {EVENTS_DATA.map((item, index) => {
                        // Ovde izvlačimo podatke iz prevoda na osnovu ID-a
                        const title = t(`events.items.${item.id}.title`);
                        const category = t(`events.items.${item.id}.category`);
                        const desc = t(`events.items.${item.id}.desc`);

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedImage({ ...item, title, category, desc })}
                                className={`group relative rounded-3xl border-2 border-green-400 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 
                                    ${item.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''}
                                    ${item.size === 'medium' ? 'lg:col-span-2' : ''}
                                `}
                            >
                                {/* Slika */}
                                <img 
                                    src={item.image} 
                                    alt={title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                                    
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                                            {category}
                                        </span>
                                        <h3 className="text-white text-2xl font-serif font-bold mb-2">
                                            {title}
                                        </h3>
                                        <p className="text-white/80 text-sm md:text-base font-light line-clamp-2">
                                            {desc}
                                        </p>
                                    </div>

                                    {/* Ikonica za zoom */}
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        <FaStar />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* --- POZIV NA AKCIJU (FOOTER DEO) --- */}
                <div className="mt-20 text-center">
                    <p className="text-emerald-900 font-medium text-xl mb-4">
                        {t('events.cta_title')}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-emerald-100 text-gray-600">
                        <FaCalendarAlt className="text-amber-500" />
                        <span>{t('events.cta_button')}</span>
                    </div>
                </div>

            </div>

            {/* --- MODAL (LIGHTBOX) --- */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-20">
                            <FaTimes size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            // Dodata max-h-[90vh] i overflow-y-auto (ili hidden na desktopu) za skrolovanje celog kontejnera na mobilnom
                            className="relative max-w-5xl w-full max-h-[85vh] md:max-h-[90vh] flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl overflow-y-auto md:overflow-y-visible"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Slika u modalu */}
                            <div className="w-full md:w-2/3 h-[50vh] md:h-[80vh] bg-black shrink-0">
                                <img 
                                    src={selectedImage.image} 
                                    alt={selectedImage.title} 
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Tekst u modalu - Na mobilnom je ispod slike i skroluje se */}
                            <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col bg-white shrink-0">
                                <div className="mb-auto">
                                    <span className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-2 block">
                                        {selectedImage.category}
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-serif text-emerald-950 font-bold mb-4">
                                        {selectedImage.title}
                                    </h2>
                                    <div className="w-12 h-1 bg-amber-500 mb-6"></div>
                                    <p className="text-gray-600 leading-relaxed text-lg font-light">
                                        {selectedImage.desc}
                                    </p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <p className="text-sm text-gray-400 italic flex items-center gap-2">
                                        <FaCamera /> {t('events.modal_footer')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default Dogadjaj