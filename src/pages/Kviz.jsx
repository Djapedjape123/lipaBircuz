import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaTimes, FaBrain, FaQuestionCircle, FaLightbulb, FaBeer, FaComments, FaMedal } from 'react-icons/fa'

// --- UVOZ SLIKA ---
import img1 from '../assets/kviz1.webp'
import img2 from '../assets/kviz2.jpeg'
import img3 from '../assets/kviz3.jpeg'
import img4 from '../assets/kviz4.webp'
import img5 from '../assets/kviz5.webp'
import img6 from '../assets/kviz6.webp'
import img7 from '../assets/kviz7.webp'

const IMAGES = [img1, img2, img3, img4, img5, img6, img7];

function Kviz() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // --- AUTOMATSKI SLAJDER ---
    useEffect(() => {
        if (isModalOpen) return; 
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
        // Skoljen overflow-hidden odavde da bi sticky radio, dodat relative
        <div className="lg:col-span-6 order-2 pt-24 px-6 pb-24 lg:order-1 lg:self-start bg-[#fdfbf7] relative">

            {/* --- NOVO: Izolovan kontejner koji seče ogromne ikonice i sprečava belu liniju --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 right-10 text-[20rem] text-indigo-900/10 rotate-12 select-none">
                    <FaBrain />
                </div>
                <div className="absolute bottom-20 left-10 text-[15rem] text-amber-500/10 -rotate-12 select-none">
                    <FaLightbulb />
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start lg:mt-10 mb-20 relative z-10">

                {/* --- LEVA STRANA: SLAJDER --- */}
                <div className="lg:col-span-6 order-2 lg:order-1 lg:sticky lg:top-32 h-fit">
                    <div className="relative w-full h-[90vh] lg:h-auto lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white group">

                        {/* Glavna slika */}
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentIndex}
                                src={IMAGES[currentIndex]}
                                alt="Pab Kviz Lipa"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                onClick={() => setIsModalOpen(true)}
                                className="w-full h-full object-cover cursor-zoom-in"
                            />
                        </AnimatePresence>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 via-transparent to-transparent pointer-events-none"></div>

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
                                <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-indigo-600 transition-all">
                                    <FaChevronLeft size={14} />
                                </button>
                                <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-indigo-600 transition-all">
                                    <FaChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-indigo-900/10 rounded-[2rem] -z-10 hidden lg:block"></div>
                </div>
                

                {/* --- DESNA STRANA: TEKST --- */}
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
                                <FaQuestionCircle /> Pab Kviz Ekipa
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-medium text-emerald-950 mb-4 leading-tight">
                                Lipadžije – <br />
                                <span className="text-indigo-600 text-3xl md:text-4xl italic">(Jako dobro)</span> skriveni potencijal
                            </h1>
                            <p className="text-lg text-gray-600 border-l-4 border-indigo-500 pl-4 italic bg-indigo-50/50 py-3 pr-3 rounded-r-lg">
                                "Od 'Ja ti kažem!' do pobedničkog postolja – kako smo kafanske prepirke pretvorili u znanje."
                            </p>
                        </div>

                        {/* Sadržaj teksta */}
                        <div className="space-y-6 text-gray-700 leading-relaxed font-light text-justify">

                            <p>
                                Hteli mi to da priznamo ili ne, jedna od osnovnih odlika tradicionalne srpske kafane, a posebno gostiju za šankom, je večito, prijateljsko, nadmetanje – ko je tu najpametniji? Tačnije – ko tvrdi da je najpametniji. Tako su, veoma česte, fraze koje se u kafani čuju: „Ma, garantujem ti!“, „Ja ti kažem!“, „Evo proveri na internetu...“, „Nisi u pravu“...
                            </p>

                            <p>
                                To su odlike, rekosmo, tradicionalnih srpskih kafana, kakva smo i mi, te je to odlika i naše Lipe. Da se ne izdvajamo! Ono po čemu smo odlučili da se, ipak, izdvojimo, je da te naše prepirke kanališemo na drugi način. Umesto da se nadmećemo međusobno, odlučili smo da se skupimo u jednu ekipu i nadmećemo sa drugim ekipama po gradu, pa da na taj ničin vidimo gde stojimo. Tako je nastala pab kviz ekipa – <strong>Lipadžije!</strong>
                            </p>

                            {/* Istaknut deo o ekipi */}
                            <div className="relative pl-6 border-l-4 border-amber-500/40 py-2 bg-amber-50/30 rounded-r-xl my-8">
                                <p className="text-emerald-950">
                                    Saradnjom gostiju i osoblja, koji dele entuzijazam prema pab kvizovima, okupili smo ekipu koja je do sada učestvovala na preko pedeset kvizova, beležila neke vrlo dobre rezultate, ali pre svega, na šta smo i najponosniji, imala više članova nego bilo koja ekipa u gradu. To vam garantujemo. 
                                </p>
                            </div>

                            <p>
                                Jer, osim najrevnosnijih članova, koji su i najredovniji, desetine gostiju naše kafane su pokazale volju i interesovanje da se oprobaju, rado išli na kvizove i, na kraju, mnogo doprineli osvajanju bodova. Bilo da su to muzičari koji posle dva takta prepoznaju pesmu na „song kvestu“, društvenjaci koji znaju sve godine Napoleonovih ratova, poznavaoci geografije koji poznaju rečni sistem Azije, filmofili koji napamet znaju sve oskarovce ili prirodnjaci koji rešavaju „moj broj“ i pre nego što se sve cifre pojave na ekranu. 
                            </p>

                            {/* Istaknuta Kartica sa medaljom */}
                            <div className="mt-8 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-lg border border-indigo-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="absolute -top-6 -right-6 text-indigo-900/5 group-hover:text-amber-500/10 transition-colors duration-500 rotate-12">
                                    <FaMedal size={140} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm text-sm">
                                            <FaBeer />
                                        </span>
                                        <h3 className="font-bold text-emerald-950 text-base uppercase tracking-wider">Više od igre</h3>
                                    </div>

                                    <p className="mb-4 text-gray-700">
                                        Od svega nas, ipak, najviše raduje što bismo se, pre svakog kviza, prvo sastali u našoj Lipi, da se „zagrejemo“. Čašicom ili dve pića uz ćaskanje o mogućim temama kviza za to veče. Jer, naravno, najvažnija stvar kod pab kviz ekipe je, jednostavno, druženje!
                                    </p>

                                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border-l-4 border-amber-500 shadow-sm mt-4">
                                        <p className="font-medium text-emerald-900 text-sm leading-relaxed">
                                            Rezultati su možda i mogli biti malo bolji, ali hajde da se malo i pohvalimo. Zna se da se najbolji sport gleda u Lipi, pa tako među medaljama naših fudbalera, koje rado ističemo u kafani, stoje i <span className="font-bold text-amber-600">zlatne medalje sa specijalnog izdanja pab kviza o Engleskoj Premijer ligi</span>. Nije, dakle, da samo igramo fudbal dobro, dobro ga i poznajemo!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Zaključak */}
                            <div className="pt-6 border-t border-gray-100 mt-8">
                                <p className="text-lg font-medium text-indigo-900 flex items-center justify-center gap-2 bg-indigo-50 p-4 rounded-2xl border border-indigo-100 shadow-sm">
                                    <FaComments className="text-amber-500" />
                                    Nastavljamo da se takmičimo, svi zajedno, da ne moramo međusobno – naročito onako pre podne, za šankom. Svako ko voli kviz je dobrodošao!
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>

            </div>

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

                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all z-20 backdrop-blur-sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                prevSlide();
                            }}
                        >
                            <FaChevronLeft size={24} />
                        </button>

                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all z-20 backdrop-blur-sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                nextSlide();
                            }}
                        >
                            <FaChevronRight size={24} />
                        </button>

                        {/* Slika u modalu */}
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentIndex}
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

                        <div className="absolute bottom-6 text-white/60 text-sm font-light tracking-widest z-20">
                            Slika {currentIndex + 1} od {IMAGES.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default Kviz