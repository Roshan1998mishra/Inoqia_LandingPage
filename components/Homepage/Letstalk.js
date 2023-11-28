import React from "react";
import Image from "next/image";
import chevronRight from "/assets/chevronRight.svg";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import Model from "./Model";

const outfit300 = Outfit({ subsets: ["latin"], weight: "300" });

const outfit500 = Outfit({ subsets: ["latin"], weight: "500" });

const Letstalk = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <Model isOpen={isOpen} closeModal={closeModal} />}
      <div>
        <div className="flex mt-5 lets-talk-section py-16">
          <div className="w-1/2 p-4 contentsectionlets py-10">
            <p className="contentsectionlets-head text-[#888888] text-[14px] __className_daeadc tracking-widest">
              TRANSPARENT COMMUNICATION
            </p>
            <p
              className={`text-gray-800 pt-5  text-4xl font-semibold leading-62 tracking-tight ${outfit500.className}`}
              style={{ letterSpacing: "-0.9px" }}
            >
              Let’s Talk!
            </p>
            <p
              className={`${outfit300.className} lets-talk-section-para text-black-400 pt-10 w-full  text-base font-normal leading-38 tracking-tighter`}
              style={{ letterSpacing: "-0.4px" }}
            >
              We believe in clear and open communication. You'll be involved and
              informed at every stage of the project, ensuring that your
              requirements are met accurately.
            </p>
          </div>

          <div className="w-1/2 p-4 mt-16">
            <div onClick={openModal} className="circle-section">
              <button>
                <Image
                  src={chevronRight}
                  alt="chevronRight"
                  className="vectorimg"
                ></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Letstalk;
