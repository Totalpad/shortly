import BoxItems from "./BoxItems";
import IconBrand from "./IconBrand";
import IcontDetailed from "./IcontDetailed";
import IconCustom from "./IconCustom";

function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-100 pb-32">
      <div className="container relative mx-auto flex flex-col items-start px-6 md:flex-row md:space-x-7">
        {/* horizontal line */}
        <div className="absolute left-16 top-24 hidden h-3 w-10/12 bg-cyan md:block"></div>
        {/* vertical line */}
        <div className="absolute left-1/2 -ml-1 h-full w-2 bg-cyan md:hidden"></div>

        <BoxItems titel="Brand Recognition" img={<IconBrand />}>
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </BoxItems>

        <BoxItems
          titel="Detailed records"
          img={<IcontDetailed />}
          offset={"mt-24 md:mt-8"}
        >
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </BoxItems>

        <BoxItems
          titel="Fully customizable "
          img={<IconCustom />}
          offset={"mt-24 md:mt-16"}
        >
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </BoxItems>
      </div>
    </section>
  );
}

export default FeaturesSection;
