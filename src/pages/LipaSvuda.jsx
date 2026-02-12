import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaTimes, FaGlobeAmericas, FaPlane, FaQuoteRight } from 'react-icons/fa'

// --- UVOZ SLIKA ---
import img1 from '../assets/svuda1.jpeg'
import img2 from '../assets/svuda2.jpeg'
import img3 from '../assets/svuda3.jpeg'
import img4 from '../assets/svuda4.jpeg'
import img5 from '../assets/svuda5.jpeg'
import img6 from '../assets/svuda6.jpeg'
import img7 from '../assets/svuda7.jpeg'
import img8 from '../assets/svuda9.jpeg'

const LOCATIONS = [
    { id: 1, image: img1, title: "Beograd, Silosi", desc: "Silosi je nekadašnja industrijska zona na Dorćolu u Beogradu koja je danas jedinstven kulturni i zabavni prostor sa barom, umetničkim programima i pogledom na Dunav." },
    { id: 2, image: img2, title: "Budimpešta,Madjarska", desc: "Budimpešta je glav­ni grad Mađarske i jedna od najvažnijih kulturnih, političkih i turističkih metropola u srednjoj Evropi, poznata po delu grada na obali Dunava, istorijskim termalnim kupatilima i impresivnoj arhitekturi" },
    { id: 3, image: img3, title: "Giza,Egipat", desc: "Piramide u Gizi su tri monumentalne drevne egipatske grobnice sagrađene pre više od 4 000 godina na platou kod Kaira, među kojima je Keopsova piramida — najveća i najpoznatija — i koje su postale simbol stare civilizacije i svetskog kulturnog nasleđa." },
    { id: 4, image: img4, title: "Rim,Italija", desc: "Trevi fontana u Rimu je veličanstvena barokna fontana iz 18. veka, najpoznatija u gradu i poznata po legendi da bacanje novčića u vodu znači da ćeš se vratiti u Rim." },
    { id: 5, image: img5, title: "Amsterdam,Holandija", desc: "Amsterdam je glavni grad Holandije, poznat po svojim slikovitim kanalima i liberalnoj kulturi, a njegov Red Light District (De Wallen) je istorijska centralna četvrt poznata po mreži uskih ulica sa crvenim svetlima u izlozima gde je legalizovana prostitucija i koja je i danas jedna od najpoznatijih turističkih atrakcija u gradu." },
    { id: 6, image: img6, title: "Minhen,Nemačka", desc: "Evropsko prvenstvo u fudbalu 2024. u Nemačkoj bilo je 17. izdanje UEFA Evropskog prvenstva, održano od 14. juna do 14. jula sa 24 reprezentacije i utakmicama na deset različitih stadiona u velikim nemačkim gradovima kao što su Berlin, Minhen, Dortmund i Frankfurt, čime je Nemačka po prvi put bila domaćin takvog turnira nakon ponovnog ujedinjenja." },
    { id: 7, image: img7, title: "Fruška Gora", desc: "Fruška gora je prelepa planina i nacionalni park u Srbiji poznat po gustim šumama, vinogradima, brojnim pravoslavnim manastirima i mnogim stazama za šetnju i rekreaciju" },
    { id: 8, image: img8, title: "Barselona,Španija", desc: "Barselona je poznata po spektakularnoj bazilici Sagrada Família, remek-delu arhitekte Antonija Gaudija koje se gradi još od 1882. godine i koje će — kada bude završena — biti jedno od najviših verskih zdanja na svetu, a svojim zamršenim oblicima inspirisanim prirodom privlači milione posetilaca svake godine." },
];

function LipaSvuda() {
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
                            <FaPlane className="animate-pulse" /> Putujemo svetom
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-medium text-emerald-950 mb-6">
                            Lipa Svuda
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Gde god da krenu, naši gosti nose delić Lipe sa sobom.
                            Kliknite na sliku da pročitate priču sa putovanja.
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
                            <div className="aspect-[4/5] overflow-hidden rounded-xl relative">
                                <img
                                    src={loc.image}
                                    alt={loc.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white/90 text-emerald-900 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                                        Pročitaj priču
                                    </span>
                                </div>
                            </div>
                            <div className="pt-4 px-2">
                                <h3 className="font-bold text-emerald-950 text-lg flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-amber-500" /> {loc.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- OPTIMIZOVAN MODAL --- */}
            <AnimatePresence>
                {selectedLocation && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                            onClick={() => setSelectedLocation(null)}
                        ></motion.div>

                        {/* Sadržaj Modala */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row h-[85vh] md:h-auto md:max-h-[90vh]"
                        >
                            {/* Dugme za zatvaranje */}
                            <button
                                className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/20"
                                onClick={() => setSelectedLocation(null)}
                            >
                                <FaTimes size={20} />
                            </button>

                            {/* 1. DEO ZA SLIKU 
                            - Mobile: h-[40%] (fiksna visina, gornji deo)
                            - Desktop: md:h-full (leva polovina)
                        */}
                            <div className="w-full h-[60%] md:h-auto md:w-1/2 relative bg-black shrink-0 flex items-center justify-center">
                                <img
                                    src={selectedLocation.image}
                                    alt={selectedLocation.title}
                                    className="w-full h-full object-contain md:object-cover"
                                />
                            </div>

                            
                            <div className="w-full h-[40%] md:h-auto md:w-1/2 bg-white flex flex-col overflow-y-auto">

                                <div className="p-6 md:p-12 flex flex-col h-full">

                                    {/* Naslov */}
                                    <div className="mb-6 shrink-0">
                                        <span className="text-amber-600 font-bold uppercase tracking-wider text-xs mb-2 block">
                                            Lokacija
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 flex items-center gap-2 leading-tight">
                                            <FaMapMarkerAlt className="text-emerald-600 shrink-0" />
                                            {selectedLocation.title}
                                        </h2>
                                    </div>

                                    {/* Tekst (Opis) */}
                                    <div className="relative mb-6 grow">
                                        <FaQuoteRight className="text-5xl text-emerald-50 absolute -top-4 -left-2 z-0" />
                                        <p className="text-gray-700 leading-relaxed text-lg relative z-10 font-light">
                                            {selectedLocation.desc}
                                        </p>
                                    </div>

                                    {/* Footer (Plane Icon) */}
                                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3 shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                            <FaPlane />
                                        </div>
                                        <p className="text-sm text-gray-500 italic">
                                            Zabeleženo na putovanju Lipadžija.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LipaSvuda