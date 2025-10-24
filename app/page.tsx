import React from "react";
import Sponsors from "../components/sponsor";
import Speakers from "../components/speakers/speakers";
import Schedule from "../components/Schedule";
import AboutSection from "../components/AboutSection";
import CountdownSection from "../components/CountdownSection";
import Register from "../components/Register";

export default async function Home() {
  return (
    <div>
      <AboutSection />
      <CountdownSection />
      <Sponsors />
      <Speakers />
      <Schedule />
      <Register />
    </div>
  );
}