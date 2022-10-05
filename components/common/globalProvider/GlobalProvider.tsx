import React, { createContext, useState, useContext } from "react";

interface GlobalProviderProps {
  children: React.ReactNode;
}

type ContextValue = {
  openSidebar: boolean;
  setOpenSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
};
const defaultValue = {
  openSidebar: false,
};

const GlobalContext = createContext<ContextValue>(defaultValue);
const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
