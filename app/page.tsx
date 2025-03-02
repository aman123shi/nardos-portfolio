import { About } from "./components/about/about";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Services } from "./components/services/Services";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <About />
      <Services />
    </div>
  );
}
