import React from "react";
import { Outfit } from "next/font/google";

const outfit600 = Outfit({ subsets: ["latin"], weight: "600" });

const Sidebar = ({ currentMenu, slideSwitch }) => {
  const menus = ["Edtech", "Fintech", "Health", "CSR"];
  return (
    <div>
      <div className="sidebar">
        {menus.map((data, index) => (
          <p
            onClick={() => slideSwitch(index)}
            key={index}
            className={`sidebar-a ${outfit600.className} ${
              currentMenu === index ? "sidebar_selected" : ""
            }`}
          >
            {data}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
