"use client";

import HeaderIcon from "@/assets/home-header-logo.svg";
import Image from "next/image";
import { useState } from "react";

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-matte-dark text-preset-4 px-8 py-5 text-white">
      <div className="">
        {/* logo */}
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <Image
            src={HeaderIcon}
            alt="icon"
            width={55}
            className="hover:cursor-pointer hover:opacity-75"
          />
        </button>
        <nav className={`${isOpen ? "block" : "hidden"}`}>
          <ul className="uppercase">
            <li className="px-6">
              <a href="#" className="hover:opacity-75">
                home
              </a>
            </li>
            <li className="px-6">
              <a href="#" className="hover:opacity-75">
                about
              </a>
            </li>
            <li className="px-6">
              <a href="#" className="hover:opacity-75">
                contact
              </a>
            </li>
            <li className="px-6">
              <a href="#" className="hover:opacity-75">
                sign in
              </a>
            </li>
            <li className="py-3">
              <a
                href="#"
                className="bg-matte-beige rounded-full px-6 py-1 hover:opacity-75"
              >
                sign up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
