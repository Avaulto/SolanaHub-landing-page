// import logoText from "../assets/Logo_text 1.svg";
// import jupLogo from "../assets/jup.png";
import marinadeLogo from "../assets/marinade.svg"
import sanctumLogo from "../assets/sanctum.svg";
import realmsLogo from "../assets/realms.webp";
import allDomainLogo from "../assets/alldomain.svg"
import kaminoLogo from "../assets/kamino.svg";

const PartnerSection = () => {
  return (
    <section className="bg-gray-100 px-8 py-12 md:py-14">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <p className="text-gray-600 text-lg font-semibold mb-6">Best of solana</p>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* <img src={meteoraLogo} alt="meteoraLogo" className="h-12 mx-auto img-dy" /> */}
          <img src={allDomainLogo} alt="allDomainLogo" className="h-12 mx-auto img-dy" />
          <img src={marinadeLogo} alt="marinadeLogo" className="h-12 mx-auto img-dy" />
          <img src={sanctumLogo} alt="sanctumLogo" className="h-12 mx-auto img-dy" />
          <img src={realmsLogo} alt="realmsLogo" className="h-12 mx-auto img-dy" />
          <img src={kaminoLogo} alt="kaminoLogo" style={{'mix-blend-mode': 'exclusion'} as any} className="h-12 mx-auto img-dy" />
          {/* Repeat for other logos */}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
