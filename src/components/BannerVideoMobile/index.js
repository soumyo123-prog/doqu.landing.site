import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const BannerVideoMobile = () => {
  const [activeModule, setActiveModule] = useState(0);

  const moduleList = [
    {
      title: "Medical Term Coding",
      url: "https://landing-site-resources.einmind.com/demo-mobile-term-coding-compressed.mp4",
    },
    {
      title: "Document Extraction",
      url: "https://landing-site-resources.einmind.com/demo-mobile-document-extraction-compressed.mp4",
    },
  ];
  const [showModules, setShowModules] = useState([]);
  const showOrNot = () => {
    if (activeModule === 0 || activeModule === 1 || activeModule === 2) {
      setShowModules([0, 1, 2, 3, 4, 5, 6]);
    } else if (
      activeModule === moduleList.length - 1 ||
      activeModule === moduleList.length - 2 ||
      activeModule === moduleList.length - 3
    ) {
      setShowModules([
        moduleList.length - 7,
        moduleList.length - 6,
        moduleList.length - 5,
        moduleList.length - 4,
        moduleList.length - 3,
        moduleList.length - 2,
        moduleList.length - 1,
      ]);
    } else {
      setShowModules([
        activeModule - 3,
        activeModule - 2,
        activeModule - 1,
        activeModule,
        activeModule + 1,
        activeModule + 2,
        activeModule + 3,
      ]);
    }
  };
  useEffect(() => {
    showOrNot();
  }, [activeModule]);
  return (
    <>
      <div className={styles.tab_module_list_container}>
        <ul className={styles.tab_module_list}>
          {moduleList.map((module, index) => (
            <li
              key={index}
              className={index === activeModule ? styles.active_tab : undefined}
              onClick={() => setActiveModule(index)}
            >
              {module.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify_center">
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
            className={
              index === activeModule
                ? styles.active
                : showModules.includes(index)
                ? styles.display_tab
                : styles.hide_tab
            }
            onClick={() => setActiveModule(index)}
          >
            {/* <span>{index + 1}</span> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BannerVideoMobile;
