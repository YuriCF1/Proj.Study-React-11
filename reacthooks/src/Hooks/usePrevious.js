import { useDebugValue, useEffect, useLayoutEffect, useRef } from "react";

export const usePrevious = (value) => {
  const ref = useRef(0);

  useDebugValue("--- CUSTOM HOOK E USEDEBUG VALUE---")
  useDebugValue("O número anterior é: ", value)
  useEffect(() => {
    ref.current = value; //Salva o valor novo 
  }); 
  return ref.current; //Devolve o valor antigo
};
