import { useMemo, useState } from "react";
import { companyInfo } from "../../data/siteContent";
import "./Contact.css";

type ContactFormData = {
  requestType: string;
  serviceType: string;
  needDetail: string;
  rooms: string;
  surface: string;
  timeline: string;
  city: string;
  postalCode: string;
  propertyType: string;
  name: string;
  phone: string;
  email: string;
  contactPreference: string;
  message: string;
};

const initialFormData: ContactFormData = {
  requestType: "",
  serviceType: "",
  needDetail: "",
  rooms: "",
  surface: "",
  timeline: "",
  city: "",
  postalCode: "",
  propertyType: "",
  name: "",
  phone: "",
  email: "",
  contactPreference: "",
  message: "",
};

const requestTypes = [
  "Demande de devis",
  "Urgence / panne",
  "Entretien",
  "Question",
];

const serviceTypes = [
  "Climatisation",
  "Plomberie / sanitaire",
  "Chauffage",
  "Pompe à chaleur",
  "Plancher chauffant",
  "Je ne sais pas encore",
];

const needDetailsByService: Record<string, string[]> = {
  Climatisation: [
    "Installation neuve",
    "Remplacement",
    "Entretien / nettoyage",
    "Dépannage",
    "Climatisation gainable",
    "Conseil",
  ],
  "Plomberie / sanitaire": [
    "Fuite d’eau",
    "Canalisation bouchée",
    "Chauffe-eau",
    "Salle de bain",
    "Sanitaires / robinetterie",
    "Installation neuve",
    "Rénovation",
  ],
  Chauffage: [
    "Installation",
    "Dépannage",
    "Radiateurs",
    "Réseau de chauffage",
    "Entretien",
    "Remplacement",
  ],
  "Pompe à chaleur": [
    "Installation PAC air/air",
    "Installation PAC air/eau",
    "Entretien",
    "Dépannage",
    "Remplacement",
    "Conseil",
  ],
  "Plancher chauffant": [
    "Construction neuve",
    "Rénovation",
    "Dépannage",
    "Réglage / optimisation",
    "Conseil",
  ],
  "Je ne sais pas encore": [
    "Besoin de conseil",
    "Projet à définir",
    "Problème technique",
  ],
};

const timelines = [
  "Dès que possible",
  "Aujourd’hui",
  "Cette semaine",
  "Dans le mois",
  "Je suis flexible",
];

const propertyTypes = [
  "Appartement",
  "Maison",
  "Villa",
  "Local professionnel",
  "Autre",
];

const contactPreferences = ["Téléphone", "Email", "Peu importe"];

function getNeedOptions(serviceType: string) {
  return needDetailsByService[serviceType] ?? needDetailsByService["Je ne sais pas encore"];
}

function buildEmailSubject(formData: ContactFormData) {
  const request = formData.requestType || "Demande de contact";
  const service = formData.serviceType || "Service non précisé";
  const city = formData.city || "secteur non précisé";

  return `${request} - ${service} - ${city}`;
}

function buildEmailBody(formData: ContactFormData) {
  return `Bonjour,

Nouvelle demande depuis le site MCVC.

TYPE DE DEMANDE
Type de demande : ${formData.requestType || "Non renseigné"}
Service concerné : ${formData.serviceType || "Non renseigné"}
Besoin précis : ${formData.needDetail || "Non renseigné"}
Nombre de pièces : ${formData.rooms || "Non renseigné"}
Surface approximative : ${formData.surface || "Non renseigné"}
Délai souhaité : ${formData.timeline || "Non renseigné"}

LIEU D’INTERVENTION
Ville : ${formData.city || "Non renseigné"}
Code postal : ${formData.postalCode || "Non renseigné"}
Type de logement : ${formData.propertyType || "Non renseigné"}

COORDONNÉES
Nom : ${formData.name || "Non renseigné"}
Téléphone : ${formData.phone || "Non renseigné"}
Email : ${formData.email || "Non renseigné"}
Préférence de contact : ${formData.contactPreference || "Non renseignée"}

MESSAGE COMPLÉMENTAIRE
${formData.message || "Aucun message complémentaire."}

Cordialement.`;
}

