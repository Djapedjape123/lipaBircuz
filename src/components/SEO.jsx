import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Dodali smo i18n

const SITE_URL = "https://www.bircuzlipa1880.com";

export default function SEO({
  title,
  description,
  type = "website",
  image = "https://res.cloudinary.com/duomot4hp/image/upload/q_auto/f_auto/v1777931592/lipalogo_ha5sow.jpg",
  noindex = false // Stranice koje ne treba indeksirati (npr. "Uskoro" prodavnica, 404)
}) {
  // Izvlačimo trenutni jezik iz i18next (biće 'sr' ili 'en')
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'sr';

  // Canonical se računa iz trenutne rute (bez trailing slash-a i bez query string-a)
  const { pathname } = useLocation();
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const canonicalUrl = SITE_URL + path;

  return (
    <Helmet>
      {/* 1. Dinamički menja jezik celog HTML dokumenta */}
      <html lang={currentLang} />

      {/* 2. OSNOVNI TAGOVI */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      {!noindex && <link rel="canonical" href={canonicalUrl} />}

      {/* 3. OPEN GRAPH (Viber, Facebook, itd.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {!noindex && <meta property="og:url" content={canonicalUrl} />}
      {/* Govori mrežama na kom je jeziku ovaj link */}
      <meta property="og:locale" content={currentLang === 'sr' ? 'sr_RS' : 'en_US'} />
      <meta property="og:site_name" content="Bircuz Lipa 1880" />

      {/* 4. TWITTER / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
