import { useEffect, useState } from "react";
import {
  flyerHighlights,
  heroSlides,
  partnerBrands,
} from "../../data/siteContent";
import "./HeroCarousel.css";

const SLIDE_DURATION = 4500;

function HighlightIcon({ title }: { title: string }) {
  if (title.toLowerCase().includes("devis")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h14v16H5V4Z" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
      </svg>
    );
  }

  if (title.toLowerCase().includes("filtre")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v6c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  if (title.toLowerCase().includes("inverter")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5 6v6c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z" />
      <path d="M9.5 12.5 11.5 14.5 15 10.5" />
    </svg>
  );
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[activeIndex];

  return (
    <section
      id="accueil"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(7, 28, 99, 0.12), rgba(7, 28, 99, 0.02)), url(${activeSlide.image})`,
      }}
    >
      <div className="hero-content">
        <h1>{activeSlide.title}</h1>
        <p className="hero-subtitle">{activeSlide.subtitle}</p>
      </div>

      <div className="hero-highlights-panel">
        {flyerHighlights.map((highlight) => (
          <article key={highlight.title} className="hero-highlight-badge">
            <span className="highlight-icon">
              <HighlightIcon title={highlight.title} />
            </span>

            <span>
              <strong>{highlight.title}</strong>
              <small>{highlight.text}</small>
            </span>
          </article>
        ))}
      </div>

      <div className="hero-brands-strip" aria-label="Marques partenaires">
        {partnerBrands.map((brand) => (
          <div key={brand.name} className="brand-logo-card">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>

      <div className="hero-dots" aria-label="Navigation du carrousel">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`Afficher ${slide.title}`}
          />
        ))}
      </div>
    </section>
  );
}