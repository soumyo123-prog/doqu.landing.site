import React, { useRef, useEffect } from "react";

import ecoBg from "../../../static/img/ecoBg.png";
import bgAnimation from "../../../static/img/network-video-2-comp.mp4";

const MainSection = () => {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#032B44",
        }}
      >
        <p
          className="header-main-title"
          style={{
            fontWeight: 700,
            lineHeight: "60px",
            padding: 0,
            margin: 0,
            marginBottom: "50px",
          }}
        >
          Streamlining Healthcare <br />
          Data Extraction and Coding
        </p>
        <p
          className="header-main-caption"
          style={{ fontWeight: 500, fontSize: "20px" }}
        >
          Intelligent data extraction and automation tools built for healthcare
          and research
        </p>
        <div className="flex flex-col">
          <div className="mt-6 font-medium text-lg">Try now</div>
          <button
            className="btn btn-darkblue pill my-2"
            onClick={() => {
              window.location.href = "./medical-term-coding";
            }}
          >
            &#xbb;  Medical Term Coding
          </button>
          <button
            className="btn btn-darkblue pill my-2"
            onClick={() => {
              window.location.href = "./document-extraction";
            }}
          >
            &#xbb;  Document Extraction
          </button>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 220"
          preserveAspectRatio="none"
          className="subheader-bg"
          style={{
            width: "100%",
            position: "relative",
            left: 0,
            top: 0,
            transform: "translateY(7px)",
          }}
        >
          <defs>
            <pattern
              id="img1"
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image href={`${ecoBg}`} x="0" y="0" width="100%" />
            </pattern>
          </defs>

          <path
            d="M0,0 L0,600 L500,600 L500,0 Q250,60 0,0 Z"
            fill="url(#img1)"
          />
        </svg>

        <svg
          width="500"
          height="500"
          viewBox="0 0 500 220"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translateY(7px)",
          }}
        >
          <path
            d="M0,0 L0,600 L500,600 L500,0 Q250,60 0,0 Z"
            fill="rgba(3, 43, 68, 0.8)"
          />
        </svg>

        <div
          className="subheader-section"
          style={{
            textAlign: "center",
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#032B44",
            position: "absolute",
            top: 100,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <p
            className="subheader-title"
            style={{
              fontWeight: 700,
              lineHeight: "30px",
              padding: 0,
              margin: 0,
              marginBottom: "20px",
              color: "white",
            }}
          >
            Your <span style={{ color: "#438F9D" }}> Medical Coding</span>{" "}
            Co-Pilot
          </p>
          <p
            className="subheader-caption"
            style={{ fontWeight: 500, color: "white" }}
          >
            The most complete platform for unlocking the potential of
            <br />
            healthcare data
          </p>
        </div>
      </div>

      <video
        //src="https://d259fuf47d0c5i.cloudfront.net/doqu-resources/landing-site/network-video-2-comp.mp4"
        src={bgAnimation}
        typeof="video/mp4"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="video-bg"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          zIndex: -999,
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          zIndex: -999,
          objectFit: "cover",
          backdropFilter: "blur(20px)",
        }}
      ></div>
    </div>
  );
};

export default MainSection;
