import React, { useContext } from "react";
import HookUseEffect from "../Components/HookUseEffect";
import HookUseReducer from "../Components/HookUseReducer";
import HookUseState from "../Components/HookUseState";
import HookUseRef from "../Components/HookUseRef";

// 8 - useContext
import { SomeContext } from "../Components/HookUseContext";
import HookUseCallback from "../Components/HookUseCallback";
import HookUseMemo from "../Components/HookUseMemo";
import HookUseLayoutEffect from "../Components/HookUseLayoutEffect";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
    </div>
  );
};

export default Home;
