import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaTimes, FaHistory, FaLeaf, FaPenNib, FaCoffee, FaQuoteLeft } from 'react-icons/fa'

// --- UVOZ SLIKA ---
import img1 from '../assets/cene.jpeg' 
import img2 from '../assets/lipaistorija.jpg'
import img3 from '../assets/lipaistorija2.jpg'
import img4 from '../assets/lipa3.png'

const IMAGES = [img1, img2, img3,img4];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- AUTOMATSKI SLAJDER ---
  useEffect(() => {
    if (isModalOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(timer);
  }, [currentIndex, isModalOpen]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  return (
    // POZADINA
    <div className="min-h-screen bg-[#fdfbf7] pt-36 pb-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Dekorativni detalji */}
      <div className="absolute top-20 left-10 text-[20rem] text-emerald-900/20 rotate-12 select-none pointer-events-none">
          <FaLeaf />
      </div>
      <div className="absolute bottom-20 right-10 text-[15rem] text-amber-700/20 -rotate-12 select-none pointer-events-none">
          <FaHistory />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* --- LEVA STRANA: TEKST --- */}
        {/* PROMENA: order-1 znači da je PRVI na mobilnom */}
        <div className="lg:col-span-7 order-1 lg:order-1 relative">
            {/* Vertikalna linija dekoracije */}
            <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-emerald-800/30 to-transparent hidden md:block -ml-8"></div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-10"
            >
                {/* Header Teksta */}
                <div>
                    <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-lg mb-2 block">Od 1890. godine</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-medium text-emerald-950 mb-6 mt-5 leading-tight">
                        Kafana „Lipa” <br/>
                        <span className="text-2xl md:text-3xl text-emerald-800/60 italic font-light block mt-2">Duša starog Novog Sada</span>
                    </h1>
                    <p className="text-xl text-gray-700 font-light leading-relaxed border-l-4 border-emerald-600 pl-6 italic bg-emerald-50/50 py-4 pr-4 rounded-r-lg">
                        "Mesto gde se tradicija sreće sa dobrim društvom, a vreme teče malo sporije."
                    </p>
                </div>

                {/* Sadržaj */}
                <div className="space-y-10 text-gray-700 leading-relaxed text-lg font-light">
                    
                    <div className="relative">
                        <h3 className="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-3">
                            <span className="p-2 bg-emerald-100 rounded-lg text-emerald-700"><FaHistory size={18} /></span>
                            Tradicija duža od veka
                        </h3>
                        <p>
                            Smeštena u samom srcu Novog Sada, u Miletićevoj ulici (nekadašnjem Lebarskom sokaku), kafana „Lipa” već više od 135 godina predstavlja utočište za sve one koji tragaju za autentičnim gradskim duhom. Od svog osnivanja 1890. godine, ovo mesto je bilo i ostalo nezvanični centar kulturnog i društvenog života vojvođanske Atine.
                        </p>
                    </div>

                    <div>
                         <h3 className="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-3">
                            <span className="p-2 bg-amber-100 rounded-lg text-amber-700"><FaLeaf size={18} /></span>
                            Od „Linde” do „Lipe”
                        </h3>
                        <p>
                             Sve je počelo sa gostioničarem češkog porekla, Jozefom Obernigom, koji je u dvorištu kuće pod starim stablom lipe otvorio pivnicu „Linda” (nem. Zur Linde). Bila je to prava kafana u kojoj se točio najbolji češki pilzner. Kasnije, pod zakupcem Savom Popovićem – Golubicom, ime dobija svoj prepoznatljivi srpski prevod koji nosimo i danas – Lipa.
                        </p>
                    </div>

                    {/* Sekcija Velikani */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-600 relative overflow-hidden group hover:shadow-xl transition-shadow">
                        <div className="absolute top-0 right-0 p-4 text-gray-100 group-hover:text-emerald-50 transition-colors">
                            <FaQuoteLeft size={80} />
                        </div>
                        
                        <h3 className="text-xl font-bold text-emerald-950 mb-4 flex items-center gap-2 relative z-10">
                             <FaPenNib className="text-emerald-600" /> Gde su sedeli velikani
                        </h3>
                        <p className="mb-6 text-base relative z-10">
                            „Lipa” je imala svoj čuveni „štantiš” (stalni astal), za kojim su istoriju ispisivali:
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 relative z-10">
                             {[
                                "Svetozar Miletić", "Jovan Jovanović Zmaj", 
                                "Laza Kostić", "Uroš Predić", 
                                "Vasa Pušibrk", "Isidor Bajić"
                             ].map((name, i) => (
                                 <div key={i} className="flex items-center gap-3 text-emerald-900 font-medium text-sm border-b border-gray-100 pb-2">
                                     <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> {name}
                                 </div>
                             ))}
                        </div>
                    </div>

                    <div>
                         <h3 className="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-3">
                            <span className="p-2 bg-emerald-100 rounded-lg text-emerald-700"><FaCoffee size={18} /></span>
                            Ukus tradicije u modernom ruhu
                        </h3>
                        <p>
                            Danas, „Lipa” spaja najbolje iz prošlosti sa modernim gostoprimstvom. Bilo da dolazite na jutarnju kafu, čuveni „hercegovački krš” ili laganu domaću kafu, u „Lipi” ćete osetiti onaj mirniji, gospodski Novi Sad.
                        </p>
                    </div>

                </div>
            </motion.div>
        </div>


        {/* --- DESNA STRANA: SLIKE --- */}
        {/* PROMENA: order-2 znači da je DRUGI na mobilnom (ide ispod teksta) */}
        <div className="lg:col-span-5 order-2 lg:order-2 lg:sticky lg:top-32 h-fit">
             <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                
                {/* Glavna slika */}
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentIndex}
                        src={IMAGES[currentIndex]}
                        alt="Kafana Lipa"
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onClick={() => setIsModalOpen(true)}
                        className="w-full h-full object-cover cursor-zoom-in"
                    />
                </AnimatePresence>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Kontrole */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                     <div className="flex gap-2">
                        {IMAGES.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2'}`}
                            />
                        ))}
                     </div>
                     
                     <div className="flex gap-2">
                        <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-emerald-900 transition-all">
                            <FaChevronLeft size={14} />
                        </button>
                        <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-emerald-900 transition-all">
                            <FaChevronRight size={14} />
                        </button>
                     </div>
                </div>
            </div>

            {/* Dekorativni okvir */}
            <div className="absolute top-6 left-6 w-full h-full border-2 border-emerald-900/10 rounded-[2rem] -z-10 hidden lg:block"></div>
        </div>

      </div>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
                onClick={() => setIsModalOpen(false)}
            >
                <button 
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
                    onClick={() => setIsModalOpen(false)}
                >
                    <FaTimes size={32} />
                </button>

                <motion.img 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    src={IMAGES[currentIndex]} 
                    alt="Full screen" 
                    className="max-w-full max-h-full rounded shadow-2xl object-contain select-none"
                    onClick={(e) => e.stopPropagation()} 
                />
                
                <div className="absolute bottom-6 text-white/60 text-sm font-light tracking-widest">
                    {currentIndex + 1} / {IMAGES.length}
                </div>
            </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default About