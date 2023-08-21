import React, { useState, useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import NavBar from "../../components/NavBar";
// import axios from "axios";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DocusaurusLogoWithKeytar from "@site/static/img/Dummy.svg";
import truncateString from "../../components/utils/truncateString";
import "../public_apps.css";

const MedicalTermCoding = () => {
  const location = useLocation();
  // const {
  //   siteConfig: { customFields },
  // } = useDocusaurusContext();
  // const [apps, setApps] = useState([]);
  // const getEncoderApps = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `${customFields.BASE_API_URL}/encoders/encoder_apps/get_encoder_apps`
  //     );
  //     setApps(data.encoder_apps);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getEncoderApps();
  // }, []);
  const apps = [
    {
      encoder_app_id: "meddra",
      name: "MedDRA",
      description:
        "Automatically map adverse events to MedDRA codes",
    },
    {
      encoder_app_id: "icd-10-cm",
      name: "ICD-10-CM",
      description: "Automatically map diagnosis terms to ICD-10-CM codes for ",
    },
    {
      encoder_app_id: "icd-11",
      name: "ICD-11",
      description: "Automatically map diagnosis terms to ICD-11 codes",
    },
    {
      encoder_app_id: "cpt",
      name: "CPT",
      description: "Automatically map medical procedures and treatments to CPT codes",
    },
    {
      encoder_app_id: "atc",
      name: "ATC",
      description:
        "Automatically extract ATC codes for drugs and medications",
    },    
    {
      encoder_app_id: "snomed",
      name: "SNOMED",
      description: "Automatically map medical terms to SNOMED codes",
    },
    {
      encoder_app_id: "mesh",
      name: "MeSH",
      description: "Automatically map medical terms to MeSH ontology codes",
    },    
  ];
  return (
    <>
      <NavBar activeTab={"medical-term-coding"} />
      <div className="px-32 py-4 page-template">
        <h2 className="w-2/3 mx-auto text-center">
          Explore the Future of Clinical Coding with Our AI-Powered Apps
        </h2>
        <div
          style={{
            borderTop: "1px solid #70768c",
            borderBottom: "1px solid #70768c",
          }}
        >
          <p className="my-2 mx-5 text-center">
            Harness the power of Artificial Intelligence with our selection of
            AI-powered coding apps. These tools are designed to help coders
            automate, streamline, and enhance their work process. Explore, try,
            and unlock new coding potentials!
          </p>
        </div>
        <div className="font-bold my-4 text-black">
          Try AI powered encoders now:
        </div>
        <div className="app-view-container">
          {apps.map((app) => (
            <div
              className="node default flex flex-col justify-between cursor-pointer"
              key={app.encoder_app_id}
              onClick={() =>
                (window.location.href = `${location.pathname}/${app.encoder_app_id}`)
              }
            >
              <div>
                <div className="head">
                  <div title={app.name}>
                    <DocusaurusLogoWithKeytar title="node-icon" />
                    {truncateString(app.name, 25)}
                  </div>
                </div>
                <div className="body">
                  <p>{app.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default MedicalTermCoding;
