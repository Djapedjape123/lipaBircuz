import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaChevronDown, FaWineGlassAlt } from 'react-icons/fa'
import { BiDrink } from "react-icons/bi";

// Uvozimo našeg SEO agenta
import SEO from '../components/SEO'

const CATEGORIES = [
    "draft_beer", "wines", "bottled_beer",
    "house_special", "brandy","liqueurs", "hard_liquor",
    "water", "soft_drinks", "hot_drinks",  "snacks"
];

const MENU_ITEMS = [
    // ... tvoji podaci ostaju isti ...
    { category: "draft_beer", name: "Nektar 0.30", price: "200" },
    { category: "draft_beer", name: "Nektar 0.50", price: "270" },
    { category: "draft_beer", name: "Nektar 1L", price: "480" },
    { category: "wines", name: "Smederevka Tikveš 1L", price: "1400" },
    { category: "wines", name: "Vojnović graševina 1L", price: "1400" },
    { category: "wines", name: "Vojnović Šardone 1L ", price: "1400" },
    { category: "wines", name: "Vojnović Roze 1L", price: "1400" },
    { category: "wines", name: "Vojnović Cuvee 1L", price: "1400" },
    { category: "wines", name: "Tikveš Roze 1l", price: "1400" },
    { category: "wines", name: "Rubin roze 1L", price: "1400" },
    { category: "wines", name: "Rubin Tamjanika 0.7L", price: "1500" },
    { category: "wines", name: "Čaša vina 0.20", price: "280" },
    { category: "wines", name: "Špricer 0.20", price: "200" },
    { category: "wines", name: "Veliki špricer 0.40", price: "300" },
    { category: "wines", name: "Aspall 0.33", price: "370" },
    { category: "snacks", name: "menu.items.peanuts", isTranslatable: true, price: "350" },
    { category: "snacks", name: "menu.items.homemade_chips", isTranslatable: true, price: "250" },
    { category: "bottled_beer", name: "Zaječarsko 0.50", price: "220" },
    { category: "bottled_beer", name: "Laško 0.50", price: "270" },
    { category: "bottled_beer", name: "Lav 0.50", price: "220" },
    { category: "bottled_beer", name: "Lav Premium 0.50", price: "220" },
    { category: "bottled_beer", name: "Jelen 0.50", price: "220" },
    { category: "bottled_beer", name: "Jelen 0.33", price: "270" },
    { category: "bottled_beer", name: "Nikšićko svetlo 0.50", price: "220" },
    { category: "bottled_beer", name: "Tuborg 0.50", price: "270" },
    { category: "bottled_beer", name: "Carlsberg 0.40", price: "290" },
    { category: "bottled_beer", name: "Valjevsko 0.50", price: "220" },
    { category: "bottled_beer", name: "Jagodinsko 0.50", price: "220" },
    { category: "bottled_beer", name: "Nektar 0.50", price: "220" },
    { category: "bottled_beer", name: "Banjalučko 0.50", price: "220" },
    { category: "bottled_beer", name: "Amstel", price: "270" },
    { category: "bottled_beer", name: "Heineken 0.40", price: "290" },
    { category: "bottled_beer", name: "Birra Morretti 0.40", price: "290" },
    { category: "bottled_beer", name: "Blanc 0.33", price: "290" },
    { category: "bottled_beer", name: "Tuborg 0%alc 0.33", price: "290" },
    { category: "house_special", name: "Hercegovački Krš 0.05", price: "250" },
    { category: "house_special", name: "Green Gin 0.30", price: "400" },
    { category: "house_special", name: "Green Gin 1L", price: "1600" },
    { category: "brandy", name: "Loza Rubin 0.05", price: "190" },
    { category: "brandy", name: "Loza 13. Jul 0.05", price: "270" },
    { category: "brandy", name: "Viljamovka Takovo 0.05", price: "370" },
    { category: "brandy", name: "Šurlan jabuka 0.05", price: "190" },
    { category: "brandy", name: "Šurlan kruska 0.05", price: "270" },
    { category: "brandy", name: "Pevac dunja 0.05", price: "270" },
    { category: "brandy", name: "Pevac kajsija 0.05", price: "270" },
    { category: "brandy", name: "Pevac šljiva 0.05", price: "190" },
    { category: "brandy", name: "Pevac medovača 0.05", price: "270" },
    { category: "brandy", name: "Stomakljija 0.05", price: "190" },
    { category: "brandy", name: "Vesić malina 0.05", price: "250" },
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
    { category: "water", name: "Knjaz Miloš 1L", price: "300" },
    { category: "water", name: "Knjaz Miloš 0.20", price: "60" },
    { category: "water", name: "Rosa gazirana 0.33", price: "150" },
    { category: "water", name: "Rosa gazirana 0.75", price: "300" },
    { category: "water", name: "Rosa negazirana 0.33", price: "150" },
    { category: "water", name: "Rosa negazirana 0.75", price: "300" },
    { category: "water", name: "Ledeni vuk/kocke 4kg", price: "400" },
    { category: "soft_drinks", name: "Coca Cola 0.25", price: "250" },
    { category: "soft_drinks", name: "Coca Cola Zero 0.25", price: "250" },
    { category: "soft_drinks", name: "Schweppes Tonic 0.25", price: "250" },
    { category: "soft_drinks", name: "Schweppes Purple 0.25", price: "250" },
    { category: "soft_drinks", name: "Limunada 0.20", price: "200" },
    { category: "soft_drinks", name: "Bitter Lemon 0.25", price: "250" },
    { category: "soft_drinks", name: "Fanta 0.25", price: "250" },
    { category: "soft_drinks", name: "Sprite 0.25", price: "250" },
    { category: "soft_drinks", name: "Next sok 0.20", price: "250" },
    { category: "soft_drinks", name: "Ultra energy 0.25", price: "250" },
    { category: "soft_drinks", name: "Cedevita 0.20", price: "160" },
    { category: "soft_drinks", name: "Fuze tea 0.25", price: "250" },
    { category: "soft_drinks", name: "Alpina 0.30", price: "250" },
    { category: "hot_drinks", name: "menu.items.domestic_coffee", isTranslatable: true, price: "120" },
    { category: "hot_drinks", name: "Espresso", price: "200" },
    { category: "hot_drinks", name: "Nes", price: "200" },
    { category: "hot_drinks", name: "Čaj", isTranslatable: true, price: "140" },
    { category: "hot_drinks", name: "Med", isTranslatable: true, price: "50" },
    { category: "hot_drinks", name: "Mleko za kafu", isTranslatable: true, price: "20" },
    { category: "liqueurs", name: "Gorki List 0.05", price: "270" },
    { category: "liqueurs", name: "Jagermeister 0.05", price: "370" },
    { category: "liqueurs", name: "Gorka tajna 0.05", price: "170" },
     { category: "liqueurs", name: "Zlatni pelin 0.05", price: "220" },
    { category: "liqueurs", name: "Pelinkovac Rubin 0.05", price: "190" },
];

