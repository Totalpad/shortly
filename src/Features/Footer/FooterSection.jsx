import LogoMenu from "../Menu/LogoMenu";
import LinkSecton from "./LinkSecton";
import Socials from "./Socials";

function FooterSection() {
  return (
    <footer className=" bg-veryDarkViolet py-16">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-16 md:flex-row md:items-start md:space-y-0">
        <LogoMenu fill="gray" />

        <LinkSecton />

        {/* Socials container  */}
        <Socials />
      </div>
    </footer>
  );
}

export default FooterSection;
