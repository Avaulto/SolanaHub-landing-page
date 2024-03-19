import NavBar from "./components/NavBar";
import PartnerSection from "./components/companiesSection";
import { FaqSection } from "./components/faqSection";
import FeaturesSection from "./components/featuresSection";
import Footer from "./components/footer";
import Hero from "./components/hero";
import StatsSection from "./components/statsSection";
import { UtilitiesSection } from "./components/utilitiesSection";
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <PartnerSection />
      <FeaturesSection />
      <UtilitiesSection />
      <StatsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
export default App;
