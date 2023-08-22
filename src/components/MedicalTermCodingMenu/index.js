import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const MedicalTermCodingMenu = () => {
  const medicalTermCodingMenuData = [
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

  return (
    <div className="absolute left-0 top-full bg-white text-gray-900 border border-gray-200 rounded shadow-md">
      <div className="grid grid-cols-2" style={{ width: "600px" }}>
        {medicalTermCodingMenuData.map((menuItem, menuItemIndex) => (
          <a
            key={menuItemIndex}
            className="p-3 hover:cursor-pointer hover:bg-indigo-100"
            style={{ width: "300px" }}
            onClick={() =>
              (window.location.href = `/medical-term-coding/${menuItem.encoder_app_id}`)
            }
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaMapMarkerAlt className="w-8 h-8" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-900">
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

export default MedicalTermCodingMenu;
