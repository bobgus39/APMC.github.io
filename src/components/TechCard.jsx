import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import TechFront from "../img/TechFront.png";
import TechBack from "../img/TechBack.png";
import TechAi from "../img/TechAi.png";
import ViteLogo from "../../public/vite.svg";
export default function ImgCard() {
  return (
    <div className="m-10 max-w-[1400px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
      <Card className="col-span-12 sm:col-span-4 h-[400px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-primary/60 uppercase font-bold">
            Tecnologías frontend
          </p>
          <h4 className="text-neutral-400 font-medium text-large">
            React + Vite + Tailwind + NextUI
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={TechFront}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[400px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Tecnologías Backend
          </p>
          <h4 className="text-white font-medium text-large">
            Nodejs + MySQL + GitLab + Postman
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={TechBack}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[400px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-primary/60 uppercase font-bold">
            Tecnologías IA
          </p>
          <h4 className="text-white font-medium text-large">
            API Open AI + Github + Visual Studio
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={TechAi}
        />
      </Card>
    </div>
  );
}
