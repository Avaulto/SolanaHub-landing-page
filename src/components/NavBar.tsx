import logoText from "../assets/Logo_text 1.png";
import "../index.css";
// import { Squeeze as Hamburger } from "hamburger-react"; /// ask amir which animation he wants .
import va from "@vercel/analytics";
function NavBar() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-20 w-full bg-white border-gray-200 px-4 sm:px-6 py-5">
      <div className="container flex justify-center md:justify-between items-center mx-auto">
        <a href="#" className="flex">
          <img src={logoText} className="h-10 mx-auto" />
        </a>

        {/* <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded="true"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Hamburger toggled={isMobileMenuOpen} toggle={setIsMobileMenuOpen} />
        </button> */}
        <div className={` hidden w-full md:block md:w-auto`} id="mobile-menu">
          {/*${isMobileMenuOpen ? "flex" : "hidden"} */}
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-Gray-600 text-base font-semibold  md:bg-transparent md:p-0 hover:text-Gray-950 transition-colors duration-200"
                aria-current="page"
              >
                {/* Home */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-Gray-600 text-base font-semibold  md:bg-transparent md:p-0 hover:text-Gray-950 transition-colors duration-200"
              >
                {/* Products */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-Gray-600 text-base font-semibold  md:bg-transparent md:p-0 hover:text-Gray-950 transition-colors duration-200"
              >
                {/* Resources */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-Gray-600 text-base font-semibold  md:bg-transparent md:p-0 hover:text-Gray-950 transition-colors duration-200"
              >
                {/* Pricing */}
              </a>
            </li>
          </ul>
        </div>

        <button
          onClick={() => {
            window.open("https://solanahub.app");
            va.track("redirect to app");
          }}
          className="hidden md:inline-block bg-primary justify-center rounded-lg py-3 px-5 text-center text-md text-white font-semibold hover:bg-primary-800 transition-colors duration-300"
        >
          Launch the App
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
