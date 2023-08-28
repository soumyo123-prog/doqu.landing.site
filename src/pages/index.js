import React from "react";

import "./index.css";

import MainSection from "../components/MainSection";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import GettingStarted from "../components/GettingStarted";
import Footer from "../components/Footer";
import NewNavbar from "../components/NewNavbar";

export default function Home() {
  return (
    <div>
      <NewNavbar />
      <MainSection />
      <Features />
      <UseCases />
      <GettingStarted />
      <Footer />
    </div>
  );
}
