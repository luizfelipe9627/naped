import React from "react";
import { BodyMedium } from "../index";

const Categoria2 = ({ children }) => {
  return (
    <BodyMedium
      backgroundImage="var(--main)"
      backgroundClip="text"
      WebkitBackgroundClip="text"
      WebkitTextFillColor="transparent"
      textTransform="uppercase"
    >
      {children}
    </BodyMedium>
  );
};

export default Categoria2;
