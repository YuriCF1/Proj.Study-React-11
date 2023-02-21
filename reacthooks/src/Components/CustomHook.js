import React, { useState } from "react";
import { usePrevious } from "../Hooks/usePrevious";

const CustomHook = () => {
  const [number, setNumber] = useState(1);
  const previousValue = usePrevious(number);

  return (
    <div>
      <h2>CustomHook</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar</button>
      <hr />
    </div>
  );
};

export default CustomHook;
