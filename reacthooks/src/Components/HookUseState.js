import React, { useState } from "react";

const HookUseState = () => {
  //1 - useState
  let userName = "Yuri";
  const [name, setName] = useState("Slady");
  const changeNames = () => {
    userName = "Yuri Cruz";
    setName("Slady Deja");

    console.log(userName, name);
  };
  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      <hr />
    </div>
  );
};

export default HookUseState;
