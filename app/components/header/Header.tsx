import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";

export function Header({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-x1 md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;M Nardos Shibeshi{" "}
        <Image src={assets.hand_icon} className="w-6" alt="" />
      </h3>

      <h1 className="text-3xl sm:text-6xl  lg:text-[66px] font-Ovo">
        {"UI/UX Designer and Graphics Designer "}
        {
          /* UI/UX Designer and Graphics Designer based in Addis Ababa, Ethiopia. */ isDarkMode
            ? ""
            : ""
        }
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am passionate about creating beautiful and user-friendly designs. with
        more than 3+ years of experience in the field, I have worked with
        various clients and companies to create designs that are both visually
        appealing and functional. I am always looking for new opportunities to
        learn and grow as a designer.{" "}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          {"contact me "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border  rounded-full border-gray-500 text-black flex items-center bg-white gap-2 dark:text-black"
        >
          {"my resume"}
          <Image src={assets.download_icon} alt="" className=" w-4" />
        </a>
      </div>
    </div>
  );
}
