import React from 'react'
import EncApp from "../../components/EncoderAppPage/EncApp"
import "../public_apps.css";


page_title = "SNOMED Coding"
page_definition = "Map medical terms to SNOMED codes with AI"


const terms = [
  {
    "term": "high blood pressure",
    "mappings": [
      {
        "Name": "Hypertensive disorder",
        "Code": "38341003",
        "Score": "99%"
      }
    ]
  },

  {
    "term": "Arterial hypotension",
    "mappings": [
      {
        "Name": "Low blood pressure",
        "Code": "45007003",
        "Score": "87%"
      }      
    ]
  },

  {
    "term": "Heart attack",
    "mappings": [
      {
        "Name": "Myocardial infarction",
        "Code": "22298006",
        "Score": "97%"
      }      
    ]
  },

  {
    "term": "stroke",
    "mappings": [
      {
        "Name": "Cerebrovascular accident",
        "Code": "230690007",
        "Score": "93%"
      }      
    ]
  },

  {
    "term": "winter blues",
    "mappings": [
      {
        "Name": "Seasonal affective disorder",
        "Code": "247803002",
        "Score": "88%"
      }      
    ]
  },

  {
    "term": "german measles",
    "mappings": [
      {
        "Name": "Rubella",
        "Code": "36653000",
        "Score": "97%"
      }      
    ]
  },

]


const SNOMED = () => {
  return (
    <EncApp />
  )
}

export default SNOMED