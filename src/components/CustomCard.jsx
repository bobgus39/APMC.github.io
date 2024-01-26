import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export const CustomCard = (data) => (
  <Card className="w-[200px] space-y-5 p-4" radius="lg">
    {!data.img ? (
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
    ) : (
      <img
        className="h-30 rounded-lg bg-default-300"
        src={data.img}
        alt="img card"
      ></img>
    )}
    <div className="space-y-3">
      {!data.tittle ? (
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      ) : (
        <h3 className="h-3 w-3/5  ">{data.tittle}</h3>
      )}
      {!data.description ? (
        <>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </>
      ) : (
        <p className="w-5/5 rounded-lg bg-default-300 p-1 text-tiny text-black">
          {data.description}
        </p>
      )}
    </div>
  </Card>
);
