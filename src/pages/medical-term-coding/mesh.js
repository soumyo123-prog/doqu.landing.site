import React from 'react'
import EncApp from "../../components/EncoderAppPage/EncApp"
import "../public_apps.css";


const terms = [
  {
    "term": "Mad cow disease",
    "mappings": [
      {
        "Name": "Encephalopathy, Bovine Spongiform",
        "Code": "D016643",
        "Score": "88%"
      }
    ]
  },

  {
    "term": "Heartburn",
    "mappings": [
      {
        "Name": "Heartburn",
        "Code": "D006356",
        "Score": "99%"
      },
      {
        "Name": "Gastroesophageal Reflux",
        "Code": "D005764",
        "Score": "83%"
      }      
    ]
  },

  {
    "term": "Heart attack",
    "mappings": [
      {
        "Name": "Myocardial Infarction",
        "Code": "D009203",
        "Score": "99%"
      }      
    ]
  },

  {
    "term": "Lou Gehrig's disease",
    "mappings": [
      {
        "Name": "Amyotrophic Lateral Sclerosis",
        "Code": "D000690",
        "Score": "99%"
      }      
    ]
  },

  {
    "term": "Swine flu",
    "mappings": [
      {
        "Name": "Influenza A Virus, H1N1 Subtype",
        "Code": "D053118",
        "Score": "99%"
      }      
    ]
  },

  {
    "term": "Bad cholesterol",
    "mappings": [
      {
        "Name": "Cholesterol, LDL",
        "Code": "D008078",
        "Score": "99%"
      }      
    ]
  },

  {
    "term": "Old age spots",
    "mappings": [
      {
        "Name": "Lentigo",
        "Code": "D007911",
        "Score": "99%"
      }      
    ]
  },

  {
    "term": "Lockjaw",
    "mappings": [
      {
        "Name": "Tetanus",
        "Code": "D013742",
        "Score": "99%"
      }      
    ]
  },

  {
    "term": "TB",
    "mappings": [
      {
        "Name": "Tuberculosis",
        "Code": "D014376",
        "Score": "99%"
      }      
    ]
  },
]


const ICD10CM = () => {
  return (
    <EncApp />
  )
}

export default ICD10CM