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
    <div className="header flex items-center">
      <a className="py-3 px-4 flex gap-2 items-center" href="/">
        <img src={logo} alt="logo" className="header-logo" />
        <h3 className="logo-text">EinMind</h3>
      </a>
      <ul className="px-8 flex items-center">
        <li
          className="p-2 relative group"
          onMouseEnter={() =>
            handleLinkMouseEnter(menuNames.medical_term_coding)
          }
          onMouseLeave={handleMenuMouseLeave}
        >
          <button className="flex flex-row items-center hover:text-indigo-500">
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
          className="p-2 relative group"
          onMouseEnter={() =>
            handleLinkMouseEnter(menuNames.document_extraction)
          }
          onMouseLeave={handleMenuMouseLeave}
        >
          <button className="flex flex-row items-center hover:text-indigo-500">
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
