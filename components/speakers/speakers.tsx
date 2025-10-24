import React from "react";
import Card from "./card";

interface Speaker {
  image: string;
  name: string;
  designation: string;
  linkedin: string;
}

const Speakers: React.FC = () => {
  const speakers: Speaker[] = [
    {
      image: "/don.webp",
      name: "Krishna",
      designation: "Chief in Charge",
      linkedin: "https://www.google.com",
    },
    {
      image: "/don.webp",
      name: "Krishna",
      designation: "Chief in Charge",
      linkedin: "https://www.google.com",
    },
    {
      image: "/don.webp",
      name: "Krishna",
      designation: "Chief in Charge",
      linkedin: "https://www.google.com",
    },
  ];

  return (
    <div id="speakers">
      <h1 className="w-full text-center text-6xl font-extrabold mt-3">
        SPEAKERS
      </h1>

      <div className="flex justify-center items-center min-h-screen w-full p-4 box-border">
        <div className="grid gap-4 w-full max-w-7xl sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {speakers.map((speaker, idx) => (
            <Card
              key={idx}
              image={speaker.image}
              name={speaker.name}
              designation={speaker.designation}
              linkedin={speaker.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
