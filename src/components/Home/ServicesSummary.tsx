import { services } from "../../data/services";
import "./ServicesSummary.css";

function getServicePagePath(serviceId: string) {
  if (serviceId === "climatisation") {
    return `${import.meta.env.BASE_URL}services/climatisation`;
  }

  if (serviceId === "plomberie") {
    return `${import.meta.env.BASE_URL}services/plomberie`;
  }

  if (serviceId === "chauffage") {
    return `${import.meta.env.BASE_URL}services/chauffage`;
  }

  return `${import.meta.env.BASE_URL}#services`;
}

export default function ServicesSummary() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div id="services" className="services-heading">
          <p className="section-kicker">Expertises</p>
          <h2>Nos services</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const previewItems = service.items.slice(0, 3);

            return (
              <article
                key={service.id}
                id={service.id}
                className="service-card"
              >
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    loading="lazy"
                  />

                  <div className="service-image-overlay">
                    <h3>{service.title}</h3>
                  </div>
                </div>

                <div className="service-card-content">
                  <p className="service-description">
                    {service.shortDescription}
                  </p>

                  <ul className="service-list">
                    {previewItems.map((item) => (
                      <li key={item.title}>{item.title}</li>
                    ))}
                  </ul>

                  <div className="service-actions">
                    <a
                      href={getServicePagePath(service.id)}
                      className="service-more-link"
                    >
                      Voir plus
                    </a>

                    <a
                      href={`${import.meta.env.BASE_URL}contact`}
                      className="service-contact-link"
                    >
                      Demander un devis
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}