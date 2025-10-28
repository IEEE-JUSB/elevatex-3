import React from "react";
import Card from "./card";

interface Speaker {
  image: string;
  name: string;
  url: string;
  designation?: string;
}

const Speakers: React.FC = () => {
  const speakers: Speaker[] = [
      {
      image: "/speakers/raman.jpg",
      name: "Raman Trivedi",
      url: "https://linkedin.com/in/raman-trivedi-530a871a5/",
      designation: "City Head at Jamboree Education India"
    },
  
    {
      image: "/speakers/soumyadeep.jpeg",
      name: "Soumyadeep Pal",
      url: "https://www.linkedin.com/in/realspal/",
      designation: "CAT 99.9 percentile, IIM Calcutta"
    },
    {
      image: "/speakers/sayandeep.jpeg",
      name: "Sayandeep Sarkar",
      url: "https://www.linkedin.com/in/sayandeep-sarkar-530688201/",
      designation: "Software Engineer @ ICICI Bank"
    },
    {
      image: "/speakers/nandini.JPG",
      name: "Nandini Bagga",
      url: "https://www.linkedin.com/in/nandini-bagga-0803/",
      designation: "Software Engineer, Japan Space and Technology Agency"
    },
    {
      image: "/speakers/chirag.jpeg",
      name: "Chirag Agarwal",
      url: "https://www.linkedin.com/in/chiragagg5k/",
      designation: "Platform Engineer @ Appwrite"
    },
    {
      image: "/speakers/rahul.jpeg",
      name: "Rahul Haldar",
      url: "https://www.linkedin.com/in/rahul-halder-95a7ab147/",
      designation: "Associate Consultant @ PWC"
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
              designation={speaker.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
