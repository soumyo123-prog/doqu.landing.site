import React, { useState } from "react";
import styles from "./styles.module.css";
import { GrClose } from "react-icons/gr";
import { FaAngleRight, FaAngleLeft, FaMapMarkerAlt } from "react-icons/fa";
import { medicalTermCodingMenuData } from "../MedicalTermCodingMenu";
import { documentExtractionMenuData } from "../DocumentExtractionMenu";
import { BsStars } from "react-icons/bs";

const medical_term_coding = "Medical term coding";
const medical_term_coding_desc =
  "Seamless mapping of medical terms to codes with AI autocoders";
const document_extraction = "Document extraction";
const document_extraction_desc =
  "Seamlessly extract medical terms and codes from documents";

const SideBarMenuItem = ({ heading, description, onClickingMenuItem }) => {
  return (
    <a
      className="flex pl-8 pr-4 py-3 rounded hover:bg-blue-50 hover:cursor-pointer"
      onClick={() => onClickingMenuItem(heading)}
    >
      <div>
        <p className="font-semibold text-gray-900">{heading}</p>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="ml-auto px-4 flex items-center justify-center">
        <FaAngleRight style={{ width: "100%" }} />
      </div>
    </a>
  );
};

const SideBarMenuDetails = ({ heading }) => {
  return (
    <>
      <div className="px-7 uppercase text-gray-500 font-semibold flex w-full">
        <span>{heading}</span>
        <span className="ml-2 flex items-center">
          <FaAngleRight />
        </span>
      </div>
      <div className="px-5 mt-3">
        {(heading === medical_term_coding
          ? medicalTermCodingMenuData
          : documentExtractionMenuData
        ).map((menuItem, menuItemIndex) => (
          <a
            key={menuItemIndex}
            className="block hover:cursor-pointer hover:bg-blue-100 rounded py-2 px-2"
            onClick={() =>
              (window.location.href = `${
                heading === medical_term_coding
                  ? `/medical-term-coding/${menuItem.encoder_app_id}`
                  : `/document-extraction/${menuItem.encoder_app_id}`
              }`)
            }
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {heading === medical_term_coding ? (
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-500" />
                ) : (
                  <BsStars className="w-5 h-5 text-yellow-500" />
                )}
              </div>
              <div className="ml-4">
                <p
                  className="font-semibold text-gray-900"
                  style={{ fontSize: "0.9rem" }}
                >
                  {menuItem.name}
                </p>
                <p className="text-gray-500" style={{ fontSize: "0.9rem" }}>
                  {menuItem.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

const SideBar = ({ open, closeSidebar }) => {
  const [touched, setTouched] = useState(false);
  const [cardTouched, setCardTouched] = useState(null);

  const onClickingMenuItem = (itemName) => {
    setTouched(true);
    setCardTouched(itemName);
  };

  const onClickBackToMainMenu = () => {
    setTouched(false);
    setCardTouched(null);
  };

  const onCloseSidebar = () => {
    setTouched(false);
    setCardTouched(null);
    closeSidebar();
  };

  return (
    <div
      className={`${styles.sidebarContainer} ${
        open ? styles.sidebarContainerOpen : ""
      } flex flex-col border border-gray-300 rounded bg-white`}
    >
      <header className={`${styles.sidebarHeader} w-full`}>
        <ul className="px-4 flex items-center w-full border border-b border-gray-300">
          <li>
            {!touched && (
              <div className={`py-3 flex items-center`}>
                <div className={styles.logo_text}>einmind</div>
              </div>
            )}
            {touched && (
              <div className={`py-4 flex items-center`}>
                <button
                  className="flex items-center text-blue-500"
                  style={{ fontSize: "0.9rem" }}
                  onClick={onClickBackToMainMenu}
                >
                  <span className="mr-2">
                    <FaAngleLeft />
                  </span>
                  <span>Back</span>
                </button>
              </div>
            )}
          </li>
          <li className="ml-auto">
            <button
              className="flex items-center py-2 px-4"
              onClick={onCloseSidebar}
            >
              <GrClose />
            </button>
          </li>
        </ul>
      </header>
      <div className="relative group flex-grow">
        <div
          className={`${styles.sidebarMenuContainer} ${
            touched ? styles.hideSidebarMenuItemsContainer : ""
          } mt-4 absolute w-full`}
        >
          <SideBarMenuItem
            onClickingMenuItem={onClickingMenuItem}
            heading={medical_term_coding}
            description={medical_term_coding_desc}
          />
          <SideBarMenuItem
            onClickingMenuItem={onClickingMenuItem}
            heading={document_extraction}
            description={document_extraction_desc}
          />
        </div>
        <div
          className={`${styles.sidebarMenuDetailsContainer} ${
            touched ? styles.hideSidebarMenuDetailsontainer : ""
          } mt-4 absolute w-full`}
        >
          <SideBarMenuDetails heading={cardTouched} />
        </div>
        {!touched && (
          <div
            className="absolute bottom-[3%] w-full flex justify-center"
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            <button
              className="flex items-center rounded-l-full rounded-r-full bg-blue-100 hover:bg-indigo-200 transition-colors duration-300 cursor-pointer custom-navbar-button py-2 px-3"
              onClick={() =>
                (window.location.href = `https://tally.so/r/wvejQX`)
              }
            >
              <span>Get started</span>
              <span className="ml-1 custom-transition-remove">
                <FaAngleRight />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
