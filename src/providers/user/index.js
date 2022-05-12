import { createContext, useState, useContext } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
