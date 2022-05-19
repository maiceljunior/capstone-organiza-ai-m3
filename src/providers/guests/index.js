import { createContext, useState, useContext } from "react";

export const GuestContext = createContext([]);

export const GuestProvider = ({ children }) => {
  const [guest, setGuest] = useState([]);

  return (
    <GuestContext.Provider value={{ guest, setGuest }}>
      {children}
    </GuestContext.Provider>
  );
};

export const useGuest = () => useContext(GuestContext);
