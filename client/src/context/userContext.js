import { createContext, useEffect, useState } from "react";


export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [logOut, setLogOut] = useState(false);

  const getUser = () => {
    const logUser = JSON.parse(localStorage.getItem("token")) || null;
    setUser(logUser);
  };

  useEffect(() => {
    getUser();
  }, [logOut]);

  return (
    <UserContext.Provider value={{ user, setUser, logOut, setLogOut }}>
      {children}
    </UserContext.Provider>
  );
}
