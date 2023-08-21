import React from 'react'
import EncApp from "../../components/EncoderAppPage/EncApp"
import "../public_apps.css";


const terms = [
  {
    "term": "Triple-negative breast cancer",
    "mappings": [
      {
        "Level": "6",
        "Name": "Malignant neoplasm of unspecified site of unspecified male breast",
        "Code": "C50.929",
        "Score": "92%"
      },
      {
        "Level": "6",
        "Name": "Malignant neoplasm of unspecified site of unspecified female breast",
        "Code": "C50.919",
        "Score": "90%"
      }
    ]
  },

  {
    "term": "OM",
    "mappings": [
      {
        "Level": "5",
        "Name": "Otitis media, unspecified, unspecified ear",
        "Code": "H66.90",
        "Score": "94%"
      },
      {
        "Level": "5",
        "Name": "Otitis media, unspecified, bilateral",
        "Code": "H66.93",
        "Score": "81%"
      },
      {
        "Level": "5",
        "Name": "Otitis media, unspecified, right ear",
        "Code": "H66.91",
        "Score": "43%"
      },
      {
        "Level": "5",
        "Name": "Otitis media, unspecified, left ear",
        "Code": "H66.92",
        "Score": "38%"
      }
    ]
  },

  {
    "term": "DM2",
    "mappings": [
      {
        "Level": "4",
        "Name": "Type 2 diabetes mellitus without complications",
        "Code": "E11.9",
        "Score": "98%"
      },
      {
        "Level": "4",
        "Name": "Type 2 diabetes mellitus with unspecified complications",
        "Code": "E11.8",
        "Score": "58%"
      },
      {
        "Level": "5",
        "Name": "Type 2 diabetes mellitus with other specified complication",
        "Code": "E11.69",
        "Score": "42%"
      }      
    ]
  }
]


const ICD10CM = () => {
  return (
    <EncApp />
  )
}

export default ICD10CM