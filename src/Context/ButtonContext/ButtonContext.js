import React, { createContext, useState, useContext } from "react";

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [button, setButton] = useState(false);

  return (
    <ButtonContext.Provider value={{button, setButton}}>
      {children}
    </ButtonContext.Provider>
  );
};
