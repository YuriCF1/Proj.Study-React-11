 // 8 - useContext 
import { createContext } from "react";

export const SomeContext = createContext();
 
export const HookUseContext = ({ children }) => {
  const contextValue = "Text Context";

  return (
    <SomeContext.Provider value={{contextValue}}>{children}</SomeContext.Provider>
  );
};
