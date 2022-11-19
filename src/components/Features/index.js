import React, { useState, useEffect, useRef } from "react";

import img1 from "../../../static/img/1 1.png";
import img2 from "../../../static/img/2 1.png";
import img3 from "../../../static/img/3 1.png";
import img4 from "../../../static/img/4 1.png";

import pdf from "../../../static/vectors/pdf.png";
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
    <div style={{ textAlign: "center",  backgroundColor: "white",}}>
      <div
        style={{
          position: "sticky",
          zIndex: 999,
          top: "63px",
          height: "45px",
          display: "flex",
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
            App Builder
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
            AI Integration
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
            Quality
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
            Continuous Learning
          </li>
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "200px",
          width: "100%",
          padding: "40px 0px",
          boxSizing: "border-box",
          textAlign: "left",
        }}
      >
        <div style={{ flex: 1, padding: "0px 45px" }} ref={ref1}>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "baseline",
              marginBottom: "10px",
            }}
          >
            App Builder&nbsp;&nbsp; <RedSquare />
          </div>
          <p style={{ lineHeight: "24px" }}>
            Create data processing apps with no code in
            <br />
            minutes. Define input and expected output
            <br />
            types. Start uploading data for data
            <br />
            extraction
          </p>

          <div
            style={{
              boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "18px",
              fontSize: "12px",
              color: "#776F6F",
              width: "400px",
            }}
          >
            DoQu AI Supports
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                rowGap: "20px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "#438F9D",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "90px",
                  border: "1px solid #438F9D",
                  borderRadius: "2px",
                  padding: "8px 10px",
                  boxSizing: "border-box",
                }}
              >
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
              <div
                style={{
                  display: "flex",
                  color: "#438F9D",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "90px",
                  border: "1px solid #438F9D",
                  borderRadius: "2px",
                  padding: "8px 10px",
                  boxSizing: "border-box",
                }}
              >
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
              <div
                style={{
                  display: "flex",
                  color: "#438F9D",
                  alignItems: "center",
                  width: "90px",
                  border: "1px solid #438F9D",
                  borderRadius: "2px",
                  padding: "8px 10px",
                  boxSizing: "border-box",
                }}
              >
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
              <div
                style={{
                  display: "flex",
                  color: "#438F9D",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "90px",
                  border: "1px solid #438F9D",
                  borderRadius: "2px",
                  padding: "8px 10px",
                  boxSizing: "border-box",
                }}
              >
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
              <div
                style={{
                  display: "flex",
                  color: "#438F9D",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "90px",
                  border: "1px solid #438F9D",
                  borderRadius: "2px",
                  padding: "8px 10px",
                  boxSizing: "border-box",
                }}
              >
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "200px",
          width: "100%",
          padding: "40px 0px",
          boxSizing: "border-box",
          textAlign: "left",
        }}
      >
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <img
            src={img2}
            style={{
              padding: "40px",
            }}
          />
        </div>
        <div style={{ flex: 1, padding: "0px 45px" }} ref={ref2}>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "baseline",
              marginBottom: "10px",
            }}
          >
            AI Integration&nbsp;&nbsp; <RedSquare />
          </div>
          <p style={{ lineHeight: "24px" }}>
            Connect directly from Jupyter Notebooks to DoQu
            <br /> server with DoQu SDK and start parsing the inputs.
            <br /> Upload the predictions back to server for manual
            <br /> verification.
          </p>

          <div
            style={{
              boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "5px 12px",
              fontSize: "14px",
              color: "#776F6F",
              width: "300px",
            }}
          >
            Install doqu SDK using pip:
            <div
              style={{
                backgroundColor: "#F1F1F1",
                position: "relative",
                paddingLeft: "15px",
                margin: "5px 0px",
                color: "#032B44",
                fontWeight: 500,
              }}
            >
              pip install doqu
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
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "200px",
          width: "100%",
          padding: "40px 0px",
          boxSizing: "border-box",
          textAlign: "left",
        }}
      >
        <div style={{ flex: 1, padding: "0px 45px" }} ref={ref3}>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "baseline",
              marginBottom: "10px",
            }}
          >
            Quantity&nbsp;&nbsp; <RedSquare />
          </div>
          <p style={{ lineHeight: "24px" }}>
            Powerful and rich DoQu UI allows 100% <br />
            accuracy. Monitor each task, manually verify
            <br /> and correct data outputs and approve outputs
            <br /> for further processing.
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
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "200px",
          width: "100%",
          padding: "40px 0px",
          boxSizing: "border-box",
          textAlign: "left",
        }}
      >
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <img
            src={img4}
            style={{
              padding: "40px",
            }}
          />
        </div>
        <div style={{ flex: 1, padding: "0px 45px" }} ref={ref4}>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "baseline",
              marginBottom: "10px",
            }}
          >
            Continuous Learning&nbsp;&nbsp; <RedSquare />
          </div>
          <p style={{ lineHeight: "24px" }}>
            Rich SDK allows to retrieve high quality manually
            <br />
            verified annotations from the DoQu server. Use these
            <br /> data to further improve the automation logic and so
            <br /> next time you spend less time on manual processes.
          </p>

          <div
            style={{
              boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "5px 12px",
              fontSize: "14px",
              color: "#776F6F",
              width: "300px",
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
              }}
            >
              doqu.get_annotations(task)
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
      </div>
    </div>
  );
};

export default Features;
