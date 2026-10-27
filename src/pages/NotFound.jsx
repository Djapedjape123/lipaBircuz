import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Uvozimo našu SEO komponentu (noindex: 404 stranica ne sme u pretragu)
import SEO from '../components/SEO'

function NotFound() {
    const { t } = useTranslation()

    return (
        <main>
            <SEO
                title={t('not_found.seo_title')}
                description={t('not_found.seo_description')}
                noindex
            />

            {/* pt-32 je tu zbog fiksnog navbara! */}
            <div className="min-h-[100dvh] bg-emerald-950 pt-32 pb-24 px-6 flex items-center justify-center text-center">
                <div className="max-w-2xl mx-auto">
                    <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                        {t('not_found.badge')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                        {t('not_found.title')}
                    </h1>
                    <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
                        {t('not_found.desc')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold transition shadow-lg text-sm uppercase tracking-wider"
                        >
                            {t('not_found.home')}
                        </Link>
                        <Link
                            to="/cene"
                            className="px-8 py-3 border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-emerald-950 rounded-full font-bold transition text-sm uppercase tracking-wider"
                        >
                            {t('not_found.menu')}
                        </Link>
                        <Link
                            to="/kontakt"
                            className="px-8 py-3 border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-emerald-950 rounded-full font-bold transition text-sm uppercase tracking-wider"
                        >
                            {t('not_found.contact')}
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NotFound
