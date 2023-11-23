import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import congratulations from "@/assets/congratulations.png";

const outfit300 = Outfit({ subsets: ["latin"], weight: "300" });
const outfit500 = Outfit({ subsets: ["latin"], weight: "500" });
const outfit800 = Outfit({ subsets: ["latin"], weight: "800" });

const Benefitsection = () => {
  return (
    <div className="relative my-40">
      <div className="hidden md:block left_purple_ellipse_commited"></div>

      <div
        className={`hidden md:block  left_numbered_bg_commited ${outfit800.className}`}
      >
        02
      </div>

      <div className="flex flex-col md:flex-row  my-28">
        <div className="md:w-1/2 p-4 benefitscontentsection4">
          <p
            className={`timeeffective-text  text-gray-400  text-base font-medium leading-37 tracking-wide uppercase ${outfit300.className}`}
          >
            Time-Effective
          </p>
          <p
            className={`benefits-section-heading  text-black-600 mt-5 text-5xl  font-semibold leading-62 tracking-tight ${outfit500.className}`}
            style={{ letterSpacing: "-0.9px" }}
          >
            More Benefits. Less <br></br> Resistance.
          </p>
          <p
            className={`benefits-section-para text-gray-700 mt-5  text-base font-normal leading-38 tracking-tighter ${outfit300.className}`}
            style={{ letterSpacing: "-0.4px" }}
          >
            We are inspired to consistently provide our best work. By choosing
            our tech team, you're opting for time-effective solutions compared
            to traditional agencies. Even get the same level of expertise
            without breaking the bank extra.
          </p>
        </div>

        <div className="md:w-1/2 p-4">
          <Image
            src={congratulations}
            alt="congratulations"
            className="congraimg"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Benefitsection;
