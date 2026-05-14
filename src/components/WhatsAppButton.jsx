import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Instaliraj react-icons ako nemaš

const WhatsAppButton = () => {
  // Zameni sa tvojim brojem (mora biti u formatu 381...)
  const phoneNumber = "381612123525"; 
  const message = "Zdravo, pišem vam sa sajta Bircuz Lipa. Zanima me da li imate slobodnih stolova.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Dugme se pojavljuje 3 sekunde nakon što se komponenta mount-uje 
    // (taman kad tvoj loader nestane)
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-500 animate-in fade-in zoom-in-50 hover:scale-110 flex items-center justify-center group"
      aria-label="Kontaktirajte nas na WhatsApp"
    >
      {/* Mali tool tip koji se pojavi na hover */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Da li zelite da rezervišete vaše mesto?
      </span>
      
      <FaWhatsapp size={28} />
      
      {/* Efekt pulsiranja iza dugmeta */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"></span>
    </a>
  );
};

export default WhatsAppButton;