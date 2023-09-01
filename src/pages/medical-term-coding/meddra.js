import React from "react";
import EncMeddraApp from "../../components/EncoderAppPage/EncMeddraApp";
import "../public_apps.css";

const page_title = "MedDRA Coding";
const page_definition =
  "Map adverse events and medical terms to MedDRA codes with AI";

const terms = [
  {
    term: "Painful sensation in a lymph node",
    mappings: [
      {
        Level: "PT (Level 4)",
        Name: "Lymph node pain",
        Code: "10025182",
      },
    ],
  },

  {
    term: "Open sore in the cornea",
    mappings: [
      {
        Level: "LLT (Level 5)",
        Name: "Corneal ulcer",
        Code: "10048492",
      },
    ],
  },

  {
    term: "Difficulty swallowing",
    mappings: [
      {
        Level: "PT (Level 4)",
        Name: "Dysphagia",
        Code: "10013950",
      },
    ],
  },

  {
    term: "Heartburn",
    mappings: [
      {
        Level: "PT (Level 4)",
        Name: "Dyspepsia",
        Code: "10013946",
      },
    ],
  },

  {
    term: "bleeding in the stomach",
    mappings: [
      {
        Level: "LLT (Level 5)",
        Name: "Gastric hemorrhage",
        Code: "10017789",
      },
    ],
  },
];

const MEDDRA = () => {
  return <EncMeddraApp terms={terms} />;
};

export default MEDDRA;
