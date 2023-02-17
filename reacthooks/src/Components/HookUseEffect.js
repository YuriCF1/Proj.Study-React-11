import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 5 - useEffect sem dependências
  useEffect(() => {
    console.log("Sou executado toda vez que um componente renderiza");
  }); // Sem array = Toda vez que o componente for executado

  const [number, setNumber] = useState(1);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  // 5 - useEffect com dependências vazia
  useEffect(() => {
    console.log("Serei executado, apena uma vez. Quando a página carregar");
  }, []); // Com array = toda vez que a página carrega. Ex: Trazer dados do banco

  // 6 - Item com array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) { //Valindando caso o dado não exista ainda
      console.log("Another number mudou. Agora é: ", anotherNumber);
    }
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <p>Number: {number}</p>
      <button onClick={changeNumber}>Number +1</button>
      <button
        onClick={() => {
          setAnotherNumber(anotherNumber + 1);
        }}
      >
        AnotherNumber +1
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
