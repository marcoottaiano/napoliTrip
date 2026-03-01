export type Stop = {
  name: string;
  note: string;
  price: string;
  image: string;
  details?: string[];
};

export type DayPlan = {
  day: string;
  title: string;
  mood: string;
  stops: Stop[];
};

export type FoodHighlight = {
  name: string;
  type: string;
  tip: string;
  price: string;
};

export type TransportItem = {
  name: string;
  detail: string;
  price: string;
};

export type CostItem = {
  label: string;
  amount: string;
};

export const dayPlans: DayPlan[] = [
  {
    day: "Giorno 1 - 16 Maggio",
    title: "Centro storico, sotterranea e tramonto sul mare",
    mood: "Giornata piena ma fattibile tutta a piedi nella prima parte.",
    stops: [
      {
        name: "Spaccanapoli",
        note: "La strada simbolo del centro antico: vicoli, balconi e atmosfera napoletana vera.",
        price: "Gratis",
        image: "https://static.fernwayer.com/bYeD.large.jpg",
        details: ["Perfetta per iniziare la mattina", "Tappa fotografica continua"],
      },
      {
        name: "Via dei Tribunali",
        note: "Il cuore storico tra palazzi antichi e pizzerie iconiche.",
        price: "Gratis",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Napoli_-_Via_dei_Tribunali.jpg",
        details: ["Da fare subito dopo Spaccanapoli", "Zona molto viva tutto il giorno"],
      },
      {
        name: "Madonna con la Pistola (Banksy)",
        note: "L'unico Banksy in Italia: passaggio rapido ma super iconico.",
        price: "Gratis",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a0/65/b7/primo-piano.jpg?w=900&h=-1&s=1",
        details: ["Bastano 5 minuti", "Meglio foto veloce e si riparte"],
      },
      {
        name: "San Gregorio Armeno",
        note: "La via dei presepi artigianali, piena di botteghe storiche.",
        price: "Gratis",
        image: "https://www.latitudinex.com/wp-content/uploads/2021/11/San-Gregorio-Armeno-statuine.jpg",
        details: ["Molto caratteristica", "Ideale per souvenir particolari"],
      },
      {
        name: "Duomo di Napoli",
        note: "Cattedrale scenografica con Cappella del Tesoro molto bella.",
        price: "Gratis",
        image: "https://muddnapoli.it/wp-content/uploads/2025/09/hero-duomo-mudd-napoli.jpg",
        details: ["Ingresso gratuito", "Merita una sosta tranquilla"],
      },
      {
        name: "Cappella Sansevero",
        note: "Cristo Velato: una delle opere piu impressionanti d'Italia.",
        price: "EUR 16 in due",
        image: "https://back.museosansevero.it/uploads/statua-cristo-velato-napoli-1.jpg",
        details: ["EUR 8 a persona", "Prenotazione dal 17 marzo 2026", "Conviene bloccare lo slot con anticipo"],
      },
      {
        name: "Napoli Sotterranea",
        note: "Tunnel greco-romani e rifugi bellici: tappa molto suggestiva.",
        price: "EUR 36 in due",
        image: "https://enjoy.vivi.city/images/enjoyvivicity/napoli-sotterranea/napoli-sotterranea-top.jpg",
        details: ["EUR 18 a persona", "Durata circa 1h30", "Meglio prenotare online"],
      },
      {
        name: "Lungomare Caracciolo",
        note: "Passeggiata vista Vesuvio per rallentare il ritmo nel pomeriggio.",
        price: "Gratis",
        image: "https://www.napoliving.it/wp-content/uploads/2022/07/Lungomare-Caracciolo-Napoli.jpg",
        details: ["Perfetto verso golden hour", "Tratto molto romantico"],
      },
      {
        name: "Castel dell'Ovo",
        note: "Il castello piu antico della citta, sul mare.",
        price: "Gratis",
        image: "https://www.metroitalia.info/img/place/castello-dell-ovo.webp",
        details: ["Verificare orari di apertura", "Panorama molto bello"],
      },
      {
        name: "Fontana del Gigante + Monte Echia",
        note: "Fontana barocca e belvedere panoramico con ascensore.",
        price: "Gratis",
        image: "https://i0.wp.com/www.eroidelgusto.it/wp-content/uploads/2023/03/Fontana-del-Gigante.jpg",
        details: ["Ascensore Monte Echia gratuito", "Ottima chiusura prima di cena"],
      },
    ],
  },
  {
    day: "Giorno 2 - 17 Maggio",
    title: "Chiostri, quartieri e panorama dall'alto",
    mood: "Mix perfetto tra arte, atmosfera locale e viste panoramiche.",
    stops: [
      {
        name: "Complesso Monumentale di Santa Chiara",
        note: "Chiostro maiolicato coloratissimo, una delle tappe piu belle.",
        price: "EUR 14 in due",
        image: "https://www.arte.it/foto/600x450/5f/51739-shutterstock_440184097.jpg",
        details: ["Circa EUR 7 a persona", "Meglio andare non troppo tardi"],
      },
      {
        name: "Chiesa del Gesu Nuovo",
        note: "Barocco spettacolare a due passi da Santa Chiara.",
        price: "Gratis",
        image: "https://www.palazzidinapoli.it/wp-content/uploads/2023/11/IMG_9192.jpg",
        details: ["Interno molto scenografico", "Sosta breve ma consigliata"],
      },
      {
        name: "Murales di Maradona",
        note: "Tappa simbolo della citta, sempre piena di energia.",
        price: "Gratis",
        image: "https://www.artribune.com/wp-content/uploads/2023/11/murale-maradona-napoli-bosoletti.jpg",
        details: ["Perfetta per foto ricordo", "In zona Quartieri Spagnoli"],
      },
      {
        name: "Galleria Umberto I",
        note: "Cupola liberty elegante e luminosa.",
        price: "Gratis",
        image: "https://www.espressonapoletano.it/wp-content/uploads/2019/03/14836766353_9390a060b6_b.jpg",
        details: ["Tappa rapida", "Vicino a Toledo e San Carlo"],
      },
      {
        name: "Stazione Toledo",
        note: "La metro artistica piu famosa di Napoli.",
        price: "Gratis con titolo viaggio",
        image: "https://www.napolidavivere.it/wp-content/uploads/bfi_thumb/stazione-toledo-4-6xmldb1x9ld5jk2mr5vv42g595gja1xclannffc5u8g.jpg",
        details: ["Vale la pena anche solo per le foto", "Comoda per gli spostamenti"],
      },
      {
        name: "Castel Sant'Elmo",
        note: "Vista spettacolare dall'alto su tutta Napoli.",
        price: "EUR 10 in due",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4k9opkzDT5pf5SRTojY_ADFjKTjBZTUacPA&s",
        details: ["Circa EUR 5 a persona", "Funicolare circa EUR 1.50"],
      },
    ],
  },
  {
    day: "Giorno 3 - 18 Maggio",
    title: "Zona monumentale e partenza",
    mood: "Ultime tappe eleganti, ritmi leggeri e chiusura perfetta.",
    stops: [
      {
        name: "Maschio Angioino",
        note: "Castello medievale imponente nel cuore della zona monumentale.",
        price: "Esterno gratis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbRmI6pVRTyaEWyO7BQTK-ODHxy50jHr3RA&s",
        details: ["Interno circa EUR 6 a persona", "Valutare in base ai tempi"],
      },
      {
        name: "Piazza del Plebiscito",
        note: "La piazza monumentale per eccellenza a Napoli.",
        price: "Gratis",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/74/P.Plebiscito_Napoli.jpg",
        details: ["Ampia e scenografica", "Ottima per ultime foto"],
      },
      {
        name: "Basilica di San Francesco di Paola",
        note: "Chiesa neoclassica elegante davanti alla piazza.",
        price: "Gratis",
        image: "https://www.santuariopaola.it/nuovo/images/articoli/facciata.jpg",
        details: ["Visita rapida", "Interni ordinati e luminosi"],
      },
      {
        name: "Palazzo Reale di Napoli",
        note: "Facciata iconica; interni solo se resta tempo.",
        price: "Esterno gratis0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREi-yaWOjVAFLl3r_hyHUtbzZKQ761WgFfqg&s",
        details: ["Interno circa EUR 10 a persona", "Opzionale in base all'orario"],
      },
      {
        name: "Teatro di San Carlo",
        note: "Esterno elegante a due passi da Plebiscito.",
        price: "Gratis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3knHjQyOEcpmw2i4NzH9Hpd-RdBLQpG-mw&s",
        details: ["Tappa breve", "Contesto molto bello la sera"],
      },
      {
        name: "Sfogliatelle Attanasio",
        note: "Sfogliatella calda prima di prendere l'Alibus.",
        price: "EUR 2-3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUe9Ce2y52uMxGDelutM1hxhLxx4Dv8zMtA&s",
        details: ["Ultimo snack iconico", "Comoda prima della partenza"],
      },
    ],
  },
];

