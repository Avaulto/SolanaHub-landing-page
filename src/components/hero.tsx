import { motion } from "framer-motion";
import heroAnimation from "../assets/lottie/heroAnimation.json";
import { Player } from "@lottiefiles/react-lottie-player";

const HeroSection = () => {
  return (
    <section className="bg-white px-4 pt-32 md:pt-40 lg:px-8 ">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.7 }}
        className="mx-auto max-w-md md:max-w-4xl text-center  border-b border-Gray-300  "
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-6xl">The motherboard aggregator</h1>
        <p className="mb-8 text-gray-600 max-w-sm md:max-w-3xl mx-auto">
          Transforming the Solana experience, our ultimate onboarding platform simplifies, secures, and enriches your
          journey into the Solana ecosystem, ensuring accessibility and enjoyment every step of the way.
        </p>
        <div className="flex flex-col space-y-3 mx-4 md:flex-row-reverse md:space-y-0 md:items-center md:justify-center sm:mb-4 md:mb-0">
          <a href="https://solanahub.app">
            <button className="w-full md:w-auto md:ml-4 bg-primary justify-center rounded-lg py-3 px-5 text-center text-md text-white font-semibold hover:bg-primary-800 transition-colors duration-300">
              Launch the App
            </button>
          </a>
          <a href="https://discord.gg/8W2qehB32j" target="_blank">
            <button className="w-full md:w-auto bg-white border-Gray-300 border-2 justify-center rounded-lg py-3 px-5 text-center text-md text-Gray-600 font-semibold hover:bg-Gray-100 transition-colors duration-300">
              Ask us personally
            </button>
          </a>
        </div>
        <div className="w-full flex justify-center drop-shadow-2xl ">
          <Player
            autoplay
            loop
            src={heroAnimation}
            className="w-full max-w-xs md:max-w-3xl"
            style={{ height: "auto" }} // Height will scale automatically
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
