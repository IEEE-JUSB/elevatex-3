import React from "react";
import Sponsors from "../components/sponsor";
import Speakers from "../components/speakers/speakers";
import Schedule from "../components/Schedule";
import AboutSection from "../components/AboutSection";

export default async function Home() {
  return (
    <div>
      <AboutSection />
      <Sponsors />
      <Speakers />
      <Schedule />
    </div>
  );
}