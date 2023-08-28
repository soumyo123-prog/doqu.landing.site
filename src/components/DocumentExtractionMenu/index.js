import React from "react";
import { BsStars } from "react-icons/bs";

export const documentExtractionMenuData = [
  {
    encoder_app_id: "adverse-event-coding",
    name: "Adverse event coding with MedDRA",
    description:
      "Extract adverse event mentioned in medical documents and map to MedDRA codes",
  },
  {
    encoder_app_id: "diagnosis-and-procedure-coding-event-pcs",
    name: "Diagnosis and procedure coding with ICD-10-CM/PCS",
    description:
      "Extract diagnosis and procedure mentions in medical documents and map to ICD-10-CM/ ICD-10-PCS codes",
  },
  {
    encoder_app_id: "diagnosis-and-procedure-coding-event-cpt",
    name: "Diagnosis and procedeure coding with ICD-10-CM and CPT",
    description:
      "Extract diagnosis and procedure mentions in medical documents and map to ICD-10-CM/ CPT codes",
  },
  {
    encoder_app_id: "drug-medication-coding-event-atc",
    name: "Drug and medication coding with ATC",
    description:
      "Extract drug and medication mentions in medical documents and map to ATC codes",
  },
];

const DocumentExtractionMenu = () => {
  return (
    <div
      className="absolute right-[-100%] top-[200%] bg-white text-gray-900 border border-gray-200 shadow-md rounded flex flex-col items-center"
      style={{ zIndex: "10000" }}
    >
      <div
        className="font-semibold flex items-center justify-center w-full px-8"
        style={{ height: "3.5rem" }}
      >
        <span className="h-[60%] flex items-center border-b border-gray-200 w-full">
          Seamlessly extract medical terms and codes from documents
        </span>
      </div>
      <div className="mt-2 mb-4 flex flex-col px-4" style={{ width: "690px" }}>
        {documentExtractionMenuData.map((menuItem, menuItemIndex) => (
          <a
            key={menuItemIndex}
            className="hover:cursor-pointer hover:bg-blue-100 rounded py-2 px-1 w-full"
            onClick={() =>
              (window.location.href = `/document-extraction/${menuItem.encoder_app_id}`)
            }
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BsStars className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="ml-4">
                <p className="text-xs font-semibold text-gray-900">
                  {menuItem.name}
                </p>
                <p className="text-xs text-gray-500">{menuItem.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DocumentExtractionMenu;
