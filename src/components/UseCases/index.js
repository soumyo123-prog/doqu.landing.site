import React from "react";

import bg from "../../../static/img/usecasesbg.png";

import useC1 from "../../../static/img/use-case-accuracy.png";
import useC2 from "../../../static/img/use-case-api-access.png";
import useC3 from "../../../static/img/use-case-data-privacy.png";

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
      <h2 style={{ fontSize: "25px" }}>Features</h2>
      <p style={{}}>
        Everything you need for streamlining medical coding
      </p>

      <div className="usecases-grid">
        <UseCaseCard label="Accurate Medical Coding" img={useC1} />
        <UseCaseCard label="API Access" img={useC2} />
        <UseCaseCard label="Data Privacy" img={useC3} />        
      </div>
    </div>
  );
};

export default UseCases;
