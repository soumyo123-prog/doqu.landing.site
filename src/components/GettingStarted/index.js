import React from "react";

import arrowRight from "../../../static/img/arrowRight.png";
import readDocs from "../../../static/img/readDocs.png";

const GettingStared = () => {
  return (
    <div style={{ padding: "80px 40px" }}>
      <h2
        className="gettingstarted-title"
        style={{
          fontSize: "25px",
          textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
          color: "#032B44",
          marginBottom: "40px",
        }}
      >
        Getting Started <span style={{ color: "#D00000" }}>Is Easy</span>
      </h2>

      <div className="gettingstarted-grid">
        <div
          style={{
            background: "linear-gradient(180deg, #032B44 0%, #2E4756 100%)",
            borderRadius: "15px",
            gridColumnStart: 1,
            gridColumnEnd: 3,
            color: "white",
            padding: "25px",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: 600 }}>Schedule a demo</p>
          <p className="schedule-demo-text">
            Start generating insights and extracting actionable data from your unstructured data. Get
            started now.
          </p>

          <div
            style={{
              width: "100px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "white",
              color: "#032B44",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Schedule
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(180deg, #032B44 0%, #2E4756 100%)",
            borderRadius: "15px",
            color: "white",
            padding: "25px",
            position: "relative",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: 600 }}>Read docs</p>
          <p className="readdocs-text">
            Explore and get comfortable with the important components of the
            platform
          </p>

          <img
            src={arrowRight}
            onClick={() => {
              window.location.href = "https://docs.einmind.com";
            }}
            style={{ height: "40px", cursor: "pointer" }}
          />

          <img
            className="readdocs-bg"
            src={readDocs}
            style={{ position: "absolute", right: 0, bottom: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default GettingStared;
