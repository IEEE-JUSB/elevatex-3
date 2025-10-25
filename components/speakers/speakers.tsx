import React from "react";
import Card from "./card";

interface Speaker {
  image: string;
  name: string;
  url: string;
}

const Speakers: React.FC = () => {
  const speakers: Speaker[] = [
    {
      image: "/don.webp",
      name: "Krishna",
      url: "https://www.google.com",
    },
    {
      image: "/don.webp",
      name: "Krishna",
      url: "https://www.google.com",
    },
    {
      image: "/don.webp",
      name: "Krishna",
      url: "https://www.google.com",
    },
  ];

  return (
    <div id="speakers" className="min-h-screen">
      <h1 className="w-full text-center text-6xl font-bold mt-3 font-syne">
        Speakers
      </h1>

      <div className="flex justify-center items-center w-full min-h-[50vh] p-4 box-border mt-12">
        <div className="grid gap-4 w-full xl:w-4/5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {speakers.map((speaker, idx) => (
            <Card
              key={idx}
              image={speaker.image}
              name={speaker.name}
              url={speaker.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
