import type { Metadata } from "next";
import { Outfit, Ovo, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
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
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} ${inter.variable} ${playfair.variable} antialiased leading-8 overflow-x-hidden bg-white dark:bg-darkTheme text-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
