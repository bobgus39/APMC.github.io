import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import foto1 from "../img/foto1.jpg";
import Fondo from "../img/Fondo.png";
import Fondo1 from "../img/Fondo1.png";
import tiendaEj from "../img/tiendaEj.png";
import webEj from "../img/webEj.png";
import { Link } from "react-router-dom";
const phoneNumber = 123456789;
const message = "Hola! estoy interesado en desarrollar mi sitio web";

export default function ImgCard() {
  const handleWhatsapp = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/bobgus39", "_blank");
  };
  return (
    <div className="m-10 max-w-[1400px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
      <Card
        as={Link}
        to="/APMC.github.io/IA"
        className="col-span-12 sm:col-span-7 h-[300px]"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            ¿A qué nos dedicamos?
          </p>
          <h4 className="text-white font-medium text-large">
            Programación web e IA
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={Fondo1}
        />
      </Card>
      <Card
        as={Link}
        to="/APMC.github.io/Web"
        className="w-full col-span-12 sm:col-span-5 h-[300px]"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Sitio web
          </p>
          <h4 className="text-white font-medium text-large">
            Presencia en internet
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={webEj}
        />
      </Card>
      <Card className=" hidden col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            React + Next UI
          </p>
          <h4 className="text-white font-medium text-large">
            Creamos a partir de las últimas novedades
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQolpA2IIbqAr8M-cEAULGOxxGPNLjh9tq4Q&usqp=CAU"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Marketplace
          </p>
          <h4 className=" font-medium text-2xl">Tienda online</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={tiendaEj}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Ponte en contacto.</p>
            <p className="text-black text-tiny">Crea ahora</p>
          </div>
          <Button
            className="text-tiny"
            color="primary"
            variant="shadow"
            radius="full"
            size="lg"
            onClick={handleWhatsapp}
          >
            Whatsappeame
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Tu día a día
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Tu mejor asistente
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={Fondo}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center ">
            <Image
              alt="Breathing app icon"
              className="rounded-full  w-8 h-9 bg-hidden "
              src="https://cdn.icon-icons.com/icons2/1476/PNG/96/github_101792.png"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Github proyects</p>
              <p className="text-tiny text-white/60">
                Visita y conoce mis proyectos
              </p>
            </div>
          </div>
          <Button radius="full" variant="shadow" size="lg" onClick={openGithub}>
            Github
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
