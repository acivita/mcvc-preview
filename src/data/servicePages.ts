export type ServicePageSection = {
  label: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  items: string[];
};

export type ServicePageData = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  sections: ServicePageSection[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "climatisation",
    title: "Climatisation",
    subtitle:
      "Installation murale, climatisation gainable, entretien et dépannage.",
    heroImage: "/assets/services/climatisation-murale.png",
    intro:
      "Spécialistes en climatisation et solutions de confort thermique, nous accompagnons les particuliers et les professionnels dans l’installation, l’entretien et le dépannage de systèmes performants et durables. L’objectif : vous garantir une température idéale toute l’année, avec des équipements fiables, bien dimensionnés et adaptés à votre usage.",
    sections: [
      {
        label: "Installation",
        title: "Climatisation murale split",
        text:
          "La climatisation murale split est une solution efficace pour rafraîchir ou chauffer une ou plusieurs pièces. Nous étudions la configuration du logement afin de positionner les unités de manière optimale, pour une diffusion d’air homogène, un fonctionnement silencieux et une installation propre.",
        image: "/assets/services/climatisation-murale.png",
        imageAlt:
          "Climatisation murale split installée dans un intérieur moderne",
        items: [
          "Étude de la configuration des pièces",
          "Pose propre des unités intérieures et extérieures",
          "Diffusion d’air homogène",
          "Conseil sur les modèles performants et économiques",
        ],
      },
      {
        label: "Confort haut de gamme",
        title: "Climatisation gainable encastrée",
        text:
          "Pour les villas modernes, les rénovations soignées et les intérieurs où l’esthétique compte, la climatisation gainable permet une intégration discrète dans les plafonds ou faux-plafonds. Le système offre une diffusion douce, silencieuse et personnalisable pièce par pièce.",
        image: "/assets/services/climatisation-gainable.png",
        imageAlt:
          "Climatisation gainable encastrée avec grille discrète au plafond",
        items: [
          "Intégration invisible dans les plafonds",
          "Diffusion douce et uniforme",
          "Réglage pièce par pièce selon les besoins",
          "Possibilité de grilles discrètes ou grilles fantômes",
        ],
      },
      {
        label: "Entretien",
        title: "Maintenir performance, confort et qualité d’air",
        text:
          "Un entretien régulier permet de conserver les performances de votre climatisation ou de votre pompe à chaleur, d’éviter les pannes imprévues et de préserver la qualité de l’air intérieur. C’est aussi un moyen de prolonger la durée de vie de votre installation.",
        image: "/assets/services/entretien-climatisation.png",
        imageAlt:
          "Technicien réalisant l’entretien d’une climatisation murale",
        items: [
          "Optimisation de la performance de l’appareil",
          "Réduction de la consommation énergétique",
          "Nettoyage et contrôle des éléments sensibles",
          "Amélioration de la qualité de l’air intérieur",
          "Contrôle de sécurité de l’installation",
        ],
      },
      {
        label: "Dépannage",
        title: "Intervention en cas de panne ou de baisse de performance",
        text:
          "Manque de froid, bruit anormal, fuite, blocage complet ou panne électronique : nous intervenons pour identifier l’origine du problème et remettre votre installation en fonctionnement avec une solution fiable.",
        image: "/assets/services/depannage-climatisation.png",
        imageAlt:
          "Technicien réalisant un dépannage sur une climatisation murale",
        items: [
          "Diagnostic précis de la panne",
          "Réparation durable et conforme",
          "Intervention sur logements, villas et locaux professionnels",
          "Conseils pour éviter les pannes répétitives",
          "Intervention sur les principales marques : Daikin, Toshiba, Mitsubishi, Hitachi",
        ],
      },
    ],
  },
  {
    slug: "plomberie",
    title: "Plomberie & sanitaire",
    subtitle:
      "Neuf, rénovation, dépannage, chauffe-eau et projets sanitaires haut de gamme.",
    heroImage: "/assets/services/sanitaire-standing.png",
    intro:
      "MCVC met son expertise au service de vos besoins en plomberie et installation sanitaire. Que ce soit pour un projet neuf, une rénovation complète ou une intervention d’urgence, nous vous accompagnons avec sérieux, réactivité et un travail soigné.",
    sections: [
      {
        label: "Neuf",
        title: "Une installation fiable et durable",
        text:
          "Pour vos constructions neuves, nous pouvons réaliser l’ensemble de votre installation de plomberie : réseaux d’eau chaude et froide, bouclage, évacuations, postes sanitaires, robinetterie, VMC, chauffe-eau et équipements thermiques.",
        image: "/assets/services/plomberie-neuf.png",
        imageAlt:
          "Installation de plomberie neuve avec réseaux d’eau chaude et froide",
        items: [
          "Réseaux d’eau chaude et froide",
          "Évacuations eaux usées et pluviales",
          "Création des postes sanitaires",
          "Robinetterie, VMC, chauffe-eau et équipements thermiques",
          "Installation pensée pour durer",
        ],
      },
      {
        label: "Rénovation",
        title: "Moderniser votre confort",
        text:
          "Pour une salle de bain, une cuisine ou une remise à niveau complète, nous remplaçons les anciens réseaux, modernisons les équipements et sécurisons l’installation pour améliorer le confort, l’esthétique et l’efficacité.",
        image: "/assets/services/plomberie-renovation.png",
        imageAlt:
          "Rénovation de plomberie dans une salle de bain existante",
        items: [
          "Remplacement d’anciens réseaux",
          "Modernisation des équipements sanitaires",
          "Adaptation aux contraintes existantes",
          "Travail propre et finitions techniques soignées",
        ],
      },
      {
        label: "Urgence",
        title: "Dépannage plomberie",
        text:
          "Fuite d’eau, problème de pression, chauffe-eau en panne ou canalisation bouchée : nous intervenons pour diagnostiquer le problème et effectuer une réparation propre, efficace et durable.",
        image: "/assets/services/plomberie-depannage.png",
        imageAlt:
          "Dépannage plomberie sous évier avec fuite d’eau",
        items: [
          "Recherche et réparation de fuite",
          "Canalisation bouchée",
          "Problème de pression",
          "Chauffe-eau en panne",
          "Réparation propre et durable",
        ],
      },
      {
        label: "Chauffe-eau",
        title: "Installation, remplacement et dépannage",
        text:
          "Nous installons, remplaçons et dépannons les chauffe-eau électriques ou thermodynamiques. Nous vous conseillons sur le modèle le plus adapté à votre consommation pour garantir confort et maîtrise de l’énergie.",
        image: "/assets/services/chauffe-eau.png",
        imageAlt:
          "Installation et raccordement d’un chauffe-eau",
        items: [
          "Chauffe-eau électrique",
          "Chauffe-eau thermodynamique",
          "Remplacement d’ancien équipement",
          "Conseil sur le dimensionnement",
        ],
      },
      {
        label: "Standing",
        title: "Villas et appartements d’exception",
        text:
          "Nous intervenons régulièrement sur des projets haut de gamme, en lien avec des cabinets d’architecture, dans des villas modernes et appartements de prestige. Nous maîtrisons la pose de corps encastrés, robinetteries et équipements sanitaires haut de gamme.",
        image: "/assets/services/sanitaire-standing.png",
        imageAlt:
          "Salle de bain haut de gamme dans une villa ou un appartement d’exception",
        items: [
          "Corps encastrés",
          "Robinetterie haut de gamme",
          "Équipements sanitaires design",
          "Intégration discrète et élégante",
          "Marques type Fantini, Dornbracht, Gessi, THG",
        ],
      },
    ],
  },
  {
    slug: "chauffage",
    title: "Chauffage",
    subtitle:
      "Pompes à chaleur, plancher chauffant, radiateurs et optimisation de réseau.",
    heroImage: "/assets/services/plancher-chauffant.png",
    intro:
      "MCVC accompagne vos projets de chauffage avec des solutions modernes, performantes et adaptées à votre habitation. L’objectif est d’améliorer le confort, la fiabilité et l’efficacité énergétique de votre installation.",
    sections: [
      {
        label: "Pompe à chaleur",
        title: "Installation, maintenance et dépannage",
        text:
          "Nous vous accompagnons dans l’installation, la maintenance et le dépannage de pompes à chaleur air/air ou air/eau. Ces solutions modernes permettent de chauffer efficacement tout en réduisant la consommation énergétique.",
        image: "/assets/services/pompe-a-chaleur.png",
        imageAlt:
          "Technicien intervenant sur une pompe à chaleur extérieure",
        items: [
          "PAC air/air",
          "PAC air/eau",
          "Étude précise du logement",
          "Installation adaptée à la configuration",
          "Entretien annuel et dépannage",
        ],
      },
      {
        label: "Confort thermique",
        title: "Plancher chauffant",
        text:
          "Le plancher chauffant offre une chaleur douce, homogène et silencieuse. C’est une solution idéale pour les villas modernes et les rénovations de standing, avec une intégration discrète et un confort quotidien très agréable.",
        image: "/assets/services/plancher-chauffant.png",
        imageAlt:
          "Installation de plancher chauffant dans une maison moderne",
        items: [
          "Conception du réseau",
          "Installation complète des circuits",
          "Intégration avec PAC ou chaudière",
          "Réglages pour un confort optimal",
          "Performance énergétique durable",
        ],
      },
      {
        label: "Réseau chauffage",
        title: "Radiateurs et optimisation",
        text:
          "Nous intervenons sur les radiateurs et les réseaux de chauffage pour dépanner, modifier, optimiser ou remplacer vos équipements. L’objectif : obtenir une chaleur mieux répartie et un fonctionnement plus fiable.",
        image: "/assets/services/radiateurs-optimisation.png",
        imageAlt:
          "Intervention sur radiateur et réseau de chauffage",
        items: [
          "Dépannage de radiateurs",
          "Recherche de fuite ou dysfonctionnement",
          "Modification ou optimisation du réseau",
          "Remplacement de radiateurs",
          "Mise en place de circuits plus performants",
        ],
      },
    ],
  },
];

export function getServicePageBySlug(slug: string) {
  return servicePages.find((servicePage) => servicePage.slug === slug);
}