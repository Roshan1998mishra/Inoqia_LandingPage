import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/inoqia_logo.svg";
import { Outfit } from "next/font/google";

const outfit400 = Outfit({ subsets: ["latin"], weight: "400" });

export const Header = () => {
  return (
    <nav className="z-[7777] xl:px-24 px-5 py-4 h-[70px] backdrop-blur-md top-0 left-0 right-0 fixed mt-0">
      <div className="flex justify-between items-center w-full xl:w-[92%] 2xl:w-[81.5%] max-w-[1408px] mx-auto ">
        <div className={``}>
          <Image src={logo} alt="logo" width="120" />
        </div>
        <div className="">
          <h3
            className={`text-[#14191F] text-[14px] ${outfit400.className} tracking-wide`}
          >
            HOW WE WORK
          </h3>
        </div>
      </div>
    </nav>
  );
};
