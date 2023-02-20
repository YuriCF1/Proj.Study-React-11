import React, { useEffect, useLayoutEffect, useState } from "react";

// A ordem não importa. Com o LayoutEffect, ele sempre será executado primeiro. Porém a ordem dos useEffect importam
const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Nome 0");
  
  useEffect(() => {
    // console.log("2");
    setName("Nome 2");
  }, []);

  useLayoutEffect(() => {
    // console.log("1");
    setName("Nome 1");
  }, []);

  useEffect(() => {
    // console.log("3");
    setName("Nome 3");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>HookUseLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
