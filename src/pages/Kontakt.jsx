import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBriefcase, FaHandshake, FaPaperclip, FaCheck } from 'react-icons/fa'

// Uvozimo našu SEO komponentu
import SEO from '../components/SEO'

function Kontakt() {
    const [activeTab, setActiveTab] = useState('saradnja');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [fileName, setFileName] = useState('');

    // --- NOVA LOGIKA PREKO WEB3FORMS ---
    const handleSubmit = async (e, tipForme) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');

        const formData = new FormData(e.target);
        
        // OBAVEZNO: Ovde zalepi ključ koji ti je stigao na mejl!
        formData.append("access_key", "6cc4e580-e618-4f3c-a660-32a7936126f2"); 
        
        // Predmet mejla
        formData.append("subject", tipForme === 'saradnja' ? 'Novi upit za saradnju!' : 'Nova prijava za posao!');

        try {
            // Web3Forms API
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatusMessage('uspeh');
                e.target.reset(); // Čistimo formu
                setFileName('');
            } else {
                console.log("Web3Forms greška:", data);
                setStatusMessage('greska');
            }
        } catch (error) {
            console.error("Mrežna greška:", error);
            setStatusMessage('greska');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatusMessage(''), 5000);
        }
    };

    return (
        <>
            <SEO 
                title="Kontakt i Zaposlenje | Bircuz Lipa 1880 Novi Sad"
                description="Otvoreni smo za saradnju i uvek tražimo pojačanje! Kontaktirajte kafanu Lipa u Novom Sadu. Adresa: Svetozara Miletića 9."
            />

            <div className="min-h-screen bg-emerald-950 pt-32 pb-24 px-6 relative overflow-hidden flex items-center justify-center">

                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-amber-500/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-emerald-500/20 rounded-full blur-[150px] pointer-events-none z-0"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">

                    <div className="text-center mb-16">
                        <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 flex items-center justify-center gap-2">
                            Otvoreni za sve
                        </span>
                        <h1 className="text-4xl md:text-7xl font-serif p-2 font-bold text-white mb-6 drop-shadow-sm">
                            Kontaktirajte Nas
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                        
                        {/* ... LEVA STRANA OSTAJE ISTA ... */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl"
                        >
                            <h3 className="text-2xl font-serif font-bold text-amber-400 mb-8">Informacije</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 text-xl">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Lokacija</p>
                                        <p className="text-white text-lg font-medium">Svetozara Miletiće 9</p>
                                        <p className="text-gray-500">21000 Novi Sad, Srbija</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 text-xl">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Telefon</p>
                                        <a href="tel:0642110102" className="text-white text-lg font-medium hover:text-amber-400 transition-colors">
                                            +381 64 2110102
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 text-xl">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Email</p>
                                        <a href="mailto:lipadzije@gmail.com" className="text-white text-lg font-medium hover:text-amber-400 transition-colors">
                                            lipadzije@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* --- DESNA STRANA: FORME --- */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 mb-10 bg-emerald-950/50 p-2 rounded-2xl">
                                <button 
                                    onClick={() => {setActiveTab('saradnja'); setStatusMessage('');}}
                                    className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold transition-all duration-300 ${activeTab === 'saradnja' ? 'bg-amber-500 text-emerald-950 shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    <FaHandshake className="text-xl" /> Želim Saradnju
                                </button>
                                <button 
                                    onClick={() => {setActiveTab('posao'); setStatusMessage('');}}
                                    className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold transition-all duration-300 ${activeTab === 'posao' ? 'bg-amber-500 text-emerald-950 shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    <FaBriefcase className="text-xl" /> Tražim Posao
                                </button>
                            </div>

                            {statusMessage === 'uspeh' && (
                                <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 rounded-xl flex items-center gap-3">
                                    <FaCheck /> Uspešno poslato! Javićemo se u najkraćem roku.
                                </div>
                            )}
                            {statusMessage === 'greska' && (
                                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 text-red-400 rounded-xl">
                                    Došlo je do greške pri slanju. Molimo pokušajte ponovo kasnije.
                                </div>
                            )}

                            <div className="relative min-h-[350px]">
                                <AnimatePresence mode="wait">
                                    
                                    {/* FORMA 1: SARADNJA */}
                                    {activeTab === 'saradnja' && (
                                        <motion.form 
                                            key="form-saradnja"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            onSubmit={(e) => handleSubmit(e, 'saradnja')}
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-emerald-50 text-sm font-medium ml-1">Ime Firme / Osobe</label>
                                                    <input type="text" name="Ime" required className="w-full bg-emerald-900/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="Unesite naziv firme" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-emerald-50 text-sm font-medium ml-1">Email Adresa</label>
                                                    <input type="email" name="Email" required className="w-full bg-emerald-900/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="vas@email.com" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-emerald-50 text-sm font-medium ml-1">Vaš predlog / Poruka</label>
                                                <textarea name="Poruka" required rows="4" className="w-full bg-emerald-900/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none" placeholder="Napišite nam vaš predlog..."></textarea>
                                            </div>
                                            <button disabled={isSubmitting} type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                                {isSubmitting ? 'Šaljem...' : 'Pošalji Upit'}
                                            </button>
                                        </motion.form>
                                    )}

                                    {/* FORMA 2: POSAO */}
                                    {activeTab === 'posao' && (
                                        <motion.form 
                                            key="form-posao"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            onSubmit={(e) => handleSubmit(e, 'posao')}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-2">
                                                <label className="text-emerald-50 text-sm font-medium ml-1">Ime i Prezime</label>
                                                <input type="text" name="Ime_i_Prezime" required className="w-full bg-emerald-900/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="Unesite vaše ime i prezime" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-emerald-50 text-sm font-medium ml-1">Motivaciona Poruka</label>
                                                <textarea name="Poruka" required rows="3" className="w-full bg-emerald-900/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none" placeholder="Napišite zašto želite da radite sa nama..."></textarea>
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <label className="text-emerald-50 text-sm font-medium ml-1">Zakačite Vaš CV (Nije obavezno)</label>
                                                <div className="relative">
                                                    <input 
                                                        type="file" 
                                                        name="file" // Web3Forms traži da se ovo zove "file"
                                                        id="cv-upload"
                                                        accept=".pdf,.doc,.docx"
                                                        className="hidden"
                                                        onChange={(e) => setFileName(e.target.files[0]?.name || '')}
                                                    />
                                                    <label htmlFor="cv-upload" className={`w-full flex items-center justify-center gap-3 bg-emerald-900/20 border border-dashed rounded-xl px-5 py-6 cursor-pointer transition-all ${fileName ? 'border-amber-500 text-white' : 'border-white/10 text-gray-400 hover:text-white hover:border-amber-500 hover:bg-white/5'}`}>
                                                        <FaPaperclip className={`text-xl ${fileName ? 'text-amber-500' : ''}`} />
                                                        <span className="truncate max-w-[80%]">
                                                            {fileName ? `Izabran fajl: ${fileName}` : 'Kliknite da izaberete CV fajl'}
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <button disabled={isSubmitting} type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-emerald-950 font-bold py-4 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                                {isSubmitting ? 'Šaljem prijavu...' : 'Pošalji Prijavu'}
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Kontakt