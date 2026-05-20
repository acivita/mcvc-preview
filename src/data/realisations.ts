import { assetPath } from "../utils/assetPath";

export type RealisationCategory =
  | "Projet complet"
  | "Climatisation"
  | "Plomberie"
  | "Chauffage"
  | "Ventilation"
  | "Salle de bain";

export type RealisationDetail = {
  title: string;
  items: string[];
};

export type Realisation = {
  id: string;
  title: string;
  categories: RealisationCategory[];
  tags: string[];
  city: string;
  period: string;
  surface?: string;
  service: string;
  intervention: string;
  duration: string;
  description: string;
  details: RealisationDetail[];
  images: string[];
};

function createImagePaths(folder: string, count: number) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return assetPath(`assets/realisations/${folder}/${number}.jpg`);
  });
}

export const realisationCategories: RealisationCategory[] = [
  "Projet complet",
  "Climatisation",
  "Plomberie",
  "Chauffage",
  "Ventilation",
  "Salle de bain",
];

export const realisations: Realisation[] = [
  {
    id: "villa-cannet-250m2",
    title: "Villa 250 m² au Cannet",
    categories: [
      "Projet complet",
      "Plomberie",
      "Chauffage",
      "Climatisation",
      "Ventilation",
      "Salle de bain",
    ],
    tags: [
      "Villa 250 m²",
      "Projet complet",
      "Plomberie sanitaire",
      "3 salles d’eau",
      "Salle de bain",
      "WC indépendants",
      "Buanderie",
      "Cuisine",
      "Chaufferie",
      "Chauffe-eau 300 L",
      "Bouclage ECS",
      "Eaux pluviales zinc",
      "Collecteurs aller / retour",
      "Nourrices chauffage",
      "Plancher chauffant",
      "Pompe à chaleur air/eau",
      "Daikin Altherma 3",
      "Climatisation VRF",
      "Atlantic",
      "Plénums sur mesure",
      "Grilles fantômes",
      "Soufflage invisible",
      "Reprise d’air invisible",
      "VMC simple flux",
      "Gaine rigide galvanisée",
      "13 bouches de ventilation",
    ],
    city: "Le Cannet",
    period: "Avril 2025 - Février 2026",
    surface: "250 m²",
    service:
      "Plomberie, sanitaires, chauffage, climatisation VRF et ventilation",
    intervention:
      "Réalisation complète des lots techniques pour une villa de 250 m²",
    duration: "Avril 2025 - Février 2026",
    description:
      "Livraison d’une villa de 250 m² au Cannet avec réalisation complète des installations sanitaires, chauffage, climatisation et ventilation.",
    details: [
      {
        title: "Plomberie - Sanitaires",
        items: [
          "Réalisation de 3 salles d’eau dont une salle de bain",
          "Réalisation de 2 WC indépendants avec lave-main",
          "Création d’une buanderie avec évier",
          "Création d’une cuisine",
          "Réalisation d’une chaufferie avec les réseaux sanitaire et chauffage",
          "Pose d’un chauffe-eau électrique 300 L en complément de la pompe à chaleur",
          "Réalisation d’un système de bouclage pour l’eau chaude sanitaire",
          "Descentes d’eaux pluviales en zinc avec boîte à eau",
        ],
      },
      {
        title: "Chauffage",
        items: [
          "Réalisation de collecteurs aller / retour avec pose de nourrices",
          "Réalisation d’un plancher chauffant dans toutes les pièces",
          "Pose d’une pompe à chaleur air/eau Daikin Altherma 3",
        ],
      },
      {
        title: "Climatisation",
        items: [
          "Réalisation d’un système VRF Atlantic",
          "Création de plénums sur mesure",
          "Pose de grilles fantômes",
          "Soufflage et reprise d’air invisibles",
        ],
      },
      {
        title: "Ventilation",
        items: [
          "Réalisation d’un réseau de VMC en gaine rigide galvanisée",
          "Pose d’un moteur simple flux",
          "Pose de 13 bouches réglées selon le débit recommandé",
        ],
      },
    ],
    images: createImagePaths("villa-cannet-250m2", 20),
  },
  {
    id: "metropolitain-nice-iconic",
    title: "Salle Métropolitain - Iconic Nice",
    categories: [
      "Projet complet",
      "Plomberie",
      "Chauffage",
      "Climatisation",
      "Salle de bain",
    ],
    tags: [
      "Salle de sport",
      "Métropolitain",
      "Iconic Nice",
      "Nice gare Thiers",
      "2 étages",
      "Projet complet",
      "Plomberie sanitaire",
      "7 WC suspendus",
      "17 lavabos",
      "25 douches",
      "2 urinoirs",
      "Salle de soin",
      "Espace bar",
      "Cuisine",
      "Alimentation saunas",
      "3 fontaines à eau",
      "Collecteurs EFS",
      "Collecteurs ECS",
      "Collecteurs BCL",
      "Condensats climatisation",
      "Chaufferie",
      "Production ECS",
      "Eau adoucie",
    ],
    city: "Nice",
    period: "7 mois de travaux",
    service:
      "Plomberie, sanitaires, chaufferie, production d’eau chaude, eau adoucie et condensats climatisation",
    intervention:
      "Création complète des réseaux techniques pour la salle Métropolitain dans le bâtiment Iconic à Nice gare Thiers",
    duration: "7 mois",
    description:
      "Réalisation des installations techniques de la nouvelle salle Métropolitain dans le bâtiment Iconic à Nice gare Thiers, sur deux étages. Cette salle marque la deuxième implantation en France de la chaîne espagnole après CAP 3000.",
    details: [
      {
        title: "Plomberie - Sanitaires",
        items: [
          "Création de 7 WC suspendus",
          "Pose de 17 lavabos",
          "Création de 25 douches",
          "Pose de 2 urinoirs",
          "Pose de 2 lavabos en salle de soin / massage",
          "Création d’un espace bar et cuisine",
          "Alimentation de 2 saunas",
          "Pose de 3 fontaines à eau",
        ],
      },
      {
        title: "Réseaux techniques",
        items: [
          "Création des collecteurs EFS",
          "Création des collecteurs ECS",
          "Création des collecteurs BCL",
          "Gestion des condensats des climatiseurs",
          "Organisation des réseaux sur deux étages",
        ],
      },
      {
        title: "Chaufferie",
        items: [
          "Réalisation de la chaufferie",
          "Production d’eau chaude sanitaire",
          "Mise en place de l’eau adoucie",
          "Raccordement des équipements sanitaires",
        ],
      },
      {
        title: "Contexte du chantier",
        items: [
          "Salle Métropolitain dans le bâtiment Iconic à Nice gare Thiers",
          "Projet réalisé sur 2 étages",
          "Deuxième implantation française de la chaîne après CAP 3000",
          "7 mois de travaux",
        ],
      },
    ],
    images: createImagePaths("metropolitain-nice-iconic", 8),
  },
  {
    id: "appartement-cannet-regalia-100m2",
    title: "Appartement 100 m² au Cannet",
    categories: [
      "Projet complet",
      "Plomberie",
      "Climatisation",
      "Salle de bain",
    ],
    tags: [
      "Appartement 100 m²",
      "Le Cannet",
      "Regalia Concept",
      "Projet complet",
      "Plomberie sanitaire",
      "1 salle de bain",
      "2 salles de douche",
      "Climatisation gainable",
      "Système Airzone",
      "3 chambres",
      "Grande pièce à vivre",
      "2 groupes extérieurs",
      "Gainable chambres",
      "Gainable séjour",
    ],
    city: "Le Cannet",
    period: "Chantier au Cannet",
    surface: "100 m²",
    service:
      "Plomberie sanitaire et climatisation gainable avec système Airzone",
    intervention:
      "Réalisation plomberie et climatisation pour un appartement de 100 m² en partenariat avec Regalia Concept",
    duration: "Selon chantier",
    description:
      "Chantier réalisé au Cannet en partenariat avec Regalia Concept pour un appartement de 100 m², comprenant les lots plomberie sanitaire et climatisation gainable.",
    details: [
      {
        title: "Plomberie",
        items: [
          "Réalisation d’une salle de bain",
          "Réalisation de 2 salles de douche",
          "Création des réseaux sanitaires nécessaires au projet",
          "Adaptation technique à l’aménagement de l’appartement",
        ],
      },
      {
        title: "Climatisation",
        items: [
          "Pose de 2 groupes extérieurs",
          "Installation d’un gainable avec système Airzone pour les 3 chambres",
          "Installation d’un gainable pour la grande pièce à vivre",
          "Gestion du confort pièce par pièce",
        ],
      },
      {
        title: "Partenariat",
        items: [
          "Chantier réalisé en partenariat avec Regalia Concept",
          "Coordination avec l’aménagement intérieur",
          "Intégration discrète des équipements techniques",
        ],
      },
    ],
    images: createImagePaths("appartement-cannet-regalia-100m2", 7),
  },
];