import React, { useEffect, useRef } from "react";

import "./index.css";

import Footer from "../components/Footer";
import NewNavbar from "../components/NewNavbar";

export default function Contact() {
  const formRef = useRef(null);

  return (
    <>
      <NewNavbar />
      <iframe
        ref={formRef}
        src="https://docs.google.com/forms/d/e/1FAIpQLScFOHIJbQCYpA06fvuVgiCIjSnpthFSeNVWR1aTokWTk3Le4w/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{
          height: "1000px",
          width: "100%",
          margin: "10vh",
          overflow: "hidden",
        }}
      >
        Loading…
      </iframe>
      <Footer />
    </>
  );
}
