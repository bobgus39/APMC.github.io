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
