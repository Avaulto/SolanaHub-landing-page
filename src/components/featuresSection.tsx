import MobileScreenshot from "../assets/mobile-screenshot.png";
import DesktopScreenshot from "../assets/desktop-screenshot.png";
import MobileScreenshotSm from "../assets/mobile-screenshot-sm.png";
import saftyIcon from "../assets/icons/saftyIcon.svg";
import composabilityIcon from "../assets/icons/composabilityIcon.svg";
import explorationIcon from "../assets/icons/explorationIcon.svg";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const FeaturesSection = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const ref = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ x: 0, opacity: 1 });
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls2.start({ x: 0, opacity: 1 });
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, [controls2]);

  return (
    <section ref={ref} className="overflow-x-hidden flex flex-col justify-center items-center py-14 md:py-24 lg:px-8">
      <div className="bg-primary-200 py-1 px-3 rounded-full inline-block mb-4 ">
        <h1 className="font-medium text-primary text-lg text-center">Features</h1>
      </div>

      <h1 className="font-semibold text-Grey-900 text-3xl md:text-4xl text-center mb-4 md:mb-5">
        Make your everyday task from 1 centralize location
      </h1>
      <p className="mb-16 text-center text-gray-600 max-w-sm md:max-w-3xl mx-auto">
        Powerful, self-managed, approved only through transactions from your wallet. A hub environment for all your
        activities.
      </p>
      <div className="hidden md:flex justify-center justify-items-center items-center relative mb-12">
        <motion.img
          src={MobileScreenshot}
          alt="Phone"
          initial={{ x: "-100vw", opacity: 0 }} // Start off-screen to the left
          animate={controls}
          transition={{ type: "spring", stiffness: 25 }}
          className=" max-w-60 z-10" // Use z-index to ensure the phone overlaps the desktop
        />
        <motion.img
          src={DesktopScreenshot}
          alt="Desktop"
          initial={{ x: "100vw", opacity: 0 }} // Start off-screen to the right
          animate={controls}
          transition={{ type: "spring", stiffness: 25 }}
          className=" max-w-3xl -ml-20 " // Negative margin to create the overlap effect
        />
      </div>
      <div className="flex w-full bg-Grey-50 md:hidden justify-center items-center relative pt-8 mb-14">
        <motion.img
          src={MobileScreenshotSm}
          alt="mobile"
          initial={{ x: 20, opacity: 0 }} // Start centered and invisible
          animate={controls}
          transition={{ type: "spring", stiffness: 25 }}
          className="max-w-60 self-center " // Ensure the image is centered without negative margins
        />
      </div>

      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0 }}
        animate={controls2}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 1.25 }}
        className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-48 "
      >
        <FeatureIcon
          title="Composability"
          des="Creating a place where multiple dApps collaborate together in a unified environment."
          icon={composabilityIcon}
        />
        <FeatureIcon
          title="Safety"
          des="
          Creating a place where only the best of Solana can gain entry."
          icon={saftyIcon}
        />
        <FeatureIcon
          title="Exploration"
          des="Providing you with access to all the latest trends and narratives as soon as they become available."
          icon={explorationIcon}
        />
      </motion.div>
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
