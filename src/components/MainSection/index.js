import React from "react";

import ecoBg from "../../../static/img/ecoBg.png";

const MainSection = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          textAlign: "center",
          height: "calc(100vh - 63px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#032B44",
        }}
      >
        <p
          style={{
            fontSize: "50px",
            fontWeight: 700,
            lineHeight: "60px",
            padding: 0,
            margin: 0,
            marginBottom: "20px",
          }}
        >
          Visualize & Verify
          <br />
          <span style={{ color: "#438F9D" }}>AI</span> Predictions
        </p>
        <p style={{ fontSize: "13px", fontWeight: 500 }}>
          Teams building machine learning pipelines use <br />
          DoQu to visualise, verify and correct extractions.
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 220"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            position: "relative",
            left: 0,
            top: 0,
            transform: "translateY(7px)",
            // backgroundImage: `url(${ecoBg})`,
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
            d="M0,0 L0,600 L500,600 L500,0 Q250,120 0,0 Z"
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
            d="M0,0 L0,600 L500,600 L500,0 Q250,120 0,0 Z"
            fill="rgba(3, 43, 68, 0.8)"
          />
        </svg>

        <div
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
            style={{
              fontSize: "30px",
              fontWeight: 700,
              lineHeight: "30px",
              padding: 0,
              margin: 0,
              marginBottom: "20px",
              color: "white",
            }}
          >
            One Platform, For Your
            <span style={{ color: "#438F9D" }}> Entire</span>
            <br />
            <span style={{ color: "#438F9D" }}>AI Ecosystem</span>
          </p>
          <p style={{ fontSize: "13px", fontWeight: 500, color: "white" }}>
            The most complete platform for unlocking the potential of
            <br />
            teams that build AI powered data extraction pipelines
          </p>
        </div>
      </div>

      <video
        src="https://d259fuf47d0c5i.cloudfront.net/doqu-resources/landing-site/network-video-2-comp.mp4"
        autoPlay
        muted
        loop
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
