import { useRef } from "react";
import firstFeedback from "../assets/feedback-1.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FeedbackSection = () => {
  const items = [
    {
      id: 0,
      name: "Rich Wilson",
      image: firstFeedback,
      feedback: "“We’ve really sped up our workflow using Untitled.”",
    },
    {
      id: 1,
      name: "Rich Wilson",
      image: firstFeedback,
      feedback: "“We’ve really sped up our workflow using Untitled.”",
    },
    {
      id: 2,
      name: "Rich Wilson",
      image: firstFeedback,
      feedback: "“We’ve really sped up our workflow using Untitled.”",
    },
    {
      id: 3,
      name: "Rich Wilson",
      image: firstFeedback,
      feedback: "“We’ve really sped up our workflow using Untitled.”",
    },
    {
      id: 4,
      name: "Rich Wilson",
      image: firstFeedback,
      feedback: "“We’ve really sped up our workflow using Untitled.”",
    },
    {
      id: 5,
      name: "Rich Wilson",
      image: firstFeedback,
      feedback: "“We’ve really sped up our workflow using Untitled.”",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const smoothScroll = (target: number, duration: number) => {
    const start = ref.current!.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const scrollProgress = Math.min(elapsedTime / duration, 1);
      const scrollPosition = start + (target - start) * scrollProgress;
      ref.current!.scrollLeft = scrollPosition;

      if (scrollProgress < 1) {
        animationRef.current = requestAnimationFrame(animateScroll);
      }
    };

    animationRef.current = requestAnimationFrame(animateScroll);
  };

  const cancelAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const scrollLeft = () => {
    if (!ref.current) return;
    const currentPosition = ref.current.scrollLeft;
    const newPosition = currentPosition - 200; // Adjust as needed
    smoothScroll(newPosition, 500); // Adjust duration as needed
  };

  const scrollRight = () => {
    if (!ref.current) return;
    const currentPosition = ref.current.scrollLeft;
    const newPosition = currentPosition + 200; // Adjust as needed
    smoothScroll(newPosition, 500); // Adjust duration as needed
  };

  return (
    <section className="px-6 md:px-12 py-16 sm:py-24 sm:px-16 lg:pl-56">
      <div>
        <h2 className="text-3xl font-bold text-left mb-4 text-gray-900">Don’t just take our word for it</h2>
        <p className="text-left mb-12 sm:mb-16 text-gray-600">
          Hear from some of our amazing customers who are automating their finances.
        </p>
      </div>

      <div className="relative overflow-x-scroll" ref={ref}>
        <div className="flex flex-row pb-8 space-x-8">
          {items.map((item, index) => (
            <div key={index} className="relative w-64 md:w-90 " style={{ minWidth: "320px", minHeight: "425px" }}>
              <img src={item.image} alt="Background" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 w-full p-4">
                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md rounded p-3">
                  <h1 className="text-gray-800 text-xl font-semibold">{item.name}</h1>
                  <p className="text-gray-600">{item.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="p-3 rounded-full border border-Grey-300 mr-8" onClick={scrollLeft}>
        <ArrowLeft className="text-Grey-600" />
      </button>
      <button className="p-3 rounded-full border border-Grey-300" onClick={scrollRight}>
        <ArrowRight className="text-Grey-600" />
      </button>
    </section>
  );
};

export default FeedbackSection;
