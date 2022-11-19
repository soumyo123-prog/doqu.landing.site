import React from "react";

import bg from "../../../static/img/usecasesbg.png";

import useC1 from "../../../static/img/useC1.png";
import useC2 from "../../../static/img/useC2.png";
import useC3 from "../../../static/img/useC3.png";
import useC4 from "../../../static/img/useC4.png";
import useC5 from "../../../static/img/useC5.png";
import useC6 from "../../../static/img/useC6.png";

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
          width: "200px",
          height: "140px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>{label}</p>

        <img src={img} style={{ height: "90px" }} />
      </div>
    </div>
  );
};

const UseCases = () => {
  return (
    <div
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
        DoQu apps support building various data extraction pipelines
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          color: "#032B44",
        }}
      >
        <UseCaseCard label="Specific Datapoint" img={useC1} />
        <UseCaseCard label="Dataset" img={useC2} />
        <UseCaseCard label="Classify" img={useC3} />
        <UseCaseCard label="Multi-Label" img={useC4} />
        <UseCaseCard label="Named Entities" img={useC5} />
        <UseCaseCard label="PDF Segmentation" img={useC6} />
      </div>
    </div>
  );
};

export default UseCases;
