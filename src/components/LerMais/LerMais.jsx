import React from "react";
import { BodyMedium } from "../index";
import { Link } from "react-router-dom";

const LerMais = ({ children, link }) => {
  return (
    <BodyMedium
      backgroundImage="var(--main)"
      backgroundClip="text"
      WebkitBackgroundClip="text"
      WebkitTextFillColor="transparent"
    >
      <Link to={link}>{children}</Link>
    </BodyMedium>
  );
};

export default LerMais;
