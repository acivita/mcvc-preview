import { companyInfo } from "../../data/siteContent";
import "./FooterCTA.css";

type FooterCTAProps = {
  kicker?: string;
  title?: string;
  text?: string;
};

export default function FooterCTA({
  kicker = "Demande de devis",
  title = "Parlez-nous de votre projet",
  text = "Décrivez votre besoin en quelques étapes. Votre demande sera préparée avec les informations utiles pour être traitée rapidement.",
}: FooterCTAProps) {
  return (
    <section className="footer-cta-section">
      <div className="footer-cta-card">
        <div className="footer-cta-copy">
          <p className="section-kicker">{kicker}</p>

          <h2>{title}</h2>

          <p>{text}</p>
        </div>

        <div className="footer-cta-actions">
          <a href="/contact" className="footer-cta-primary">
            Demander un devis
          </a>

          <a href={`tel:${companyInfo.phoneHref}`} className="footer-cta-secondary">
            Appeler directement
          </a>
        </div>
      </div>
    </section>
  );
}