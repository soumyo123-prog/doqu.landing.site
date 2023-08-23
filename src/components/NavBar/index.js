import React, { useState, useRef } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import logo from "./favicon.ico";
import "./index.css";
import { FaAngleDown } from "react-icons/fa";
import MedicalTermCodingMenu from "../MedicalTermCodingMenu";
import DocumentExtractionMenu from "../DocumentExtractionMenu";

const index = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const menuNames = {
    medical_term_coding: "Medical Term Coding",
    document_extraction: "Document Extraction",
  };

  const [openMenu, setOpenMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleLinkMouseEnter = (menuName) => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(menuName);
  };

  const handleMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 50);
  };

  return (
    <div className="header flex">
      <ul className="px-16 flex items-center w-full">
        <li>
          <a className="py-3 px-4 flex items-center" href="/">
            <img src={logo} alt="logo" className="header-logo" />
            <h3 className="logo-text">EinMind</h3>
          </a>
        </li>
        <li
          className="p-2 relative group h-full flex items-center mr-10 ml-10"
          onMouseEnter={() =>
            handleLinkMouseEnter(menuNames.medical_term_coding)
          }
          onMouseLeave={handleMenuMouseLeave}
        >
          <button className="flex flex-row items-center">
            <span className="mr-1">{menuNames.medical_term_coding}</span>
            <FaAngleDown
              className={`transition-transform ${
                openMenu === menuNames.medical_term_coding
                  ? "transform rotate-180"
                  : ""
              }`}
            />
          </button>
          {openMenu === menuNames.medical_term_coding && (
            <MedicalTermCodingMenu />
          )}
        </li>
        <li
          className="p-2 relative group h-full flex items-center"
          onMouseEnter={() =>
            handleLinkMouseEnter(menuNames.document_extraction)
          }
          onMouseLeave={handleMenuMouseLeave}
        >
          <button className="flex flex-row items-center">
            <span className="mr-1">{menuNames.document_extraction}</span>
            <FaAngleDown
              className={`transition-transform ${
                openMenu === menuNames.document_extraction
                  ? "transform rotate-180"
                  : ""
              }`}
            />
          </button>
          {openMenu === menuNames.document_extraction && (
            <DocumentExtractionMenu />
          )}
        </li>
        <li
          className="ml-auto header-tab p-2 h-full flex items-center"
          onClick={() => (window.location.href = `https://tally.so/r/wvejQX`)}
        >
          Get started
        </li>
      </ul>
    </div>
  );
};

export default index;
