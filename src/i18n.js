import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    // === SRPSKI ===
    sr: {
        translation: {
            home: {
                title: "Dobrodošli u Lipu",
                subtitle_part1: "Mesto gde se tradicija sreće sa dobrim društvom.",
                subtitle_part2: "Opustite se uz najbolja pića i autentičnu atmosferu.",
                cta_button: "Rezerviši Sto"
            },
            home_announcements: {
                badge: "Atmosfera & Druženje",
                title: "Želite da znate šta se dešava?",
                button: "Pogledajte Najave"
            },
            nav: {
                about: "O Kafani",
                lipadzije: "Lipadžije",
                lipadzije_sub: {
                    famous: "Lipa Dešavanja",
                    football: "Mali fudbal",
                    quiz: "Lipa Kviz",
                    everywhere: "Lipa svuda"
                },
                collab: "Saradnje",
                collab_sub: {
                    vojnovic: "Vinarija Vojnović",
                    rubin: "Rubin Kruševac",
                    nektar: "Nektar"
                },
                prices: "Cene",
                shop: "Prodavnica",
                contact: "Kontakt"
            },
            about_page: {
                badge: "Od 1880. godine",
                title_main: "Kafana „Lipa”",
                title_sub: "Duša starog Novog Sada",
                quote: "\"Mesto gde se tradicija sreće sa dobrim društvom, a vreme teče malo sporije.\"",
                section1_title: "Tradicija duža od veka",
                section1_text: "Smeštena u samom srcu Novog Sada, u Miletićevoj ulici (nekadašnjem Lebarskom sokaku), kafana „Lipa” već više od 135 godina predstavlja utočište za sve one koji tragaju za autentičnim gradskim duhom. Od svog osnivanja 1890. godine, ovo mesto je bilo i ostalo nezvanični centar kulturnog i društvenog života vojvođanske Atine.",
                section2_title: "Od „Linde” do „Lipe”",
                section2_text: "Sve je počelo sa gostioničarem češkog porekla, Jozefom Obernigom, koji je u dvorištu kuće pod starim stablom lipe otvorio pivnicu „Linda” (nem. Zur Linde). Bila je to prava kafana u kojoj se točio najbolji češki pilzner. Kasnije, pod zakupcem Savom Popovićem – Golubicom, ime dobija svoj prepoznatljivi srpski prevod koji nosimo i danas – Lipa.",
                section3_title: "Gde su sedeli velikani",
                section3_text: "„Lipa” je imala svoj čuveni „štantiš” (stalni astal), za kojim su istoriju ispisivali:",
                section4_title: "Ukus tradicije u modernom ruhu",
                section4_text: "Danas, „Lipa” spaja najbolje iz prošlosti sa modernim gostoprimstvom. Bilo da dolazite na jutarnju kafu, čuveni „hercegovački krš” ili laganu domaću kafu, u „Lipi” ćete osetiti onaj mirniji, gospodski Novi Sad."
            },
            events: {
                gallery_badge: "Galerija Uspomena",
                title_prefix: "Hronika",
                title_suffix: "Dobrog Provoda",
                subtitle: "Neke noći se pamte po pesmama, neke po razgovorima, a neke po osmesima koji su ostali zabeleženi. Zavirite u naš album.",
                cta_title: "Želite da budete deo naše priče?",
                cta_button: "Pratite nas za najave sledećih svirki!",
                modal_footer: "Zabeleženo u Lipi",
                items: {
                    "1": { title: "Branimir i neprijatelji", category: "Muzika uživo", desc: "Snažan rokenrol vizual koji slavi bunt, slobodu i sirovu energiju domaće ex-YU rock scene, uz poruku da je rock’n’roll i dalje živ i neprilagođen." },
                    "2": { title: "Lipa Trio", category: "Muzika uživo", desc: "Povodom Dana grada, u Lipi slavimo Novi Sad uz jutarnji rokenrol i dobru energiju.U četvrtak od 11h, Trio Lipa donosi svirku koja budi grad i čuva tradiciju 🎸🍻" },
                    "3": { title: "Doček", category: "Druženje", desc: "Ulicu je ispunila vesela energija dok su ulićni svirači u Bircuz Lipa dočekivali prolaznike toplim, razigranim melodijama." },
                    "4": { title: "Jutarnje razgibavanje", category: "Atmosfera", desc: "Idealno mesto za prvu (i svaku sledeću) turu pića." },
                    "5": { title: "Trio Lipa", category: "Rock’n’Roll", desc: "Jutarnja kafa uz najbolji zvuk u gradu! ☕🎸 Trio Lipa podiže atmosferu u Bircuzu Lipa. Ko kaže da je rano za rokenrol." },
                    "6": { title: "Pozoriste u kući", category: "Gluma", desc: "Uživajte u snažnoj interpretaciji priča Antonija Tabukija u predstavi 'Žena iz Porto Pima', koju u saradnji sa SNP-om u okviru projekta 'Pozorište u kući' maestralno donosi glumac Jugoslav Krajnov." },
                    "7": { title: "Ulični svirači", category: "Duh grada", desc: "Muzika koja ima dušu. Dobrodošli na još jedan poseban doček ispred Lipe! 🎶🥂" }
                }
            },
            menu: {
                title: "Karta Pića",
                subtitle: "Najbolje cene u srcu Novog Sada",
                select_label: "Izaberi kategoriju",
                empty_state: "Trenutno nema artikala u ovoj kategoriji.",
                currency: "RSD",
                footer_note: "* Cene su izražene u dinarima. Zadržavamo pravo izmene cena.",
                categories: {
                    draft_beer: "TOČENA PIVA",
                    wines: "VINA",
                    snacks: "GRICKALICE",
                    bottled_beer: "PIVA U FLAŠI",
                    house_special: "SPECIJAL KUĆE",
                    brandy: "PRIRODNA RAKIJA",
                    hard_liquor: "ŽESTOKA PIĆA",
                    water: "VODE",
                    soft_drinks: "BEZALKOHOLNA PIĆA",
                    hot_drinks: "TOPLI NAPITCI",
                    liqueurs: "LIKERI"
                },
                items: {
                    domestic_coffee: "Domaća Kafa",
                    tea_honey: "Čaj sa medom",
                    mulled_wine: "Kuvano Vino",
                    homemade_chips: "Čips 95g",
                    peanuts: "Kikiriki pikant 150g"
                }
            },
            football: {
                image_alt: "Fudbalska ekipa Lipa",
                slider_counter: "Slika {{current}} od {{total}}",
                badge: "Lipadžije",
                title_1: "Više od igre,",
                title_2: "više od tima",
                subtitle_quote: "\"U srcu Novog Sada postoji mesto koje neguje prijateljstvo i domaćinsku atmosferu – naš Bircuz Lipa.\"",
                intro_quote_1: "\"Kroz godine, Lipa je bila i ostala tačka susreta, razmene ideja i topline, mesto gde su nekada rado sedeli Mika Antić, Laza Kostić i mnoge druge gradske legende. Danas, duh te tradicije živi kroz nove generacije – kroz ",
                intro_quote_lipadzije: "Lipadžije",
                intro_quote_2: ".\"",
                desc_1: "Lipadžije nisu samo verni gosti našeg bifea. Oni su deo porodice, mladost sa stavom, energijom i timskim duhom. Iz neformalnog druženja, 2023. godine nastao je tim malog fudbala “Lipadžije” – kao prirodni nastavak onoga što Lipa jeste: zajedništvo, strast i podrška.",
                desc_2: "Naši omladinci, naši redovni gosti, naši prijatelji, svojim igrama na terenu pokazuju sve ono što učimo i negujemo van terena: fer-plej, odanost, timski rad i srce u svakoj akciji. Njihovi rezultati nisu samo pobede – to su poruke zajedništva koje svi razumemo.",
                path_to_success: "Put do uspeha",
                success_1: "Sa takmičarskim utakmicama započeli smo u Četvrtoj ligi Novog Sada, a zalaganjem na terenu i dobrim rezultatima brzo smo došli do drugog ranga takmičenja.",
                success_2_start: "Sezona 2024/25 našem klubu donela je najviše uspeha: ",
                success_2_h1: "plasman u Lav ligu Vojvodine",
                success_2_mid: " i ",
                success_2_h2: "trofej namenjen osvajaču Kupa grada Novog Sada",
                success_2_end: ". Ostvareni rezultati nisu prošli nezapaženo, usledio je poziv na Minifootball Serbian cup 2025 koji je na sportskom centru Tašmajdan okupio 12 najboljih ekipa iz cele Srbije, na kojem su naši momci dogurali do četvrtfinala.",
                conclusion: "Bircuz Lipa danas nije samo mesto okupljanja – to je dom sporta, umetnosti i dobrog duha. A Lipadžije? Oni su ponos svih nas. Oni su budućnost sa osmehom, glasna podrška sa tribina i tiha snaga iza svakog gola.",
                cheers: "Zalivamo i proslavljamo uspehe u Lipi! 🍻",
                video_badge: "Video Zapis",
                video_title_1: "Lipadžije u akciji",
                video_title_2: "Finale kupa"
            },
            quiz: {
                image_alt: "Pab Kviz Lipa",
                slider_counter: "Slika {{current}} od {{total}}",
                badge: "Pab Kviz Ekipa",
                title_1: "Lipadžije –",
                title_2: "(Jako dobro)",
                title_3: "skriveni potencijal",
                subtitle_quote: "\"Od 'Ja ti kažem!' do pobedničkog postolja – kako smo kafanske prepirke pretvorili u znanje.\"",
                desc_1: "Hteli mi to da priznamo ili ne, jedna od osnovnih odlika tradicionalne srpske kafane, a posebno gostiju za šankom, je večito, prijateljsko, nadmetanje – ko je tu najpametniji? Tačnije – ko tvrdi da je najpametniji. Tako su, veoma česte, fraze koje se u kafani čuju: „Ma, garantujem ti!“, „Ja ti kažem!“, „Evo proveri na internetu...“, „Nisi u pravu“...",
                desc_2_start: "To su odlike, rekosmo, tradicionalnih srpskih kafana, kakva smo i mi, te je to odlika i naše Lipe. Da se ne izdvajamo! Ono po čemu smo odlučili da se, ipak, izdvojimo, je da te naše prepirke kanališemo na drugi način. Umesto da se nadmećemo međusobno, odlučili smo da se skupimo u jednu ekipu i nadmećemo sa drugim ekipama po gradu, pa da na taj ničin vidimo gde stojimo. Tako je nastala pab kviz ekipa – ",
                desc_2_bold: "Lipadžije!",
                highlight_1: "Saradnjom gostiju i osoblja, koji dele entuzijazam prema pab kvizovima, okupili smo ekipu koja je do sada učestvovala na preko pedeset kvizova, beležila neke vrlo dobre rezultate, ali pre svega, na šta smo i najponosniji, imala više članova nego bilo koja ekipa u gradu. To vam garantujemo.",
                desc_3: "Jer, osim najrevnosnijih članova, koji su i najredovniji, desetine gostiju naše kafane su pokazale volju i interesovanje da se oprobaju, rado išli na kvizove i, na kraju, mnogo doprineli osvajanju bodova. Bilo da su to muzičari koji posle dva takta prepoznaju pesmu na „song kvestu“, društvenjaci koji znaju sve godine Napoleonovih ratova, poznavaoci geografije koji poznaju rečni sistem Azije, filmofili koji napamet znaju sve oskarovce ili prirodnjaci koji rešavaju „moj broj“ i pre nego što se sve cifre pojave na ekranu.",
                card_title: "Više od igre",
                card_desc_1: "Od svega nas, ipak, najviše raduje što bismo se, pre svakog kviza, prvo sastali u našoj Lipi, da se „zagrejemo“. Čašicom ili dve pića uz ćaskanje o mogućim temama kviza za to veče. Jer, naravno, najvažnija stvar kod pab kviz ekipe je, jednostavno, druženje!",
                card_desc_2_start: "Rezultati su možda i mogli biti malo bolji, ali hajde da se malo i pohvalimo. Zna se da se najbolji sport gleda u Lipi, pa tako među medaljama naših fudbalera, koje rado ističemo u kafani, stoje i ",
                card_desc_2_bold: "zlatne medalje sa specijalnog izdanja pab kviza o Engleskoj Premijer ligi",
                card_desc_2_end: ". Nije, dakle, da samo igramo fudbal dobro, dobro ga i poznajemo!",
                conclusion: "Nastavljamo da se takmičimo, svi zajedno, da ne moramo međusobno – naročito onako pre podne, za šankom. Svako ko voli kviz je dobrodošao!"
            },
            everywhere: {
                badge: "Putujemo svetom",
                title: "Lipa Svuda",
                subtitle: "Gde god da krenu, naši gosti nose delić Lipe sa sobom. Kliknite na sliku da pročitate priču sa putovanja.",
                read_story: "Pročitaj priču",
                location_label: "Lokacija",
                footer_note: "Zabeleženo na putovanju Lipadžija.",
                locations: {
                    "9": { title: "Peia, Kipar", desc: "Peyia (takođe pisana Pegeia) je slikovito selo i opština u oblasti Pafosa na zapadu Kipra, poznato po prelepim pogledima na Sredozemno more, tradicionalnoj kiparskoj arhitekturi i kao gateway ka popularnim plažama poput Coral Bay-a." },
                    "1": { title: "Beograd, Silosi", desc: "Silosi je nekadašnja industrijska zona na Dorćolu u Beogradu koja je danas jedinstven kulturni i zabavni prostor sa barom, umetničkim programima i pogledom na Dunav." },
                    "2": { title: "Budimpešta, Mađarska", desc: "Budimpešta je glav­ni grad Mađarske i jedna od najvažnijih kulturnih, političkih i turističkih metropola u srednjoj Evropi, poznata po delu grada na obali Dunava, istorijskim termalnim kupatilima i impresivnoj arhitekturi." },
                    "3": { title: "Giza, Egipat", desc: "Piramide u Gizi su tri monumentalne drevne egipatske grobnice sagrađene pre više od 4 000 godina na platou kod Kaira, među kojima je Keopsova piramida — najveća i najpoznatija — i koje su postale simbol stare civilizacije i svetskog kulturnog nasleđa." },
                    "4": { title: "Rim, Italija", desc: "Trevi fontana u Rimu je veličanstvena barokna fontana iz 18. veka, najpoznatija u gradu i poznata po legendi da bacanje novčića u vodu znači da ćeš se vratiti u Rim." },
                    "5": { title: "Amsterdam, Holandija", desc: "Amsterdam je glavni grad Holandije, poznat po svojim slikovitim kanalima i liberalnoj kulturi, a njegov Red Light District (De Wallen) je istorijska centralna četvrt poznata po mreži uskih ulica sa crvenim svetlima u izlozima gde je legalizovana prostitucija i koja je i danas jedna od najpoznatijih turističkih atrakcija u gradu." },
                    "6": { title: "Minhen, Nemačka", desc: "Evropsko prvenstvo u fudbalu 2024. u Nemačkoj bilo je 17. izdanje UEFA Evropskog prvenstva, održano od 14. juna do 14. jula sa 24 reprezentacije i utakmicama na deset različitih stadiona u velikim nemačkim gradovima kao što su Berlin, Minhen, Dortmund i Frankfurt, čime je Nemačka po prvi put bila domaćin takvog turnira nakon ponovnog ujedinjenja." },
                    "7": { title: "Fruška Gora", desc: "Fruška gora je prelepa planina i nacionalni park u Srbiji poznat po gustim šumama, vinogradima, brojnim pravoslavnim manastirima i mnogim stazama za šetnju i rekreaciju." },
                    "8": { title: "Barcelona, Spain", desc: "Barcelona is famous for the spectacular Sagrada Família basilica, a masterpiece by architect Antoni Gaudí under construction since 1882, which — when completed — will be one of the tallest religious buildings in the world, attracting millions of visitors every year with its intricate nature-inspired forms." }
                }
            },
            events_page: {
                badge: "Program & Zabava",
                title: "Muzika i Događaji",
                desc: "Najbolji provod u gradu, uživo muzika i sportske večeri.",
                empty_title: "Pripremamo nešto posebno...",
                empty_desc: "Trenutno formiramo muzički program za naredni period. Pratite nas kako biste prvi saznali ko gostuje u Lipi!",
                follow_btn: "Pratite najave",
                reserve_btn: "Rezervišite sto",
                book_spot_btn: "Rezerviši Mesto"
            },
            footer: {
                desc: "Mesto gde se tradicija Novog Sada susreće sa modernim duhom. Vrhunska pića i uspomene koje traju.",
                explore: "Istraži",
                visit: "Posetite Nas",
                address: "Miletićeva 9",
                city: "21000 Novi Sad, Srbija",
                reservations: "Rezervacije:",
                rights: "© 2026 Kafana Lipa. Sva prava zadržana.",
                terms: "Uslovi korišćenja",
                dev: "Development by",
                links: {
                    home: "Početna",
                    about: "O Kafani",
                    menu: "Karta Pića",
                    events: "Događaji",
                    contact: "Kontakt",
                    everywhere: "Lipa svuda",
                    happenings: "Lipa Dešavanja"
                }
            },
            partners_page: {
                badge: "Mreža poverenja",
                title: "Naši Partneri",
                quote: "\"Ponosni smo na dugogodišnju i stabilnu saradnju sa našim istaknutim partnerima, jer zajedno gradimo kvalitet koji naši gosti prepoznaju i vole.\"",
                items: {
                    "1": { name: "Pevac Destilerija", type: "Premium Rakije" },
                    "2": { name: "Rubin Kruševac", type: "Vina i Žestina" },
                    "3": { name: "Vinarija Vojnović", type: "Vrhunska Vina" },
                    "4": { name: "Valjevska pivara", type: "Zanatski duh" },
                    "5": { name: "Apatinska pivara", type: "Tradicija piva" },
                    "6": { name: "Banjalučka pivara", type: "Nektar Pivo" },
                    "7": { name: "Coca Cola Srbija", type: "Bezalkoholna pića" },
                    "8": { name: "Carlsberg Srbija", type: "Piva" }
                }
            },
            // --- NOVO: PREVODI ZA STRANICU PRODAVNICA ---
            shop_page: {
                title_part1: "Pripremamo nešto ",
                title_part2: "specijalno!",
                desc_part1: "Naša online prodavnica majica i pića je trenutno u izradi.",
                desc_part2: "Majstori kucaju kod, a mi biramo najbolje proizvode za vas.",
                badge: "RADOVI U TOKU",
                back_btn: "← Vrati se na početnu"
            },
            location: {
                badge: "Kako do nas",
                title: "Gde se nalazimo?",
                desc: "Smešteni smo u strogom centru Novog Sada, u jednoj od najlepših starih ulica. Lako nas je naći, a još teže otići!",
                address_label: "Adresa",
                address_value: "Svetozara Miletića 9, Novi Sad",
                phone_label: "Telefon za rezervacije",
                hours_label: "Radno Vreme",
                hours_week: "Pon - Čet: 08:00 - 00:00",
                hours_weekend: "Pet - Sub: 08:00 - 01:00",
                nav_button: "Pokreni Navigaciju",
                pin_title: "Bircuz Lipa 1880",
                pin_sub: "Miletićeva 9, 21000 Novi Sad"
            },
        }
    },

    // === ENGLESKI ===
    en: {
        translation: {
            home: {
                title: "Welcome to Lipa",
                subtitle_part1: "A place where tradition meets good company.",
                subtitle_part2: "Relax with the best drinks and authentic atmosphere.",
                cta_button: "Book a Table"
            },
            home_announcements: {
                badge: "Atmosphere & Gathering",
                title: "Want to know what's happening?",
                button: "See Events"
            },
            nav: {
                about: "About Us",
                lipadzije: "Lipadzije", 
                lipadzije_sub: {
                    famous: "Lipa Events",
                    football: "5-a-side Football",
                    quiz: "Lipa Quiz",
                    everywhere: "Lipa Everywhere"
                },
                collab: "Partners",
                collab_sub: {
                    vojnovic: "Vojnovic Winery",
                    rubin: "Rubin Krusevac",
                    nektar: "Nektar"
                },
                prices: "Prices",
                shop: "Shop",
                contact: "Contact"
            },
            about_page: {
                badge: "Since 1880",
                title_main: "Kafana \"Lipa\"",
                title_sub: "The Soul of Old Novi Sad",
                quote: "\"A place where tradition meets good company, and time flows a little slower.\"",
                section1_title: "A Tradition Longer Than a Century",
                section1_text: "Located in the very heart of Novi Sad, in Miletićeva Street (formerly Baker's Alley), Kafana \"Lipa\" has been a sanctuary for over 135 years for all those seeking the authentic city spirit. Since its establishment in 1890, this place has been and remains the unofficial center of the cultural and social life of the Vojvodina's Athens.",
                section2_title: "From \"Linda\" to \"Lipa\"",
                section2_text: "It all started with a tavern keeper of Czech origin, Jozef Obernig, who opened a pub \"Linda\" (Ger. Zur Linde) in the courtyard under an old linden tree. It was a real tavern where the best Czech Pilsner was poured. Later, under the tenant Sava Popović – Golubica, the name got its recognizable Serbian translation that we bear today – Lipa.",
                section3_title: "Where the Greats Sat",
                section3_text: "\"Lipa\" had its famous \"štantiš\" (regular table), where history was written by:",
                section4_title: "The Taste of Tradition in a Modern Guise",
                section4_text: "Today, \"Lipa\" combines the best of the past with modern hospitality. Whether you come for a morning coffee, the famous \"Herzegovinian karst\" or a light homemade coffee, in \"Lipa\" you will feel that calmer, gentlemanly Novi Sad."
            },
            events: {
                gallery_badge: "Gallery of Memories",
                title_prefix: "Chronicle of a",
                title_suffix: "Good Time",
                subtitle: "Some nights are remembered by songs, some by conversations, and some by smiles that were captured. Peek into our album.",
                cta_title: "Want to be part of our story?",
                cta_button: "Follow us for upcoming gig announcements!",
                modal_footer: "Captured at Lipa",
                items: {
                    "1": { title: "Branimir and Enemies", category: "Live Music", desc: "A strong rock'n'roll visual celebrating rebellion, freedom, and the raw energy of the domestic ex-YU rock scene, with the message that rock'n'roll is still alive and unadapted." },
                    "2": { title: "Lipa Trio", category: "Live Music", desc: "On the occasion of City Day, we celebrate Novi Sad at Lipa with morning rock'n'roll and good energy. On Thursday from 11 AM, Trio Lipa brings a gig that wakes up the city and preserves tradition 🎸🍻" },
                    "3": { title: "Welcome", category: "Gathering", desc: "The street was filled with joyful energy as street musicians at Bircuz Lipa welcomed passers-by with warm, playful melodies." },
                    "4": { title: "Morning Warm-up", category: "Atmosphere", desc: "An ideal place for the first (and every subsequent) round of drinks." },
                    "5": { title: "Trio Lipa", category: "Rock’n’Roll", desc: "Morning coffee with the best sound in town! ☕🎸 Trio Lipa raises the atmosphere at Bircuz Lipa. Who says it's too early for rock'n'roll." },
                    "6": { title: "Theater in the House", category: "Acting", desc: "Enjoy a powerful interpretation of Antonio Tabucchi's stories in the play 'The Woman of Porto Pim', masterfully delivered by actor Jugoslav Krajnov in collaboration with SNP within the 'Theater in the House' project." },
                    "7": { title: "Street Musicians", category: "Spirit of the city", desc: "Music with soul. Welcome to another special gathering in front of Lipa! 🎶🥂" }
                }
            },
            menu: {
                title: "Drink Menu",
                subtitle: "Best prices in the heart of Novi Sad",
                select_label: "Choose category",
                empty_state: "Currently no items in this category.",
                currency: "RSD",
                footer_note: "* Prices are in Serbian Dinars. We reserve the right to change prices.",
                categories: {
                    draft_beer: "DRAFT BEER",
                    wines: "WINES",
                    snacks: "SNACKS",
                    bottled_beer: "BOTTLED BEER",
                    house_special: "HOUSE SPECIAL",
                    brandy: "NATURAL BRANDY (RAKIJA)",
                    hard_liquor: "HARD LIQUOR",
                    water: "WATER",
                    soft_drinks: "SOFT DRINKS",
                    hot_drinks: "HOT DRINKS",
                    liqueurs: "LIQUEURS"
                },
                items: {
                    domestic_coffee: "Domestic Coffee",
                    tea_honey: "Tea with Honey",
                    mulled_wine: "Mulled Wine",
                    homemade_chips: "Homemade Chips",
                    peanuts: "Peanuts (salted)"
                }
            },
            football: {
                image_alt: "Lipa Football Team",
                slider_counter: "Image {{current}} of {{total}}",
                badge: "Lipadzije",
                title_1: "More than a game,",
                title_2: "more than a team",
                subtitle_quote: "\"In the heart of Novi Sad, there is a place that nurtures friendship and a welcoming atmosphere – our Bircuz Lipa.\"",
                intro_quote_1: "\"Over the years, Lipa has been and remains a meeting point, a place for exchanging ideas and warmth, where legends like Mika Antić and Laza Kostić once gladly sat. Today, the spirit of that tradition lives on through new generations – through ",
                intro_quote_lipadzije: "Lipadzije",
                intro_quote_2: ".\"",
                desc_1: "Lipadzije are not just loyal guests of our buffet. They are part of the family, youth with attitude, energy, and team spirit. From informal gatherings, the 5-a-side football team 'Lipadzije' was born in 2023 – as a natural extension of what Lipa is: togetherness, passion, and support.",
                desc_2: "Our youth, our regular guests, our friends, show on the pitch everything we learn and nurture off it: fair play, loyalty, teamwork, and heart in every action. Their results are not just victories – they are messages of unity that we all understand.",
                path_to_success: "Path to success",
                success_1: "We started our competitive matches in the Fourth League of Novi Sad, and through dedication on the pitch and good results, we quickly reached the second tier of competition.",
                success_2_start: "The 2024/25 season brought our club the most success: ",
                success_2_h1: "promotion to the Lav League of Vojvodina",
                success_2_mid: " and ",
                success_2_h2: "the trophy for the winner of the City of Novi Sad Cup",
                success_2_end: ". The achieved results did not go unnoticed, followed by an invitation to the Minifootball Serbian Cup 2025, which gathered the 12 best teams from all over Serbia at the Tašmajdan sports center, where our boys reached the quarter-finals.",
                conclusion: "Today, Bircuz Lipa is not just a gathering place – it is a home of sports, art, and good spirit. And Lipadzije? They are the pride of us all. They are the future with a smile, loud support from the stands, and the quiet strength behind every goal.",
                cheers: "We toast and celebrate our successes in Lipa! 🍻",
                video_badge: "Video Recording",
                video_title_1: "Lipadzije in action",
                video_title_2: "Cup Final"
            },
            quiz: {
                image_alt: "Pub Quiz Lipa",
                slider_counter: "Image {{current}} of {{total}}",
                badge: "Pub Quiz Team",
                title_1: "Lipadzije –",
                title_2: "(Very well)",
                title_3: "hidden potential",
                subtitle_quote: "\"From 'I'm telling you!' to the podium – how we turned pub arguments into knowledge.\"",
                desc_1: "Whether we want to admit it or not, one of the basic characteristics of a traditional Serbian pub, especially the guests at the bar, is eternal, friendly competition – who is the smartest here? More accurately – who claims to be the smartest. So, very common phrases heard in the pub are: 'Man, I guarantee you!', 'I'm telling you!', 'Here, check it on the internet...', 'You are wrong'...",
                desc_2_start: "These are the characteristics, we said, of traditional Serbian pubs, which we are, and so it is a characteristic of our Lipa too. Let's not stand out! What we decided to stand out for, however, is channeling these arguments of ours in a different way. Instead of competing with each other, we decided to gather into a team and compete with other teams around the city, to see where we stand. That's how the pub quiz team was born – ",
                desc_2_bold: "Lipadzije!",
                highlight_1: "Through the collaboration of guests and staff who share an enthusiasm for pub quizzes, we have gathered a team that has participated in over fifty quizzes so far, recorded some very good results, but above all, what we are most proud of, had more members than any team in the city. We guarantee you that.",
                desc_3: "Because, apart from the most zealous members, who are also the most regular, dozens of guests of our pub have shown the will and interest to try their hand, gladly went to the quizzes and, in the end, contributed a lot to winning points. Whether they are musicians who recognize a song after two beats on the 'song quest', social scientists who know all the years of the Napoleonic Wars, geography connoisseurs who know the river system of Asia, cinephiles who know all the Oscar winners by heart, or natural scientists who solve 'my number' even before all the digits appear on the screen.",
                card_title: "More than a game",
                card_desc_1: "Of all things, however, we are most pleased that, before every quiz, we would first meet in our Lipa, to 'warm up'. With a glass or two of drink and chatting about possible quiz topics for that evening. Because, of course, the most important thing about a pub quiz team is, simply, hanging out!",
                card_desc_2_start: "The results might have been a bit better, but let's brag a little. It is known that the best sports are watched in Lipa, so among the medals of our football players, which we gladly display in the pub, there are also ",
                card_desc_2_bold: "gold medals from a special edition pub quiz about the English Premier League",
                card_desc_2_end: ". So, it's not just that we play football well, we also know it well!",
                conclusion: "We continue to compete, all together, so we don't have to compete with each other – especially not in the morning, at the bar. Everyone who loves a quiz is welcome!"
            },
            everywhere: {
                badge: "Traveling the world",
                title: "Lipa Everywhere",
                subtitle: "Wherever they go, our guests carry a piece of Lipa with them. Click on the image to read the travel story.",
                read_story: "Read story",
                location_label: "Location",
                footer_note: "Captured on a Lipadzije journey.",
                locations: {
                    "9": { title: "Peyia, Cyprus", desc: "Peyia (also spelled Pegeia) is a picturesque village and municipality in the Paphos District of western Cyprus, known for its beautiful views of the Mediterranean Sea, traditional Cypriot architecture, and as a gateway to popular beaches like Coral Bay." },
                    "1": { title: "Belgrade, Silosi", desc: "Silosi is a former industrial zone in Dorćol, Belgrade, which today is a unique cultural and entertainment space with a bar, art programs, and a view of the Danube." },
                    "2": { title: "Budapest, Hungary", desc: "Budapest is the capital of Hungary and one of the most important cultural, political, and tourist metropolises in Central Europe, known for its cityscape along the Danube, historical thermal baths, and impressive architecture." },
                    "3": { title: "Giza, Egypt", desc: "The Giza Pyramids are three monumental ancient Egyptian tombs built over 4,000 years ago on a plateau near Cairo, including the Great Pyramid of Khufu — the largest and most famous — which have become a symbol of ancient civilization and world cultural heritage." },
                    "4": { title: "Rome, Italy", desc: "The Trevi Fountain in Rome is a magnificent 18th-century Baroque fountain, the most famous in the city, known for the legend that tossing a coin into the water means you will return to Rome." },
                    "5": { title: "Amsterdam, Netherlands", desc: "Amsterdam is the capital of the Netherlands, known for its picturesque canals and liberal culture, and its Red Light District (De Wallen) is a historic central neighborhood famous for its network of narrow alleys with red-lit windows where prostitution is legalized, remaining one of the city's most famous tourist attractions." },
                    "6": { title: "Munich, Germany", desc: "The 2024 UEFA European Football Championship in Germany was the 17th edition of the tournament, held from June 14 to July 14 with 24 national teams and matches across ten different stadiums in major German cities like Berlin, Munich, Dortmund, and Frankfurt, marking the first time Germany hosted the tournament since reunification." },
                    "7": { title: "Fruska Gora, Serbia", desc: "Fruška Gora is a beautiful mountain and national park in Serbia known for its dense forests, vineyards, numerous Orthodox monasteries, and many hiking and recreation trails." },
                    "8": { title: "Barcelona, Spain", desc: "Barcelona is famous for the spectacular Sagrada Família basilica, a masterpiece by architect Antoni Gaudí under construction since 1882, which — when completed — will be one of the tallest religious buildings in the world, attracting millions of visitors every year with its intricate nature-inspired forms." }
                }
            },
            events_page: {
                badge: "Program & Entertainment",
                title: "Music & Events",
                desc: "The best time in town, live music, and sports evenings.",
                empty_title: "We are preparing something special...",
                empty_desc: "We are currently forming the music program for the upcoming period. Follow us to be the first to know who is visiting Lipa!",
                follow_btn: "Follow announcements",
                reserve_btn: "Book a table",
                book_spot_btn: "Book a Spot"
            },
            footer: {
                desc: "A place where the tradition of Novi Sad meets the modern spirit. Premium drinks and memories that last.",
                explore: "Explore",
                visit: "Visit Us",
                address: "Miletićeva 9",
                city: "21000 Novi Sad, Serbia",
                reservations: "Reservations:",
                rights: "© 2026 Kafana Lipa. All rights reserved.",
                terms: "Terms of Use",
                dev: "Development by",
                links: {
                    home: "Home",
                    about: "About Us",
                    menu: "Drink Menu",
                    events: "Events",
                    contact: "Contact",
                    everywhere: "Lipa Everywhere",
                    happenings: "Lipa Happenings"
                }
            },
            partners_page: {
                badge: "Network of Trust",
                title: "Our Partners",
                quote: "\"We are proud of our long-standing and stable cooperation with our distinguished partners, because together we build quality that our guests recognize and love.\"",
                items: {
                    "1": { name: "Pevac Distillery", type: "Premium Brandy" },
                    "2": { name: "Rubin Krusevac", type: "Wines & Spirits" },
                    "3": { name: "Vojnovic Winery", type: "Top Quality Wines" },
                    "4": { name: "Valjevo Brewery", type: "Craft Spirit" },
                    "5": { name: "Apatin Brewery", type: "Beer Tradition" },
                    "6": { name: "Banja Luka Brewery", type: "Nektar Beer" },
                    "7": { name: "Coca Cola Serbia", type: "Soft Drinks" },
                    "8": { name: "Carlsberg Serbia", type: "Beers" }
                }
            },
            // --- NOVO: PREVODI ZA STRANICU PRODAVNICA ENGLESKI ---
            shop_page: {
                title_part1: "We are preparing something ",
                title_part2: "special!",
                desc_part1: "Our online shop for t-shirts and drinks is currently under construction.",
                desc_part2: "The devs are coding, and we are selecting the best products for you.",
                badge: "WORK IN PROGRESS",
                back_btn: "← Back to Home"
            },
            location: {
                badge: "How to find us",
                title: "Where are we located?",
                desc: "We are located in the very heart of Novi Sad, in one of its most beautiful old streets. Easy to find, even harder to leave!",
                address_label: "Address",
                address_value: "Svetozara Miletica 9, Novi Sad",
                phone_label: "Reservation Phone",
                hours_label: "Working Hours",
                hours_week: "Mon - Thu: 08:00 - 00:00",
                hours_weekend: "Fri - Sat: 08:00 - 01:00",
                nav_button: "Start Navigation",
                pin_title: "Bircuz Lipa 1880",
                pin_sub: "Mileticeva 9, 21000 Novi Sad"
            },
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "sr",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;