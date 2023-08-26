import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import NavBar from "../../components/NavBar";
import DocumentCodingPage from "../../components/DocumentCodingPage";
// import ReCAPTCHA from "react-google-recaptcha";

export default function DocumentCoding() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }

  return (
    <>
      <NavBar activeTab={"document-extraction"} />
      <DocumentCodingPage encoderIndex={3} />
    </>
  );
}
