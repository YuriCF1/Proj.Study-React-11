import React, { forwardRef, useImperativeHandle, useRef } from "react";

const SomeComponent = forwardRef((prop, ref) => {
  //Englobando o componente no fowaredRef para enviar a referência
  const localInputRef = useRef();

  useImperativeHandle(ref, () => {
    //Pegando a referência e criando uma função com ela que poderá ser usada no componente pai
    return {
      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = "";
        }
      },
    };
  });

  return (
    <div>
      <h4>SomeComponent</h4>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  );
});

export default SomeComponent;
