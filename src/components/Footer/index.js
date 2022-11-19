import React from "react";

import logoW from "../../../static/img/logoW.png";

const Footer = () => {
  return (
    <div
      style={{
        displ: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: 600,
        padding: "45px",
        paddingBottom: "0px",
        background:
          "linear-gradient(0deg, rgba(3, 43, 68, 0.98), rgba(3, 43, 68, 0.98))",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <p style={{ color: "#438F9D" }}>Company</p>
            <p>Contact Us</p>
          </div>
          <div style={{ width: "100px" }}></div>
          <div>
            <p style={{ color: "#438F9D" }}>Resources</p>
            <p>Docs</p>
          </div>
        </div>
        <div>
          <img src={logoW} style={{ height: "70px" }} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0px 20px 20px 20px",
        }}
      >
        <p style={{ color: "#438F9D", padding: "0px 20px", margin: 0 }}>
          Privacy Policy
        </p>
        <p style={{ color: "#438F9D", padding: "0px 20px", margin: 0 }}>
          Terms of Service
        </p>

        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#D00000",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Footer;
