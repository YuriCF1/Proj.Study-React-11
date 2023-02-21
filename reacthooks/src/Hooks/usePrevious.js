import { useEffect, useLayoutEffect, useRef } from "react";

export const usePrevious = (value) => {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = value; //Salva o valor novo 
  }, []); 
  return ref.current; //Devolve o valor antigo
};