export const emotionalMap = [
  { label: "Romanticismo", value: 95, icon: "❤️" },
  { label: "Avventura", value: 88, icon: "🧭" },
  { label: "Food happiness", value: 99, icon: "🍕" },
  { label: "Panorami", value: 92, icon: "🌅" },
  { label: "Relax", value: 81, icon: "🌿" },
  { label: "Pisolini", value: 86, icon: "😴" },
  { label: "Coccoline", value: 100, icon: "🤗" },
];

export const foodHighlights: FoodHighlight[] = [
  {
    name: "Pizzeria Di Matteo",
    type: "Street food mattina",
    tip: "Pizza a portafoglio: senza mollica consigliato.",
    price: "EUR 2-3",
  },
  {
    name: "Antica Pizzeria Port'Alba",
    type: "Cena giorno 1",
    tip: "Pizzeria storica dal 1738, atmosfera classica.",
    price: "EUR 10-15 a persona",
  },
  {
    name: "Trattoria Da Nennella",
    type: "Pranzo giorno 2 - opzione A",
    tip: "Folklore napoletano, ambiente vivace.",
    price: "EUR 15-25",
  },
  {
    name: "Trattoria Panarie",
    type: "Pranzo giorno 2 - opzione B",
    tip: "Piu tranquilla e curata.",
    price: "EUR 20-30",
  },
  {
    name: "Signora Bettola",
    type: "Cena giorno 2 - opzione A",
    tip: "Tradizione curata, piatti solidi.",
    price: "EUR 25-35",
  },
  {
    name: "Trattoria La Lazzara",
    type: "Cena giorno 2 - opzione B",
    tip: "Zona porto, atmosfera piu romantica.",
    price: "EUR 25-35",
  },
  {
    name: "Chalet Ciro + Attanasio",
    type: "Dolci bonus",
    tip: "Graffa calda sul lungomare + sfogliatella finale.",
    price: "EUR 2-3",
  },
];

