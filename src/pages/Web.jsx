import AvatarWeb from "../components/AvatarWeb";
import FavoriteAnimal from "../components/FavoriteAnimal";
import Footer from "../components/Footer";
import MonitorMobile from "../components/MonitorMobile";
import NavBar from "../components/NavBar";
import ModalWeb from "../components/Modal";
import ImgCardWeb from "../components/ImgCardWeb";
import { Card } from "@nextui-org/react";
import CustomButton from "../components/CustomButton";
import Contact from "../components/Contact";

export default function Web() {
  let pathName = window.location.pathname;

  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col lg:flex-row p-2 lg:gap-60">
        <div className="lg:w-3/5 inline-block my-auto  ">
          <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
            Creamos los&nbsp;
          </h1>
          <h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
            mejores&nbsp;
          </h1>
          <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
            sitios web gracias a nuestra experiencia.
          </h1>
          <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full !w-full text-center md:text-left">
            Bonito, rápido y moderno es nuestro trabajo
          </p>
        </div>
        <Card className="  lg:w-2/5 flex flex-col items-center  py-10 gap-4">
          <div className="w-40">
            <FavoriteAnimal />
          </div>

          <MonitorMobile />
          <div className="w-60">
            <AvatarWeb />
          </div>

          <div className="w-10">
            <ModalWeb />
          </div>

          <CustomButton />
        </Card>
      </div>
      <div className="lg:w-3/5 inline-block my-auto  ">
        <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
          Formas de realizar tu propio&nbsp;
        </h1>
        <h1 className="tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
          MARKETPLACE
        </h1>

        <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full !w-full text-center md:text-left">
          Te ofrecemos apoyo y mantenimiento mensual gratuito si es tu primera
          vez
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-1 p-4 h-full">
        <div className="lg:w-2/5 my-auto"></div>
        <div className="lg:w-3/5">
          <ImgCardWeb />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
