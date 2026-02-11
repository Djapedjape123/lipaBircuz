import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    // === SRPSKI ===
    sr: {
        translation: {
            nav: {
                about: "O Kafani",
                lipadzije: "Lipadžije",
                lipadzije_sub: {
                    famous: "Poznate Lipadžije",
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
            // --- NOVO: PREVODI ZA STRANICU CENE ---
            menu: {
                title: "Karta Pića",
                subtitle: "Najbolje cene u srcu Novog Sada",
                select_label: "Izaberi kategoriju",
                empty_state: "Trenutno nema artikala u ovoj kategoriji.",
                currency: "RSD",
                footer_note: "* Cene su izražene u dinarima. Zadržavamo pravo izmene cena.",
                
                // Kategorije
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
                // Imena pića (Samo ona koja se prevode, brendovi ostaju isti)
                items: {
                    domestic_coffee: "Domaća Kafa",
                    tea_honey: "Čaj sa medom",
                    mulled_wine: "Kuvano Vino",
                    homemade_chips: "Čips 95g",
                    peanuts: "Kikiriki pikant 150g"
                }
            }
        }
    },

    // === ENGLESKI ===
    en: {
        translation: {
            nav: {
                about: "About Us",
                lipadzije: "Lipadzije", 
                lipadzije_sub: {
                    famous: "Famous Lipadzije",
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
            // --- NOVO: ENGLESKI PREVODI ZA CENE ---
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
            }
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