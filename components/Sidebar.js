import React from "react";
import { Outfit } from "next/font/google";

const outfit600 = Outfit({ subsets: ["latin"], weight: "600" });

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <p className={`sidebar-a ${outfit600.className}`}>Edtech</p>
        <p className={`sidebar-a ${outfit600.className}`}>Fintech</p>
        <p className={`sidebar-a ${outfit600.className}`}>Health</p>
        <p className={`sidebar-a ${outfit600.className}`}>CSR</p>
      </div>
    </div>
  );
};

export default Sidebar;
