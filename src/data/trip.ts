export type Stop = {
  name: string;
  note: string;
  noteFast?: string;
  price: string;
  image: string;
  mapsQuery: string;
};

export type DayPlan = {
  day: string;
  title: string;
  mood: string;
  stops: Stop[];
};

export const dayPlans: DayPlan[] = [
  {
    day: "Giorno 1 · 16 Maggio",
    title: "Centro storico + sotterranea + tramonto sul mare",
    mood: "Autentico, iconico, senza fretta.",
    stops: [
      {
        name: "Spaccanapoli & Via dei Tribunali",
        note: "Passeggiata tra vicoli, balconi, street life e pizzette a portafoglio.",
        noteFast: "Passeggiata smart tra i punti più iconici del centro storico.",
        price: "Gratis",
        mapsQuery: "Spaccanapoli Napoli",
        image:
          "https://images.unsplash.com/photo-1656223441986-3074e5fa1313?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Cappella Sansevero + Napoli Sotterranea",
        note: "Cristo Velato e tunnel greco-romani: wow artistico + wow storico.",
        noteFast: "Solo slot principali prenotati per evitare tempi morti.",
        price: "52 € in due",
        mapsQuery: "Cappella Sansevero Napoli",
        image:
          "https://images.unsplash.com/photo-1645824749118-e39bc8f8f85f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Lungomare, Castel dell'Ovo, Monte Echia",
        note: "Golden hour con Vesuvio sullo sfondo e graffa finale da Chalet Ciro.",
        noteFast: "Passeggiata al tramonto + 1 belvedere + dolce veloce.",
        price: "Quasi tutto gratis",
        mapsQuery: "Castel dell'Ovo Napoli",
        image:
          "https://images.unsplash.com/photo-1589209480226-4208f8f4f8f6?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  },
  {
    day: "Giorno 2 · 17 Maggio",
    title: "Chiostri colorati + Quartieri Spagnoli + panorama alto",
    mood: "Vibrazioni artistiche e panorami da cartolina.",
    stops: [
      {
        name: "Santa Chiara + Gesù Nuovo",
        note: "Maioliche, luce e barocco spettacolare in pieno centro.",
        noteFast: "Focus su Chiostro + vista esterna Gesù Nuovo.",
        price: "~14 € in due",
        mapsQuery: "Complesso Monumentale di Santa Chiara",
        image:
          "https://images.unsplash.com/photo-1710840895642-a2af9c8eb5e3?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Murales Maradona + Galleria Umberto + Toledo",
        note: "Napoli pop, iconica e scenografica in poche tappe ravvicinate.",
        noteFast: "Tour fotografico rapido delle 3 tappe simbolo.",
        price: "Gratis",
        mapsQuery: "Murales Maradona Napoli",
        image:
          "https://images.unsplash.com/photo-1590075865003-e48b22f3136c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Castel Sant'Elmo",
        note: "Arrivo in funicolare e vista totale sulla città al tramonto.",
        noteFast: "Vista panoramica con salita ottimizzata in funicolare.",
        price: "~13 € in due con funicolare",
        mapsQuery: "Castel Sant'Elmo Napoli",
        image:
          "https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  },
  {
    day: "Giorno 3 · 18 Maggio",
    title: "Zona monumentale + sfogliatella + aeroporto",
    mood: "Finale elegante e dolce, zero stress.",
    stops: [
      {
        name: "Maschio Angioino + Plebiscito + San Carlo",
        note: "Un concentrato di Napoli monumentale prima del rientro.",
        noteFast: "Walk monumentale con fermate foto nei punti chiave.",
        price: "Gratis (interni opzionali)",
        mapsQuery: "Maschio Angioino Napoli",
        image:
          "https://images.unsplash.com/photo-1629398689632-6c323e2ef017?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Palazzo Reale (opzionale)",
        note: "Se c'è tempo: interno ricco, elegante e scenico.",
        noteFast: "Solo esterno se i tempi sono stretti.",
        price: "~20 € in due",
        mapsQuery: "Palazzo Reale Napoli",
        image:
          "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Sfogliatelle Attanasio + Alibus",
        note: "Ultimo morso iconico e poi navetta per il volo delle 18:20.",
        noteFast: "Dolce take-away e partenza da Municipio entro le 16:00.",
        price: "~11 € in due",
        mapsQuery: "Sfogliatelle Attanasio Napoli",
        image:
          "https://images.unsplash.com/photo-1579208570378-8c970854bc23?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  },
];

export const emotionalMap = [
  { label: "Romanticismo", value: 95, icon: "💜" },
  { label: "Avventura", value: 88, icon: "🕳️" },
  { label: "Food Happiness", value: 99, icon: "🍕" },
  { label: "Panorami WOW", value: 92, icon: "🌅" },
  { label: "Relax", value: 81, icon: "🧘" },
];

export const foodHighlights = [
  {
    name: "Pizzeria Di Matteo",
    type: "Street food mattina",
    tip: "Pizza a portafoglio: con o senza mollica? Test di coppia obbligatorio.",
    price: "2–3 €",
  },
  {
    name: "Antica Pizzeria Port'Alba",
    type: "Cena iconica",
    tip: "Pizzeria storica del 1738. Mood: classico + romantico.",
    price: "10–15 €",
  },
  {
    name: "Da Nennella / Panarié",
    type: "Pranzo giorno 2",
    tip: "Versione folklore vs versione più intima. Scegliete il mood del giorno.",
    price: "15–30 €",
  },
  {
    name: "Signora Bettola / La Lazzara",
    type: "Cena giorno 2",
    tip: "Tradizione curata o porto romantico: entrambe promosse.",
    price: "25–35 €",
  },
  {
    name: "Chalet Ciro + Attanasio",
    type: "Dolci bonus",
    tip: "Graffa calda sul lungomare + sfogliatella prima dell'aeroporto.",
    price: "2–3 €",
  },
];

export const mapPins = [
  "Spaccanapoli",
  "Cappella Sansevero",
  "Napoli Sotterranea",
  "Lungomare Caracciolo",
  "Castel Sant'Elmo",
  "Piazza del Plebiscito",
  "Sfogliatelle Attanasio",
];
