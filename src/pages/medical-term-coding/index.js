import React from "react";
import {useLocation} from '@docusaurus/router';

import "../index.css";

export default function MedicalTermCoders() {
  const location = useLocation();
  
  return (
    <div>
      <ul>
        <li onClick={() => {
            window.location.href = location.pathname + "/meddra";
          }}>MedDRA</li>
        <li>ATC</li>
        <li>ICD-10-CM</li>
        <li>ICD-9-CM</li>
        <li>RxNORM</li>
        <li>MeSH</li>
        <li>SNOMED</li>
      </ul>
    </div>
  );
}
