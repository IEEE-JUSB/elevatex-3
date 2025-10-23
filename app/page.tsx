import React from "react";
import Sponsors from "../components/sponsor";
import Speakers from "../components/speakers/speakers";
import Schedule from "../components/Schedule";

export default async function Home() {
  return (
    <div>
      <Sponsors />
      <Speakers />
      <Schedule />
    </div>
  );
}