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
        <h2 className="text-3xl font-bold text-left mb-4 text-gray-900">Build something great</h2>
        <p className="text-left mb-12 sm:mb-16 text-gray-600">
          Everything you need to build modern UI and great products.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-0 lg:mb-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="flex flex-col items-center mb-8 sm:mb-0 sm:items-start"
        >
          <span className="text-5xl sm:text-6xl font-bold text-gray-900">2x</span>
          <span className="mt-4 text-lg font-semibold text-center sm:text-left text-gray-900">Projects completed</span>
          <p className="text-center sm:text-left sm:block text-gray-600">
            We've helped build over 400 amazing projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
          className="flex flex-col items-center mb-8 sm:mb-0 sm:items-start"
        >
          <span className="text-5xl sm:text-6xl font-bold text-gray-900">2 years</span>
          <span className="mt-4 text-lg font-semibold text-center sm:text-left text-gray-900">
            Return on investment
          </span>
          <p className="text-center sm:text-left sm:block text-gray-600">
            Our customers have reported an average of ~600% ROI.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 1.5 }}
          className="flex flex-col items-center mb-8 sm:mb-0 sm:items-start"
        >
          <span className="text-5xl sm:text-6xl font-bold text-gray-900">+20K</span>
          <span className="mt-4 text-lg font-semibold text-center sm:text-left text-gray-900">Global downloads</span>
          <p className="text-center sm:text-left sm:block text-gray-600">
            Our free UI kit has been downloaded over 100K times.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 2 }}
          className="flex flex-col items-center sm:items-start"
        >
          <span className="text-5xl sm:text-6xl font-bold text-gray-900">7 years</span>
          <span className="mt-4 text-lg font-semibold text-center sm:text-left text-gray-900">5-star reviews</span>
          <p className="text-center sm:text-left sm:block text-gray-600">
            We're proud of our 5-star rating with over 200 reviews.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
