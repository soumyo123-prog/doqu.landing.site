import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import BannerVideoDesktop from "../BannerVideoDesktop";
import BannerVideoMobile from "../BannerVideoMobile";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 440) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const moduleSwitcher = setInterval(() => {
  //     setActiveModule((prev) => {
  //       if (prev === moduleList.length - 1) {
  //         return 0;
  //       } else {
  //         return prev + 1;
  //       }
  //     });
  //   }, 8000);
  //   return () => clearInterval(moduleSwitcher);
  // }, [activeModule]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <div className={styles.text_lg}>Create professional </div>
          <div className={styles.text_xlg}>
            Content in <span>Seconds</span>
          </div>
          <div>EinMind uses AI to generate your content</div>
        </div>
        <div>
          <div className={`${styles.text_med} mb-2`}>
            AI Assistants in Action
          </div>
          <picture>
            <img
              src={"/img/line.svg"}
              alt="separator"
              className={styles.separator}
            />
          </picture>
          {isMobile ? <BannerVideoMobile /> : <BannerVideoDesktop />}
        </div>
      </div>
      <div className={styles.bg_panel}>
        {/* <IoEllipse className={styles.ellipse} /> */}
      </div>
    </>
  );
};

export default Banner;
