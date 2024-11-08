import logoText from "../assets/Logo_text 1.png";
import xTwitter from "../assets/icons/x-twitter.svg";
import discord from "../assets/icons/discord.png";
// ... import other logos similarly

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-b border-gray-300 pb-8">
          <div className="flex justify-center md:justify-start">
            <img src={logoText} alt="SolanaHub Logo" className="h-12" />
          </div>
          <div className="flex space-x-4 self-center md:self-end items-center ">
            <img
              src={xTwitter}
              className="h-5 cursor-pointer"
              onClick={() => window.open("https://twitter.com/SolanaHubApp")}
            />
            <img
              src={discord}
              className="h-5 cursor-pointer"
              onClick={() => window.open("https://discord.gg/mnwwvxhgTv")}
            />
            {/* <button className="hidden md:inline-block bg-primary justify-center rounded-lg py-2 px-4 text-center text-sm text-white font-semibold hover:bg-primary-800 transition-colors duration-300">
              Launch the App
            </button> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8">
          <p className="text-gray-600 text-sm">&copy; 2024 SolanaHub. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://docs.solanahub.app/solanahub/solanahub-terms-and-conditions"
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
