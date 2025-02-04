"use client";
import { assets } from "@/app/assets/assets";
import Image from "next/image";
import { useRef } from "react";

export function Navbar() {
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full"
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px[8%] py-4 flex justify-between items-center z-50 bg-white ">
        <a href="">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm opacity-50">
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="font-Ovo">
              About Me
            </a>
          </li>

          <li>
            <a href="#service" className="font-Ovo">
              Services
            </a>
          </li>

          <li>
            <a href="#work" className="font-Ovo">
              My Works
            </a>
          </li>

          <li>
            <a href="#contact" className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt="dark mode icon"
              className="w-6 "
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="contact icon" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt=" menu icon" className="w-6 " />
          </button>
        </div>

        {/* ------------------------------ mobile menus ------------------------------ */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6 " onClick={closeMenu}>
            <Image
              src={assets.close_black}
              className="w-5 cursor-pointer"
              alt="close button"
            />
          </div>
          <li onClick={closeMenu}>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>

          <li onClick={closeMenu}>
            <a href="#about" className="font-Ovo">
              About Me
            </a>
          </li>

          <li onClick={closeMenu}>
            <a href="#service" className="font-Ovo">
              Services
            </a>
          </li>

          <li onClick={closeMenu}>
            <a href="#work" className="font-Ovo">
              My Works
            </a>
          </li>

          <li onClick={closeMenu}>
            <a href="#contact" className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>{" "}
    </>
  );
}
