// import MobileScreenshot from "../assets/mobile-screenshot.png"; // Replace with your actual import
// import DesktopScreenshot from "../assets/desktop-screenshot.png"; // Replace with your actual import
import saftyIcon from "../assets/icons/saftyIcon.svg";
import composabilityIcon from "../assets/icons/composabilityIcon.svg";
import explorationIcon from "../assets/icons/explorationIcon.svg";

const FeaturesSection = () => {
  return (
    <section className="flex flex-col justify-center items-center  px- py-14 md:py-24 lg:px-8 ">
      <div className="bg-primary-200 py-1 px-3 rounded-full inline-block mb-4">
        <h1 className="font-medium text-primary text-lg text-center">Features</h1>
      </div>

      <h1 className="font-semibold text-Grey-900 text-3xl md:text-4xl text-center mb-4 md:mb-5">
        Make your everyday task from 1 centralize location
      </h1>
      <p className="mb-16 text-center text-gray-600 max-w-sm md:max-w-3xl mx-auto">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by
        over 4,000 startups.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
        <FeatureIcon
          title="Composability"
          des="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          icon={composabilityIcon}
        />
        <FeatureIcon
          title="Safety"
          des="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          icon={saftyIcon}
        />
        <FeatureIcon
          title="Exploration"
          des="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
          icon={explorationIcon}
        />
      </div>
    </section>
  );
};

// Dummy functional component for feature icon, replace with actual content
const FeatureIcon = ({ title, des, icon }: any) => (
  <div className="flex flex-col items-center max-w-80 ">
    <div className="mb-5 flex justify-center items-center w-12 h-12 rounded-lg border-2 border-Grey-300">
      <img src={icon} className="h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-base text-gray-600 text-center">{des}</p>
  </div>
);

export default FeaturesSection;
