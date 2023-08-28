import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export const medicalTermCodingMenuData = [
  {
    encoder_app_id: "meddra",
    name: "MedDRA",
    description: "Automatically map adverse events to MedDRA codes",
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
    description:
      "Automatically map medical procedures and treatments to CPT codes",
  },
  {
    encoder_app_id: "atc",
    name: "ATC",
    description: "Automatically extract ATC codes for drugs and medications",
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

const MedicalTermCodingMenu = () => {
  return (
    <>
      <div
        className="absolute right-[-200%] top-[200%] bg-white text-gray-900 border border-gray-200 shadow-md rounded flex flex-col items-center"
        style={{ zIndex: "10000" }}
      >
        <div
          className="font-semibold flex items-center justify-center w-full px-12"
          style={{ height: "3.5rem" }}
        >
          <span className="h-[60%] flex items-center border-b border-gray-200 w-full">
            Seamless mapping of medical terms to codes with AI autocoders
          </span>
        </div>
        <div
          className="mt-2 mb-4 grid grid-cols-2 px-2"
          style={{ width: "690px" }}
        >
          {medicalTermCodingMenuData.map((menuItem, menuItemIndex) => (
            <a
              key={menuItemIndex}
              className="hover:cursor-pointer hover:bg-blue-100 rounded py-2 px-1"
              style={{ width: "330px" }}
              onClick={() =>
                (window.location.href = `/medical-term-coding/${menuItem.encoder_app_id}`)
              }
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-500" />
                </div>
                <div className="ml-4">
                  <p className="text-xs font-semibold text-gray-900">
                    {menuItem.name} Coding
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "0.6rem" }}>
                    {menuItem.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MedicalTermCodingMenu;
