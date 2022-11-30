import React, { useEffect, useRef } from "react";

import "./index.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  const formRef = useRef(null);

  return (
    <div>
      <NavBar />
      <div style={{ height: "63px" }}></div>
      <iframe
        ref={formRef}
        src="https://docs.google.com/forms/d/e/1FAIpQLScFOHIJbQCYpA06fvuVgiCIjSnpthFSeNVWR1aTokWTk3Le4w/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{
          height: "1000px",
          width: "100%",
          marginTop: "40px",
          overflow: "hidden",
        }}
      >
        Loading…
      </iframe>
      <Footer />
    </div>
  );
}
