import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext();

// Admin credentials (shyira credentials wifuza)
const ADMIN_USER = {
  username: "admin",
  password: "admin123",
};

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  // Load login state from localStorage
  useEffect(() => {
    const logged = localStorage.getItem("adminLogged");
    if (logged === "true") {
      setAdmin({ username: ADMIN_USER.username });
    }
  }, []);

  // Login function
  const login = (username, password) => {
    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
      localStorage.setItem("adminLogged", "true");
      setAdmin({ username });
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: "Invalid admin credentials" };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("adminLogged");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};