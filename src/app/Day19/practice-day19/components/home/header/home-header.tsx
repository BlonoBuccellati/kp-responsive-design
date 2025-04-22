"use client";

import Image from "next/image";
import HomeHeaderLogo from "@/assets/home-header-logo.svg";
import NavItem from "./nav-item";
import Hamburger from "./hamburger";
import { useState } from "react";

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#136c72] py-[1em] text-center text-[1rem] text-white">
      {/* row container */}
      <div className="relative mx-auto w-[80%] max-w-[1100px] md:flex">
        {/* nav-toggle */}
        <Hamburger
          className={`absolute left-0 md:hidden`}
          setIsOpen={setIsOpen}
        />
        {/* logo */}
        <a href="#" className="">
          <Image
            src={HomeHeaderLogo}
            alt="conquering responsive layouts"
            width={55}
            height={30}
            className="inline"
          />
        </a>
        {/* nav nav-visible */}
        {/* nav-visibleをどうやって変化させてるか？クリックの挙動だ。 */}
        <nav
          className={`${isOpen ? "block" : "hidden"} w-full uppercase md:flex md:items-center md:justify-end`}
        >
          <ul className="mb-[2em] md:m-0 md:flex">
            <NavItem name="home" />
            <NavItem name="about" />
            <NavItem name="contact" />
          </ul>
          <ul className="md:m-0 md:flex">
            <NavItem name="sign in" />
            <NavItem
              name="sign up"
              className="rounded-full bg-[#FFF] px-[.75em] py-[.25em] text-[#23423A]"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
