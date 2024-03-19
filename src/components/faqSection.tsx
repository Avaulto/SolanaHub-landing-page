import { MinusCircle, PlusCircle, XCircle } from "lucide-react";
import { useState } from "react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(-1);
  const toggleFaq = (index: number) => {
    if (selectedFaqIndex === index) {
      setSelectedFaqIndex(-1);
    } else {
      setSelectedFaqIndex(index);
    }
  };
  return (
    <section className="mx-5  py-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl text-Grey-900 font-semibold text-center mb-6">Frequently asked questions</h2>
        <p className="text-xl text-Grey-600 text-center mb-16">
          Everything you need to know about the product and billing.
        </p>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} className="mb-4  border-b border-Grey-300">
              <div className="flex flex-row  justify-between w-3xl md:mb-4 items-center">
                <div>
                  <h3 className="font-medium text-lg text-Grey-900 mt-3 mb-3">{faq.question}</h3>
                </div>
                {index != selectedFaqIndex ? (
                  <PlusCircle
                    className="text-xl text-Grey-400 cursor-pointer hover:text-Grey-500 duration-200"
                    onClick={() => toggleFaq(index)}
                  />
                ) : (
                  <MinusCircle
                    className="text-xl text-Grey-400 cursor-pointer hover:text-Grey-500 duration-200 "
                    onClick={() => toggleFaq(index)}
                  />
                )}
              </div>
              {index === selectedFaqIndex && <p className=" text-Grey-600 max-w-2xl mb-4 md:mb-6">{faq.answer}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
