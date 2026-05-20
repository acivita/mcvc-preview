import { companyInfo } from "../../data/siteContent";
import "./CompanyIntro.css";

export default function CompanyIntro() {
  return (
    <section id="entreprise" className="company-intro-section">
      <div className="company-intro-container">
        <div className="company-intro-copy">
          <p className="section-kicker">L’entreprise</p>

          <h2>Qui sommes-nous ?</h2>

          <p className="company-intro-lead">
            MCVC accompagne les particuliers et les professionnels dans les
            métiers de la climatisation, de la plomberie, du chauffage et des
            solutions thermiques.
          </p>

          <div className="company-intro-text">
            <p>
              Entreprise <strong>100 % française</strong>, jeune, dynamique et
              passionnée, MCVC met son savoir-faire au service de projets
              techniques exigeants, du dépannage ponctuel aux installations
              complètes.
            </p>

            <p>
              Chaque intervention est étudiée avec attention afin de proposer
              une solution adaptée, durable et réalisée avec sérieux.
            </p>
          </div>

          <div className="company-approach">
            <span>Notre approche</span>

            <p>
              Comprendre votre besoin, vous conseiller clairement, puis réaliser
              une intervention propre, fiable et conforme aux attentes du
              projet.
            </p>
          </div>
        </div>

        <aside className="company-intro-aside">
          <div className="company-map-card">
            <iframe
              title="Localisation MCVC"
              src={companyInfo.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="company-location-card">
            <h3>{companyInfo.city} et alentours</h3>

            <p>
              MCVC intervient localement pour vos projets de climatisation,
              plomberie, chauffage et confort thermique.
            </p>

            <a
              href={companyInfo.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="company-maps-link"
            >
              Voir sur Google Maps
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}