import { motion } from "framer-motion";
import logoText from "../assets/Logo_text 1.svg";
import peerlink from "../assets/peerlink.svg";

// ... import other logos similarly

const PartnerSection = () => {
  return (
    <section className="bg-#232323 px-8 py-12 md:py-14">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <p className="text-gray-600 text-lg font-semibold mb-6">Join 4,000+ companies already growing</p>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <img src={logoText} alt="Boltshift" className="h-12 mx-auto" />
          <img src={peerlink} alt="Lightbox" className="h-12 mx-auto" />
          <img src={logoText} alt="FeatherDev" className="h-12 mx-auto" />
          <img src={peerlink} alt="FeatherDev" className="h-12 mx-auto" />
          <img src={logoText} alt="FeatherDev" className="h-12 mx-auto" />
          <img src={peerlink} alt="FeatherDev" className="h-12 mx-auto" />
          {/* Repeat for other logos */}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
