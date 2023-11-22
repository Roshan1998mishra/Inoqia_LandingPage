import { Outfit } from "next/font/google";
import Slickslider from "./Slickslider";

const outfit300 = Outfit({ subsets: ["latin"], weight: "300" });

const outfit500 = Outfit({ subsets: ["latin"], weight: "500" });

export const Domains = () => {
  const showcaseList = [{ title: "Blockchain", items: [] }];
  return (
    <div className="w-[80%] mx-auto h-[100vh] z-100 relative">
      <h1
        className={`${outfit500.className} text-[50px] mt-10 text-center leading-tight`}
      >
        Domains worked on
      </h1>
      <p
        className={`text-[18px] text-[#333] mt-4 text-center w-[90%] mx-auto leading-relaxed ${outfit300.className}`}
      >
        Whether we have an existing online background, under some great domains
        we{"' "}ve worked on. All that needs enhancement or an entirely new
        concept to develop, we're here to collaborate and turn your vision into
        reality.
      </p>

      <Slickslider/>


    </div>
  );
};
