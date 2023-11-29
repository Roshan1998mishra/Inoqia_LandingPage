import { Domains } from "@/components/Homepage/Domains";
import Benefitsection from "@/components/Homepage/Benefitsection";
import { Header } from "@/components/Homepage/Header";
import { HeroSection } from "@/components/Homepage/HeroSection";
import Letstalk from "@/components/Homepage/Letstalk";
import Meta from "@/components/Homepage/Meta";
import Commitsection from "@/components/Homepage/Commitsection";
import Footer from "@/components/Homepage/Footer";

export default function Home() {
  return (
    <div className="supreme-container">
      <Meta
        title="Inoqia - Connect With Visionary Minds"
        desc="Inoqia - Connect With Visionary Minds"
        // keyword="Decentralized cloud storage, Decentralized app"
        icon="/favicon.ico"
        metaImage="https://inoqia.com/metaimage.png"
        url="https://inoqia.com"
      />{" "}
      <Header />
      <HeroSection />
      <Domains />
      <Commitsection />
      <Benefitsection />
      <Letstalk />
      <Footer />
    </div>
  );
}
