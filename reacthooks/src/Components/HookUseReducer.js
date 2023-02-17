import React, { useReducer } from "react";
const HookUseReducer = () => {
  // 3 - Começando com useReducer
  const [number, dispatch] = useReducer((state, action) => { //State = number || Dispatch = Função que é executada alterando o state
    return Math.random(state);
  });
  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <hr />
    </div>
  );
};

export default HookUseReducer;
