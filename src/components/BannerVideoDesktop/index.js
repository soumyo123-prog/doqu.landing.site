import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

const BannerVideoDesktop = () => {
  const [activeModule, setActiveModule] = useState(0);

  const moduleList = [
    {
      title: "Medical Term Coding",
      url: "https://landing-site-resources.einmind.com/demo-desktop-term-coding-compressed.mp4",
    },
    {
      title: "Document Extraction",
      url: "https://landing-site-resources.einmind.com/demo-desktop-document-extraction-compressed.mp4",
    },
  ];
  const tabModList = useRef(null);
  return (
    <>
      <div className={styles.tab_module_list_container}>
        <ul className={styles.tab_module_list} ref={tabModList}>
          {moduleList.map((module, index) => (
            <li
              key={index}
              className={index === activeModule ? styles.active_tab : undefined}
              onClick={() => {
                setActiveModule(index);
              }}
            >
              {module.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <div className={styles.video_container}>
          <video
            width="277"
            //autoPlay={true}
            autoPlay
            playsInline
            muted
            controls={false}
            src={moduleList[activeModule]?.url}
          ></video>
        </div>
      </div>
      <ul className={styles.tab_module_list_bottom}>
        {moduleList.map((_, index) => (
          <li
            key={index}
            className={index === activeModule ? styles.active : undefined}
            onClick={() => {
              setActiveModule(index);
            }}
          >
            {/* <span>{index + 1}</span> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BannerVideoDesktop;
