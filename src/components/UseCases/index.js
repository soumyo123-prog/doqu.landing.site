import React from "react";

import bg from "../../../static/img/usecasesbg.png";

import useC1 from "../../../static/img/use-case-automated.png";
import useC2 from "../../../static/img/use-case-standard.png";
import useC3 from "../../../static/img/use-case-fraud.png";
import useC4 from "../../../static/img/use-case-vigilance.png";
import useC5 from "../../../static/img/use-case-analytics.png";
import useC6 from "../../../static/img/use-case-insight.png";

const UseCaseCard = ({ label, img }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "230px",
          height: "140px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold", textAlign: "center", paddingLeft: "5px", paddingRight: "5px" }}>{label}</p>

        <img src={img} style={{ height: "60px" }} />
      </div>
    </div>
  );
};

const UseCases = () => {
  return (
    <div
      className="usecases"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "40px",
      }}
    >
      <h2 style={{ fontSize: "25px" }}>Use Cases</h2>
      <p style={{}}>
        EinMind apps support building various AI powered data pipelines
      </p>

      <div className="usecases-grid">
        <UseCaseCard label="Automated Medical Coding" img={useC1} />
        <UseCaseCard label="Data Standardization" img={useC2} />
        <UseCaseCard label="Fraud Detection" img={useC3} />
        <UseCaseCard label="Pharmacovigilance" img={useC4} />
        <UseCaseCard label="Drug Intelligence" img={useC5} />
        <UseCaseCard label="Analytics and Insights" img={useC6} />
      </div>
    </div>
  );
};

export default UseCases;
