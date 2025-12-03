import { FOOTER_CONTENT } from "../constants";
// import logo from "../assets.logo.png";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="mt-20 text-neutral-400">
      <div className="max-w-7xl mx-auto border-t border-neutral-800 pt-12 pb-2">
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center text-neutral-500 border-b border-gray-800 pb-8 ">
          <img src={logo} alt="logo" width={150} height={80} className="ml-6" />
          <div className="flex flex-col mx-10">
            <h3 className="text-xl font-medium text-neutral-400">Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#">Privacy & policy</a>
              </li>
              <li>
                <a href="#">Terms & conditions</a>
              </li>
              <li>
                <a href="#">FAQS</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-xl">Subscribe to our News Letter</h3>
            <form>
              <input
                type="text"
                name=""
                id=""
                placeholder="Email..."
                className="bg-white rounded-xl py-2 px-4 mr-2 outline-none focus:outline-none"
              />
              <button
                type="button"
                className="bg-blue-600 py-2 px-4 text-white rounded-2xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-4">
          <p> © 2025 StreamLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
