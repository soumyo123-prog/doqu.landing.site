import React from "react";
import { IoDocumentsSharp } from "react-icons/io5";

const DocumentExtractionMenu = () => {
  const documentExtractionMenuData = [
    {
      encoder_app_id: "adverse-event-coding",
      name: "Adverse event coding with MedDRA",
    },
    {
      encoder_app_id: "diagnosis-and-procedure-coding-event-pcs",
      name: "Diagnosis and procedure coding with ICD-10-CM/PCS",
    },
    {
      encoder_app_id: "diagnosis-and-procedure-coding-event-cpt",
      name: "Diagnosis and procedeure coding with ICD-10-CM and CPT",
    },
    {
      encoder_app_id: "drug-medication-coding-event-atc",
      name: "Drug and medication coding with ATC",
    },
  ];

  return (
    <div className="absolute left-0 top-full bg-white text-gray-900 border border-gray-200 rounded shadow-md">
      <div className="grid grid-cols-1" style={{ width: "300px" }}>
        {documentExtractionMenuData.map((menuItem, menuItemIndex) => (
          <a
            key={menuItemIndex}
            className="p-3 hover:cursor-pointer hover:bg-indigo-100"
            style={{ width: "300px" }}
            onClick={() =>
              (window.location.href = `/document-extraction/${menuItem.encoder_app_id}`)
            }
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <IoDocumentsSharp className="w-8 h-8" />
              </div>
              <div className="ml-4">
                <p className="text-xs text-gray-900">{menuItem.name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DocumentExtractionMenu;
