import heroAnimation from "../assets/lottie/heroAnimation.json";
import { Player } from "@lottiefiles/react-lottie-player";

const HeroSection = () => {
  return (
    <section className="bg-white px-4 pt-16 md:pt-24 lg:px-8 ">
      <div className="mx-auto max-w-md md:max-w-4xl text-center  border-b border-Grey-300  ">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-6xl">The motherboard aggregator</h1>
        <p className="mb-8 text-gray-600 max-w-sm md:max-w-3xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted
          by over 4,000 startups.
        </p>
        <div className="flex flex-col space-y-3 mx-4 md:flex-row-reverse md:space-y-0 md:justify-center sm:mb-4 md:mb-0">
          <button className="w-full md:w-auto md:ml-4 bg-primary justify-center rounded-lg py-3 px-5 text-center text-md text-white font-semibold hover:bg-primary-800 transition-colors duration-300">
            Launch the App
          </button>
          <button className="w-full md:w-auto bg-white border-Grey-300 border-2 justify-center rounded-lg py-3 px-5 text-center text-md text-Grey-600 font-semibold hover:bg-Grey-100 transition-colors duration-300">
            Book a demo
          </button>
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
      </div>
    </section>
  );
};

export default HeroSection;
