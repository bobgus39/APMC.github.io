import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function App() {
  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="tracking-tight  font-semibold  from-[#FF1CF7] to-[#b249f8] text-[2rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
          Ventajas
        </TableColumn>
        <TableColumn className="tracking-tight font-semibold  from-[#FF1CF7] to-[#b249f8] text-[2rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
          Datos
        </TableColumn>
      </TableHeader>
      <TableBody className="">
        <TableRow key="1">
          <TableCell>Eficiencia</TableCell>
          <TableCell>
            Se estima que el uso de inteligencia artificial en asistentes
            virtuales puede aumentar la productividad en un 25% (Gartner).
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Accesibilidad</TableCell>
          <TableCell>
            Aproximadamente el 15% de la población mundial vive con alguna forma
            de discapacidad (OMS), y los asistentes virtuales pueden mejorar la
            accesibilidad digital para estas personas.
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Disponibilidad 24/7</TableCell>
          <TableCell>
            Los asistentes virtuales pueden funcionar las 24 horas del día, los
            7 días de la semana, lo que mejora la disponibilidad y la
            satisfacción del cliente.
          </TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Aprendizaje Continuo</TableCell>
          <TableCell>
            Los algoritmos de aprendizaje automático mejoran constantemente la
            precisión y relevancia de las respuestas de los asistentes
            virtuales.
          </TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Automatización de Procesos</TableCell>
          <TableCell>
            Se proyecta que la automatización de procesos impulsada por la IA
            podría aumentar la productividad laboral global en un 0.8% anual
            hasta 2030 (McKinsey).
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
