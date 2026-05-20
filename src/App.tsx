import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import ServicePage from "./pages/Service/ServicePage";
import RealisationsPage from "./pages/Realisations/RealisationsPage";
import { getServicePageBySlug } from "./data/servicePages";

function getLocationState() {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };
}

function scrollToHashTarget(hash: string) {
  const target = document.querySelector(hash);

  if (!target) {
    return;
  }

  window.setTimeout(() => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

export default function App() {
  const [locationState, setLocationState] = useState(getLocationState);

  useEffect(() => {
    const handleLocationChange = () => {
      setLocationState(getLocationState());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (locationState.hash) {
      scrollToHashTarget(locationState.hash);
      return;
    }

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 80);
  }, [locationState.pathname, locationState.hash]);

  const isContactPage = locationState.pathname === "/contact";
  const isRealisationsPage = locationState.pathname === "/realisations";

  const serviceMatch = locationState.pathname.match(/^\/services\/([^/]+)$/);
  const serviceSlug = serviceMatch?.[1];
  const servicePage = serviceSlug ? getServicePageBySlug(serviceSlug) : undefined;

  return (
    <>
      <Header />

      {isContactPage && <Contact />}

      {isRealisationsPage && <RealisationsPage />}

      {!isContactPage && !isRealisationsPage && servicePage && (
        <ServicePage service={servicePage} />
      )}

      {!isContactPage && !isRealisationsPage && !servicePage && <Home />}
    </>
  );
}