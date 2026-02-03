import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (email, password) => {
    if (email && password) {
      setIsAuth(true);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
