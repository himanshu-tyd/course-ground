import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const [role, setRole] = useState(
   localStorage.getItem("role") || null
  );

  const context = {
    user,
    setUser,
    role,
    setRole,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContexProvider;

export const getContextData = () => {
  const data = useContext(AuthContext);
  return data;
};
