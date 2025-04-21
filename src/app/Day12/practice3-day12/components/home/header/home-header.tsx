import Image from "next/image";
import HomeHeaderLogo from "@/assets/home-header-logo.svg";
import NavItem from "./nav-item";

const HomeHeader = () => {
  return (
    <header className="bg-[#136c72] py-[1em] text-white">
      <div className="mx-auto flex w-[80%] max-w-[1100px] items-center justify-between">
        <a href="#" className="mr-[1em] border border-yellow-400">
          <Image
            src={HomeHeaderLogo}
            alt="conquering responsive layouts"
            width={55}
            height={30}
          />
        </a>
        <nav className="flex w-full justify-between gap-5 border border-red-50">
          <ul className="flex items-center gap-5 font-medium uppercase">
            <NavItem name="home" />
            <NavItem name="about" />
            <NavItem name="contact" />
          </ul>
          <ul className="flex items-center gap-5 font-medium uppercase">
            <NavItem name="sign in" />
            <NavItem
              name="sign up"
              className="inline-block rounded-full bg-white px-5 py-1 font-normal text-[#136c72]"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
