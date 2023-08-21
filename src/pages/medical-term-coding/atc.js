import React from 'react'
import EncApp from "../../components/EncoderAppPage/EncApp"
import "../public_apps.css";

const terms = [
  {
    "term": "Namuscla",
    "mappings": [
      {
        "Name": "Mexiletine",
        "Code": "C01BB02",
        "Score": "99%"
      }
    ]
  },

  {
    "term": "xerava",
    "mappings": [
      {
        "Name": "Eravacycline",
        "Code": "J01AA13",
        "Score": "97%"
      }      
    ]
  },

  {
    "term": "exparel",
    "mappings": [
      {
        "Name": "Bupivacain",
        "Code": "N01BB01",
        "Score": "98%"
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