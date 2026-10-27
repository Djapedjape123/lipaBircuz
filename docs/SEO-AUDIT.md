# SEO audit – Bircuz Lipa 1880 (www.bircuzlipa1880.com)

## Kontekst
Tražio si samo analizu, bez izmena. Ovaj fajl sadrži audit i predlog plana popravki. **Ništa nije menjano u projektu.** Ako odobriš plan, popravke radim redom iz sekcije "Plan popravki", korak po korak.

**Stack (provereno u `node_modules`):** Vite 7.3.1 + React 19.2.4 + **react-router-dom 7.13.0 u "library" modu** (`createBrowserRouter` u [src/main.jsx:25](src/main.jsx#L25), rute ručno navedene, nema file-based rutiranja; `src/pages` je samo folder) + react-helmet-async 2.0.5 (radi preko `legacy-peer-deps=true` u `.npmrc`) + i18next. Hosting: Vercel (potvrđeno headerom `Server: Vercel`).

**Šta sam proverio uživo:** curl (statusi, redirekti, headeri, robots, sitemap) i headless Edge render stranica `/`, `/cene`, `/kontakt`, `/o-kafani`, `/kontakt?lang=en` i jedne nepostojeće stranice, da vidim šta Googlebot dobija posle izvršavanja JS-a. PageSpeed API je vratio 429 (prekoračena dnevna kvota bez ključa), tako da CWV **nije izmeren**.

---

## Ocena: 4/10
Osnova je dobra: čitljivi slugovi, poseban title i description za svaku stranicu, jedan H1 po stranici, `BarOrPub` schema u statičkom HTML-u i sitemap koji pokriva svih 11 ruta. Ali canonical na **svakoj** stranici pokazuje na domene koji ne postoje (`tvoj-buduci-domen.rs` i `bircuzlipa1880.rs`, koji se uopšte ne resolvuje), robots i sitemap pokazuju na non-www adresu koja se privremeno (307) preusmerava, a nepostojeći URL-ovi vraćaju 200. Sajt se renderuje samo na klijentu, pa botovi koji ne izvršavaju JS (Facebook, Viber, WhatsApp, većina AI crawlera) dobijaju isti naslov i prazan `<div id="root">` na svakom URL-u, a NAP podaci se ne slažu (3 telefona, 2 različita radna vremena).

## Šta je dobro urađeno
- **URL-ovi:** kratki, mali slovni znaci, srpski slugovi (`/o-kafani`, `/cene`, `/mali-fudbal`...). Ne menjati ih.
- **Title i description po stranici:** svaka stranica šalje svoje kroz `<SEO>`. Render potvrđuje da Google vidi `Karta Pića i Cene | ...`, `O nama | ...` itd.
- **Jedan H1 po stranici:** potvrđeno u renderu. `/o-kafani` ima uzornu hijerarhiju H1 > 4×H2.
- **`BarOrPub` JSON-LD je u statičkom `index.html`**, pa je vidljiv i botovima bez JS-a. `/cene` ima `Menu` schemu sa cenama u RSD.
- **Sitemap pokriva tačno svih 11 ruta iz routera.** Nema baze, sav sadržaj je u kodu, pa je statički sitemap ovde ispravan izbor.
- **Interno linkovanje:** sve stranice su u nav-u ili footeru kao prave `<a href>` (React Router `<Link>`), uključujući dropdown "Lipadžije" koji je u DOM-u i kad je zatvoren.
- **HTTPS + HSTS**; `http` vraća 308 na `https`.
- **Slike su WebP**, rute su lazy-loaded (`React.lazy`), mapa (iframe) ima `loading="lazy"`, a video od 6,2 MB se učitava tek kad se otvori modal.
- **Poverenje:** postoje stranice `/o-kafani` (jaka, jedinstvena istorija od 1880.) i `/kontakt`, a footer linkuje Instagram, Facebook i TripAdvisor.

---

## Problemi po prioritetu

### KRITIČNO

**K1. Canonical na svim stranicama pokazuje na nepostojeće domene, i to dvaput**
- [index.html:15](index.html#L15) → `https://tvoj-buduci-domen.rs/`; [index.html:19](index.html#L19) `og:url` isto.
- [src/components/SEO.jsx:10](src/components/SEO.jsx#L10) → podrazumevani `url = "https://bircuzlipa1880.rs"`, a **nijedna stranica ne šalje `url`**, pa je canonical svake stranice homepage na `.rs` domenu. Taj domen se ne resolvuje (curl: status 000).
- Render potvrđuje da svaka stranica ima **2 `<link rel="canonical">`** (statički iz `index.html`, koji Helmet ne uklanja, plus Helmetov), **2 `meta description`** i duple `og:*` tagove.
- **Zašto šteti:** canonical ka drugom domenu kaže Google-u "pravi sadržaj je tamo". Dva canonical-a koji se međusobno ne slažu Google ignoriše i sam bira, a podstranice su sve "kanonizovane" na homepage. Facebook i Viber koriste `og:url` kao kanonsku adresu za share.
- **Popravka:** u `SEO.jsx` računati canonical iz `useLocation()` na `https://www.bircuzlipa1880.com`, a iz `index.html` ukloniti statički canonical i `og:url` (kod u koraku 1 plana).

**K2. Čist CSR: botovi bez JS-a vide istu praznu stranicu na svakom URL-u**
- [src/main.jsx:45](src/main.jsx#L45) koristi `createRoot` bez SSR-a i prerendera. Živi HTML za bilo koji URL je isti `index.html` od 3,8 KB sa `<div id="root"></div>`, title-om i description-om početne stranice.
- **Zašto šteti:** Googlebot renderuje JS (sa zakašnjenjem), ali Facebook, Viber i WhatsApp preview, većina AI crawlera (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot) i delimično Bing vide samo homepage meta podatke. Istorija sa `/o-kafani`, najcitljiviji sadržaj sajta, za njih ne postoji. Share linka `/cene` na Viberu pokazuje naslov početne stranice.
- **Popravka:** prerender (SSG) svih 11 ruta u build-u. Preporuka za ovaj stack je React Router 7 "framework mode" sa `ssr: false` + `prerender: [...]`, što Vercel servira kao statiku (detalji u koraku 4 plana). Ovo traži instalaciju `@react-router/dev` i treba mi odobrenje.

**K3. Nepostojeće stranice vraćaju 200 (soft 404) i ružnu React grešku**
- [vercel.json:2-7](vercel.json#L2-L7) prepisuje `/(.*)` na `index.html`, a u [src/main.jsx:25-43](src/main.jsx#L25-L43) nema `path: '*'` rute.
- Uživo: `/nepostojeca-stranica-xyz` vraća **200**, title početne stranice i tekst "Unexpected Application Error! 404 Not Found 💿 Hey developer 👋", bez nav-a i footera. Isto važi za `/favicon.ico` i `/llms.txt`: 200 sa `text/html`.
- **Zašto šteti:** Google indeksira smeće URL-ove kao duplikate početne stranice, a GSC ih prijavljuje kao "Soft 404". Ako je ranije postojao sajt sa drugim URL-ovima, sada svi "rade" i niko ne zna da su mrtvi.
- **Popravka:** eksplicitni rewrite samo za postojeće rute + `public/404.html` + `*` ruta u React-u sa `noindex` (korak 2 plana).

**K4. robots.txt i sitemap pokazuju na non-www, a non-www vraća privremeni 307**
- [public/robots.txt:6](public/robots.txt#L6) → `Sitemap: https://bircuzlipa1880.com/sitemap.xml`; svi `<loc>` u [public/sitemap.xml](public/sitemap.xml) su `https://bircuzlipa1880.com/...`.
- Uživo: `https://bircuzlipa1880.com/*` vraća **307 Temporary Redirect** na `https://www.bircuzlipa1880.com/*`.
- **Zašto šteti:** sitemap mora da sadrži finalne, kanonske URL-ove. Ovde je svaki URL redirect, a 307 je *privremen*, pa Google nema jasan signal koja je verzija glavna.
- **Popravka:** sve na `https://www.bircuzlipa1880.com`. U Vercel Dashboard → Domains → `bircuzlipa1880.com` promeniti redirect na **308 Permanent**. To je podešavanje u dashboard-u, ne u kodu.

**K5. NAP i radno vreme se ne slažu (lokalni SEO)**
- **Telefon, 3 različita broja:**
  - `065 461 3359`: [HomePage.jsx:87](src/pages/HomePage.jsx#L87), [Footer.jsx:123](src/components/Footer.jsx#L123), [KakoDoNas.jsx:50](src/components/KakoDoNas.jsx#L50), [NajavePage.jsx:115](src/pages/NajavePage.jsx#L115), [NajavePage.jsx:154](src/pages/NajavePage.jsx#L154)
  - `064 2110102`: [Kontakt.jsx:135](src/pages/Kontakt.jsx#L135), [i18n.js:231](src/i18n.js#L231), **schema** [index.html:49](index.html#L49)
  - `061 2123525` (WhatsApp): [WhatsAppButton.jsx:6](src/components/WhatsAppButton.jsx#L6)
- **Radno vreme:** schema [index.html:62-75](index.html#L62-L75) kaže **Pon–Ned 08:00–00:00**, a sajt [i18n.js:273-275](src/i18n.js#L273-L275) kaže **Pon–Čet 08–23, Pet–Sub 08–01, Ned 14–23**. Commit `ba5fa74` je ažurirao i18n, ali ne i schemu.
- **Adresa, 4 oblika:** "Svetozara Miletića 9" (schema, KakoDoNas), "Miletićeva 9" ([i18n.js:181](src/i18n.js#L181) footer), "Svetozara **Miletiće** 9" (greška u kucanju, [i18n.js:228](src/i18n.js#L228) Kontakt), "Mileticeva 9" (pin, link ka mapi).
- **Ime:** "Bircuz Lipa 1880" naspram "Kafana Lipa" ([i18n.js:184](src/i18n.js#L184) copyright, contact `seo_description`).
- **Zašto šteti:** Google upoređuje sajt, schemu i Google Business Profile. Neslaganje smanjuje poverenje u lokalni entitet, a pogrešno radno vreme u schemi može da se pojavi u pretrazi.
- **Popravka:** jedan glavni broj (biraš ti), jedan oblik adrese ("Svetozara Miletića 9, 21000 Novi Sad") i schema usklađena sa stvarnim radnim vremenom (kod u koraku 3).

### VAŽNO

**V1. hreflang laže: `?lang=en` prikazuje srpski**
- [SEO.jsx:28-34](src/components/SEO.jsx#L28-L34) šalje `hreflang="en"` na `...?lang=en`, ali [i18n.js:566](src/i18n.js#L566) ima `lng: "sr"`, što isključuje LanguageDetector. Pored toga, detector po default-u čita `?lng=`, a ne `?lang=`. Render `/kontakt?lang=en` vraća srpski title i `lang="sr"`.
- **Zašto šteti:** hreflang par sa istim sadržajem i na pogrešnom domenu Google odbacuje kao neispravan. Engleski sadržaj trenutno nema nijedan URL koji se može indeksirati.
- **Popravka:** sada **ukloniti hreflang** potpuno. Kasnije, ako su strani turisti cilj (TripAdvisor to sugeriše), napraviti prave `/en/...` rute.

**V2. `BarOrPub` schema je nepotpuna i delom netačna** ([index.html:41-77](index.html#L41-L77))
- `"@id": ""` je prazan ([:47](index.html#L47)), `url` je placeholder ([:48](index.html#L48)), `geo` ima samo 3 decimale ([:59-60](index.html#L59-L60); Google traži ≥5), radno vreme je pogrešno (K5).
- Nedostaju `sameAs` (IG/FB/TripAdvisor), `hasMenu`, `priceRange`, `logo`, `foundingDate: "1880"`, `acceptsReservations`, `email`, kao i prave fotografije lokala (sada je jedina slika logo).
- [Cene.jsx:127](src/pages/Cene.jsx#L127) `mainEntityOfPage` pokazuje na `bircuzlipa1880.rs`.
- Nema `WebSite` scheme, koja pomaže Google-u da prikaže "Bircuz Lipa 1880" kao ime sajta u rezultatima.
- **Napomena:** TravelAgency, TouristTrip i Offer iz tvoje liste se ovde ne primenjuju, jer je to tip za turističke agencije. Za kafanu je ispravan `BarOrPub`, koji već koristiš. FAQ rich rezultate Google od 2023. prikazuje samo za državne i zdravstvene sajtove, pa FAQ schema nije potrebna.

**V3. Karta pića: u DOM-u je samo izabrana kategorija**
- [Cene.jsx:117-119](src/pages/Cene.jsx#L117-L119) filtrira stavke po izabranoj kategoriji. Render potvrđuje da su vidljiva samo točena piva (npr. "Laško" postoji samo u JSON-LD-u, ne u tekstu stranice).
- **Zašto šteti:** ~80 stavki (rakije, vina, cene) nije indeksiran tekst, pa upiti tipa "cena rakije Novi Sad centar" nemaju šta da pogode.
- **Popravka:** renderovati sve kategorije (svaka kao `<section>` sa `<h2>`) i neizabrane sakriti CSS klasom `hidden` umesto da se izbacuju iz DOM-a. Vizuelno se ništa ne menja.

**V4. `/shop` je prazna "Uskoro" stranica koja se indeksira i nalazi se u sitemapu**
- [Prodaja.jsx:16-19](src/pages/Prodaja.jsx#L16-L19), [public/sitemap.xml](public/sitemap.xml) (`/shop`).
- **Zašto šteti:** thin content u glavnoj navigaciji i sitemapu.
- **Popravka:** `<SEO noindex ...>` i izbacivanje iz sitemapa dok prodavnica ne proradi.

**V5. Najave prikazuju zastareo događaj**
- [NajavePage.jsx:19-28](src/pages/NajavePage.jsx#L19-L28): "11. Jun – Počinje svetsko prvenstvo", bez godine. Danas je 27.10.2026.
- **Zašto šteti:** zastareo sadržaj na stranici označenoj kao `weekly` šteti svežini i poverenju. Nema `Event` scheme.
- **Popravka:** isprazniti niz (prikazuje se postojeći "Pripremamo nešto posebno" blok) ili uneti stvarne događaje sa godinom. Za stvarne događaje dodati `Event` JSON-LD (`startDate` u ISO formatu, `location` = `@id` kafane).

**V6. Trailing slash i *.vercel.app duplikati**
- `/cene/` vraća 200 i isti sadržaj kao `/cene`. U `vercel.json` nema `trailingSlash`.
- **Popravka:** `"trailingSlash": false` (Vercel onda vraća 308 sa `/cene/` na `/cene`). Za produkcioni `<projekat>.vercel.app` alias dodati host redirect na www (u koraku 2; ime projekta ne znam).

**V7. Rizici za Core Web Vitals (LCP), na osnovu koda, nije izmereno**
- [App.jsx:11-16](src/App.jsx#L11-L16) + [:36-48](src/App.jsx#L36-L48): splash preko celog ekrana prekriva **svaku** stranicu 1,8–2,5 s pri svakom učitavanju.
- [HomePage.jsx:61-68](src/pages/HomePage.jsx#L61-L68): H1 kreće od `opacity: 0` (framer-motion; render to potvrđuje). Element sa opacity 0 ne može biti LCP dok se ne pojavi.
- [HomePage.jsx:40-46](src/pages/HomePage.jsx#L40-L46): hero slika je CSS `background-image` iz lazy JS chunk-a, pa je browser otkriva tek posle JS-a.
- Glavni JS bundle: **434 KB (150 KB kompresovano)** pre koda same stranice; uključuje framer-motion i oba prevoda.
- **Popravka:** ukloniti splash ili ga prikazati samo pri prvoj poseti u sesiji. Skinuti `initial opacity:0` sa H1. Hero kao `<img fetchPriority="high">` ili `<link rel="preload" as="image">`.

### SITNICE
- **S1.** Home H1 je samo "Bircuz Lipa 1880" ([i18n.js:15](src/i18n.js#L15); ključ `title` je dupliran na [:10](src/i18n.js#L10) i [:15](src/i18n.js#L15), važi drugi). Predlog: "Bircuz Lipa 1880 – kafana u centru Novog Sada". Na početnoj nema ni jednog pasusa o tome šta je Lipa; predlažem 80–150 reči sa linkovima ka `/o-kafani` i `/cene`.
- **S2.** Preskočeni nivoi naslova: Kontakt H1→H3 ([Kontakt.jsx:117](src/pages/Kontakt.jsx#L117)), Home H2→H4 ([KakoDoNas.jsx:44](src/components/KakoDoNas.jsx#L44)), Galerija H1→H3 ([Dogadjaj.jsx:118](src/pages/Dogadjaj.jsx#L118)).
- **S3.** Slabi alt tekstovi: "Full screen" ([Fudbal.jsx:276](src/pages/Fudbal.jsx#L276), [Kviz.jsx:248](src/pages/Kviz.jsx#L248)), "Uspomena" ([Uspomena.jsx:42](src/components/Uspomena.jsx#L42)), "Lipa Logo" ([NavBar.jsx:68](src/components/NavBar.jsx#L68), [Footer.jsx:29](src/components/Footer.jsx#L29)). Galerija od 7 slika do 150 KB nema `loading="lazy"` ([Dogadjaj.jsx:105](src/pages/Dogadjaj.jsx#L105)). Slike nemaju `width`/`height`, ali su u kontejnerima fiksne veličine, pa je CLS rizik mali.
- **S4.** Meta description za Kviz ima gramatičke greške i kratak je: "Pogledaj te našu ekipu koje je harala..." ([Kviz.jsx:52](src/pages/Kviz.jsx#L52)). Najave title ima ~66 znakova, a description ~170, pa se seče u SERP-u.
- **S5.** Favicon je samo WebP ([index.html:32-33](index.html#L32-L33)), a iOS `apple-touch-icon` traži PNG. Dodati `favicon.ico` ili PNG 48×48 i `apple-touch-icon.png` 180×180.
- **S6.** `meta keywords` ([index.html:11](index.html#L11)) Google ignoriše. Može da ostane, ali ne pomaže.
- **S7.** Google Fonts "Caveat" se učitava render-blocking na svakoj stranici ([index.html:38](index.html#L38)), a koristi se samo u `Uspomena` na početnoj.
- **S8.** `sitemap.xml`: svi `lastmod` su `2026-02-19`, a sajt se menjao posle toga. `changefreq` i `priority` Google ignoriše.
- **S9.** Breadcrumbs ne postoje. Sajt je ravan (sve stranice su na 1 nivou), pa `BreadcrumbList` donosi malo. Nisko na listi.
- **S10.** `App.jsx:31-34` renderuje `<SEO>` iznad svake stranice. Ne pravi štetu (pobeđuje dublji), ali je suvišno.

### GEO / AI pretraga (kratko)
- robots `User-agent: * / Allow: /` dozvoljava sve: za AI pretragu **OAI-SearchBot, Claude-SearchBot, PerplexityBot**, za trening **GPTBot, ClaudeBot, CCBot, Google-Extended**. Za Google AI Overviews i AI Mode bitan je **Googlebot**, koji je dozvoljen. Problem nije pristup, nego K2: AI crawleri bez JS-a ne vide sadržaj.
- `/llms.txt` ne postoji (vraća HTML sa 200). Google ga ignoriše, pa nije prioritet.
- Najjači adut za citiranje je jedinstvena istorija (1880, Laza Kostić, Zmaj, Predić, "Od Linde do Lipe"). Kad se reši K2, to postaje sadržaj koji AI može da citira.

---

## Plan popravki (redosled)

**Korak 1 – Canonical, meta i hreflang (bez instalacija)**
- [src/components/SEO.jsx](src/components/SEO.jsx): canonical iz `useLocation()`, bez hreflang-a, novi prop `noindex`:
```jsx
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://www.bircuzlipa1880.com';
const DEFAULT_IMAGE = 'https://res.cloudinary.com/duomot4hp/image/upload/q_auto/f_auto/v1777931592/lipalogo_ha5sow.jpg';

export default function SEO({ title, description, type = 'website', image = DEFAULT_IMAGE, noindex = false }) {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const canonicalUrl = SITE_URL + path;
  const lang = i18n.language || 'sr';

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={lang === 'sr' ? 'sr_RS' : 'en_US'} />
      <meta property="og:site_name" content="Bircuz Lipa 1880" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
```
- [index.html](index.html): obrisati linije 15 (canonical) i 19 (og:url). Statičkim `meta description`, `og:*` i `twitter:*` tagovima dodati `data-rh="true"`, kako bi ih Helmet zamenio umesto da pravi duplikate. Statička verzija ostaje kao fallback za botove bez JS-a.
- [src/App.jsx:31-34](src/App.jsx#L31-L34): ukloniti suvišni `<SEO>`.
- [src/pages/Prodaja.jsx](src/pages/Prodaja.jsx): `<SEO noindex ...>`.
- [src/pages/Cene.jsx:127](src/pages/Cene.jsx#L127): `mainEntityOfPage` → `https://www.bircuzlipa1880.com/cene`.

**Korak 2 – Indeksiranje: robots, sitemap, 404, trailing slash**
- [public/robots.txt](public/robots.txt): `Sitemap: https://www.bircuzlipa1880.com/sitemap.xml`.
- [public/sitemap.xml](public/sitemap.xml): svi `<loc>` na `https://www.`, izbaciti `/shop`, staviti stvarne `lastmod` datume.
- [vercel.json](vercel.json):
```json
{
  "trailingSlash": false,
  "rewrites": [
    { "source": "/(o-kafani|cene|kontakt|najave|mali-fudbal|lipa-kviz|lipa-svuda|saradnje|dogadjaj|shop)", "destination": "/index.html" }
  ]
}
```
  Plus host redirect sa `<projekat>.vercel.app` na www, kad mi daš ime projekta.
- Novi `public/404.html` (statičan, `noindex`, linkovi ka početnoj, karti pića i kontaktu). Vercel ga servira sa statusom 404.
- [src/main.jsx](src/main.jsx): dodati `{ path: '*', element: <NotFound /> }` kao child, plus nova `src/pages/NotFound.jsx` sa `<SEO noindex>` za navigaciju unutar aplikacije.
- **Ručno, Vercel Dashboard:** apex redirect sa 307 na **308**.

**Korak 3 – NAP i schema**
- Uskladiti telefon (jedan broj, tvoja odluka), adresu "Svetozara Miletića 9" (popraviti [i18n.js:228](src/i18n.js#L228) i [:181](src/i18n.js#L181)) i ime "Bircuz Lipa 1880" ([i18n.js:184](src/i18n.js#L184)).
- Zameniti JSON-LD u [index.html:41-77](index.html#L41-L77):
```json
[{
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "@id": "https://www.bircuzlipa1880.com/#bar",
  "name": "Bircuz Lipa 1880",
  "alternateName": ["Bircuz Lipa", "Kafana Lipa"],
  "url": "https://www.bircuzlipa1880.com/",
  "logo": "https://res.cloudinary.com/duomot4hp/image/upload/q_auto/f_auto/v1777931592/lipalogo_ha5sow.jpg",
  "image": ["<URL fotografije enterijera>", "<URL fotografije bašte/ulaza>"],
  "telephone": "+381XXXXXXXXX",
  "email": "lipadzije@gmail.com",
  "foundingDate": "1880",
  "priceRange": "RSD 200–1600",
  "currenciesAccepted": "RSD",
  "acceptsReservations": true,
  "hasMenu": "https://www.bircuzlipa1880.com/cene",
  "address": { "@type": "PostalAddress", "streetAddress": "Svetozara Miletića 9", "addressLocality": "Novi Sad", "postalCode": "21000", "addressCountry": "RS" },
  "geo": { "@type": "GeoCoordinates", "latitude": 45.25XXX, "longitude": 19.84XXX },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"], "opens": "08:00", "closes": "23:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday","Saturday"], "opens": "08:00", "closes": "01:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "14:00", "closes": "23:00" }
  ],
  "sameAs": [
    "https://www.instagram.com/bircuzlipa/",
    "https://www.facebook.com/BircuzLipa",
    "https://www.tripadvisor.com/Attraction_Review-g295380-d33861629-Reviews-Bircuz_Lipa-Novi_Sad_Vojvodina.html"
  ]
},
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.bircuzlipa1880.com/#website",
  "name": "Bircuz Lipa 1880",
  "url": "https://www.bircuzlipa1880.com/",
  "inLanguage": "sr",
  "publisher": { "@id": "https://www.bircuzlipa1880.com/#bar" }
}]
```
  `geo` se uzima sa tačnog pina u Google Maps (5+ decimala). `XXX` su placeholderi koje popunjavam tek kad mi daš podatke, a radno vreme proveravam sa GBP-om.
- [Cene.jsx](src/pages/Cene.jsx): u `Menu` schemu dodati `"@id": ".../cene#menu"`.

**Korak 4 – Prerender (rešava K2). Traži instalaciju `@react-router/dev` i tvoje odobrenje**
- Prelazak na React Router 7 framework mode: `react-router.config.js` sa `ssr: false, prerender: ["/", "/o-kafani", "/cene", "/kontakt", "/najave", "/mali-fudbal", "/lipa-kviz", "/lipa-svuda", "/saradnje", "/dogadjaj", "/shop"]`, `app/routes.js` umesto niza u `main.jsx`, i `meta()` export po ruti umesto Helmet-a. Uz to `react-helmet-async` i `legacy-peer-deps` više nisu potrebni.
- Pre toga: splash prikazivati samo posle mount-a (inače ulazi u prerenderovan HTML).
- Posle toga proveriti Vercel rutiranje (statički `cene/index.html`) i ponovo testirati `vercel.json` iz koraka 2.

**Korak 5 – Sadržaj**
- Cene: sve kategorije u DOM-u (V3). Najave: ukloniti zastareo događaj, a za stvarne događaje dodati `Event` schemu (V5). Home: H1 sa opisom i kratki uvodni pasus (S1).

**Korak 6 – Performanse**
- Splash, H1 opacity, hero preload (V7), Google Font samo na početnoj (S7), lazy za galeriju (S3).

**Korak 7 – Sitnice**
- S2–S6, S8.

## Verifikacija (posle popravki)
1. `npm run build && npm run preview`, zatim headless render (`msedge --headless=new --dump-dom http://localhost:4173/cene`): tačno **1** canonical (`https://www.bircuzlipa1880.com/cene`), 1 description, bez hreflang-a. Posle koraka 4 to mora da važi i u sirovom HTML-u (`curl`), ne samo u renderu.
2. Posle deploya: `curl -I https://bircuzlipa1880.com/` → 308; `curl -I .../cene/` → 308 na `/cene`; `curl -I .../nepostoji` → **404**; robots i sitemap pokazuju www.
3. Google Rich Results Test + validator.schema.org za `/` i `/cene` (BarOrPub, WebSite, Menu).
4. Facebook Sharing Debugger i Viber share za `/cene`: naslov stranice, a ne naslov početne.
5. GSC: URL Inspection za 3–4 stranice ("User-declared canonical" = "Google-selected canonical"), ponovo poslati sitemap.

---

## Šta ne mogu da potvrdim iz koda (proveri na živom sajtu)
- **Search Console:** koji je "Google-selected canonical" za podstranice (sumnjam da su sve stopljene sa homepage-om), koliko je URL-ova indeksirano, postoje li "Soft 404" i "Duplicate without user-selected canonical" izveštaji, i da li je sitemap prijavljen na www ili non-www property.
- **PageSpeed Insights / CrUX:** API mi je vratio 429 (kvota), pa LCP, INP i CLS **nisu izmereni**. Pokreni pagespeed.web.dev za `/`, `/cene` i `/o-kafani` na mobilnom.
- **Koji je pravi telefon i pravo radno vreme**, i da li se slažu sa **Google Business Profile**-om. To je tvoja odluka i provera.
- **Stari sajt:** u kodu nema nijednog redirecta, a Wayback Machine nema snimaka za `bircuzlipa1880.com`. Ako je ranije postojao sajt na drugom domenu ili sa drugim URL-ovima, treba mi lista starih adresa za 301 redirekte.
- **`<projekat>.vercel.app`:** ne znam ime projekta. Proveri `curl -I https://<projekat>.vercel.app/`. Ako vraća 200 bez `X-Robots-Tag: noindex`, dodajem host redirect. Preview deployovi na Vercelu po default-u dobijaju `noindex`, ali i to treba potvrditi istom komandom.
- **Da li je 307 na apex domenu namerno podešen** u Vercel Domains.
- **Brend signali van sajta** (recenzije, pominjanja, backlinkovi): nisu deo koda i nisu mereni.
