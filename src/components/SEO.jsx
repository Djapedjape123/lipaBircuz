import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  type = "website",
  image = "https://res.cloudinary.com/duomot4hp/image/upload/q_auto/f_auto/v1777931592/lipalogo_ha5sow.jpg",
  url = "https://bircuzlipa1880.rs" // Ovde postavi pravi domen kad bude kupljen
}) {
  // Dobra praksa: Ako url ne završava na /, dodaćemo ga (opciono)
  const canonicalUrl = url;

  return (
    <Helmet>
      {/* --- 1. OSNOVNI TAGOVI (Google & Browser) --- */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Canonical tag govori Google-u koja je "glavna" verzija ove stranice */}
      <link rel="canonical" href={canonicalUrl} />

      {/* --- 2. OPEN GRAPH (Viber, WhatsApp, Facebook, LinkedIn) --- */}
      {/* Ovi tagovi kontrolišu kako link izgleda kad ga neko pošalje u poruci */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Bircuz Lipa 1880" />

      {/* --- 3. TWITTER / X KARTICE --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}