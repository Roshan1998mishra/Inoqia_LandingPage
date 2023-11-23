import React from "react";
import Image from "next/image";
import congratulations from "@/assets/congratulations.png";

const Benefitsection = () => {
  return (
    <div className="main">
      <div className="flex flex-col md:flex-row  my-28">
        <div className="md:w-1/2 p-4 benefitscontentsection4">
          <p className="timeeffective-text  text-gray-400  text-base font-medium leading-37 tracking-wide uppercase">
            Time-Effective
          </p>
          <p
            className="benefits-section-heading  text-black-600 mt-5 text-5xl  font-semibold leading-62 tracking-tight"
            style={{ letterSpacing: "-0.9px" }}
          >
            More Benefits. Less <br></br> Resistance.
          </p>
          <p
            className="benefits-section-para text-gray-700 mt-5  text-base font-normal leading-38 tracking-tighter"
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
