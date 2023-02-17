import React, { useContext } from "react";

import { SomeContext } from "../Components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h2>Sobre:</h2>
      <p>Valor do contexto Também: {contextValue} </p>
    </div>
  );
};

export default About;
