import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function App(data) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none flex  align-center justify-center w-auto h-auto"
    >
      <h1 className=" tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-6xl mx-auto mb-12  bg-clip-text text-transparent bg-gradient-to-b">
        {data.tittle}
      </h1>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1  py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-[0.7em] text-white/80">{data.description}</p>
        {/*<Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Notify me
  </Button>*/}
      </CardFooter>
    </Card>
  );
}
