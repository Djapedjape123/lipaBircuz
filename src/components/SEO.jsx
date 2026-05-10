import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next'; // Dodali smo i18n

export default function SEO({ 
  title, 
  description, 
  type = "website",
  image = "https://res.cloudinary.com/duomot4hp/image/upload/q_auto/f_auto/v1777931592/lipalogo_ha5sow.jpg",
  url = "https://bircuzlipa1880.rs" // Tvoj budući domen
}) {
  // Izvlačimo trenutni jezik iz i18next (biće 'sr' ili 'en')
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'sr'; 

  const canonicalUrl = url;

  return (
    <Helmet>
      {/* 1. Dinamički menja jezik celog HTML dokumenta */}
      <html lang={currentLang} />

      {/* 2. OSNOVNI TAGOVI */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* --- 3. HREFLANG TAGOVI (Za dvojezičnost) --- */}
      {/* Kažemo Google-u: Ovo je srpska verzija */}
      <link rel="alternate" hreflang="sr" href={canonicalUrl} />
      {/* Kažemo Google-u: Ovo je engleska verzija */}
      <link rel="alternate" hreflang="en" href={`${canonicalUrl}?lang=en`} />
      {/* Default verzija ako posetilac koristi neki treći jezik (npr. nemački) */}
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      {/* 4. OPEN GRAPH (Viber, Facebook, itd.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      {/* Govori mrežama na kom je jeziku ovaj link */}
      <meta property="og:locale" content={currentLang === 'sr' ? 'sr_RS' : 'en_US'} />
      <meta property="og:site_name" content="Bircuz Lipa 1880" />

      {/* 5. TWITTER / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}