export const optionalFoodSpots = [
  "Con Mollica o Senza",
  "Pizzeria La Masardona",
  "Poppella",
  "Passione di Sofi",
  "Puok",
  "Cisbu",
];

export const transportInfo: TransportItem[] = [
  {
    name: "Biglietto singolo",
    detail: "Utile per tratte occasionali",
    price: "EUR 1.50",
  },
  {
    name: "Giornaliero",
    detail: "Consigliato soprattutto il giorno 2",
    price: "EUR 4.50",
  },
  {
    name: "Alibus aeroporto",
    detail: "Durata 20-30 min. Per volo 18:20, partenza da Municipio entro 16:00",
    price: "EUR 5 a persona",
  },
  {
    name: "Funicolare",
    detail: "Per Castel Sant'Elmo (se non inclusa nel giornaliero)",
    price: "EUR 1.50 circa",
  },
];

export const activityCosts: CostItem[] = [
  { label: "Cappella Sansevero", amount: "EUR 16" },
  { label: "Napoli Sotterranea", amount: "EUR 36" },
  { label: "Santa Chiara", amount: "EUR 14" },
  { label: "Castel Sant'Elmo", amount: "EUR 10" },
  { label: "Maschio Angioino interno (opz.)", amount: "EUR 12" },
  { label: "Palazzo Reale interno (opz.)", amount: "EUR 20" },
];

export const baseCostForTwo = "Base certa: EUR 76 in due";
