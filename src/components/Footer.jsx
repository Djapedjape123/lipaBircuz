import React from 'react'
import { Link } from 'react-router-dom' // Pretpostavljam da koristiš React Router
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaFacebookF, FaEnvelope,FaTripadvisor } from 'react-icons/fa'

// UVOZI SVOJ LOGO OVDE
import logo from '../assets/lipalogo.png' // <-- ZAMENI OVO PRAVIM IMENOM TVOG LOGOA AKO SE RAZLIKUJE

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
        
        {/* --- Pozadinski sjaj (Subtle Glow) --- */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-full mx-auto px-6 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">
                
                {/* 1. KOLONA: LOGO I O NAMA */}
                <div className="flex flex-col items-start">
                    
                    {/* --- IZMENJENO: LOGO I TEKST LIPA --- */}
                    <Link to="/" className="flex items-center gap-3 mb-6 group">
                        {/* Slika Logoa */}
                        <img 
                            src={logo} 
                            alt="Lipa Logo" 
                            className="w-20 h-20 rounded-full object-contain group-hover:scale-105 transition-transform"
                             
                        />
                        {/* Tekst LIPA. */}
                        <span className="text-3xl font-serif font-bold text-white tracking-widest group-hover:text-amber-500 transition-colors">
                           Bircuz Lipa<span className="text-amber-500 font-bold">.</span>
                        </span>
                    </Link>

                    <p className="text-gray-400 leading-relaxed mb-6 font-light">
                        Mesto gde se tradicija Novog Sada susreće sa modernim duhom. 
                        Vrhunska pića i uspomene koje traju.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/bircuzlipa/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-all duration-300">
                            <FaInstagram  size={23} color='purple'/>
                        </a>
                        <a href="https://www.facebook.com/BircuzLipa" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-all duration-300">
                            <FaFacebookF size={23} color='blue'/>
                        </a>
                        <a href="https://www.tripadvisor.com/Attraction_Review-g295380-d33861629-Reviews-Bircuz_Lipa-Novi_Sad_Vojvodina.html" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-all duration-300">
                            <FaTripadvisor size={23} color='green'/>
                        </a>
                    </div>
                </div>

                {/* 2. KOLONA: NAVIGACIJA */}
                <div className="md:pl-10">
                    <h3 className="text-lg font-serif font-bold text-amber-500 mb-6 uppercase tracking-wider">
                        Istraži
                    </h3>
                    <ul className="space-y-4">
                        <li>
                            <Link to="/" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Početna
                            </Link>
                        </li>
                        <li>
                            <Link to="/o-kafani" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                O Kafani
                            </Link>
                        </li>
                        <li>
                            <Link to="/cene" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Karta Pića
                            </Link>
                        </li>
                        <li>
                            <Link to="/najave" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Događaji
                            </Link>
                        </li>
                        <li>
                            <Link to="/kontakt" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Kontakt
                            </Link>
                        </li>
                         <li>
                            <Link to="/lipa-svuda" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Lipa svuda
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 3. KOLONA: KONTAKT INFO */}
                <div>
                    <h3 className="text-lg font-serif font-bold text-amber-500 mb-6 uppercase tracking-wider">
                        Posetite Nas
                    </h3>
                    <ul className="space-y-6">
                        {/* Adresa */}
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-emerald-500 text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-white font-medium">Miletićeva 18</p>
                                <p className="text-gray-500 text-sm">21000 Novi Sad, Srbija</p>
                            </div>
                        </li>

                        {/* Telefon */}
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-emerald-500 text-xl">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Rezervacije:</p>
                                <a href="tel:0654613359" className="text-white font-medium hover:text-amber-500 transition-colors text-lg">
                                    065 461 3359
                                </a>
                            </div>
                        </li>

                        {/* Radno Vreme (Opciono, ali korisno) */}
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-emerald-500 text-xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <a href="mailto:lipadzije@gmail.com" className="text-white hover:text-amber-500 transition-colors">
                                    lipadzije@gmail.com
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            {/* --- DONJA LINIJA (COPYRIGHT) --- */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                <p>
                    &copy; 2026 Kafana Lipa. Sva prava zadržana.
                </p>
                <div className="flex gap-6">
                    <span className="hover:text-gray-400 cursor-pointer">Privatnost</span>
                    <span className="hover:text-gray-400 cursor-pointer">Uslovi korišćenja</span>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer