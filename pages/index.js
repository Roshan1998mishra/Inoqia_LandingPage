import { Domains } from "@/components/Homepage/Domains";
import Fourthsection from "@/components/Homepage/Fourthsection";
import { Header } from "@/components/Homepage/Header";
import { HeroSection } from "@/components/Homepage/HeroSection";
import Letstalk from "@/components/Homepage/Letstalk";
import Meta from "@/components/Homepage/Meta";
import Thirdsection from "@/components/Homepage/Thirdsection";


export default function Home() {
  return (
    <>
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
      <Thirdsection/>
      <Fourthsection/>
      <Letstalk/>
    </>
  );
}
