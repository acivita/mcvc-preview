import FooterCTA from "../../components/FooterCTA/FooterCTA";
import HeroCarousel from "../../components/Home/HeroCarousel";
import CompanyIntro from "../../components/Home/CompanyIntro";
import ReviewsPreview from "../../components/Home/ReviewsPreview";
import ServicesSummary from "../../components/Home/ServicesSummary";
import FloatingContact from "../../components/Home/FloatingContact";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <FloatingContact />

      <CompanyIntro />

      <ReviewsPreview />

      <ServicesSummary />

      <FooterCTA />
    </main>
  );
}