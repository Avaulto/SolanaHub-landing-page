import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const StatsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ y: 0, opacity: 1 });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);
  return (
    <section ref={ref} className="bg-gray-200 px-6 md:px-12 py-16 sm:py-24 sm:px-16 lg:px-56">
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-left mb-4 text-gray-900">Building only on Solana</h2>
        <p className="text-left mb-12 sm:mb-16 text-gray-600">Everything you need for your everyday Solana activity</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2  mb-0 lg:mb-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 1.25 }}
          className="flex flex-col items-center mb-8 sm:mb-0 sm:items-start"
        >
          <span className="text-5xl sm:text-6xl font-bold text-gray-900 text-center md:text-left ">2x</span>
          <span className="mt-4 text-lg font-semibold text-center sm:text-left text-gray-900">Hackathons winners</span>
          <p className="text-center sm:text-left sm:block text-gray-600">Building & improving since 2022</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 1.25 }}
          className="flex flex-col items-center mb-8 sm:mb-0 sm:items-start"
        >
          <span className="text-5xl sm:text-6xl font-bold text-gray-900 text-center md:text-left ">integrations</span>
          <span className="mt-4 text-lg font-semibold text-center sm:text-left text-gray-900">
            10+ High end protocols and API providers merging together
          </span>
          <p className="text-center sm:text-left sm:block text-gray-600">
            Safe & audited & top tier teams that created amazing product
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 1.25 }}
          className="flex flex-col items-center mb-8 sm:mb-0 sm:items-start"
        >
          <span className="text-5xl sm:text-6xl font-bold text-gray-900 text-center md:text-left ">+120K</span>
          <span className="mt-4 text-lg font-semibold text-center sm:text-left text-gray-900">Actions worldwide</span>
          <p className="text-center sm:text-left sm:block text-gray-600">
            Our free App helps users to stay aware DeFi activity and perform Everything they need directly from
            SolanaHub
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 1.25 }}
          className="flex flex-col items-center sm:items-start"
        >
          <span className="text-5xl sm:text-6xl  font-bold text-gray-900 text-center md:text-left">
            Network guardians
          </span>
          <span className="mt-4 text-lg font-semibold text-center sm:text-left text-gray-900">
            Solana validator since solana inception
          </span>
          <p className="text-center sm:text-left sm:block text-gray-600">
            As Solana validators since testnet, we're seasoned experts in the platform's development on Solana ecosystem
            and really love what we do.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
