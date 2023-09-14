import { Domains } from "@/components/Homepage/Domains";
import { Header } from "@/components/Homepage/Header";
import { HeroSection } from "@/components/Homepage/HeroSection";
import Meta from "@/components/Homepage/Meta";

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
    </>
  );
}
