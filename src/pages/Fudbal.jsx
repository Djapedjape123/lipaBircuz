import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaTimes, FaFutbol, FaTrophy, FaMedal, FaMapMarkerAlt, FaUsers, FaHeart, FaPlayCircle } from 'react-icons/fa'

// --- UVOZ SLIKA ---
import img1 from '../assets/fudbal1.jpeg'
import img2 from '../assets/fudbal2.jpeg'
import img3 from '../assets/fudbal3.jpeg'
import img4 from '../assets/fudbal4.jpeg'
import img5 from '../assets/fudbal5.jpeg'
import img6 from '../assets/fudbal6.jpeg'

const IMAGES = [img1, img2, img3, img4, img5, img6];

function Fudbal() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // --- AUTOMATSKI SLAJDER ---
    useEffect(() => {
        if (isModalOpen) return; // Pauziramo automatsko vrtenje dok je modal otvoren
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, [currentIndex, isModalOpen]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
    };

    return (
        <div className="lg:col-span-6 order-2 pt-24 px-6 pb-24 lg:order-1 lg:self-start">

            {/* Dekorativni detalji */}
            <div className="absolute top-20 right-10 text-[20rem] text-emerald-900/20 -rotate-12 select-none pointer-events-none">
                <FaFutbol />
            </div>
            <div className="absolute bottom-20 left-10 text-[15rem] text-yellow-700/20 rotate-12 select-none pointer-events-none">
                <FaTrophy />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">

                {/* --- LEVA STRANA: SLAJDER --- */}
                {/* Na mobilnom je DRUGI (order-2), na desktopu PRVI */}
                <div className="lg:col-span-6 order-2 lg:order-1 lg:sticky lg:top-32 h-fit">
                    <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white group">

                        {/* Glavna slika */}
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentIndex}
                                src={IMAGES[currentIndex]}
                                alt="Fudbalska ekipa Lipa"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                onClick={() => setIsModalOpen(true)}
                                className="w-full h-full object-cover cursor-zoom-in"
                            />
                        </AnimatePresence>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                        {/* Kontrole */}
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                            <div className="flex gap-1.5 flex-wrap max-w-[70%]">
                                {IMAGES.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-amber-400 w-6' : 'bg-white/40 w-2'}`}
                                    />
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald-600 transition-all">
                                    <FaChevronLeft size={14} />
                                </button>
                                <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald-600 transition-all">
                                    <FaChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-emerald-900/10 rounded-[2rem] -z-10 hidden lg:block"></div>
                </div>
                


                {/* --- DESNA STRANA: TEKST --- */}
                {/* Na mobilnom je PRVI (order-1), na desktopu DRUGI */}
                <div className="lg:col-span-6 order-1 lg:order-2 relative">

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Naslov */}
                        <div>
                            <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs mb-2 flex items-center gap-2">
                                <FaUsers /> Lipadžije
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-medium text-emerald-950 mb-4 leading-tight">
                                Više od igre, <br />
                                <span className="text-emerald-600">više od tima</span>
                            </h1>
                            <p className="text-lg text-gray-600 border-l-4 border-amber-500 pl-4 italic bg-amber-50/50 py-3 pr-3 rounded-r-lg">
                                "U srcu Novog Sada postoji mesto koje neguje prijateljstvo i domaćinsku atmosferu – naš Bircuz Lipa."
                            </p>
                        </div>

                        {/* Sadržaj teksta */}
                        {/* Sadržaj teksta - Modernizovan Prikaz */}
                        <div className="space-y-8 text-gray-700 leading-relaxed font-light text-justify">

                            {/* 1. DEO: UVOD (Istaknut kao citat) */}
                            <div className="relative pl-6 border-l-4 border-amber-500/40 py-2 bg-amber-50/30 rounded-r-xl">
                                <p className="text-lg md:text-xl text-emerald-950 font-serif italic">
                                    "Kroz godine, Lipa je bila i ostala tačka susreta, razmene ideja i topline, mesto gde su nekada rado sedeli Mika Antić, Laza Kostić i mnoge druge gradske legende. Danas, duh te tradicije živi kroz nove generacije – kroz <strong className="text-emerald-700 not-italic decoration-amber-400 underline decoration-2 underline-offset-4">Lipadžije</strong>."
                                </p>
                            </div>

                            {/* 2. DEO: O TIMU (Čist tekst) */}
                            <div className="space-y-6 text-gray-600">
                                <p>
                                    Lipadžije nisu samo verni gosti našeg bifea. Oni su deo porodice, mladost sa stavom, energijom i timskim duhom. Iz neformalnog druženja, 2023. godine nastao je tim malog fudbala “Lipadžije” – kao prirodni nastavak onoga što Lipa jeste: zajedništvo, strast i podrška.
                                </p>
                                <p>
                                    Naši omladinci, naši redovni gosti, naši prijatelji, svojim igrama na terenu pokazuju sve ono što učimo i negujemo van terena: fer-plej, odanost, timski rad i srce u svakoj akciji. Njihovi rezultati nisu samo pobede – to su poruke zajedništva koje svi razumemo.
                                </p>
                            </div>

                            {/* 3. DEO: REZULTATI (Istaknuta Kartica) */}
                            <div className="mt-6 bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-lg border border-emerald-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">

                                {/* Dekorativna ikonica u pozadini (slabo vidljiva) */}
                                <div className="absolute -top-6 -right-6 text-emerald-900/5 group-hover:text-amber-500/10 transition-colors duration-500 rotate-12">
                                    <FaTrophy size={140} />
                                </div>

                                <div className="relative z-10">
                                    {/* Mali naslov */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm text-sm">
                                            <FaFutbol />
                                        </span>
                                        <h3 className="font-bold text-emerald-950 text-base uppercase tracking-wider">Put do uspeha</h3>
                                    </div>

                                    <p className="mb-6 text-gray-700">
                                        Sa takmičarskim utakmicama započeli smo u Četvrtoj ligi Novog Sada, a zalaganjem na terenu i dobrim rezultatima brzo smo došli do drugog ranga takmičenja.
                                    </p>

                                    {/* Istaknut deo o sezoni */}
                                    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                                        <p className="font-medium text-emerald-900 leading-relaxed">
                                            Sezona 2024/25 našem klubu donela je najviše uspeha: <span className="font-bold text-amber-600">plasman u Lav ligu Vojvodine</span> i <span className="font-bold text-amber-600">trofej namenjen osvajaču Kupa grada Novog Sada</span>. Ostvareni rezultati nisu prošli nezapaženo, usledio je poziv na Minifootball Serbian cup 2025 koji je na sportskom centru Tašmajdan okupio 12 najboljih ekipa iz cele Srbije, na kojem su naši momci dogurali do četvrtfinala.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 4. DEO: ZAKLJUČAK */}
                            <div className="pt-4 border-t border-gray-100">
                                <p className="mb-4 text-gray-600 italic">
                                    Bircuz Lipa danas nije samo mesto okupljanja – to je dom sporta, umetnosti i dobrog duha. A Lipadžije? Oni su ponos svih nas. Oni su budućnost sa osmehom, glasna podrška sa tribina i tiha snaga iza svakog gola.
                                </p>
                                <p className="text-lg font-medium text-emerald-800 flex items-center justify-center gap-2 bg-emerald-50 p-3 rounded-full border border-emerald-100">
                                    <FaHeart className="text-red-500 animate-pulse" />
                                    Zalivamo i proslavljamo uspehe u Lipi! 🍻
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>

            </div>

            {/* --- VIDEO SEKCIJA --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto mt-20"
            >
                <div className="text-center mb-8">
                    <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Video Zapis</span>
                    <h2 className="text-3xl font-serif text-emerald-950">Lipadžije u akciji <br />Finale kupa</h2>
                </div>

                <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative group">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/HmMcf6TnOQo"
                        title="Lipadžije Utakmica"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </motion.div>


            {/* --- MODAL (LIGHTBOX) SA SLAJDEROM --- */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
                        onClick={() => setIsModalOpen(false)}
                    >
                        {/* Close dugme */}
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-20"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <FaTimes size={32} />
                        </button>

                        {/* --- NOVO: Dugme LEVO u modalu --- */}
                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all z-20 backdrop-blur-sm"
                            onClick={(e) => {
                                e.stopPropagation(); // Sprečava zatvaranje modala
                                prevSlide();
                            }}
                        >
                            <FaChevronLeft size={24} />
                        </button>

                        {/* --- NOVO: Dugme DESNO u modalu --- */}
                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all z-20 backdrop-blur-sm"
                            onClick={(e) => {
                                e.stopPropagation(); // Sprečava zatvaranje modala
                                nextSlide();
                            }}
                        >
                            <FaChevronRight size={24} />
                        </button>

                        {/* Slika u modalu sa animacijom promene */}
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentIndex} // Ključno za animaciju promene slike
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                src={IMAGES[currentIndex]}
                                alt="Full screen"
                                className="max-w-full max-h-[85vh] rounded shadow-2xl object-contain select-none relative z-10"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </AnimatePresence>

                        {/* Brojač slika */}
                        <div className="absolute bottom-6 text-white/60 text-sm font-light tracking-widest z-20">
                            Slika {currentIndex + 1} od {IMAGES.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default Fudbal