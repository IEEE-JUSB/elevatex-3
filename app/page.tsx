import React from "react";
import Sponsors from "../components/sponsor";
import Speakers from "../components/speakers/speakers";
import Schedule from "../components/Schedule";
import AboutSection from "../components/AboutSection";
import CountdownSection from "../components/CountdownSection";
import Register from "../components/Register";
import Login from "../components/Login";
import HeroSection from "@/components/HeroSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Login />
      <CountdownSection />
      <Sponsors />
      <Speakers />
      <Schedule />
      <Register />
      <Login />
    </div>
  );
}