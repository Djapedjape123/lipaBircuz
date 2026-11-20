import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaCalendarCheck, FaInstagram, FaPhoneAlt, FaClock } from 'react-icons/fa'

// Uvozimo našu SEO komponentu
import SEO from '../components/SEO'

import bgImage from '../assets/lipa33.webp'

const PHONE = '+381654613359'

// Dodaj događaj ovde. Datum: GGGG-MM-DD, vreme: HH:MM.
// Dan u nedelji i prikaz datuma računaju se sami, a prošli događaji se sami sakrivaju.
// U opisu "\n" pravi novi red.
const EVENTS = [
  {
    id: 1,
    date: '2026-11-23',
    time: '10:00',
    title: 'Liljin dan',
    desc:
      'Ponedeljak ujutru, ali bez ponedeljak-raspoloženja! 🎸\n' +
      'Slavimo Liljin dan uz jutarnju rock žurku. Prvo kafa, onda rakija, a gitare od ranog jutra.\n' +
      'Dođi sa ekipom, uhvati dobar sto i ostani dok traje svirka. Rezerviši na vreme, jer ovakva jutra brzo napune Lipu.',
    image: 'https://res.cloudinary.com/duomot4hp/image/upload/v1795169561/LILJA_mb1qd9.jpg',
  },
  
]

// Cloudinary sam bira format (webp/avif) i kvalitet; 1200px da bude oštro i na retina ekranima
const optimizeImage = (url) =>
  url?.includes('res.cloudinary.com')
    ? url.replace('/upload/', '/upload/f_auto,q_auto,w_1200/')
    : url

function NajavePage() {
  const { t, i18n } = useTranslation()
  const locale = i18n.language?.startsWith('en') ? 'en-GB' : 'sr-Latn-RS'

  // Samo današnji i budući događaji, sortirani po datumu
  const now = new Date()
  const events = EVENTS
    .filter((e) => new Date(`${e.date}T23:59:59`) >= now)
    .sort((a, b) => a.date.localeCompare(b.date))

  // Jedan događaj = horizontalna kartica na desktopu, više događaja = mreža
  const isSingle = events.length === 1

  const formatDate = (dateStr) => {
    const d = new Date(`${dateStr}T12:00:00`)
    return {
      weekday: d.toLocaleDateString(locale, { weekday: 'long' }),
      day: d.getDate(),
      month: d.toLocaleDateString(locale, { month: 'short' }),
    }
  }

  // Strukturirani podaci da Google prepozna događaje
  const jsonLd = events.map((e) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: e.title,
    description: e.desc,
    startDate: `${e.date}T${e.time}`,
    image: e.image ? [e.image] : undefined,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Bircuz Lipa 1880',
      address: {
        '@type': 'PostalAddress',
        // streetAddress: 'Upiši tačnu adresu',
        addressLocality: 'Novi Sad',
        addressCountry: 'RS',
      },
    },
  }))

  return (
    <>
      {/* --- SEO SEKCIJA ZA NAJAVE --- */}
      <SEO
        title="Najave i Događaji | Bircuz Lipa 1880 Novi Sad"
        description="Pratite žive svirke, pozorište u kući i prenose utakmica u Bircuzu Lipa. Rezervišite sto na vreme i uživajte u najboljoj atmosferi u Novom Sadu!"
      />

      {events.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-32 px-6">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
          {/* Crni overlay (zatamnjenje) da bi se tekst video */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="max-w-5xl w-full mx-auto relative z-10">
          {/* --- NASLOV (STAKLENI EFEKAT) --- */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl inline-block w-full"
          >
            <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
              {t('events_page.badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white mb-2">
              {t('events_page.title')}
            </h1>
            <p className="text-gray-300 font-light text-lg mt-4 max-w-2xl mx-auto">
              {t('events_page.desc')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mt-6"></div>
          </motion.div>

          {/* --- PRIKAZ: AKO NEMA DOGAĐAJA --- */}
          {events.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 text-center shadow-2xl border border-white/20 relative overflow-hidden"
            >
              {/* Dekorativni sjaj */}
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Animirana ikonica */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-full flex items-center justify-center text-white mb-6 shadow-lg border border-white/20"
                >
                  <FaCalendarCheck size={36} />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                  {t('events_page.empty_title')}
                </h2>

                <p className="text-gray-300 text-lg max-w-lg mx-auto mb-10 leading-relaxed font-light">
                  {t('events_page.empty_desc')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <a
                    href="https://www.instagram.com/bircuzlipa/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all border border-white/10"
                  >
                    <FaInstagram size={20} /> {t('events_page.follow_btn')}
                  </a>

                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/30 hover:bg-emerald-500 hover:scale-105 transition-all border border-white/10"
                  >
                    <FaPhoneAlt size={18} /> {t('events_page.reserve_btn')}
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* --- PRIKAZ: KADA IMA DOGAĐAJA --- */}
          {events.length > 0 && (
            <div
              className={
                isSingle
                  ? 'max-w-4xl mx-auto'
                  : 'grid grid-cols-1 md:grid-cols-2 gap-8 items-start'
              }
            >
              {events.map((event) => {
                const { weekday, day, month } = formatDate(event.date)

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/20 group hover:bg-white/15 transition-all ${
                      isSingle ? 'md:flex' : ''
                    }`}
                  >
                    {/* Slika događaja - uvek cela, nikad odsečena */}
                    <div
                      className={`relative bg-black overflow-hidden flex items-center justify-center ${
                        isSingle ? 'md:w-2/5 md:shrink-0' : ''
                      }`}
                    >
                      {event.image ? (
                        <>
                          {/* Zamućena ista slika u pozadini, umesto crnih traka */}
                          <img
                            src={optimizeImage(event.image)}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50"
                          />
                          <img
                            src={optimizeImage(event.image)}
                            alt={event.title}
                            loading="lazy"
                            className="relative w-full h-auto md:max-h-[460px] object-contain block"
                          />
                        </>
                      ) : (
                        <div className="w-full h-56 md:h-full md:min-h-[300px] bg-gradient-to-br from-gray-800 to-black"></div>
                      )}

                      {/* Datum bedž */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-center shadow-lg min-w-[72px]">
                        <span className="block text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                          {weekday}
                        </span>
                        <span className="block text-3xl font-black text-gray-900 leading-none my-1">
                          {day}
                        </span>
                        <span className="block text-xs font-bold text-gray-600 uppercase">
                          {month}
                        </span>
                      </div>
                    </div>

                    {/* Tekst događaja */}
                    <div className={`p-8 ${isSingle ? 'md:p-10 md:flex md:flex-col md:justify-center md:flex-1' : ''}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h2>

                      {event.time && (
                        <p className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-4">
                          <FaClock size={14} /> {event.time}h
                        </p>
                      )}

                      <p className="text-gray-300 text-base mb-8 leading-relaxed whitespace-pre-line">
                        {event.desc}
                      </p>

                      <a
                        href={`tel:${PHONE}`}
                        className="inline-flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/50"
                      >
                        {t('events_page.book_spot_btn')}
                      </a>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NajavePage