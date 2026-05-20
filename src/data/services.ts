export type ServiceItem = {
  title: string;
  text: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  menuLabel: string;
  shortDescription: string;
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    id: "climatisation",
    title: "Climatisation",
    menuLabel: "Climatisation",
    shortDescription:
      "Installation, entretien et dépannage de systèmes de climatisation performants et durables.",
    items: [
      {
        title: "Climatiseurs muraux",
        text: "Pose de climatisations split pour rafraîchir ou chauffer efficacement une ou plusieurs pièces.",
      },
      {
        title: "Climatisation gainable",
        text: "Solution discrète et haut de gamme, intégrée dans les plafonds ou faux-plafonds.",
      },
      {
        title: "Entretien",
        text: "Nettoyage, contrôle et optimisation de l’installation pour préserver les performances.",
      },
      {
        title: "Dépannage",
        text: "Diagnostic et intervention rapide en cas de panne, fuite, bruit anormal ou manque de froid.",
      },
    ],
  },
  {
    id: "plomberie",
    title: "Plomberie & sanitaire",
    menuLabel: "Plomberie / Sanitaire",
    shortDescription:
      "Travaux de plomberie en neuf, rénovation, dépannage et installations sanitaires haut de gamme.",
    items: [
      {
        title: "Installations neuves",
        text: "Réseaux d’eau chaude et froide, évacuations, sanitaires, VMC, chauffe-eau et équipements thermiques.",
      },
      {
        title: "Rénovation",
        text: "Modernisation de salle de bain, cuisine ou remise à niveau complète de l’installation.",
      },
      {
        title: "Dépannage & urgences",
        text: "Fuite d’eau, problème de pression, chauffe-eau en panne ou canalisation bouchée.",
      },
      {
        title: "Chauffe-eau",
        text: "Installation, remplacement et dépannage de chauffe-eau électriques ou thermodynamiques.",
      },
      {
        title: "Projets haut de gamme",
        text: "Pose de robinetteries, corps encastrés et équipements sanitaires pour villas et appartements d’exception.",
      },
    ],
  },
  {
    id: "chauffage",
    title: "Chauffage",
    menuLabel: "Chauffage",
    shortDescription:
      "Solutions de chauffage modernes : pompes à chaleur, planchers chauffants et radiateurs.",
    items: [
      {
        title: "Pompes à chaleur",
        text: "Installation, maintenance et dépannage de systèmes air/air ou air/eau.",
      },
      {
        title: "Plancher chauffant",
        text: "Conception et pose de réseaux pour une chaleur douce, homogène et silencieuse.",
      },
      {
        title: "Radiateurs",
        text: "Dépannage, remplacement, modification et optimisation des réseaux de chauffage.",
      },
    ],
  },
];