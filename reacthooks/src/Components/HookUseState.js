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

  // 2 -useState e inputs
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    //envio da API
    console.log(age);
  };
  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      <hr />
      {/* 2 - useState input */}
      <p>Digite sua idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />{" "}
        {/*Aderindo o state ao value para poder alterar com o state. Caso pegue dados de uma API, por exemplo*/}
      </form>
      <p>Você tem {age} anos</p>
      <input type="submit" value="Enviar" />
      <hr />
    </div>
  );
};

export default HookUseState;
