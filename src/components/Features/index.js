import React, { useState, useEffect, useRef } from "react";

import img1 from "../../../static/img/1 1.png";
import img2 from "../../../static/img/2 1.png";
import img3 from "../../../static/img/3 1.png";
import img4 from "../../../static/img/4 1.png";

import pdf from "../../../static/vectors/pdf.png";
import imag1 from "../../../static/vectors/img1.png";
import imag2 from "../../../static/vectors/img2.png";
import audio from "../../../static/vectors/audio.png";
import word from "../../../static/vectors/word.png";
import excel from "../../../static/vectors/excel.png";

import "./index.css";

const RedSquare = () => {
  return (
    <div
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "#D00000",
      }}
    ></div>
  );
};

const Features = () => {
  const [activeSection, setActiveSection] = useState(0);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const inspectScrollPositions = () => {
    const pos1 = ref1.current.getBoundingClientRect().y;
    const pos2 = ref2.current.getBoundingClientRect().y;
    const pos3 = ref3.current.getBoundingClientRect().y;
    const pos4 = ref4.current.getBoundingClientRect().y;

    const totalY = window.innerHeight;

    let active = 0;
    if (totalY - pos1 > 100) active = 0;
    if (totalY - pos2 > 100) active = 1;
    if (totalY - pos3 > 100) active = 2;
    if (totalY - pos4 > 100) active = 3;

    setActiveSection(active);
  };

  useEffect(() => {
    document.addEventListener("scroll", inspectScrollPositions);

    return () => {
      document.removeEventListener("scroll", inspectScrollPositions);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="features-nav"
        style={{
          position: "sticky",
          zIndex: 999,
          top: "63px",
          height: "45px",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #D5D1D1",
          backgroundColor: "white",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-evenly",
            alignItems: "center",
            color: "#438F9D",
            fontWeight: 700,
            textTransform: "capitalize",
            width: "100vw",
            padding: 0,
            margin: 0,
          }}
        >
          <li
            className={activeSection === 0 ? "activeTab" : "inactiveTab"}
            onClick={() => {
              ref1.current.scrollIntoView({
                block: "center",
                behaviour: "smooth",
              });
            }}
          >
            AI App Store
          </li>
          <li
            className={activeSection === 1 ? "activeTab" : "inactiveTab"}
            onClick={() => {
              ref2.current.scrollIntoView({
                block: "center",
                behaviour: "smooth",
              });
            }}
          >
            AI Interfaces
          </li>
          <li
            className={activeSection === 2 ? "activeTab" : "inactiveTab"}
            onClick={() => {
              ref3.current.scrollIntoView({
                block: "center",
                behaviour: "smooth",
              });
            }}
          >
            Quality and Access
          </li>
          <li
            className={activeSection === 3 ? "activeTab" : "inactiveTab"}
            onClick={() => {
              ref4.current.scrollIntoView({
                block: "center",
                behaviour: "smooth",
              });
            }}
          >
            AI Workflows
          </li>
        </ul>
      </div>

      <div className="features-section">
        <div className="features-section-text" style={{ flex: 1 }} ref={ref1}>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "baseline",
              marginBottom: "10px",
            }}
          >
            AI App Store
            <div className="red-square">
              &nbsp;&nbsp; <RedSquare />
            </div>
          </div>
          <p style={{ lineHeight: "24px" }}>            
            EinMind provides a rich App Store that gives you an immediate access to powerful AI apps. 
            App Store enables data science teams to instantly publish and share their own apps through EinMind SDK.
          </p>

          <div
            style={{
              boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "5px 12px",
              fontSize: "14px",
              color: "#776F6F",
              width: "min(300px, 100%)",
            }}
          >
            Install EinMind SDK using pip:
            <div
              style={{
                backgroundColor: "#F1F1F1",
                position: "relative",
                paddingLeft: "15px",
                margin: "5px 0px",
                color: "#032B44",
                fontWeight: 500,
                textAlign: "left",
              }}
            >
              pip install python-einmind
              <div
                style={{
                  position: "absolute",
                  width: "5px",
                  height: "100%",
                  backgroundColor: "#438F9D",
                  left: 0,
                  top: 0,
                }}
              ></div>
            </div>
          </div>

        </div>
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <img
            src={img2}
            style={{
              padding: "40px",
            }}
          />
        </div>
      </div>

      <div
        className="features-section"
        style={{ flexDirection: "row-reverse" }}
      >
        <div className="features-section-text" style={{ flex: 1 }} ref={ref2}>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "baseline",
              marginBottom: "10px",
            }}
          >
            Dedicated AI Interfaces
            <div className="red-square">
              &nbsp;&nbsp; <RedSquare />
            </div>
          </div>
          <p style={{ lineHeight: "24px" }}>
          Powerful standardized interfaces enable seamless interaction with AI apps and visualize AI predictions. 
          EinMind provides dedicated interfaces that support uploading and viewing various unstructured data.
          </p>

          <div
            style={{
              boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "18px",
              fontSize: "12px",
              color: "#776F6F",
              maxWidth: "400px",
            }}
          >
            Extract values from unstructured data such as 
            <div
              className="supports-card"
              style={{
                display: "grid",
                rowGap: "20px",
                columnGap: "20px",
                marginTop: "10px",
                textAlign: "left",
              }}
            >
              <div>
                <img
                  src={pdf}
                  style={{
                    height: "16px",
                    width: "20px",
                    objectFit: "contain",
                    objectPosition: "left",
                  }}
                />
                <div>PDF File</div>
              </div>
              <div>
                <div
                  style={{
                    height: "16px",
                    width: "20px",
                    position: "relative",
                  }}
                >
                  <img
                    src={imag1}
                    style={{
                      height: "16px",
                      width: "20px",
                      objectFit: "contain",
                      objectPosition: "left",
                    }}
                  />

                  <img
                    src={imag2}
                    style={{
                      height: "10px",
                      width: "16px",
                      objectFit: "contain",
                      objectPosition: "left",
                      position: "absolute",
                      left: 5,
                      top: 4,
                    }}
                  />
                </div>

                <div>Images</div>
              </div>
              <div>
                <img
                  src={audio}
                  style={{
                    height: "16px",
                    width: "20px",
                    objectFit: "contain",
                    objectPosition: "left",
                  }}
                />
                <div>Audio</div>
              </div>
              <div>
                <img
                  src={word}
                  style={{
                    height: "16px",
                    width: "20px",
                    objectFit: "contain",
                    objectPosition: "left",
                  }}
                />
                <div>MS Word</div>
              </div>
              <div>
                <img
                  src={excel}
                  style={{
                    height: "16px",
                    width: "20px",
                    objectFit: "contain",
                    objectPosition: "left",
                  }}
                />
                <div>MS Excel</div>
              </div>
            </div>
          </div>
          
        </div>
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <img
            src={img1}
            style={{
              padding: "40px",
            }}
          />
        </div>
      </div>

      <div className="features-section">
        <div className="features-section-text" style={{ flex: 1 }} ref={ref3}>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "baseline",
              marginBottom: "10px",
            }}
          >
            Quality and Access
            <div className="red-square">
              &nbsp;&nbsp; <RedSquare />
            </div>
          </div>
          <p style={{ lineHeight: "24px" }}>
          AI models are never 100% accurate. EinMind provides guardrails to protect and extract critical 
          information correctly through configurable access managemenet and user friendly AI verification 
          interfaces.
          </p>

          <div
            style={{
              boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "18px 22px",
              fontSize: "12px",
              width: "200px",
            }}
          >
            <div
              style={{
                display: "flex",
                border: "1px solid #032B44",
                padding: "5px 20px",
              }}
            >
              <div
                style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                Verified
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <img
            src={img3}
            style={{
              padding: "40px",
            }}
          />
        </div>
      </div>

      <div
        className="features-section"
        style={{ flexDirection: "row-reverse" }}
      >
        <div className="features-section-text" style={{ flex: 1 }} ref={ref4}>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "baseline",
              marginBottom: "10px",
            }}
          >
            Mix and Match AI Apps into Workflows
            <div className="red-square">
              &nbsp;&nbsp; <RedSquare />
            </div>
          </div>
          <p style={{ lineHeight: "24px" }}>
          Build complex data extraction pipelines by connecting various AI apps without any coding in minutes. 
          Explore and integrate best AI apps to your workflows in a few clicks without any vendor lock in.
          </p>

          {/* <div
            style={{
              boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "5px 12px",
              fontSize: "14px",
              color: "#776F6F",
              width: "min(300px, 100%)",
            }}
          >
            Retrieve manually created annotations:
            <div
              style={{
                backgroundColor: "#F1F1F1",
                position: "relative",
                paddingLeft: "15px",
                margin: "5px 0px",
                color: "#032B44",
                fontWeight: 500,
                textAlign: "left",
              }}
            >
              alchemia.get_annotations(task)
              <div
                style={{
                  position: "absolute",
                  width: "5px",
                  height: "100%",
                  backgroundColor: "#438F9D",
                  left: 0,
                  top: 0,
                }}
              ></div>
            </div>
          </div> */}
        </div>
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <img
            src={img4}
            style={{
              padding: "40px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
