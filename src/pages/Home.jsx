import React from "react";
import Navbar from "../components/NavBar";
import ImgCard from "../components/ImgCard";
import TechCard from "../components/TechCard";

import Footer from "../components/Footer";
import Contact from "../components/Contact";
//import mapEj from "../img/mapEj.png";

export default function Home() {
  /**/
  const location = {
    latitude: 38.621159,
    longitude: -0.576774,
  };
  const data = {
    tittle: "Ubicación",
    description: "C/Rafael Alberti, 2, Ibi (Alicante), 03440",
  };
  return (
    <>
      <Navbar />
      <ImgCard />
      <div className="lg:w-3/5 inline-block my-auto  ">
        <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
          Estas son las&nbsp;
        </h1>
        <h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
          tecnologías&nbsp;
        </h1>
        <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
          que usamos en nuestro día a día
        </h1>
        <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full !w-full text-center md:text-left">
          Siempre estamos buscando nuevas tecnologías para mejorar nuestras
          soluciones y ofrecer un mejor servicio.
        </p>
      </div>
      <TechCard />

      <Contact />
      <Footer />
    </>
  );
}
/* <CustomCard
          img={mapEj}
          tittle="Ubicación"
          description="C/Rafael Alberti, 2, Ibi (Alicante), 03440"
        />*/
