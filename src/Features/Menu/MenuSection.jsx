import LogoMenu from "./LogoMenu";

function MenuSection() {
  return (
    <nav className="realative container mx-auto  p-6">
      <div className="flex  items-center justify-between">
        {/* Container for logo and menu list */}
        <div className="flex items-center space-x-20">
          <LogoMenu />
          <div className="hidden space-x-8 font-bold  lg:flex">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet duration-150"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet duration-150"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet duration-150"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Container for the buttons on lg screen */}
        <div className=" text-grayishViolet hidden items-center space-x-6 font-bold lg:flex">
          <a href="#" className=" hover:text-veryDarkViolet duration-150">
            Login
          </a>
          <a
            href="#"
            className=" bg-cyan hover:shadow-darkViolet rounded-full px-8 py-3 font-bold text-white transition-all duration-150 hover:scale-105 hover:opacity-80 hover:shadow-md"
          >
            Sign Up
          </a>
        </div>
        {/* @todo Hamburger menu */}
      </div>
      {/* @todo display mobile menu  */}
    </nav>
  );
}

export default MenuSection;
