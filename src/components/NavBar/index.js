import React, { useState, useRef } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import logo from "./favicon.ico";
import "./index.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MedicalTermCodingMenu from "../MedicalTermCodingMenu";
import DocumentExtractionMenu from "../DocumentExtractionMenu";
import SideBar from "../SideBar";

const index = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const menuNames = {
    medical_term_coding: "Medical Term Coding",
    document_extraction: "Document Extraction",
  };

  const [openMenu, setOpenMenu] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);
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

  const onOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const onCloseSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <>
      <SideBar open={openSidebar} closeSidebar={onCloseSidebar} />
      <div className="header flex">
        <ul className="px-8 lg:px-16 flex items-center w-full">
          <li>
            <a className="px-4 py-3 flex items-center" href="/">
              <img src={logo} alt="logo" className="header-logo" />
              <h3 className="logo-text">EinMind</h3>
            </a>
          </li>
          <li
            className="hidden md:flex p-2 relative group h-full flex items-center mr-5 ml-5 lg:mr-10 lg:ml-10"
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
            className="hidden md:flex p-2 relative group h-full flex items-center mr-5 lg:mr-10"
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
            className="hidden md:flex ml-auto header-tab flex items-center rounded-l-full rounded-r-full bg-blue-100 hover:bg-indigo-200 transition-colors duration-300 cursor-pointer h-[70%] custom-navbar-button"
            onClick={() => (window.location.href = `https://tally.so/r/wvejQX`)}
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            <span>Get started</span>
            <span className="ml-1 custom-transition-remove">
              <FaAngleRight />
            </span>
          </li>
          <li className="md:hidden ml-auto border border-gray-300 rounded-l-full rounded-r-full hover:cursor-pointer">
            <button
              className="flex items-center py-2 px-4"
              onClick={onOpenSidebar}
            >
              <GiHamburgerMenu />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;
