function CtaSection() {
  return (
    <section id="cta" className="bg-darkViolet py-24">
      <div className="flex flex-col space-y-6 p-2">
        <h5 className="mx-auto space-y-10 text-center text-4xl font-bold text-white">
          Boost your links today
        </h5>
        <a
          href="#link-form"
          className="  mx-auto rounded-full bg-cyan px-10 py-5 text-2xl font-bold text-white transition-all duration-150 hover:scale-105 hover:bg-cyanLight  focus:outline-none md:py-3 md:text-base lg:py-4"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default CtaSection;