function getMissingFields(formData: ContactFormData) {
  const missingFields: string[] = [];

  if (!formData.requestType) missingFields.push("le type de demande");
  if (!formData.serviceType) missingFields.push("le service concerné");
  if (!formData.needDetail) missingFields.push("le besoin précis");
  if (!formData.timeline) missingFields.push("le délai souhaité");
  if (!formData.city) missingFields.push("la ville");
  if (!formData.postalCode) missingFields.push("le code postal");
  if (!formData.propertyType) missingFields.push("le type de logement");
  if (!formData.name) missingFields.push("votre nom");
  if (!formData.phone && !formData.email) {
    missingFields.push("un téléphone ou un email");
  }

  return missingFields;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [showValidationError, setShowValidationError] = useState(false);

  const missingFields = useMemo(() => getMissingFields(formData), [formData]);
  const isReadyToSend = missingFields.length === 0;

  const emailHref = useMemo(() => {
    const subject = buildEmailSubject(formData);
    const body = buildEmailBody(formData);

    return `mailto:${companyInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [formData]);

  const updateForm = <Key extends keyof ContactFormData>(
    key: Key,
    value: ContactFormData[Key],
  ) => {
    setFormData((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setShowValidationError(false);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="section-kicker">Contactez-nous</p>

          <h1>Préparez votre demande en quelques étapes</h1>

          <p>
            Remplissez les informations utiles pour une installation, un dépannage,
            un entretien ou une rénovation. La demande sera préparée automatiquement.
          </p>

          <a href={`tel:${companyInfo.phoneHref}`} className="contact-hero-call">
            Appelez-nous directement au {companyInfo.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-layout">
          <form className="contact-form">
            <div className="contact-form-block">
              <div className="contact-form-heading">
                <span>01</span>
                <h2>Votre demande</h2>
              </div>

              <div className="choice-grid">
                {requestTypes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={formData.requestType === option ? "is-selected" : ""}
                    onClick={() => updateForm("requestType", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-form-block">
              <div className="contact-form-heading">
                <span>02</span>
                <h2>Service concerné</h2>
              </div>

              <div className="choice-grid">
                {serviceTypes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={formData.serviceType === option ? "is-selected" : ""}
                    onClick={() => {
                      updateForm("serviceType", option);
                      updateForm("needDetail", "");
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-form-block">
              <div className="contact-form-heading">
                <span>03</span>
                <h2>Besoin précis</h2>
              </div>

              <div className="choice-grid">
                {getNeedOptions(formData.serviceType).map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={formData.needDetail === option ? "is-selected" : ""}
                    onClick={() => updateForm("needDetail", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="field-grid">
                <label>
                  Nombre de pièces
                  <input
                    type="text"
                    value={formData.rooms}
                    onChange={(event) => updateForm("rooms", event.target.value)}
                    placeholder="Ex : 2 chambres"
                  />
                </label>

                <label>
                  Surface approximative
                  <input
                    type="text"
                    value={formData.surface}
                    onChange={(event) => updateForm("surface", event.target.value)}
                    placeholder="Ex : 45 m²"
                  />
                </label>
              </div>
            </div>

            <div className="contact-form-block">
              <div className="contact-form-heading">
                <span>04</span>
                <h2>Délai souhaité</h2>
              </div>

              <div className="choice-grid">
                {timelines.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={formData.timeline === option ? "is-selected" : ""}
                    onClick={() => updateForm("timeline", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-form-block">
              <div className="contact-form-heading">
                <span>05</span>
                <h2>Lieu d’intervention</h2>
              </div>

              <div className="field-grid">
                <label>
                  Ville
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(event) => updateForm("city", event.target.value)}
                    placeholder="Ex : Antibes"
                  />
                </label>

                <label>
                  Code postal
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(event) => updateForm("postalCode", event.target.value)}
                    placeholder="Ex : 06160"
                  />
                </label>
              </div>

              <div className="choice-grid">
                {propertyTypes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={formData.propertyType === option ? "is-selected" : ""}
                    onClick={() => updateForm("propertyType", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-form-block">
              <div className="contact-form-heading">
                <span>06</span>
                <h2>Vos coordonnées</h2>
              </div>

              <div className="field-grid">
                <label className="field-full">
                  Nom
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(event) => updateForm("name", event.target.value)}
                    placeholder="Votre nom"
                  />
                </label>

                <label>
                  Téléphone
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => updateForm("phone", event.target.value)}
                    placeholder="06..."
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => updateForm("email", event.target.value)}
                    placeholder="email@exemple.fr"
                  />
                </label>
              </div>

              <div className="choice-grid">
                {contactPreferences.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      formData.contactPreference === option ? "is-selected" : ""
                    }
                    onClick={() => updateForm("contactPreference", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-form-block">
              <div className="contact-form-heading">
                <span>07</span>
                <h2>Message complémentaire</h2>
              </div>

              <label className="field-full">
                Précision utile
                <textarea
                  value={formData.message}
                  onChange={(event) => updateForm("message", event.target.value)}
                  rows={7}
                  placeholder="Décrivez brièvement votre projet, votre panne ou votre besoin."
                />
              </label>
            </div>
          </form>

          <aside className="contact-summary-panel">
            <div className="contact-summary-card">
              <p className="section-kicker">Récapitulatif</p>

              <h2>Votre demande</h2>

              <div className="summary-list">
                <p>
                  <strong>Type :</strong>
                  <span>{formData.requestType || "À compléter"}</span>
                </p>

                <p>
                  <strong>Service :</strong>
                  <span>{formData.serviceType || "À compléter"}</span>
                </p>

                <p>
                  <strong>Besoin :</strong>
                  <span>{formData.needDetail || "À compléter"}</span>
                </p>

                <p>
                  <strong>Délai :</strong>
                  <span>{formData.timeline || "À compléter"}</span>
                </p>

                <p>
                  <strong>Lieu :</strong>
                  <span>
                    {formData.city || "Ville"} {formData.postalCode || ""}
                  </span>
                </p>

                <p>
                  <strong>Logement :</strong>
                  <span>{formData.propertyType || "À compléter"}</span>
                </p>

                <p>
                  <strong>Contact :</strong>
                  <span>{formData.name || "À compléter"}</span>
                </p>
              </div>

              {showValidationError && !isReadyToSend && (
                <div className="summary-error" role="alert">
                  <strong>Formulaire incomplet</strong>
                  <span>
                    Merci de compléter : {missingFields.join(", ")}.
                  </span>
                </div>
              )}

              <div className="summary-actions">
                <a
                  href={isReadyToSend ? emailHref : undefined}
                  className={`summary-send ${!isReadyToSend ? "is-disabled" : ""}`}
                  aria-disabled={!isReadyToSend}
                  onClick={(event) => {
                    if (!isReadyToSend) {
                      event.preventDefault();
                      setShowValidationError(true);
                    }
                  }}
                >
                  Envoyer la demande
                </a>

                <button type="button" onClick={resetForm} className="summary-reset">
                  Recommencer
                </button>
              </div>

              {!isReadyToSend && (
                <p className="summary-help">
                  Complétez au minimum le type de demande, le service, le besoin,
                  le délai, la ville et vos coordonnées.
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}