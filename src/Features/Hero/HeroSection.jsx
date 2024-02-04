import img from "../../assets/illustration-working.svg";
function HeroSection() {
  return (
    <section id="hero">
      <div className=" container mx-auto flex flex-col-reverse p-6 lg:flex-row">
        <div className="mb-44 flex flex-col space-y-10 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-center text-5xl font-bold lg:max-w-md lg:text-left lg:text-6xl">
            More than just shorter links
          </h1>
          <p className="text-center text-2xl text-gray-400 lg:max-w-md lg:text-left">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <div className="mx-auto lg:mx-0">
            <a
              href="#link-form"
              className=" rounded-full bg-cyan px-10 py-5 text-2xl font-bold text-white transition-all duration-150 hover:scale-105 hover:opacity-80 hover:shadow-md hover:shadow-darkViolet lg:py-4"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* <HeroImg /> */}
        <div className=" mx-auto mb-24 md:w-180 lg:mb-0 lg:w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
