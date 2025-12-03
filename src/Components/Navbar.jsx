import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-4 flex justify-between items-center rounded-lg border border-neutral-800">
        <img src={logo} alt="logo" width={120} height={60} />
        <div className="hidden md:flex space-x-8">
          <a
            href="#works"
            className="hover:text-neutral-200 cursor-pointer text-gray-400 text-lg hover:-translate-y-1 transition-transform duration-300"
          >
            Features
          </a>
          <a
            href="#plans"
            className="hover:text-neutral-200 cursor-pointer text-gray-400  text-lg hover:-translate-y-1 transition-transform duration-300"
          >
            Plans
          </a>
          <a
            href="#Testimonials"
            className="hover:text-neutral-200 cursor-pointer text-gray-400 text-lg hover:-translate-y-1 transition-transform duration-300 "
          >
            Testimonials
          </a>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-neutral-200">
            Login
          </a>
          <a
            href="#"
            className="border border-neutral-700 text-white py-2 px-4 rounded-lg transition"
          >
            Get a Demo
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg transition hover:bg-blue-500"
          >
            Start Free Trial
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 items-center bg-neutral-900/60 backdrop-blur-md border p-4 rounded-xl mt-2">
          <a href="#" className="hover:text-neutral-200 text-white">
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-neutral-200 text-white cursor-pointer"
          >
            Resources
          </a>
          <a href="#" className="hover:text-white cursor-pointer text-white">
            Login
          </a>
          <a
            href="#"
            className="border border-neutral-700 text-white py-2 px-4 rounded-lg transition cursor-pointer"
          >
            Get a Demo
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg transition hover:bg-blue-500 cursor-pointer"
          >
            Start Free Trial
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
