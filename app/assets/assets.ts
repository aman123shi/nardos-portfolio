import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import figma from "./figma.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
// social media icons
import instagram_icon from "./instagram.png";
import linkedin_icon from "./linkedin.png";
import tik_tok_icon from "./tik-tok.png";
import twitter_icon from "./twitter.png";
import youtube_icon from "./youtube.png";

import canva_icon from "./canva-icon.png";
import photoshop_icon from "./photoshop.png";
import capcut_icon from "./capcut-icon.png";
import tutor from "./tutor.png";
import illustration from "./illustration.png";
import ui_ux from "./ui-ux.png";
import data_encoding from "./data-encoding.png";
import ai from "./ai.png";
import video_editing from "./video-editing.png";

import jbl1 from "./public/jbl1.png";
import jbl2 from "./public/jbl2.png";
import jbl3 from "./public/jbl3.png";

export const assets = {
  instagram_icon,
  linkedin_icon,
  tik_tok_icon,
  twitter_icon,
  youtube_icon,
  canva_icon,
  photoshop_icon,
  capcut_icon,
  tutor,
  illustration,
  ui_ux,
  data_encoding,
  ai,
  video_editing,
  //
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  figma,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,

  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "JBL Headphones Landing Page",
    description:
      "A landing page for JBL headphones with a login page and a dashboard page with a sidebar and a main content area and a footer and a header and a logo and a search bar and a profile icon and a notification icon and a logout button",
    bgImage: jbl1,
    images: [jbl1, jbl2, jbl3],
    link: "https://example.com/frontend-project",
  },
  {
    title: "Geo based app",
    description:
      "A mobile app for a geo based service with a login page and a dashboard page with a sidebar and a main content area and a footer and a header and a logo and a search bar and a profile icon and a notification icon and a logout button",
    bgImage: "/work-2.png",
    images: ["/work-2.png", "/work-3.png", "/work-4.png"],
    link: "https://example.com/geo-app",
  },
  {
    title: "Photography site",
    description:
      "A photography site for a photographer with a login page and a dashboard page with a sidebar and a main content area and a footer and a header and a logo and a search bar and a profile icon and a notification icon and a logout button",
    bgImage: "/work-3.png",
    images: ["/work-3.png", "/work-4.png", "/work-1.png"],
    link: "https://example.com/photography",
  },
  {
    title: "UI/UX designing",
    description:
      "A UI/UX design for a mobile app with a login page and a dashboard page with a sidebar and a main content area and a footer and a header and a logo and a search bar and a profile icon and a notification icon and a logout button",
    bgImage: "/work-4.png",
    images: ["/work-4.png", "/work-1.png", "/work-2.png"],
    link: "https://example.com/uiux-design",
  },
];

export const serviceData = [
  {
    icon: assets.ui_ux,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },

  {
    icon: assets.illustration,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },

  {
    icon: assets.tutor,
    title: "Mentorship",
    description: "Offering one to one mentorship and tutorials for students...",
    link: "",
  },
  {
    icon: assets.data_encoding,
    title: "Data Encoding",
    description:
      "Efficiently organizing data from different sources and inserting it into your system.",
    link: "",
  },

  {
    icon: assets.video_editing,
    title: "Video Editing",
    description:
      "Professional video editing services to enhance your video content.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.hand_icon,
    iconDark: assets.hand_icon,
    title: "Experience",
    description: "3+ years in UI/UX and Graphics Design",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.SC in Computer and Electrical Engineering",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Designed over 20 successful UI/UX projects",
  },
];

export const toolsData = [
  assets.figma,
  assets.canva_icon,
  assets.ai,
  assets.photoshop_icon,
  assets.capcut_icon,
];

interface PrototypeData {
  title: string;
  description: string;
  videoId: string;
}
export const prototypeData: PrototypeData[] = [
  {
    title: "Smart Watches E-commerce App Prototype",
    description:
      "A sleek and modern e-commerce app prototype for smart watches. This design features an intuitive user interface with easy navigation, product categories, and a seamless checkout process. The prototype includes interactive elements to enhance user experience, such as product previews, reviews, and a wishlist feature.",
    videoId: "La1fXOHYgHY",
  },
  {
    title: "Juice Cafe Website Prototype",
    description:
      "A vibrant and refreshing juice cafe website prototype that captures the essence of healthy living. This design features a visually appealing layout with colorful images of fresh juices, smoothies, and healthy snacks. The prototype includes interactive elements such as a menu section, online ordering system, and customer reviews to enhance user experience.",
    videoId: "a8iIMFTQD-s",
  },
  {
    title: "Perfume Shop Mobile App Prototype",
    description:
      " A sleek and modern mobile app prototype for a perfume shop. This design features an intuitive user interface with easy navigation, product categories, and a seamless checkout process. The prototype includes interactive elements to enhance user experience, such as product previews and a wishlist feature.",
    videoId: "WvV0Ak6aZcA",
  },
  {
    title: "Smart Watch UI Design Prototype",
    description:
      "A sleek and modern smartwatch UI design prototype that showcases a user-friendly interface with intuitive navigation. This design features customizable watch faces, health tracking widgets, and quick access to notifications. The prototype includes interactive elements to demonstrate the watch's functionality, such as gesture controls and app shortcuts.",
    videoId: "wCgGQWci2kQ",
  },

  {
    title: "TV Movie App Prototype",
    description:
      "A Modern TV movie app prototype that offers a seamless user experience for discovering and watching movies. This design features an intuitive interface with easy navigation, personalized recommendations, and a comprehensive movie database. The prototype includes interactive elements such as trailers, reviews, and watchlists to enhance user engagement.",
    videoId: "DGKJtDNUMp4",
  },

  {
    title: "Leaderboard Prototype",
    description:
      "A dynamic and engaging music app leaderboard prototype that showcases user rankings, achievements, and social interactions. This design features a visually appealing interface with real-time updates on user performance, song statistics, and personalized playlists. The prototype includes interactive elements to enhance user engagement, such as sharing achievements and competing with friends.",
    videoId: "PVYEB8HvVR0",
  },
];
