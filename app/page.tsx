import Image from "next/image";
import React from "react";
import Sponsors from "./sponsors/sponsor";
import Speakers from "./speakers/speakers";
import { getSponsorsFromPublicDir } from "./sponsors/retrivefile";
import { div } from "framer-motion/client";
import Schedule from './components/Schedule';

export default async function Home() {
  // fetch sponsors from public/sponsors on the server
  const sponsors = await getSponsorsFromPublicDir();
  return (
    <div>
      <div className="w-screen">
        <Sponsors sponsors={sponsors} />
      </div>
      <Speakers />        
      <Schedule />
    </div>
  );
}