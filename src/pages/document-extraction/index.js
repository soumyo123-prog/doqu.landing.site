import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import NavBar from "../../components/NavBar";
import SampleDocs from "../../components/data/sample_docs.json";
import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";
import "../public_apps.css";

export default function DocumentCoding() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }

  const [disabBtn, setDisabBtn] = useState(false);

  const [encoder, setEncoder] = useState(Object.keys(SampleDocs)[0]);
  const [encoderSample, setEncoderSample] = useState("");
  const [content, setContent] = useState("");

  const [predictions, setPredictions] = useState(null);
  const getPredictions = async () => {
    try {
      const { data } = await axios.get(
        `${customFields.BASE_API_URL}/encoders/document_coding/get_document_codes?doc=${content}&ontology=${encoder}`
      );
      setPredictions(data);
      setDisabBtn(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setEncoderSample(Object.keys(SampleDocs[encoder])[0]);
    setDisabBtn(false);
    setPredictions(null);
  }, [encoder]);
  useEffect(() => {
    setContent(SampleDocs[encoder][encoderSample]);
    setDisabBtn(false);
    setPredictions(null);
  }, [encoderSample]);

  return (
    <>
      <NavBar activeTab={"document-extraction"} />
      <div
        className="px-8 py-4 flex gap-4 page-template"
        style={{ height: "calc(100vh - 3.3rem)" }}
      >
        <div className="w-1/2 flex flex-col gap-2">
          <div>
            <div>What codes do you want to extract?</div>
            <select
              className="w-full"
              onChange={(e) => setEncoder(e.target.value)}
              value={encoder}
            >
              {Object.keys(SampleDocs).map((doc) => (
                <option key={doc}>{doc}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="w-full"
              onChange={(e) => setEncoderSample(e.target.value)}
              value={encoderSample}
            >
              {SampleDocs[encoder] &&
                Object.keys(SampleDocs[encoder]).map((doc) => (
                  <option key={doc}>{doc}</option>
                ))}
            </select>
          </div>
          <div
            className="bg-white border-theme rounded mb-2"
            style={{ height: "calc(100% - 7.3rem)" }}
          >
            <textarea
              className="w-full h-full"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled
            />
          </div>
          <div className="flex gap-4 items-center justify-end">
            {/* <span>
              <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
              reCAPTCHA
            </span> */}
            <button
              className="btn btn-primary"
              disabled={disabBtn}
              onClick={getPredictions}
            >
              Extract
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-white border-theme rounded">
          {predictions === null ? (
            <div className="flex justify-center items-center text-desc h-full">
              Predictions will be displayed here
            </div>
          ) : (
            <table className="enc-table">
              <thead>
                <tr>
                  <th>Code Title</th>
                  <th>Code</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {predictions &&
                  predictions.codes.map((code) => (
                    <tr key={code.code}>
                      <td>{code.code_title}</td>
                      <td>{code.code}</td>
                      <td>{code.score}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