function Cene() {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

    const filteredItems = useMemo(() => 
        MENU_ITEMS.filter(item => item.category === selectedCategory), 
    [selectedCategory]);

    // --- GENERISANJE JSON-LD ZA GOOGLE (Sve kategorije odjednom) ---
    const menuSchema = useMemo(() => {
        return {
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": "Karta pića Bircuz Lipa 1880",
            "mainEntityOfPage": "https://bircuzlipa1880.rs/cene",
            "hasMenuSection": CATEGORIES.map(cat => ({
                "@type": "MenuSection",
                "name": t(`menu.categories.${cat}`),
                "hasMenuItem": MENU_ITEMS.filter(i => i.category === cat).map(item => ({
                    "@type": "MenuItem",
                    "name": item.isTranslatable ? t(item.name) : item.name,
                    "offers": {
                        "@type": "Offer",
                        "price": item.price,
                        "priceCurrency": "RSD"
                    }
                }))
            }))
        };
    }, [t]);

    return (
        <main>
            {/* --- SEO SEKCIJA ZA KARTU PIĆA --- */}
            <SEO 
                title="Karta Pića i Cene | Bircuz Lipa 1880 Novi Sad"
                description="Pogledajte našu kartu pića i cene. Veliki izbor piva, vina, premium rakija i bezalkoholnih napitaka u centru Novog Sada. Živeli!"
            />

            {/* Ubacivanje JSON-LD skripte za Google u glavu dokumenta */}
            <script type="application/ld+json">
                {JSON.stringify(menuSchema)}
            </script>

            <div className="min-h-screen bg-[#e5e7eb] pt-36 pb-20 px-4 md:px-10 relative">

                <div className="max-w-5xl mx-auto relative z-10">

                    {/* --- HEADER SEKCIJA --- */}
                    <header className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">

                        {/* Naslov */}
                        <div className="text-center md:text-left w-full md:w-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                                <BiDrink className="text-lg" aria-hidden="true" /> {t('menu.title')}
                            </div>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-950 mb-3 tracking-tight">
                                {t('menu.title')}
                            </h1>
                            <p className="text-gray-500 text-lg font-medium">
                                {t('menu.subtitle')}
                            </p>
                        </div>

                        {/* --- SELECT MENI --- */}
                        <nav className="w-full md:w-auto relative group" aria-label="Kategorije pića">
                            <label htmlFor="category-select" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                {t('menu.select_label')}
                            </label>
                            <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-emerald-900/10 transition-transform transform group-hover:-translate-y-1">
                                <select
                                    id="category-select"
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
                                <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-emerald-600 flex items-center justify-center text-white">
                                    <FaChevronDown aria-hidden="true" />
                                </div>
                            </div>
                        </nav>
                    </header>

                    {/* --- LISTA PIĆA --- */}
                    <article className="bg-white rounded-[2rem] shadow-2xl border border-emerald-900/5 p-8 md:p-12 min-h-100% relative overflow-hidden">
                        
                        {/* Vizuelni naslov kategorije za SEO botove unutar stranice */}
                        <h2 className="sr-only">{t(`menu.categories.${selectedCategory}`)}</h2>

                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>

                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6"
                        >
                            <AnimatePresence mode='popLayout'>
                                {filteredItems.map((item, index) => (
                                    <motion.div
                                        key={`${selectedCategory}-${index}`}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2, delay: index * 0.01 }}
                                        className="flex items-end justify-between py-2 group cursor-default"
                                    >
                                        <div className="w-full flex items-end justify-between py-2 group">
                                            <div className="flex-1 flex items-end mr-4 min-w-0">
                                                <span className="text-lg font-bold text-gray-800 group-hover:text-emerald-700 transition-colors leading-tight">
                                                    {item.isTranslatable ? t(item.name) : item.name}
                                                </span>
                                                <span className="flex-grow border-b-2 border-dotted border-gray-300 mx-2 mb-1 group-hover:border-emerald-300 transition-colors hidden sm:block"></span>
                                            </div>

                                            <div className="flex-shrink-0 mb-0.5">
                                                <span className="text-xl font-extrabold text-emerald-700 whitespace-nowrap">
                                                    {item.price} <span className="text-xs font-bold text-gray-400 uppercase ml-1">{t('menu.currency')}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Prazno stanje */}
                        {filteredItems.length === 0 && (
                            <div className="text-center py-32 text-gray-400 flex flex-col items-center justify-center opacity-60">
                                <FaWineGlassAlt className="text-6xl mb-4 text-gray-300" aria-hidden="true" />
                                <p className="text-xl font-medium">{t('menu.empty_state')}</p>
                            </div>
                        )}
                    </article>

                    {/* Footer napomena */}
                    <footer className="text-center mt-12 text-sm text-gray-400 font-medium">
                        {t('menu.footer_note')}
                    </footer>

                </div>
            </div>
        </main>
    )
}

export default Cene