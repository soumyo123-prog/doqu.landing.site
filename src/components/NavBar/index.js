import React, { useState, useRef } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import logo from "./favicon.ico";
import "./index.css";
import { FaAngleDown } from "react-icons/fa";

const index = ({ activeTab }) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const tabs = [
    {
      name: "Medical Term Coding",
      tab: "medical-term-coding",
    },
    {
      name: "Document Extraction",
      tab: "document-extraction",
    },
  ];

  const dropdownData = [
    {
      title: "medical-term-coding",
      submenu: ["Payment 1", "Payment 2", "Payment 3"],
    },
    {
      title: "document-extraction",
      submenu: ["Billing 1", "Billing 2", "Billing 3"],
    },
  ];

  const [openMenu, setOpenMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleLinkMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(index);
  };

  const handleMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 50);
  };

  return (
    <div className="header flex items-center">
      <a className="py-3 px-4 flex gap-2 items-center" href="/">
        <img src={logo} alt="logo" className="header-logo" />
        <h3 className="logo-text">EinMind</h3>
      </a>
      <ul className="px-8 flex items-center">
        {tabs.map((tab, index) => (
          <li
            className="p-2 relative group"
            onMouseEnter={() => handleLinkMouseEnter(index)}
            onMouseLeave={handleMenuMouseLeave}
          >
            <button className="flex flex-row items-center hover:text-indigo-500">
              <span className="mr-1">{tab.name}</span>
              <FaAngleDown
                className={`transition-transform ${
                  openMenu === index ? "transform rotate-180" : ""
                }`}
              />
              {openMenu === index && (
                <ul className="absolute left-0 top-5 mt-5 space-y-2 bg-white text-gray-900 border border-solid border-blue-500">
                  {dropdownData[index].submenu.map(
                    (submenuItem, submenuItemIndex) => {
                      return (
                        <li key={submenuItemIndex} className="px-4 py-2">
                          {submenuItem}
                        </li>
                      );
                    }
                  )}
                </ul>
              )}
            </button>
          </li>
        ))}
        <span
          className="header-tab"
          onClick={() => (window.location.href = `https://tally.so/r/wvejQX`)}
        >
          Get started
        </span>
      </ul>
    </div>
  );
};

export default index;
