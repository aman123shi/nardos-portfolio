import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";

export function Header({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen h-auto py-20 lg:py-0 flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-24 sm:w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-2 sm:mb-3 font-Ovo">
        Hi! I&apos;M Nardos Shibeshi{" "}
        <Image src={assets.hand_icon} className="w-5 sm:w-6" alt="" />
      </h3>

      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[66px] font-Ovo leading-tight">
        {"UI/UX Designer and Graphics Designer "}
        {isDarkMode ? "" : ""}
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo text-sm sm:text-base">
        I am passionate about creating beautiful and user-friendly designs. with
        more than 3+ years of experience in the field, I have worked with
        various clients and companies to create designs that are both visually
        appealing and functional. I am always looking for new opportunities to
        learn and grow as a designer.{" "}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 items-center">
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 sm:px-10 py-2.5 sm:py-3 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2 dark:bg-transparent"
        >
          {"contact me "}
          <Image src={assets.right_arrow_white} alt="" className="w-3 sm:w-4" />
        </a>

        <a
          href="/resume.pdf"
          download
          className="w-full sm:w-auto px-8 sm:px-10 py-2.5 sm:py-3 border rounded-full border-gray-500 text-black flex items-center justify-center bg-white gap-2 dark:text-black"
        >
          {"my resume"}
          <Image src={assets.download_icon} alt="" className="w-3 sm:w-4" />
        </a>
      </div>
    </div>
  );
}
