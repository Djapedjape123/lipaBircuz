import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaChevronDown, FaWineGlassAlt } from 'react-icons/fa'
import { BiDrink } from "react-icons/bi";

import backgroundImage from '../assets/cene.jpeg'
// --- KATEGORIJE (KLJUČEVI ZA PREVOD) ---
const CATEGORIES = [
    "draft_beer", "wines", "snacks", "bottled_beer",
    "house_special", "brandy", "hard_liquor",
    "water", "soft_drinks", "hot_drinks", "liqueurs"
];

// --- PODACI (ISTI KAO PRE) ---
const MENU_ITEMS = [
    // 1. draft_beer
    { category: "draft_beer", name: "Jelen 0.30", price: "250" },
    { category: "draft_beer", name: "Jelen 0.50", price: "300" },
    { category: "draft_beer", name: "Nikšićko tamno 0.50", price: "350" },
    { category: "draft_beer", name: "Nikšićko tamno 0.30", price: "300" },

    // 2. wines
    { category: "wines", name: "Smederevka Tikveš 1L", price: "1400" },
    { category: "wines", name: "Vojnović graševina 1L", price: "1400" },
    { category: "wines", name: "Vojnović Šardone 1L ", price: "1400" },
    { category: "wines", name: "Vojnović Roze 1L", price: "1400" },
    { category: "wines", name: "Vojnović Cuvee 1L", price: "1400" },
    { category: "wines", name: "Tikveš Roze 1l", price: "1400" },
    { category: "wines", name: "Medveđa krv Rubin 1L", price: "1400" },
    { category: "wines", name: "Rubin roze 1L", price: "1400" },
    { category: "wines", name: "Čaša vina 0.20", price: "280" },
    { category: "wines", name: "Špricer 0.20", price: "200" },
    { category: "wines", name: "Veliki špricer 0.40", price: "300" },
    { category: "wines", name: "Aspall 0.33", price: "370" },
    { category: "wines", name: "Somersby 0.33", price: "370" },

    // 3. snacks
    { category: "snacks", name: "menu.items.peanuts", isTranslatable: true, price: "350" },
    { category: "snacks", name: "menu.items.homemade_chips", isTranslatable: true, price: "250" },

    // 4. bottled_beer
    { category: "bottled_beer", name: "Zaječarsko 0.50", price: "220" },
    { category: "bottled_beer", name: "Laško 0.50", price: "270" },
    { category: "bottled_beer", name: "Bavaria 0%alc 0.50", price: "290" },
    { category: "bottled_beer", name: "Lav 0.50", price: "220" },
    { category: "bottled_beer", name: "Lav Premium 0.50", price: "220" },
    { category: "bottled_beer", name: "Jelen 0.50", price: "220" },
    { category: "bottled_beer", name: "Jelen 0.33", price: "270" },
    { category: "bottled_beer", name: "Nikšićko svetlo 0.50", price: "220" },
    { category: "bottled_beer", name: "Staropramen 0.50", price: "270" },
    { category: "bottled_beer", name: "Tuborg 0.50", price: "270" },
    { category: "bottled_beer", name: "Carlsberg 0.40", price: "290" },
    { category: "bottled_beer", name: "Valjevsko 0.50", price: "220" },
    { category: "bottled_beer", name: "Valjevsko nefiltrirano 0.50", price: "270" },
    { category: "bottled_beer", name: "Jagodinsko 0.50", price: "220" },
    { category: "bottled_beer", name: "Nektar 0.50", price: "220" },
    { category: "bottled_beer", name: "Banjalučko 0.50", price: "220" },
    { category: "bottled_beer", name: "Amstel", price: "270" },
    { category: "bottled_beer", name: "Heineken 0.40", price: "290" },
    { category: "bottled_beer", name: "Jelen Fresh 0.50", price: "270" },
    { category: "bottled_beer", name: "Corona 0.33", price: "550" },
    { category: "bottled_beer", name: "Stella Artois 0.33", price: "380" },
    { category: "bottled_beer", name: "Birra Morretti 0.40", price: "290" },
    { category: "bottled_beer", name: "Blanc 0.33", price: "290" },
    { category: "bottled_beer", name: "Tuborg 0%alc 0.33", price: "290" },

    // 5. house_special
    { category: "house_special", name: "Hercegovački Krš 0.05", price: "250" },
    { category: "house_special", name: "Green Gin 0.30", price: "400" },
    { category: "house_special", name: "Green Gin 1L", price: "1600" },

    // 6. brandy
    { category: "brandy", name: "Loza Rubin 0.05", price: "190" },
    { category: "brandy", name: "Loza 13. Jul 0.05", price: "270" },
    { category: "brandy", name: "Viljamovka Takovo 0.05", price: "370" },
    { category: "brandy", name: "Šurlan jabuka 0.05", price: "190" },
    { category: "brandy", name: "Pevac kruska 0.05", price: "270" },
    { category: "brandy", name: "Pevac dunja 0.05", price: "3700" },
    { category: "brandy", name: "Pevac kajsija 0.05", price: "270" },
    { category: "brandy", name: "Pevac šljiva 0.05", price: "170" },
    { category: "brandy", name: "Pevac medovača 0.05", price: "170" },
    { category: "brandy", name: "Stomakljija 0.05", price: "190" },
    { category: "brandy", name: "Vesić malina 0.05", price: "250" },

    // 7. hard_liquor
    { category: "hard_liquor", name: "Jack Daniels 0.05", price: "380" },
    { category: "hard_liquor", name: "Vinjak 0.05", price: "170" },
    { category: "hard_liquor", name: "Rubin džin 0.05", price: "220" },
    { category: "hard_liquor", name: "Antlantic vodka 0.05", price: "220" },
    { category: "hard_liquor", name: "Smirnoff vodka 0.05", price: "370" },
    { category: "hard_liquor", name: "Salitos tequila  0.05", price: "370" },
    { category: "hard_liquor", name: "Johnnie Walker 0.05", price: "380" },
    { category: "hard_liquor", name: "4 Roses 0.05", price: "380" },
    { category: "hard_liquor", name: "Jameson 0.05", price: "380" },
    { category: "hard_liquor", name: "Jim Beam 0.05", price: "380" },
    { category: "hard_liquor", name: "Absinth 0.05", price: "380" },

    // 8. water
    { category: "water", name: "Knjaz Miloš 1L", price: "300" },
    { category: "water", name: "Knjaz Miloš 0.20", price: "60" },
    { category: "water", name: "Rosa gazirana 0.33", price: "150" },
    { category: "water", name: "Rosa gazirana 0.75", price: "300" },
    { category: "water", name: "Rosa negazirana 0.33", price: "150" },
    { category: "water", name: "Rosa negazirana 0.75", price: "300" },
    { category: "water", name: "Ledeni vuk/kocke 4kg", price: "400" },

    // 9. soft_drinks
    { category: "soft_drinks", name: "Coca Cola 0.25", price: "250" },
    { category: "soft_drinks", name: "Schweppes Tonic 0.25", price: "250" },
    { category: "soft_drinks", name: "Limunada 0.20", price: "200" },
    { category: "soft_drinks", name: "Bitter Lemon 0.25", price: "250" },
    { category: "soft_drinks", name: "Fanta 0.25", price: "250" },
    { category: "soft_drinks", name: "Sprite 0.25", price: "250" },
    { category: "soft_drinks", name: "Next sok 0.20", price: "250" },
    { category: "soft_drinks", name: "Ultra energy 0.25", price: "250" },
    { category: "soft_drinks", name: "Cedevita 0.20", price: "160" },
    { category: "soft_drinks", name: "Fuze tea 0.25", price: "250" },
    { category: "soft_drinks", name: "Alpina 0.30", price: "250" },

    // 10. hot_drinks
    { category: "hot_drinks", name: "menu.items.domestic_coffee", isTranslatable: true, price: "120" },
    { category: "hot_drinks", name: "Espresso", price: "200" },
    { category: "hot_drinks", name: "Čaj", isTranslatable: true, price: "140" },
    { category: "hot_drinks", name: "Med", isTranslatable: true, price: "50" },
    { category: "hot_drinks", name: "Mleko za kafu", isTranslatable: true, price: "20" },

    // 11. liqueurs
    { category: "liqueurs", name: "Gorki List 0.05", price: "270" },
    { category: "liqueurs", name: "Jagermeister 0.05", price: "370" },
    { category: "liqueurs", name: "Gorka tajna 0.05", price: "170" },
    { category: "liqueurs", name: "Kruskovac 0.05", price: "370" },
];

