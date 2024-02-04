import { useEffect, useState } from "react";
import LogoMenu from "./LogoMenu";

function MenuSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    handleBodyScroll();
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="realative container mx-auto  p-6">
      <div className="flex  items-center justify-between">
        {/* Container for logo and menu list */}
        <div className="flex items-center space-x-20">
          <LogoMenu />
          <div className="hidden space-x-8 font-bold  lg:flex">
            <a
              href="#"
              className="text-grayishViolet duration-150 hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet duration-150 hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet duration-150 hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Container for the buttons on lg screen */}
        <div className=" hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <a href="#" className=" duration-150 hover:text-veryDarkViolet">
            Login
          </a>
          <a
            href="#"
            className=" rounded-full bg-cyan px-8 py-3 font-bold text-white transition-all duration-150 hover:scale-105 hover:opacity-80 hover:shadow-md hover:shadow-darkViolet"
          >
            Sign Up
          </a>
        </div>
        {/* @todo Hamburger menu */}
        <button
          className={`${isOpen ? "open" : ""} hamburger z-40 block focus:outline-none lg:hidden`}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </button>
      </div>
      {/* @todo display mobile menu  */}

      <div
        id="menu"
        className={`${isOpen ? "flex" : "hidden"} z-100 absolute left-6 right-6 top-20 rounded-lg bg-darkViolet p-6`}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div
          className="flex w-full flex-col items-center justify-center space-y-6 rounded-sm font-bold text-white"
          onClick={() => setIsOpen(false)}
        >
          <a href="#features" className="w-full text-center">
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a>
          <a
            href="#"
            className="w-full border-t border-gray-400 pt-6 text-center"
          >
            Login
          </a>
          <a href="#" className="w-full rounded-full bg-cyan py-3 text-center">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MenuSection;
