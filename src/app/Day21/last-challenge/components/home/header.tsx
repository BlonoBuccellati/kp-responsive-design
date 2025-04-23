import HeaderIcon from "@/assets/home-header-logo.svg";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <header className="bg-matte-dark text-preset-4 p-8 text-white">
      <div className="">
        {/* logo */}
        <Image src={HeaderIcon} alt="icon" width={55} />
        <nav>
          <ul className="uppercase">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">sign in</a>
            </li>
            <li>
              <a href="#">sign up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
