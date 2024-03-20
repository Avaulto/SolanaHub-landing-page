import { useEffect, useRef, useState } from "react";
import utilityOverview from "../assets/utility-overview.png";
import utilityStake from "../assets/utility-stake.png";
import utilitySwap from "../assets/utility-swap.png";
import utilityDao from "../assets/utility-dao.png";
import "../index.css";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";

export const UtilitiesSection = () => {
  const utilities: { id: number; name: string; content: string; icon: string }[] = [
    {
      id: 0,
      name: "Asset Overview",
      content:
        "Assuming you have the following: numerous tokens, hundreds of NFTs, and significant exposure to DeFi. Now, imagine being able to engage with everything in one place - that's SolanaHub.",
      icon: utilityOverview,
    },
    {
      id: 1,
      name: "Stake your SOL",
      content:
        "Our features make staking a breeze, whether you're into native or liquid options. Say goodbye to complicated processes and hello to easy, rewarding earnings. ",
      icon: utilityStake,
    },
    {
      id: 2,
      name: "DeFi Participation",
      content:
        "Rest easy knowing that our platform enforces strict standards, ensuring you access only the safest DeFi options. We integrate high liquidity, high volume, and audited protocols, prioritizing your safety above all else. Your peace of mind is our top priority.",
      icon: utilitySwap,
    },
    {
      id: 3,
      name: "DAO Management",
      content:
        "Stay informed and empowered about your government's actions, impact, and influence. Take control and actively participate in shaping the future. Make a difference right from SolanaHub.",
      icon: utilityDao,
    },
  ];

  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalDelay, setIntervalDelay] = useState(5000);
  const sectionRef = useRef(null);

  useEffect(() => {
    let interval: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section has come into view, start the interval
          interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % utilities.length);
          }, intervalDelay);

          return () => clearInterval(interval);
        } else {
          // Section is not in view, clear the interval if it was set
          clearInterval(interval);
        }
      },
      {
        root: null, // observing for viewport
        rootMargin: "0px",
        threshold: 0.1, // trigger if at least 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearInterval(interval); // Clear interval here
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect(); // Also disconnect the observer
    };
  }, [intervalDelay, utilities.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the section comes into view, start the animation
          controls.start({ y: 0, opacity: 1 });
        } else {
          // Optionally, reset the animation when the section leaves the view
          // controls.start({ y: 30, opacity: 0 });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <section ref={sectionRef} className="flex flex-col justify-center items-center px-0 py-14 md:py-24 lg:px-8 ">
      <div className="container mx-auto xl:px-12 py-8 flex justify-between items-start mb-2 md:mb-16 px-6 ">
        <motion.div
          //   initial={{ opacity: 0 }}
          //   animate={controls}
          //   exit={{ opacity: 0 }}
          //   transition={{ ease: "easeIn", duration: 0.7 }}
          className="text-left max-w-4xl"
        >
          <h1 className="text-4xl text-grey-900 font-semibold mb-4 md:mb-2">
            The only platform you'll ever need. Simple.
          </h1>
          <p className="md:mb-4 text-xl text-grey-600">
            Explore smarter, find your way into solana best to offer all from one platform
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.8 }}
          className="hidden xl:flex xl:flex-row gap-4"
        >
          <button className="bg-primary rounded-lg py-3 px-5 text-md text-white font-semibold hover:bg-primary-800 transition-colors duration-300">
            Launch dApp
          </button>
        </motion.div>
      </div>
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={controls}
        // exit={{ opacity: 0 }}
        // transition={{ ease: "easeIn", duration: 1.5 }}
        className="container mx-auto hidden xl:flex flex-row space-x-8 px-12 items-center justify-between"
      >
        <div className="flex flex-col">
          {utilities.map((utility, index) => (
            <div
              onClick={() => {
                setActiveIndex(index);
                setIntervalDelay((prevDelay) => (prevDelay !== 5000 ? 5000 : prevDelay - 1));
              }}
              key={index} // Make sure to add a unique key for list items
              className={`max-w-xl border-l-4 justify-center pl-8 py-5 cursor-pointer utilityItem ${
                activeIndex === index ? "border-primary" : "border-gray-300"
              } `}
            >
              <h1 className="text-gray-900 font-semibold text-xl">{utility.name}</h1>
              <p className="text-gray-600">{utility.content}</p>
            </div>
          ))}
        </div>
        <div className="relative  bg-gray-200 pt-16 px-16 flex rounded-md overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={utilities[activeIndex].name} // This triggers re-animation
              initial={{ y: 30, opacity: 0 }} // Slightly increase for performance
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }} // Only fade out without moving might be smoother
              transition={{ ease: "circInOut", duration: 0.7 }} // Shorten for snappiness
              src={utilities[activeIndex].icon}
              alt="Utility Icon"
              className="h-96 "
            />
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="container mx-auto xl:hidden  items-center justify-between">
        <div className="flex flex-row px-6 gap-2 mb-4 justify-start">
          <ArrowLeft
            onClick={() => {
              const newIndex = activeIndex === 0 ? utilities.length - 1 : activeIndex - 1;
              setActiveIndex(newIndex);
              setIntervalDelay((prevDelay) => (prevDelay !== 5000 ? 5000 : prevDelay - 1));
              controls.start({ y: 30, opacity: 0 }); // Reset animation controls
            }}
            size={22}
            className="text-gray-600"
          />
          <ArrowRight
            onClick={() => {
              const newIndex = (activeIndex + 1) % utilities.length;
              setActiveIndex(newIndex);
              setIntervalDelay((prevDelay) => (prevDelay !== 5000 ? 5000 : prevDelay - 1));
              controls.start({ y: 30, opacity: 0 }); // Reset animation controls
            }}
            size={22}
            className="text-gray-600"
          />
        </div>

        <div className="flex flex-row px-6">
          {utilities.map((_, index) => (
            <div
              key={index} // Make sure to add a unique key for list items
              className={`w-full border-t-4   justify-center  py-2  utilityItem ${
                activeIndex === index ? "border-primary" : "border-gray-300"
              } `}
            ></div>
          ))}
        </div>
        <h1 className="text-gray-900 font-semibold text-xl px-6">{`${activeIndex + 1}. ${
          utilities[activeIndex].name
        }`}</h1>
        <p className="text-gray-600 px-6 mb-8">{utilities[activeIndex].content}</p>
        <div className="containr gap-4 justify-center flex flex-row pb-12 px-6  ">
          <motion.button
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "circInOut", duration: 1.5 }}
            className="bg-primary rounded-lg py-3 w-full text-md text-white font-semibold hover:bg-primary-800 transition-colors duration-300"
          >
            Launch dApp
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "circInOut", duration: 1.5 }}
            className="bg-white flex gap-2 flex-row justify-center border-grey-300 border-2 rounded-lg py-3 w-full  text-md text-grey-600 font-semibold hover:bg-grey-100 transition-colors duration-300"
          >
            <PlayCircle />
            Demo
          </motion.button>
        </div>
        <div className="relative w-full  bg-gray-200 pt-16 px-6 md:px-48 flex rounded-md overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={utilities[activeIndex].name} // This triggers re-animation
              initial={{ y: 30, opacity: 0 }} // Slightly increase for performance
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }} // Only fade out without moving might be smoother
              transition={{ ease: "circInOut", duration: 0.7 }} // Shorten for snappiness
              src={utilities[activeIndex].icon}
              alt="Utility mobile icon"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
