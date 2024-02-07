import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

const CustomButton = () => {
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);

  const handleConfetti = (e) => {
    // Obtener las coordenadas del ratón
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Actualizar el estado con las coordenadas del ratón
    setMouseX(mouseX);
    setMouseY(mouseY);

    // Disparar el confeti
    confetti({
      particleCount: 180,
      spread: 360,
      startVelocity: 30,
      origin: {
        x: mouseX / window.innerWidth, // Normalizar la coordenada X entre 0 y 1
        y: mouseY / window.innerHeight, // Normalizar la coordenada Y entre 0 y 1
      },
    });
  };

  return (
    <Button
      disableRipple
      color="primary"
      variant="shadow"
      className="text/primary"
      size="lg"
      onClick={handleConfetti} // Utiliza onClick en lugar de onPress
    >
      Press me
    </Button>
  );
};

export default CustomButton;
