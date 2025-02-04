import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";

export function Header() {
  return (
    <div>
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
    </div>
  );
}
