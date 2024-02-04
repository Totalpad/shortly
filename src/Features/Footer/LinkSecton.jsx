import Links from "./Links";

function LinkSecton() {
  return (
    <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">
      {/* Links components  */}
      {/* 1 */}
      <Links header="Features">
        <a
          href="https://perehudovnikita.online/"
          target="_blank"
          rel="noreferrer"
          className="capitalize text-gray-400 duration-100 hover:text-cyan"
        >
          Link shortening
        </a>
        <a
          href="https://perehudovnikita.online/"
          target="_blank"
          rel="noreferrer"
          className="capitalize text-gray-400 duration-100 hover:text-cyan"
        >
          Branded links
        </a>
        <a
          href="https://perehudovnikita.online/"
          target="_blank"
          rel="noreferrer"
          className="capitalize text-gray-400 duration-100 hover:text-cyan"
        >
          Analytics
        </a>
      </Links>
      {/* 2 */}
      <Links header="Resources">
        <a
          href="https://perehudovnikita.online/"
          target="_blank"
          rel="noreferrer"
          className="capitalize text-gray-400 duration-100 hover:text-cyan"
        >
          Blog
        </a>
        <a
          href="https://perehudovnikita.online/"
          target="_blank"
          rel="noreferrer"
          className="capitalize text-gray-400 duration-100 hover:text-cyan"
        >
          Developers
        </a>
        <a
          href="https://perehudovnikita.online/"
          target="_blank"
          rel="noreferrer"
          className="capitalize text-gray-400 duration-100 hover:text-cyan"
        >
          Support
        </a>
      </Links>
      {/* 3 */}
      <Links header="Company">
        <a
          href="https://perehudovnikita.online/"
          target="_blank"
          rel="noreferrer"
          className="capitalize text-gray-400 duration-100 hover:text-cyan"
        >
          About
        </a>
        <a
          href="https://perehudovnikita.online/"
          target="_blank"
          rel="noreferrer"
          className="capitalize text-gray-400 duration-100 hover:text-cyan"
        >
          Our Team
        </a>
        <a
          href="https://perehudovnikita.online/"
          target="_blank"
          rel="noreferrer"
          className="capitalize text-gray-400 duration-100 hover:text-cyan"
        >
          Contact
        </a>
      </Links>
    </div>
  );
}

export default LinkSecton;
