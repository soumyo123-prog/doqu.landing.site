import React, { useEffect, useState } from "react";
import SampleDocs from "../data/sample_docs.json";
import axios from "axios";
import "../../pages/public_apps.css";

export default function DocumentCodingPage({ encoderIndex }) {
  const [disabBtn, setDisabBtn] = useState(false);
  const [encoder, setEncoder] = useState(Object.keys(SampleDocs)[encoderIndex]);
  const [encoderSample, setEncoderSample] = useState("");
  const [content, setContent] = useState("");
  const [predictions, setPredictions] = useState(null);
  const [title, setTitle] = useState(null);
  const [cases, setCases] = useState(SampleDocs[encoder].cases);
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [loading, setLoading] = useState(false);

  const getPredictions = async () => {
    // try {
    //   const { data } = await axios.get(
    //     `${customFields.BASE_API_URL}/encoders/document_coding/get_document_codes?doc=${content}&ontology=${encoder}`
    //   );
    //   setPredictions(data);
    //   setDisabBtn(true);
    // } catch (error) {
    //   console.log(error);
    // }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPredictions(selectedCase.predictions);
    }, 2000);
  };

  console.log(predictions);

  useEffect(() => {
    setEncoderSample(Object.keys(SampleDocs[encoder])[0]);
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
    setPredictions(null);
    setSelectedCase(cases[e.target.value]);
  };

  return (
    <>
      <div
        className="hidden md:flex px-8 py-4 flex gap-4 page-template"
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
        <div className="w-1/2 bg-white border-theme rounded p-2">
          {predictions === null ? (
            loading === true ? (
              <div className="flex justify-center items-center text-desc h-full">
                <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
                <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-green-500 border-t-transparent"></div>
              </div>
            ) : (
              <div className="flex justify-center items-center text-desc h-full">
                AI predicted codes will be displayed here
              </div>
            )
          ) : (
            <>
              {predictions.map((prediction) => (
                <table className="enc-table" key={prediction.target_ontololy}>
                  <thead>
                    <tr>
                      <th colSpan={Object.keys(prediction.codes[0]).length}>
                        {prediction.target_ontololy}
                      </th>
                    </tr>
                    <tr>
                      {Object.keys(prediction.codes[0]).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {prediction.codes.map((code) => (
                      <tr key={code.Code}>
                        {Object.values(code).map((value, index) => (
                          <td key={index}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </>
          )}
        </div>
      </div>
      <div
        className="md:hidden px-8 py-4 flex gap-4 page-template overflow-auto"
        style={{ height: "calc(100vh - 3.3rem)" }}
      >
        <div className="w-full flex flex-col gap-2">
          <div className="text-gray-500 font-semibold flex w-full text-xs">
            DOCUMENT EXTRACTION&nbsp;{">"}&nbsp;{title}&nbsp;{">"}
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
          <div className="flex gap-4 items-center justify-center">
            {/* <span>
              <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
              reCAPTCHA
            </span> */}
            <button
              className="w-full btn btn-primary"
              disabled={disabBtn}
              onClick={getPredictions}
            >
              Extract
            </button>
          </div>
          <div className="w-full bg-white border-theme rounded">
            {predictions === null ? (
              <div
                className="flex justify-center items-center text-desc"
                style={{ minHeight: "200px" }}
              >
                AI predicted codes will be displayed here
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
                {/* <tbody>
                  {predictions &&
                    predictions.codes.map((code) => (
                      <tr key={code.code}>
                        <td>{code.code_title}</td>
                        <td>{code.code}</td>
                        <td>{code.score}</td>
                      </tr>
                    ))}
                </tbody> */}
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
