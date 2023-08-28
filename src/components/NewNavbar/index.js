import React from "react";
import styles from "./styles.module.css";
import logo from "../NavBar/favicon.ico";
import { useState } from "react";
import { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import DocumentExtractionMenu from "../DocumentExtractionMenu";
import MedicalTermCodingMenu from "../MedicalTermCodingMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "../SideBar";

const NewNavbar = () => {
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

  const menuNames = {
    medical_term_coding: "Medical Term Coding",
    document_extraction: "Document Extraction",
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
      <div className={styles.container}>
        <a href="/">
          <div className={styles.logo}>
            <img
              className={styles.logo_img}
              src={logo}
              alt="EinMind"
              width={35}
              height={35}
            />
            <div className={styles.logo_text}>EinMind</div>
          </div>
        </a>
        <ul className={`${styles.list}`}>
          <li
            className="hidden md:flex mr-8 relative group"
            onMouseEnter={() =>
              handleLinkMouseEnter(menuNames.medical_term_coding)
            }
            onMouseLeave={handleMenuMouseLeave}
          >
            <button className="flex items-center">
              <span className="mr-0.5">{menuNames.medical_term_coding}</span>
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
            className="hidden md:flex mr-8 relative group"
            onMouseEnter={() =>
              handleLinkMouseEnter(menuNames.document_extraction)
            }
            onMouseLeave={handleMenuMouseLeave}
          >
            <button className="flex items-center">
              <span className="mr-0.5">{menuNames.document_extraction}</span>
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
          <li className={`${styles.get_started_button} hidden md:flex`}>
            <a
              onClick={() =>
                (window.location.href = `https://tally.so/r/wvejQX`)
              }
            >
              Get started
            </a>
          </li>
        </ul>
        <ul className="md:hidden">
          <li className={`${styles.hamburger} ml-auto hover:cursor-pointer`}>
            <button
              className="flex items-center py-3 px-4"
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

export default NewNavbar;
