//import { Link } from "react-router-dom";
import { Card, Image, CardHeader, Divider } from "@nextui-org/react";
import NavBar from "../components/NavBar";
import Fondo from "../img/Fondo.png";
import Fondo1 from "../img/Fondo1.png";
import CardData from "../components/CardData";
import TableCustom from "../components/TableCustom";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
export default function Ia() {
  return (
    <>
      <NavBar></NavBar>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-10 flex-col !items-center">
          <h1 className="text-white font-medium text-lg">
            Crea tu asistente virtual
          </h1>

          <p className="text-tiny text-white/60 uppercase font-bold">
            Con inteligencia artificial
          </p>
        </CardHeader>{" "}
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={Fondo}
        />
      </Card>
      <Divider className="my-4" />
      <div className="flex flex-wrap h-auto py-10 items-center justify-center gap-10">
        <div>
          <CardData tittle="24/7" description="Disponibilidad plena" />
        </div>
        {/*<Divider orientation="vertical" className="h-80 hidden sm:block" />*/}
        <div>
          <CardData tittle="25%" description="Más en la productividad" />
        </div>

        {/*<Divider orientation="vertical" className="h-80 hidden sm:block" />*/}
        <div>
          <CardData
            tittle="$3.7B"
            description="Productividad laboral para 2030"
          />
        </div>
      </div>
      <Divider className="my-4" />
      <div className="flex flex-col lg:flex-row gap-1 p-4 h-full">
        <div className="lg:w-3/5 my-auto">
          <TableCustom className="h-full " />
        </div>
        <div className="lg:w-2/5 my-auto">
          <Image src={Fondo1} alt="fondo IA" className="h-full" />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
/*
 */
