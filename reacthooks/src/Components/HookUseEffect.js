import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 5 - useEffect sem dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  }); // Sem array = Toda vez que o componente for executado

  const [number, setNumber] = useState(1);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  // 5 - useEffect com dependências vazia
  useEffect(() => {
    console.log("Serei executado, apena uma vez");
  }, []); // Com array = toda vez que a página carrega. Ex: Trazer dados do banco

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeNumber}>Executar +1</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
