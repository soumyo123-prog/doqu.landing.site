import React from "react";
import logo from "./favicon.ico";
import "./index.css";

const HeaderPublicApps = ({ activeTab }) => {
  const tabs = [
    {
      name: "Home",
      tab: "home",
    },
    // {
    //   name: "Ontologies",
    //   tab: "ontologies",
    // },
    {
      name: "Clinical Term Coding",
      tab: "clinical_term",
    },
    {
      name: "Clinical Document Coding",
      tab: "clinical_document",
    },
  ];

  return (
    <div className="header flex justify-between items-center">
      <div className="flex items-center">
        <a
          className="py-3 px-4 flex gap-2 items-center"
          href="https://einmind.com/"
        >
          <img src={logo} alt="logo" className="header-logo" />
          <h3 className="logo-text">EinMind</h3>
        </a>
        <div className="px-8 flex items-center">
          {tabs.map((tab, index) => (
            <>
              <span
                className={
                  tab.tab === activeTab ? "active header-tab" : "header-tab"
                }
                key={index}
                onClick={() => (window.location.href = `/${tab.tab}`)}
              >
                {tab.name}
              </span>
              {index !== tabs.length - 1 && <span className="px-1">|</span>}
            </>
          ))}
        </div>
      </div>
      <div className="px-8 flex items-center">
        <span
          className={
            activeTab === "signup" ? "active header-tab" : "header-tab"
          }
          onClick={() => (window.location.href = "/signup")}
        >
          Sign Up
        </span>
        <span className="px-1">|</span>
        <span
          className={activeTab === "login" ? "active header-tab" : "header-tab"}
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default HeaderPublicApps;
