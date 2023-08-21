import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import logo from "./favicon.ico";
import "./index.css";

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
  return (
    <div className="header flex justify-between items-center">
      <a className="py-3 px-4 flex gap-2 items-center" href="/">
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
            <span className="px-1">|</span>
          </>
        ))}
        <span
          className="header-tab"
          onClick={() =>
            (window.location.href = `https://tally.so/r/wvejQX`)
          }
        >
          Get started
        </span>
      </div>
    </div>
  );
};

export default index;
