import React, { useCallback, useState } from "react";
import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0); //Alterando isso aqui, ele irá mandar a função abaixo para o List de novo e executar, mesmo não tem relação nenhuma com o useState

  //Então o useCallback memoriza a função, e só renderiza ela caso algo mude. Ou no carregamento do componente com array vazio
  //useCallback memoriza funções e as executa até que a dependência mude, useFetch APENAS executa com uma dependência
  const getItemsFromDataBase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemsFromDataBase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