function Cene() {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

    const filteredItems = MENU_ITEMS.filter(item => item.category === selectedCategory);

    return (
        // POZADINA: Svetla sa suptilnim paternom i gradijentom
        // ZAMENI PRVI DIV OVIM:
        <div className="min-h-screen bg-[#e5e7eb] pt-36 pb-20 px-4 md:px-10 relative">

            {/* Tekstura buke (noise) za rustični izgled */}
            

            <div className="max-w-5xl mx-auto relative z-10">

                {/* --- HEADER SEKCIJA --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">

                    {/* Naslov */}
                    <div className="text-center md:text-left w-full md:w-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                            <BiDrink className="text-lg" /> {t('menu.title')}
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-950 mb-3 tracking-tight">
                            {t('menu.title')}
                        </h1>
                        <p className="text-gray-500 text-lg font-medium">
                            {t('menu.subtitle')}
                        </p>
                    </div>

                    {/* --- SELECT MENI (MODERAN STIL) --- */}
                    <div className="w-full md:w-auto relative group">
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                            {t('menu.select_label')}
                        </label>
                        <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-emerald-900/10 transition-transform transform group-hover:-translate-y-1">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full md:min-w-[350px] appearance-none bg-white border-0 text-emerald-950 font-bold text-lg py-5 px-8 pr-16 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                            >
                                {CATEGORIES.map((catKey) => (
                                    <option key={catKey} value={catKey}>
                                        {t(`menu.categories.${catKey}`)}
                                    </option>
                                ))}
                            </select>
                            {/* Dekorativna desna strana selecta */}
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-emerald-600 flex items-center justify-center text-white">
                                <FaChevronDown />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- LISTA PIĆA (PAPIR KARTICA EFEKAT) --- */}
                <div className="bg-white rounded-[2rem] shadow-2xl border border-emerald-900/5 p-8 md:p-12 min-h-100% relative overflow-hidden">

                    {/* Dekorativni rub na vrhu kartice */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2, delay: index * 0.03 }}
                                    className="flex items-end justify-between py-2 group cursor-default"
                                >
                                    {/* Naziv pića */}
                                    <div className="w-full flex items-baseline overflow-hidden">
                                        <span className="text-lg font-bold text-gray-800 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                                            {item.isTranslatable ? t(item.name) : item.name}
                                        </span>
                                        {/* Tačkice */}
                                        <span className="flex-grow border-b-2 border-dotted border-gray-300 mx-3 mb-1 group-hover:border-emerald-300 transition-colors"></span>
                                    </div>

                                    {/* Cena */}
                                    <span className="text-xl font-extrabold text-emerald-700 whitespace-nowrap">
                                        {item.price} <span className="text-xs font-bold text-gray-400 uppercase ml-1">{t('menu.currency')}</span>
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Prazno stanje */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-32 text-gray-400 flex flex-col items-center justify-center opacity-60">
                            <FaWineGlassAlt className="text-6xl mb-4 text-gray-300" />
                            <p className="text-xl font-medium">{t('menu.empty_state')}</p>
                        </div>
                    )}
                </div>

                {/* Footer napomena */}
                <div className="text-center mt-12 text-sm text-gray-400 font-medium">
                    {t('menu.footer_note')}
                </div>

            </div>
        </div>
    )
}

export default Cene