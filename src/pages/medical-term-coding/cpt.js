import React from "react";
import EncApp from "../../components/EncoderAppPage/EncApp";
import "../public_apps.css";

const page_title = "CPT Coding";
const page_definition = "Map medical treatments and procedures to CPT codes AI";

const terms = [
  {
    term: "botox injection to an eye muscle",
    mappings: [
      {
        Name: "Chemodenervation of extraocular muscle",
        Code: "67345",
        Score: "88%",
      },
    ],
  },

  {
    term: "shave biopsy of the upper lip",
    mappings: [
      {
        Name: "Tangential biopsy of skin",
        Code: "11102",
        Score: "83%",
      },
    ],
  },
];

const CPT = () => {
  return <EncApp terms={terms} />;
};

export default CPT;
