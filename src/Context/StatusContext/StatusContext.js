import React, { createContext, useState } from "react";

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [status, setstatus] = useState(false);

  return (
    <StatusContext.Provider value={{status, setstatus}}>
      {children}
    </StatusContext.Provider>
  );
};