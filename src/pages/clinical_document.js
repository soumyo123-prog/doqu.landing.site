import React, { useState } from "react";
import NavBar from "../components/NavBar";
// import ReCAPTCHA from "react-google-recaptcha";

const ClinicalDoc = () => {
  const [val, setVal] = useState("");
  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }
  return (
    <>
      <NavBar activeTab={"clinical_document"} />
      <div
        className="px-8 py-4 flex gap-4 page-template"
        style={{ height: "calc(100vh - 3.3rem)"}}
      >
        <div className="w-1/2">
          <div
            className="bg-white border-theme rounded"
            style={{ height: "calc(100% - 7.3rem)" }}
          >
            <textarea
              className="w-full h-full"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <div>What codes do you want to extract?</div>
            <select className="w-full">
              <option>ICD-10</option>
              <option>ICD-9</option>
              <option>SNOMED</option>
            </select>
            <div className="flex gap-4 items-center justify-between mt-2">
              <span>
                {/* <ReCAPTCHA sitekey="Your client site key" onChange={onChange} /> */}
                reCAPTCHA
              </span>
              <button className="btn btn-primary">Extract</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-white border-theme rounded">
          <div className="flex justify-center items-center text-desc h-full">
            Predictions will be displayed here
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicalDoc;
