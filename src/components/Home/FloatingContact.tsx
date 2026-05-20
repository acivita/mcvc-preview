import { useMemo, useState } from "react";
import { companyInfo } from "../../data/siteContent";
import "./FloatingContact.css";

type ContactFormData = {
  requestType: string;
  serviceType: string;
  needDetail: string;
  rooms: string;
  surface: string;
  timeline: string;
  city: string;
  postalCode: string;
  address: string;
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
  address: "",
  propertyType: "",
  name: "",
  phone: "",
  email: "",
  contactPreference: "",
  message: "",
};

const requestTypes = [
  { value: "Demande de devis", label: "Demande de devis" },
  { value: "Urgence / panne", label: "Urgence / panne" },
  { value: "Entretien", label: "Entretien" },
  { value: "Question", label: "Question" },
];

const serviceTypes = [
  { value: "Climatisation", label: "Climatisation" },
  { value: "Plomberie / sanitaire", label: "Plomberie / sanitaire" },
  { value: "Chauffage", label: "Chauffage" },
  { value: "Pompe à chaleur", label: "Pompe à chaleur" },
  { value: "Plancher chauffant", label: "Plancher chauffant" },
  { value: "Je ne sais pas encore", label: "Je ne sais pas encore" },
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

function buildEmailSubject(formData: ContactFormData) {
  const service = formData.serviceType || "Demande";
  const city = formData.city || "secteur non précisé";

  return `${formData.requestType || "Demande de contact"} - ${service} - ${city}`;
}

function buildEmailBody(formData: ContactFormData) {
  return `Bonjour,

Nouvelle demande depuis le site MCVC.

Type de demande : ${formData.requestType || "Non renseigné"}
Service concerné : ${formData.serviceType || "Non renseigné"}
Besoin : ${formData.needDetail || "Non renseigné"}
Nombre de pièces : ${formData.rooms || "Non renseigné"}
Surface approximative : ${formData.surface || "Non renseigné"}
Délai souhaité : ${formData.timeline || "Non renseigné"}

Lieu d’intervention :
Ville : ${formData.city || "Non renseigné"}
Code postal : ${formData.postalCode || "Non renseigné"}
Adresse : ${formData.address || "Non renseignée"}
Type de logement : ${formData.propertyType || "Non renseigné"}

Coordonnées :
Nom : ${formData.name || "Non renseigné"}
Téléphone : ${formData.phone || "Non renseigné"}
Email : ${formData.email || "Non renseigné"}
Préférence de contact : ${formData.contactPreference || "Non renseignée"}

Message complémentaire :
${formData.message || "Aucun message complémentaire."}

Cordialement.`;
}

function getNeedOptions(serviceType: string) {
  return needDetailsByService[serviceType] ?? needDetailsByService["Je ne sais pas encore"];
}

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

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
    setStep(0);
    setFormData(initialFormData);
  };

  const goNext = () => {
    setStep((current) => Math.min(current + 1, 7));
  };

  const goPrevious = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const canGoNext = () => {
    if (step === 0) {
      return Boolean(formData.requestType);
    }

    if (step === 1) {
      return Boolean(formData.serviceType);
    }

    if (step === 2) {
      return Boolean(formData.needDetail);
    }

    if (step === 3) {
      return Boolean(formData.timeline);
    }

    if (step === 4) {
      return Boolean(formData.city && formData.postalCode && formData.propertyType);
    }

    if (step === 5) {
      return Boolean(formData.name && (formData.phone || formData.email));
    }

    return true;
  };

  return (
    <div className="floating-contact-widget">
      {isOpen && (
        <div className="contact-dialog">
          <div className="contact-dialog-header">
            <div>
              <strong>Demande MCVC</strong>
              <span>Questionnaire rapide</span>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le questionnaire"
            >
              ×
            </button>
          </div>

          <div className="contact-progress">
            <span style={{ width: `${((step + 1) / 8) * 100}%` }} />
          </div>

          <div className="contact-dialog-body">
            {step === 0 && (
              <div className="contact-step">
                <h3>Quelle est votre demande ?</h3>

                <div className="option-grid">
                  {requestTypes.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={
                        formData.requestType === option.value ? "is-selected" : ""
                      }
                      onClick={() => updateForm("requestType", option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="contact-step">
                <h3>Quel service est concerné ?</h3>

                <div className="option-grid">
                  {serviceTypes.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={
                        formData.serviceType === option.value ? "is-selected" : ""
                      }
                      onClick={() => {
                        updateForm("serviceType", option.value);
                        updateForm("needDetail", "");
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="contact-step">
                <h3>Quel est le besoin précis ?</h3>

                <div className="option-grid">
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
            )}

            {step === 3 && (
              <div className="contact-step">
                <h3>Quel est le délai souhaité ?</h3>

                <div className="option-grid">
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
            )}

            {step === 4 && (
              <div className="contact-step">
                <h3>Où se situe l’intervention ?</h3>

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
                      onChange={(event) =>
                        updateForm("postalCode", event.target.value)
                      }
                      placeholder="Ex : 06160"
                    />
                  </label>

                  <label className="field-full">
                    Adresse, étage ou précision utile
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(event) => updateForm("address", event.target.value)}
                      placeholder="Optionnel"
                    />
                  </label>
                </div>

                <div className="option-grid">
                  {propertyTypes.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={
                        formData.propertyType === option ? "is-selected" : ""
                      }
                      onClick={() => updateForm("propertyType", option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="contact-step">
                <h3>Vos coordonnées</h3>

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

                <div className="option-grid">
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
            )}

            {step === 6 && (
              <div className="contact-step">
                <h3>Une précision à ajouter ?</h3>

                <label className="field-full">
                  Message complémentaire
                  <textarea
                    value={formData.message}
                    onChange={(event) => updateForm("message", event.target.value)}
                    placeholder="Décrivez brièvement votre besoin, votre panne ou votre projet."
                    rows={7}
                  />
                </label>
              </div>
            )}

            {step === 7 && (
              <div className="contact-step">
                <h3>Votre demande est prête</h3>

                <div className="contact-summary">
                  <p>
                    <strong>Demande :</strong> {formData.requestType}
                  </p>
                  <p>
                    <strong>Service :</strong> {formData.serviceType}
                  </p>
                  <p>
                    <strong>Besoin :</strong> {formData.needDetail}
                  </p>
                  <p>
                    <strong>Délai :</strong> {formData.timeline}
                  </p>
                  <p>
                    <strong>Lieu :</strong> {formData.city} {formData.postalCode}
                  </p>
                  <p>
                    <strong>Contact :</strong> {formData.name}
                  </p>
                </div>

                <div className="final-actions">
                  <a href={emailHref} className="send-request-button">
                    Envoyer la demande
                  </a>

                  <a href={`tel:${companyInfo.phoneHref}`} className="call-button">
                    Appeler directement
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="contact-dialog-footer">
            <button type="button" onClick={resetForm} className="secondary-action">
              Recommencer
            </button>

            <div>
              {step > 0 && (
                <button
                  type="button"
                  onClick={goPrevious}
                  className="secondary-action"
                >
                  Retour
                </button>
              )}

              {step < 7 && (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canGoNext()}
                  className="primary-action"
                >
                  Suivant
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <button
        className="contact-launcher"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="launcher-icon">●</span>
        Besoin d’aide ?
      </button>
    </div>
  );
}