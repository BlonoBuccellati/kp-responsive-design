import HeaderIcon from "@/assets/home-header-logo.svg";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <header className=" text-white">
      {/* logo */}
      <Image src={HeaderIcon} alt="icon" width={100} />
      <nav>
        <ul>
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
    </header>
  );
};

export default HomeHeader;
