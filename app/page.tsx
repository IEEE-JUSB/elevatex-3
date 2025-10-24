import React from "react";
import Sponsors from "../components/sponsor";
import Speakers from "../components/speakers/speakers";
import Schedule from "../components/Schedule";
import AboutSection from "../components/AboutSection";
import CountdownSection from "../components/CountdownSection";
import HeroSection from "@/components/HeroSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CountdownSection />
      <Sponsors />
      <Speakers />
      <Schedule />
    </div>
  );
}