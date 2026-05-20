import type { ServicePageData } from "../../data/servicePages";
import FooterCTA from "../../components/FooterCTA/FooterCTA";
import "./ServicePage.css";

type ServicePageProps = {
  service: ServicePageData;
};

function getHeroBackgroundPosition(service: ServicePageData) {
  if (service.slug === "climatisation") {
    return "center 28%";
  }

  return "center";
}

function getSectionBackgroundPosition(service: ServicePageData, sectionTitle: string) {
  if (
    service.slug === "climatisation" &&
    sectionTitle === "Intervention en cas de panne ou de baisse de performance"
  ) {
    return "72% center";
  }

  return "center";
}

export default function ServicePage({ service }: ServicePageProps) {
  return (
    <main className="service-page">
      <section
        className="service-page-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7, 28, 99, 0.78), rgba(7, 28, 99, 0.28)), url(${service.heroImage})`,
          backgroundPosition: getHeroBackgroundPosition(service),
        }}
      >
        <div className="service-page-hero-content">
          <h1>{service.title}</h1>
          <p>{service.subtitle}</p>
        </div>
      </section>

      <section className="service-page-intro">
        <div className="service-page-intro-inner">
          <p className="section-kicker">Expertise MCVC</p>
          <p>{service.intro}</p>
        </div>
      </section>

      <section className="service-page-sections">
        {service.sections.map((section, index) => (
          <article
            key={section.title}
            className={`service-section-card ${
              index % 2 === 1 ? "is-reversed" : ""
            }`}
          >
            <div
              className="service-section-image"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(7, 28, 99, 0.12), rgba(150, 204, 237, 0.06)), url(${section.image})`,
                backgroundPosition: getSectionBackgroundPosition(
                  service,
                  section.title,
                ),
              }}
              aria-label={section.imageAlt}
              role="img"
            />

            <div className="service-section-content">
              <p className="service-section-label">{section.label}</p>

              <h2>{section.title}</h2>

              <p>{section.text}</p>

              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <FooterCTA />
    </main>
  );
}