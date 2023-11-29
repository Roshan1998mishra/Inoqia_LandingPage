import { Outfit } from "next/font/google";
import Image from "next/image";
import collectionIcons from "@/assets/brands/collection.svg";

const outfit400 = Outfit({ subsets: ["latin"], weight: "400" });

const outfit500 = Outfit({ subsets: ["latin"], weight: "500" });

export const HeroSection = () => {
  return (
    <div className="mainhero-section w-[80%] mx-auto h-[100vh]">
      <div className="hidden md:block left_purple_ellipse"></div>
      <div className="hidden md:block right_purple_ellipse"></div>
      <div className="mybox-hero flex relative z-10">
        <div className="myhero w-[40%] py-60">
          <h3
            className={`text-[#888888] text-[14px] ${outfit400.className} tracking-widest`}
          >
            EXPERTISE
          </h3>
          <h1 className={`${outfit500.className} text-[62px] leading-tight`}>
            Connect With
            <br /> Visionary Minds
          </h1>
          <button className="gradient_btn">GET STARTED</button>
        </div>
        <div className="hero-img-section w-[60%] py-36 flex justify-end">
          <Image src={collectionIcons} alt="collectionIcons" width={500} />
        </div>
      </div>
    </div>
  );
};
