import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaMapMarkerAlt, FaTimes, FaGlobeAmericas, FaPlane, FaQuoteRight, FaPlayCircle } from 'react-icons/fa'

// --- UVOZ SLIKA ---
import img1 from '../assets/svuda1.jpeg'
import img2 from '../assets/svuda2.jpeg'
import img3 from '../assets/svuda3.jpeg'
import img4 from '../assets/svuda4.jpeg'
import img5 from '../assets/svuda5.jpeg'
import img6 from '../assets/svuda6.webp'
import img7 from '../assets/svuda7.jpeg'
import img8 from '../assets/svuda9.jpeg'
import img9 from '../assets/deki1.webp'
import video1 from '../assets/deki.mp4'

const LOCATIONS = [
    { id: 9, type: 'video', image: img9, videoUrl: video1 },
    { id: 1, type: 'image', image: img1 },
    { id: 2, type: 'image', image: img2 },
    { id: 3, type: 'image', image: img3 },
    { id: 4, type: 'image', image: img4 },
    { id: 5, type: 'image', image: img5 },
    { id: 6, type: 'image', image: img6 },
    { id: 7, type: 'image', image: img7 },
    { id: 8, type: 'image', image: img8 },
];

function LipaSvuda() {
    const { t } = useTranslation();
    const [selectedLocation, setSelectedLocation] = useState(null);

    // Blokiranje skrola pozadine kada je modal otvoren
    useEffect(() => {
        if (selectedLocation) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedLocation]);

    return (
        <div className="min-h-screen bg-[#e9e0cd] pt-32 pb-20 px-6 relative overflow-hidden">

            <div className="absolute top-20 right-0 opacity-[0.1] text-emerald-900 pointer-events-none">
                <FaGlobeAmericas size={600} color='green'/>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 flex items-center justify-center gap-2">
                            <FaPlane className="animate-pulse" /> {t('everywhere.badge')}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-medium text-emerald-950 mb-6">
                            {t('everywhere.title')}
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            {t('everywhere.subtitle')}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {LOCATIONS.map((loc, index) => (
                        <motion.div
                            key={loc.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedLocation(loc)}
                            className="group cursor-pointer bg-white p-3 rounded-2xl shadow-xl hover:shadow-5xl hover:shadow-green-500 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-xl relative flex items-center justify-center">
                                <img
                                    src={loc.image}
                                    alt={t(`everywhere.locations.${loc.id}.title`)}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {loc.type === 'video' && (
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10 transition-opacity duration-300 group-hover:bg-black/50">
                                         <FaPlayCircle className="text-white text-5xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                                    <span className="bg-white/90 text-emerald-900 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                                        {t('everywhere.read_story')}
                                    </span>
                                </div>
                            </div>
                            <div className="pt-4 px-2">
                                <h3 className="font-bold text-emerald-950 text-lg flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-amber-500 shrink-0" /> 
                                    <span className="truncate">{t(`everywhere.locations.${loc.id}.title`)}</span>
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- OPTIMIZOVAN MODAL --- */}
            <AnimatePresence>
                {selectedLocation && (
                    <motion.div 
                        key="modal-backdrop" // OBAVEZAN KEY ZA ANIMATE PRESENCE
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    >

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                            onClick={() => setSelectedLocation(null)}
                        ></div>

                        {/* Sadržaj Modala */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row h-[85vh] md:h-auto md:max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()} // Sprečava zatvaranje kad klikneš na sam modal
                        >
                            {/* Dugme za zatvaranje */}
                            <button
                                className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/20"
                                onClick={() => setSelectedLocation(null)}
                            >
                                <FaTimes size={20} />
                            </button>

                            {/* DEO ZA SLIKU ILI VIDEO */}
                            <div className="w-full h-[60%] md:h-auto md:w-1/2 relative bg-black shrink-0 flex items-center justify-center">
                                {selectedLocation.type === 'video' ? (
                                    <video
                                        src={selectedLocation.videoUrl}
                                        controls
                                        autoPlay
                                        loop
                                        playsInline
                                        muted
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <img
                                        src={selectedLocation.image}
                                        alt={t(`everywhere.locations.${selectedLocation.id}.title`)}
                                        className="w-full h-full object-contain md:object-cover"
                                    />
                                )}
                            </div>

                            <div className="w-full h-[40%] md:h-auto md:w-1/2 bg-white flex flex-col overflow-y-auto">
                                <div className="p-8 md:p-12 flex flex-col h-full w-full">

                                    {/* Naslov */}
                                    <div className="mb-6 shrink-0">
                                        <span className="text-amber-600 font-bold uppercase tracking-wider text-xs mb-2 block">
                                            {t('everywhere.location_label')}
                                        </span>
                                        <h2 className="text-lg md:text-3xl font-serif w-full font-bold text-emerald-950 flex items-center gap-2 leading-tight">
                                            <FaMapMarkerAlt className="text-emerald-600 shrink-0" />
                                            {t(`everywhere.locations.${selectedLocation.id}.title`)}
                                        </h2>
                                    </div>

                                    {/* Tekst (Opis) */}
                                    <div className="relative mb-6 grow">
                                        <FaQuoteRight className="text-5xl text-emerald-50 absolute -top-4 -left-2 z-0" />
                                        <p className="text-gray-700 leading-relaxed text-lg relative z-10 font-light">
                                            {t(`everywhere.locations.${selectedLocation.id}.desc`)}
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3 shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                            <FaPlane />
                                        </div>
                                        <p className="text-sm text-gray-500 italic">
                                            {t('everywhere.footer_note')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LipaSvuda