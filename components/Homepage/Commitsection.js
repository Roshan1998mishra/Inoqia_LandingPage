import React from "react";
import Image from "next/image";
import players from "/assets/players.svg";
import { Outfit } from "next/font/google";

const outfit800 = Outfit({ subsets: ["latin"], weight: "800" });

const outfit300 = Outfit({ subsets: ["latin"], weight: "300" });

const outfit500 = Outfit({ subsets: ["latin"], weight: "500" });

const outfit600 = Outfit({ subsets: ["latin"], weight: "600" });

const Commitsection = () => {
  return (
    <div className="relative">
      <div className="hidden md:block right_purple_ellipse_commited"></div>

      <div
        className={`hidden md:block  right_numbered_bg_commited ${outfit800.className}`}
      >
        01
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/2 p-4 my-8">
          <Image src={players} alt="players" className="playerimg" />
        </div>

        <div className="commited-section md:w-1/2 p-4 my-8">
          <p
            className={`dedication-text text-gray-500  text-base font-medium leading-37 tracking-wider uppercase ${outfit300.className}`}
          >
            Dedication
          </p>

          <p
            className={`commitsection-heading text-gray-800 text-4xl font-semibold leading-62 tracking-tight w-96 ${outfit600.className}`}
            style={{ letterSpacing: "-0.9px" }}
          >
            Only The Committed <br></br> Players
          </p>

          <p
            className={`commitsection-para3 text-gray-700  text-base font-normal pt-7  leading-38 tracking-tighter ${outfit300.className}`}
            style={{ letterSpacing: "-0.4px" }}
          >
            Inoqia is home for the radically dedicated and uniquely skilled
            builders in tech. Not just a team, we're your partners to deliver
            solutions on priority, and we're committed to such results that
            exceed your expectations. Plus upgrading the latest trends every
            month.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commitsection;
