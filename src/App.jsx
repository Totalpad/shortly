import CtaSection from "./Features/CTA/CtaSection";
import FooterSection from "./Features/Footer/FooterSection";
import HeroSection from "./Features/Hero/HeroSection";
import MenuSection from "./Features/Menu/MenuSection";
import ShortenSection from "./Features/Shorten/ShortenSection";
import FeaturesSection from "./Features/Stats/FeaturesSection";
import StatsSection from "./Features/Stats/StatsSection";

function App() {
  return (
    <div>
      <MenuSection />
      <HeroSection />
      <ShortenSection />
      <StatsSection />
      <FeaturesSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}

export default App;
