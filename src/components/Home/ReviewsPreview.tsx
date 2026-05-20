import { useEffect, useMemo, useState } from "react";
import {
  companyInfo,
  googleReviews,
  googleReviewsSummary,
} from "../../data/siteContent";
import "./ReviewsPreview.css";

function getReviewsPerPage() {
  if (typeof window === "undefined") {
    return 2;
  }

  return window.matchMedia("(max-width: 760px)").matches ? 1 : 2;
}

function formatRelativeReviewDate(publishedAt: string) {
  const publishedDate = new Date(`${publishedAt}T00:00:00`);
  const now = new Date();

  if (Number.isNaN(publishedDate.getTime())) {
    return "";
  }

  const dayInMilliseconds = 1000 * 60 * 60 * 24;
  const diffInDays = Math.round(
    (publishedDate.getTime() - now.getTime()) / dayInMilliseconds,
  );

  const absoluteDays = Math.abs(diffInDays);
  const formatter = new Intl.RelativeTimeFormat("fr-FR", {
    numeric: "always",
  });

  if (absoluteDays < 1) {
    return "Aujourd’hui";
  }

  if (absoluteDays < 7) {
    return formatter.format(diffInDays, "day");
  }

  if (absoluteDays < 31) {
    return formatter.format(Math.round(diffInDays / 7), "week");
  }

  if (absoluteDays < 365) {
    return formatter.format(Math.round(diffInDays / 30), "month");
  }

  return formatter.format(Math.round(diffInDays / 365), "year");
}

export default function ReviewsPreview() {
  const [startIndex, setStartIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(getReviewsPerPage);

  useEffect(() => {
    const updateReviewsPerPage = () => {
      setReviewsPerPage(getReviewsPerPage());
    };

    updateReviewsPerPage();
    window.addEventListener("resize", updateReviewsPerPage);

    return () => {
      window.removeEventListener("resize", updateReviewsPerPage);
    };
  }, []);

  const maxStartIndex = Math.max(0, googleReviews.length - reviewsPerPage);

  useEffect(() => {
    setStartIndex((current) => Math.min(current, maxStartIndex));
  }, [maxStartIndex]);

  const visibleReviews = useMemo(() => {
    return googleReviews.slice(startIndex, startIndex + reviewsPerPage);
  }, [startIndex, reviewsPerPage]);

  const canGoPrevious = startIndex > 0;
  const isAtEnd = startIndex >= maxStartIndex;

  const goPrevious = () => {
    setStartIndex((current) => Math.max(0, current - 1));
  };

  const goNext = () => {
    setStartIndex((current) => Math.min(maxStartIndex, current + 1));
  };

  return (
    <section id="avis" className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-intro">
          <p className="section-kicker">Avis clients</p>

          <h2>Ils nous font confiance</h2>

          <p>
            Des avis Google authentiques qui mettent en avant la qualité du
            travail, la réactivité et le sérieux des interventions MCVC.
          </p>

          <div className="reviews-rating-summary">
            <span>{googleReviewsSummary.stars}</span>
            <strong>{googleReviewsSummary.rating.toFixed(1)} / 5</strong>
            <small>{googleReviewsSummary.totalLabel}</small>
          </div>

          <a
            href={companyInfo.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="reviews-main-link"
          >
            Voir tous les avis Google
          </a>
        </div>

        <div className="reviews-carousel">
          <div className="reviews-carousel-header">
            <div className="reviews-arrows">
              <button
                type="button"
                onClick={goPrevious}
                disabled={!canGoPrevious}
                aria-label="Avis précédents"
              >
                ←
              </button>

              {isAtEnd ? (
                <a
                  href={companyInfo.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Voir plus d’avis sur Google Maps"
                >
                  Voir plus →
                </a>
              ) : (
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Avis suivants"
                >
                  →
                </button>
              )}
            </div>
          </div>

          <div className="reviews-window">
            <div className="reviews-cards">
              {visibleReviews.map((review) => (
                <article key={review.author} className="review-card">
                  <div className="review-card-top">
                    <span className="review-stars">{review.stars}</span>
                    <span className="review-google">Google</span>
                  </div>

                  <p>{review.text}</p>

                  <div className="review-author">
                    <div className="review-avatar">
                      {review.author.charAt(0)}
                    </div>

                    <div>
                      <strong>{review.author}</strong>
                      <span>{formatRelativeReviewDate(review.publishedAt)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}