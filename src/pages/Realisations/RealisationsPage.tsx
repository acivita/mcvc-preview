import { useMemo, useState } from "react";
import FooterCTA from "../../components/FooterCTA/FooterCTA";
import {
  realisationCategories,
  realisations,
  type RealisationCategory,
} from "../../data/realisations";
import "./RealisationsPage.css";

type ActiveCategory = "Tous" | RealisationCategory;

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("Tous");

  const filteredRealisations = useMemo(() => {
    if (activeCategory === "Tous") {
      return realisations;
    }

    return realisations.filter((realisation) =>
      realisation.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  return (
    <main className="realisations-page">
      <section className="realisations-hero">
        <div className="realisations-hero-content">
          <p className="section-kicker">Réalisations</p>

          <h1>Nos chantiers</h1>

          <p>Quelques installations et interventions réalisées par MCVC.</p>
        </div>
      </section>

      <section className="realisations-gallery-section">
        <div className="realisations-toolbar">
          <div className="realisations-filters" aria-label="Filtrer les réalisations">
            <button
              type="button"
              className={activeCategory === "Tous" ? "is-active" : ""}
              onClick={() => setActiveCategory("Tous")}
            >
              Tous
            </button>

            {realisationCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "is-active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="realisations-grid">
          {filteredRealisations.map((realisation) => (
            <article key={realisation.id} className="realisation-card">
              <div
                className="realisation-cover"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(7, 28, 99, 0.02), rgba(7, 28, 99, 0.34)), url(${realisation.images[0]})`,
                }}
              >
                <div className="realisation-cover-info">
                  <span>{realisation.surface ?? realisation.categories[0]}</span>
                  <strong>{realisation.city}</strong>
                </div>
              </div>

              <div className="realisation-content">
                <h2>{realisation.title}</h2>

                <p className="realisation-period">{realisation.period}</p>

                <p>{realisation.description}</p>

                <div className="realisation-tags">
                  {realisation.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="realisation-images-grid">
                  {realisation.images.map((image, index) => (
                    <div
                      key={image}
                      className="realisation-image"
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                      aria-label={`${realisation.title} photo ${index + 1}`}
                      role="img"
                    />
                  ))}
                </div>

                <details className="realisation-details">
                  <summary>Détails du chantier</summary>

                  <div className="realisation-details-intro">
                    <dl>
                      <div>
                        <dt>Service</dt>
                        <dd>{realisation.service}</dd>
                      </div>

                      <div>
                        <dt>Intervention</dt>
                        <dd>{realisation.intervention}</dd>
                      </div>

                      <div>
                        <dt>Durée</dt>
                        <dd>{realisation.duration}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="realisation-detail-blocks">
                    {realisation.details.map((detail) => (
                      <section key={detail.title}>
                        <h3>{detail.title}</h3>

                        <ul>
                          {detail.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FooterCTA />
    </main>
  );
}