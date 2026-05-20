import { useState } from "react";
import type { MouseEvent } from "react";
import { companyInfo } from "../../data/siteContent";
import { services } from "../../data/services";
import "./Header.css";

function hasSocialLink(url?: string) {
  return Boolean(url && url.trim() && url !== "#");
}

function getServicePagePath(serviceId: string) {
  const normalizedId = serviceId.toLowerCase();

  if (normalizedId.includes("clim")) {
    return "/services/climatisation";
  }

  if (normalizedId.includes("plomb") || normalizedId.includes("sanitaire")) {
    return "/services/plomberie";
  }

  if (
    normalizedId.includes("chauff") ||
    normalizedId.includes("pompe") ||
    normalizedId.includes("pac") ||
    normalizedId.includes("plancher")
  ) {
    return "/services/chauffage";
  }

  return "/#services";
}

function InstagramIcon() {
  return (
    <svg
      className="social-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M7.7 2h8.6C19.5 2 22 4.5 22 7.7v8.6c0 3.2-2.5 5.7-5.7 5.7H7.7C4.5 22 2 19.5 2 16.3V7.7C2 4.5 4.5 2 7.7 2Zm0 2C5.6 4 4 5.6 4 7.7v8.6C4 18.4 5.6 20 7.7 20h8.6c2.1 0 3.7-1.6 3.7-3.7V7.7C20 5.6 18.4 4 16.3 4H7.7Z" />
      <path d="M12 7.1A4.9 4.9 0 1 1 12 16.9 4.9 4.9 0 0 1 12 7.1Zm0 2A2.9 2.9 0 1 0 12 14.9 2.9 2.9 0 0 0 12 9.1Z" />
      <path d="M17.2 6.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="social-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14.2 8.3V6.7c0-.8.3-1.2 1.3-1.2h1.8V2.3C16.9 2.2 15.8 2 14.7 2c-2.6 0-4.4 1.6-4.4 4.4v1.9H7.5v3.5h2.8V22h3.9V11.8h2.8l.5-3.5h-3.3Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      className="social-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M15.2 2c.3 2.6 1.8 4.2 4.4 4.4v3.5c-1.5.1-2.9-.4-4.3-1.3v6.3c0 4-2.7 6.7-6.5 6.7-3.4 0-6.2-2.6-6.2-5.9 0-3.7 3.2-6.4 7.1-5.8v3.6c-1.8-.6-3.5.5-3.5 2.1 0 1.4 1.1 2.4 2.6 2.4 1.7 0 2.8-1.1 2.8-3.2V2h3.6Z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <div className="header-socials">
      <a
        className="social-link instagram"
        href={companyInfo.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <InstagramIcon />
        <span>Instagram</span>
      </a>

      <a
        className="social-link facebook"
        href={companyInfo.facebookUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <FacebookIcon />
        <span>Facebook</span>
      </a>

      {hasSocialLink(companyInfo.tiktokUrl) ? (
        <a
          className="social-link tiktok"
          href={companyInfo.tiktokUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="TikTok"
        >
          <TikTokIcon />
          <span>TikTok</span>
        </a>
      ) : (
        <span className="social-link tiktok is-disabled" aria-label="TikTok à venir">
          <TikTokIcon />
          <span>TikTok</span>
        </span>
      )}
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigateTo = (url: string) => {
    window.history.pushState(null, "", url);
    window.dispatchEvent(new Event("popstate"));
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMenu();

    navigateTo("/");

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 80);
  };

  const handleHomeSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    closeMenu();

    navigateTo(`/${sectionId}`);
  };

  const handlePageClick = (
    event: MouseEvent<HTMLAnchorElement>,
    pagePath: string,
  ) => {
    event.preventDefault();
    closeMenu();

    navigateTo(pagePath);

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 80);
  };

  return (
    <header className="site-header">
      <div className="header-contactbar">
        <div className="header-contactbar-left">
          <a href={`tel:${companyInfo.phoneHref}`}>
            {companyInfo.phoneDisplay}
          </a>

          <a href={companyInfo.mapsUrl} target="_blank" rel="noreferrer">
            {companyInfo.address}
          </a>
        </div>

        <div className="header-contactbar-right">
          Devis gratuit • Matériel et pose inclus
        </div>
      </div>

      <div className="header-inner">
        <a href="/" className="header-logo" onClick={handleLogoClick}>
          <span className="logo-black">MC</span>
          <span className="logo-separator" />
          <span className="logo-blue">VC</span>
        </a>

        <nav className={`main-nav ${isOpen ? "is-open" : ""}`}>
          <a
            href="/#entreprise"
            onClick={(event) => handleHomeSectionClick(event, "#entreprise")}
          >
            Entreprise
          </a>

          <div className="nav-dropdown">
            <a
              href="/#services"
              onClick={(event) => handleHomeSectionClick(event, "#services")}
              className="nav-dropdown-main"
            >
              Services
            </a>

            <div className="dropdown-panel">
              {services.map((service) => {
                const servicePath = getServicePagePath(service.id);

                return (
                  <a
                    key={service.id}
                    href={servicePath}
                    onClick={(event) => handlePageClick(event, servicePath)}
                  >
                    {service.menuLabel}
                  </a>
                );
              })}
            </div>
          </div>

          <a
            href="/realisations"
            onClick={(event) => handlePageClick(event, "/realisations")}
          >
            Réalisations
          </a>

          <a
            href="/#avis"
            onClick={(event) => handleHomeSectionClick(event, "#avis")}
          >
            Avis
          </a>

          <div className="mobile-nav-actions">
            <SocialLinks />

            <a
              href="/contact"
              className="mobile-nav-cta"
              onClick={(event) => handlePageClick(event, "/contact")}
            >
              Contactez-nous
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <SocialLinks />

          <a
            className="header-cta"
            href="/contact"
            onClick={(event) => handlePageClick(event, "/contact")}
          >
            Contactez-nous
          </a>
        </div>

        <button
          className="burger"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}