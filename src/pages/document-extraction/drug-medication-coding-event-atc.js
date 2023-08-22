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
  const [encoder, setEncoder] = useState(Object.keys(SampleDocs)[1]);
  const [encoderSample, setEncoderSample] = useState("");
  const [content, setContent] = useState("");
  const [predictions, setPredictions] = useState(null);
  const [title, setTitle] = useState(null);
  const [cases, setCases] = useState(SampleDocs[encoder].cases);
  const [selectedCase, setSelectedCase] = useState(cases[0]);

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
    setEncoderSample(Object.keys(SampleDocs[encoder])[3]);
    setDisabBtn(false);
    setPredictions(null);
    setTitle(SampleDocs[encoder].title);
    setCases(SampleDocs[encoder].cases);
  }, [encoder]);

  useEffect(() => {
    setContent(SampleDocs[encoder][encoderSample]);
    setDisabBtn(false);
    setPredictions(null);
    setCases(SampleDocs[encoder].cases);
  }, [encoderSample]);

  const onChangeCase = (e) => {
    setSelectedCase(cases[e.target.value]);
  };

  return (
    <>
      <NavBar activeTab={"document-extraction"} />
      <div
        className="px-8 py-4 flex gap-4 page-template"
        style={{ height: "calc(100vh - 3.3rem)" }}
      >
        <div className="w-1/2 flex flex-col gap-2">
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <select className="w-full" onChange={(e) => onChangeCase(e)}>
              {cases.map((cs, index) => (
                <option key={cs.case_id} value={index}>
                  {cs.case_title}
                </option>
              ))}
            </select>
          </div>
          <div
            className="bg-white border-theme rounded mb-2"
            style={{ height: "calc(100% - 7.3rem)" }}
          >
            <textarea
              className="w-full h-full"
              value={selectedCase.case_description}
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
