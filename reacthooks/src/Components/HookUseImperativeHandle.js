import React, { useRef } from "react";

import SomeComponent from "./SomeComponent";

const HookUseImperativeHandle = () => {
  //Criando componente para pegar referência
  const componentRef = useRef();

  return (
    <div>
      <h2>HookUseImperativeHandle</h2>
      <SomeComponent ref={componentRef} /> {/*Pegando a referência*/}
      <button onClick={() => componentRef.current.validate()}>
        Validate
      </button>{" "}
      {/*Compartilhando o componente e pegando a função 'validate' criada dentro dele*/}
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;
