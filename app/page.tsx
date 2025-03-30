import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Services } from "./components/services/Services";
import { Work } from "./components/work/Work";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}
