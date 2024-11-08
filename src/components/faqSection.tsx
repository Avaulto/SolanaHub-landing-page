import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "What does SolanaHub offer?",
      answer: `we offer veraity of utils such as: User dashboard overview for assets like native sol, SPL(tokens),NFTs and defi. 
        DAO control & DeFi protocols integrations out of the box`,
    },
    {
      question: "Is it safe to use SolanaHub?",
      answer: `Yes, Our users connect to our app using 3rd party wallet that stores & handle your permission for any action,
         meaning that we can not perform any event without the user approving it. on top of that, our app is 100% open-source and you can verify every piece of code
          before executing any procedure our github repo: https://github.com/avaulto/solanahub`,
    },
    {
      question: "Whats SolanaHub core business?",
      answer: `
        For the past three years, we've been operating as a Solana validator, using the income to fuel our ongoing development efforts. If you'd like to support our cause,
         we'd greatly appreciate it if you stake with us. 
         Together, we can continue to grow and innovate on the Solana network.
        `,
    },

    {
      question: "Is SolanaHub is free?",
      answer: "Yes, our hub is public good product and created to empower solana users!",
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
    <section className="px-6  py-24 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl text-Gray-900 font-semibold text-center mb-6">Frequently asked questions</h2>
        <p className="text-xl text-Gray-600 text-center mb-16">Everything you need to know about SolanaHub</p>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} className="mb-4  border-b border-Gray-300">
              <div className="flex flex-row  justify-between w-3xl md:mb-4 items-center">
                <div>
                  <h3 className="font-medium text-lg text-Gray-900 mt-3 mb-3">{faq.question}</h3>
                </div>
                {index != selectedFaqIndex ? (
                  <PlusCircle
                    className="text-xl text-Gray-400 cursor-pointer hover:text-Gray-500 duration-200"
                    onClick={() => toggleFaq(index)}
                  />
                ) : (
                  <MinusCircle
                    className="text-xl text-Gray-400 cursor-pointer hover:text-Gray-500 duration-200 "
                    onClick={() => toggleFaq(index)}
                  />
                )}
              </div>
              {index === selectedFaqIndex && <p className=" text-Gray-600 max-w-2xl mb-4 md:mb-6">{faq.answer}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
