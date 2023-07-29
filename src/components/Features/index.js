import React, { useState, useEffect, useRef } from "react";

import img_medical_coding from "../../../static/img/medical-coding-11.png";
import img_document_coding from "../../../static/img/document-coding-3.png";
import img3 from "../../../static/img/app-store-7.png";
import img4 from "../../../static/img/workflows-4.png";

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
          top: "53px",
          height: "45px",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #dae7f2",
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
            AI Medical Term Coding
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
            Document Coding
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
            Rich App Store
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
            Powerful Workflows
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
            AI Medical Term Coding
            <div className="red-square">
              &nbsp;&nbsp; <RedSquare />
            </div>
          </div>
          <p style={{ lineHeight: "24px", margin: "1rem 0" }}>
            Experience the power of AI with EinMind's advanced medical term
            coding applications. Our intuitive, cutting-edge platform seamlessly
            translates complex medical terms into widely accepted ontologies
            such as ICD-9-CM, ICD-10-CM, MedDRA, ATC, SNOMED CT, RxNORM and
            more. With our tools, enjoy unprecedented accuracy and control with
            every mapping step being visible and manageable.
          </p>

          <div
            style={{
              boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              padding: "18px",
              fontSize: "12px",
              color: "#776F6F",
              maxWidth: "450px",
            }}
          >
            Currently supported medical ontologies:
            <div
              className="supports-card2"
              style={{
                display: "grid",
                rowGap: "10px",
                columnGap: "10px",
                marginTop: "10px",
              }}
            >
              <span>ICD-9-CM Coding</span>
              <span>ICD-10-CM Coding</span>
              <span>ICD-10-PCS Coding</span>
              <span>ICD-11 Coding</span>
              <span>MedDRA Coding</span>
              <span>ATC Coding</span>
              <span>CPT® Coding</span>
            </div>
          </div>

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
          </div> */}
        </div>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={img_medical_coding}
            style={{
              padding: "20px",
            }}
          />
          <div className="flex justify-center">
            <button
              className="btn btn-darkblue w-[10rem]"
              onClick={() => {
                window.location.href = "./medical-term-coding";
              }}
            >
              Try now
            </button>
          </div>
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
            Document Coding
            <div className="red-square">
              &nbsp;&nbsp; <RedSquare />
            </div>
          </div>
          <p style={{ lineHeight: "24px", margin: "1rem 0"  }}>
            Discover EinMind's 'document coding' tool, an AI-powered marvel that
            swiftly extracts and suggests codes for medical terms. It simplifies
            the coding process by intelligently identifying medical entities in
            documents and offering code suggestions, turning complex medical
            data into valuable, code-rich data.
          </p>
          <div className="flex justify-center mt-8">
            <button
              className="btn btn-darkblue w-[10rem]"
              onClick={() => {
                window.location.href = "./document-coding";
              }}
            >
              Try now
            </button>
          </div>
        </div>
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <img
            src={img_document_coding}
            style={{
              padding: "20px",
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
            Rich App Store
            <div className="red-square">
              &nbsp;&nbsp; <RedSquare />
            </div>
          </div>
          <p style={{ lineHeight: "24px", margin: "1rem 0"  }}>
            Explore EinMind's comprehensive app store, designed to provide a
            one-stop solution for all your medical document pre-processing
            needs. Equipped with an array of innovative tools, our platform
            transforms the intricate task of preparing medical data into a
            streamlined, user-friendly process.
          </p>

          {/* <div
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
          </div> */}
        </div>
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <img
            src={img3}
            style={{
              padding: "20px",
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
            Powerful Workflows
            <div className="red-square">
              &nbsp;&nbsp; <RedSquare />
            </div>
          </div>
          <p style={{ lineHeight: "24px", margin: "1rem 0"  }}>
            Experience the ease of data extraction with EinMind's workflow
            builder. It enables users to design custom pipelines for complex
            scenarios without any coding. This intuitive tool turns complicated
            tasks into manageable processes, giving you control over your data
            extraction needs. Simplify your work with EinMind.
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
            src={img4}
            style={{
              padding: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
