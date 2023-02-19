import React, { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  // 9 - useRef
  const numberRef = useRef(0);
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
    //setCounterA(counterA + 1) // Se eu guardasse o valor num useState, geraria um loop infinito
  });

  return (
    <div>
      <h2>useRef</h2>
      <p>O componente renderizou: {numberRef.current}</p>
      <p>Counter 1: {counterA}</p>
      <button onClick={() => setCounterA(counterA + 1)}>Contador A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      <hr />
    </div>
  );
};

export default HookUseRef;
