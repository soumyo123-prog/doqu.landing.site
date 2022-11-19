import React from "react";

import "./index.css";

import NavBar from "../components/NavBar";
import MainSection from "../components/MainSection";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import GettingStarted from "../components/GettingStarted";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div style={{ height: "63px" }}></div>
      <MainSection />
      <Features />
      <UseCases />
      <GettingStarted />
      <Footer />
    </div>
  );
}
