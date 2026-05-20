import { assetPath } from "../utils/assetPath";

export const companyInfo = {
  name: "MCVC",
  baseline: "Climatisation • Plomberie • Chauffage • Pompes à chaleur",
  phoneDisplay: "07 49 88 75 29",
  phoneHref: "+33749887529",
  email: "contact@mcvc.fr",
  address: "23 avenue Docteur Hochet, 06160 Antibes",
  city: "Antibes",
  mapsUrl:
    "https://www.google.fr/maps/place/MCVC+-+CLIMATISATION+%2F+PLOMBERIE+%2F+CHAUFFAGE/@43.9198944,6.5178443,9z/data=!3m1!4b1!4m6!3m5!1s0x65d52b91b55c6ecb:0xefd9ef4b1f811dd2!8m2!3d43.9208006!4d7.1772014!16s%2Fg%2F11svfsbx4y?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=MCVC%20-%20CLIMATISATION%20%2F%20PLOMBERIE%20%2F%20CHAUFFAGE%4043.9208006,7.1772014&z=11&output=embed",
  facebookUrl: "https://www.facebook.com/mcvc06/",
  instagramUrl: "https://www.instagram.com/mcvc_alpesmaritimes/",
  tiktokUrl: "",
};

export const heroSlides = [
  {
    title: "Climatisation",
    subtitle: "Installation, entretien et dépannage de systèmes performants",
    image: assetPath("assets/home/climatisation.png"),
  },
  {
    title: "Plomberie & sanitaire",
    subtitle: "Neuf, rénovation, dépannage et équipements haut de gamme",
    image: assetPath("assets/home/plomberie-sanitaire.png"),
  },
  {
    title: "Chauffage & pompe à chaleur",
    subtitle: "Solutions économiques, fiables et adaptées à votre logement",
    image: assetPath("assets/home/chauffage-pac.png"),
  },
];

export const flyerHighlights = [
  {
    title: "Devis gratuit",
    text: "Matériel et pose inclus",
  },
  {
    title: "Filtre anti-virus 99%",
    text: "Selon équipements compatibles",
  },
  {
    title: "Technologie Inverter",
    text: "Économie d’énergie avancée",
  },
  {
    title: "Société locale",
    text: "Français • Travail soigné • Prix compétitifs",
  },
];

export const partnerBrands = [
  {
    name: "LG",
    logo: assetPath("assets/brands/lg.svg"),
  },
  {
    name: "Mitsubishi Electric",
    logo: assetPath("assets/brands/mitsubishi-electric.svg"),
  },
  {
    name: "Daikin",
    logo: assetPath("assets/brands/daikin.svg"),
  },
  {
    name: "Toshiba",
    logo: assetPath("assets/brands/toshiba.svg"),
  },
  {
    name: "Panasonic",
    logo: assetPath("assets/brands/panasonic.svg"),
  },
];

export const googleReviews = [
  {
    author: "Coralie Pinatel",
    rating: 5,
    stars: "★★★★★",
    publishedAt: "2026-05-13",
    text:
      "Je recommande à 100 % cette entreprise pour son professionnalisme, sa rapidité, la qualité du service et la gentillesse de ses employés.",
  },
  {
    author: "Émilie Riviere",
    rating: 5,
    stars: "★★★★★",
    publishedAt: "2026-05-13",
    text:
      "Cela fait de nombreuses fois que nous faisons appel à Mickael, dynamique, à l’écoute et très professionnel. Il est un spécialiste dans son secteur que je recommande vivement !",
  },
  {
    author: "Heddy Massolin",
    rating: 5,
    stars: "★★★★★",
    publishedAt: "2026-04-20",
    text:
      "Installation de chauffage parfaite ! Travail très professionnel du début à la fin. Les conseils avant l’installation étaient clairs, le matériel de qualité et la pose soignée. Respect des délais, chantier propre et fonctionnement impeccable.",
  },
  {
    author: "Tom Gosse",
    rating: 5,
    stars: "★★★★★",
    publishedAt: "2026-04-20",
    text:
      "Nous avons fait appel à ce plombier chauffagiste pour l’installation d’une climatisation dans deux chambres de notre appartement. Intervention rapide, travail propre, soigné et réalisé avec beaucoup de professionnalisme. Communication simple, claire et réactive du début à la fin.",
  },
  {
    author: "Maria Isabel Cristi",
    rating: 5,
    stars: "★★★★★",
    publishedAt: "2026-04-20",
    text:
      "Excellent professionnel, intervient très rapidement de façon satisfaisante. Excellent travail.",
  },
];

export const googleReviewsSummary = {
  rating: 5,
  stars: "★★★★★",
  totalLabel: "Avis Google",
};