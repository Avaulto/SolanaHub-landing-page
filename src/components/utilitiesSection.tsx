export const UtilitiesSection = () => {
  return (
    <section className="flex flex-col justify-center items-center px-6 py-14 md:py-24 lg:px-8">
      <div className="container mx-auto px-6 py-8 flex justify-between items-start mb-12 md:mb-16">
        <div className="text-left max-w-4xl">
          <h1 className="text-4xl text-grey-900 font-semibold mb-2">The only platform you'll ever need. Simple.</h1>
          <p className="mb-4 text-xl text-grey-600">
            Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your
            business.
          </p>
        </div>
        <div className="hidden xl:flex xl:flex-row gap-4">
          {/* This ensures buttons don't stretch */}
          <button className="bg-white border-grey-300 border-2 rounded-lg py-3 px-5 text-md text-grey-600 font-semibold hover:bg-grey-100 transition-colors duration-300">
            Contact
          </button>
          <button className="bg-primary rounded-lg py-3 px-5 text-md text-white font-semibold hover:bg-primary-800 transition-colors duration-300">
            Launch dApp
          </button>
        </div>
      </div>
    </section>
  );
};
