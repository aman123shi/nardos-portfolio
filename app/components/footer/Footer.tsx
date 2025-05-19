import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";

export function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          nardosshibeshi2011@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {year} Nardos Shibeshi. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nardos-shibeshi-3a3836276/"
            >
              <Image src={assets.linkedin_icon} alt="" className="w-6" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/nardidesign15">
              <Image src={assets.instagram_icon} alt="" className="w-6" />
            </a>
          </li>

          <li>
            <a target="_blank" href="https://x.com/Nardi0987">
              <Image src={assets.twitter_icon} alt="" className="w-6" />
            </a>
          </li>

          <li>
            <a target="_blank" href="https://youtube.com/@design-site">
              <Image src={assets.youtube_icon} alt="" className="w-6" />
            </a>
          </li>

          <li>
            <a target="_blank" href="https://www.tiktok.com/@be4luck">
              <Image src={assets.tik_tok_icon} alt="" className="w-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
