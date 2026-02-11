import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom' 
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from 'react-i18next'; 

import logoPlaceholder from '../assets/lipalogo.png' 

function NavBar() {
    const { t, i18n } = useTranslation(); 
    const location = useLocation(); 

    // Proveravamo da li smo na početnoj stranici
    const isHomePage = location.pathname === '/';

    // --- STATE PROMENLJIVE ---
    const [isOpen, setIsOpen] = useState(false)            
    const [lipadzijeOpen, setLipadzijeOpen] = useState(false) 
    const [saradnjeOpen, setSaradnjeOpen] = useState(false)   
    const [isScrolled, setIsScrolled] = useState(false)       

    // --- DETEKCIJA SKROLOVANJA ---
    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const closeAll = () => {
        setIsOpen(false)
        setLipadzijeOpen(false)
        setSaradnjeOpen(false)
        window.scrollTo(0, 0)
    }

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); 
        setIsOpen(false); 
    }

    const navLinkStyle = ({ isActive }) =>
        `text-sm font-bold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 ${
            isActive ? 'text-emerald-400' : 'text-white hover:text-emerald-400'
        }`

    const dropdownLinkStyle = 
        'block px-4 py-3 text-sm text-gray-200 hover:text-emerald-400 hover:bg-emerald-900/50 transition-colors border-l-2 border-transparent hover:border-emerald-500'

    // --- LOGIKA ZA BOJU ---
    // Taman ako je skrolovano ILI ako NIJE početna stranica
    const shouldBeDark = isScrolled || !isHomePage;

    return (
        <>
            {/* 1. HEADER */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                    shouldBeDark 
                    ? 'bg-emerald-950/95 backdrop-blur-md shadow-2xl py-2' 
                    : 'bg-transparent py-6'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* LOGO */}
                    <Link to="/" onClick={closeAll} className="flex items-center gap-3 group z-50">
                        <div className={`relative overflow-hidden rounded-full border-2 border-emerald-500/50 group-hover:border-emerald-400 transition-all duration-500 shadow-lg shadow-black/30 bg-white ${
                            shouldBeDark ? 'w-14 h-14 md:w-16 md:h-16' : 'w-16 h-16 md:w-24 md:h-24'
                        }`}>
                            <img 
                                src={logoPlaceholder} 
                                alt="Lipa Logo" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </Link>

                    {/* DESKTOP MENI */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <NavLink to="/o-kafani" className={navLinkStyle}>{t('nav.about')}</NavLink>

                        {/* Dropdown: Lipadžije */}
                        <div className="relative group py-4 cursor-pointer">
                            <span className="text-white group-hover:text-emerald-400 text-sm font-bold uppercase tracking-wider flex items-center gap-1 transition">
                                {t('nav.lipadzije')} <FaChevronDown className="text-xs transition-transform group-hover:-rotate-180"/>
                            </span>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-emerald-950 border border-emerald-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 overflow-hidden">
                                <Link to="/poznate-lipadzije" className={dropdownLinkStyle}>{t('nav.lipadzije_sub.famous')}</Link>
                                <Link to="/mali-fudbal" className={dropdownLinkStyle}>{t('nav.lipadzije_sub.football')}</Link>
                                <Link to="/lipa-kviz" className={dropdownLinkStyle}>{t('nav.lipadzije_sub.quiz')}</Link>
                                <Link to="/lipa-svuda" className={dropdownLinkStyle}>{t('nav.lipadzije_sub.everywhere')}</Link>
                            </div>
                        </div>

                        {/* Dropdown: Saradnje */}
                        {/* <div className="relative group py-4 cursor-pointer">
                            <span className="text-white group-hover:text-emerald-400 text-sm font-bold uppercase tracking-wider flex items-center gap-1 transition">
                                {t('nav.collab')} <FaChevronDown className="text-xs transition-transform group-hover:-rotate-180"/>
                            </span>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-emerald-950 border border-emerald-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 overflow-hidden">
                                <Link to="/vinarija-vojnovic" className={dropdownLinkStyle}>{t('nav.collab_sub.vojnovic')}</Link>
                                <Link to="/rubin-krusevac" className={dropdownLinkStyle}>{t('nav.collab_sub.rubin')}</Link>
                                <Link to="/nektar" className={dropdownLinkStyle}>{t('nav.collab_sub.nektar')}</Link>
                            </div>
                        </div> */}
                        <NavLink to="/saradnje" className={navLinkStyle}>{t('nav.collab')}</NavLink>

                        <NavLink to="/cene" className={navLinkStyle}>{t('nav.prices')}</NavLink>
                        <NavLink to="/shop" className={navLinkStyle}>{t('nav.shop')}</NavLink>

                        {/* JEZIK */}
                        <div className="flex items-center gap-2 border-l border-emerald-800 pl-4 ml-2">
                            <button onClick={() => changeLanguage('sr')} className={`text-sm font-bold transition-colors ${i18n.language === 'sr' ? 'text-emerald-400' : 'text-white hover:text-emerald-400'}`}>SRB</button>
                            <span className="text-emerald-700 text-xs">|</span>
                            <button onClick={() => changeLanguage('en')} className={`text-sm font-bold transition-colors ${i18n.language === 'en' ? 'text-emerald-400' : 'text-white hover:text-emerald-400'}`}>ENG</button>
                        </div>

                        <NavLink to="/kontakt" className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold transition shadow-lg hover:shadow-emerald-500/30 text-sm uppercase tracking-wider">
                            {t('nav.contact')}
                        </NavLink>
                    </nav>

                    {/* HAMBURGER DUGME */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-3xl text-white hover:text-emerald-400 transition p-2 z-50"
                    >
                        {isOpen ? <IoMdClose /> : <TiThMenu />}
                    </button>
                </div>
            </header>

            {/* 2. MOBILNI MENI - KOMPLETNO VRAĆEN */}
            <div 
                className={`lg:hidden fixed inset-0 z-40 transition-transform duration-500 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } bg-gradient-to-b from-emerald-950 via-emerald-900 to-black`} 
            >
                <div className="flex flex-col h-full pt-28 px-6 pb-10 overflow-y-auto">
                    
                    <nav className="flex flex-col gap-3">
                        <NavLink to="/o-kafani" onClick={closeAll} className={({isActive}) => `text-xl font-bold py-4 border-b border-white/5 flex items-center justify-between ${isActive ? 'text-emerald-400 pl-4 border-l-4 border-emerald-400 bg-white/5' : 'text-white'}`}>
                            {t('nav.about')}
                        </NavLink>

                        {/* Mobile Dropdown: Lipadžije */}
                        <div className="border-b border-white/5 py-2">
                            <div onClick={() => setLipadzijeOpen(!lipadzijeOpen)} className={`flex justify-between items-center py-3 px-2 cursor-pointer rounded-lg transition-colors ${lipadzijeOpen ? 'bg-white/5 text-emerald-400' : 'text-white'}`}>
                                <span className="text-xl font-bold">{t('nav.lipadzije')}</span>
                                <FaChevronDown className={`transition-transform duration-300 ${lipadzijeOpen ? 'rotate-180 text-emerald-400' : 'text-gray-400'}`}/>
                            </div>
                            <div className={`flex flex-col gap-2 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${lipadzijeOpen ? 'max-h-80 opacity-100 mt-2 pb-2' : 'max-h-0 opacity-0'}`}>
                                <Link to="/poznate-lipadzije" onClick={closeAll} className="py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg pl-4 text-base font-medium">{t('nav.lipadzije_sub.famous')}</Link>
                                <Link to="/mali-fudbal" onClick={closeAll} className="py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg pl-4 text-base font-medium">{t('nav.lipadzije_sub.football')}</Link>
                                <Link to="/lipa-kviz" onClick={closeAll} className="py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg pl-4 text-base font-medium">{t('nav.lipadzije_sub.quiz')}</Link>
                                <Link to="/lipa-svuda" onClick={closeAll} className="py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg pl-4 text-base font-medium">{t('nav.lipadzije_sub.everywhere')}</Link>
                            </div>
                        </div>

                        {/* Mobile Dropdown: Saradnje */}
                        {/* <div className="border-b border-white/5 py-2">
                            <div onClick={() => setSaradnjeOpen(!saradnjeOpen)} className={`flex justify-between items-center py-3 px-2 cursor-pointer rounded-lg transition-colors ${saradnjeOpen ? 'bg-white/5 text-emerald-400' : 'text-white'}`}>
                                <span className="text-xl font-bold">{t('nav.collab')}</span>
                                <FaChevronDown className={`transition-transform duration-300 ${saradnjeOpen ? 'rotate-180 text-emerald-400' : 'text-gray-400'}`}/>
                            </div>
                            <div className={`flex flex-col gap-2 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${saradnjeOpen ? 'max-h-80 opacity-100 mt-2 pb-2' : 'max-h-0 opacity-0'}`}>
                                <Link to="/vinarija-vojnovic" onClick={closeAll} className="py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg pl-4 text-base font-medium">{t('nav.collab_sub.vojnovic')}</Link>
                                <Link to="/rubin-krusevac" onClick={closeAll} className="py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg pl-4 text-base font-medium">{t('nav.collab_sub.rubin')}</Link>
                                <Link to="/nektar" onClick={closeAll} className="py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg pl-4 text-base font-medium">{t('nav.collab_sub.nektar')}</Link>
                            </div>
                        </div> */}
                        <NavLink to="/saradnje" onClick={closeAll} className={({isActive}) => `text-xl font-bold py-4 border-b border-white/5 flex items-center justify-between ${isActive ? 'text-emerald-400 pl-4 border-l-4 border-emerald-400 bg-white/5' : 'text-white'}`}>
                            {t('nav.collab')}
                        </NavLink>

                        <NavLink to="/cene" onClick={closeAll} className={({isActive}) => `text-xl font-bold py-4 border-b border-white/5 flex items-center justify-between ${isActive ? 'text-emerald-400 pl-4 border-l-4 border-emerald-400 bg-white/5' : 'text-white'}`}>
                            {t('nav.prices')}
                        </NavLink>
                        
                        <NavLink to="/shop" onClick={closeAll} className={({isActive}) => `text-xl font-bold py-4 border-b border-white/5 flex items-center justify-between ${isActive ? 'text-emerald-400 pl-4 border-l-4 border-emerald-400 bg-white/5' : 'text-white'}`}>
                            {t('nav.shop')}
                        </NavLink>

                        {/* JEZIK (MOBILE) */}
                        <div className="flex justify-center gap-6 py-6 border-t border-white/10 mt-4">
                            <button onClick={() => changeLanguage('sr')} className={`text-lg font-bold px-4 py-2 rounded-lg transition-colors ${i18n.language === 'sr' ? 'bg-emerald-600 text-white' : 'text-white hover:bg-white/5'}`}>SRB</button>
                            <span className="text-emerald-700 text-xl">|</span>
                            <button onClick={() => changeLanguage('en')} className={`text-lg font-bold px-4 py-2 rounded-lg transition-colors ${i18n.language === 'en' ? 'bg-emerald-600 text-white' : 'text-white hover:bg-white/5'}`}>ENG</button>
                        </div>

                        <div className="mt-2">
                            <NavLink to="/kontakt" onClick={closeAll} className="block w-full text-center bg-emerald-600 py-4 rounded-full font-bold uppercase tracking-widest text-white shadow-xl shadow-emerald-900/50 active:scale-95 transition-transform border border-emerald-500/30">
                                {t('nav.contact')}
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar