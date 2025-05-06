import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nardos Shibeshi Portfolio | UI/UX Designer | Graphics Designer",
  description:
    "Nardos Shibeshi is a UI/UX Designer and Graphics Designer based in Addis Ababa, Ethiopia. She is passionate about creating beautiful and user-friendly designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
