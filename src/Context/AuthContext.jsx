import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);     
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load from localStorage on first load
  useEffect(() => {
    const savedAdmin = JSON.parse(localStorage.getItem("admin"));
    const logged = localStorage.getItem("isLoggedIn") === "true";

    if (savedAdmin && logged) {
      setAdmin(savedAdmin);
      setIsLoggedIn(true);
    }
  }, []);

  // Save whenever admin changes
  useEffect(() => {
    if (admin) {
      localStorage.setItem("admin", JSON.stringify(admin));
    }
  }, [admin]);

  // Signup function
  const signup = (data) => {
    setAdmin(data);
    localStorage.setItem("admin", JSON.stringify(data));
    alert("Admin account created!");
  };

  // Login function
  const login = (email, pass) => {
    const savedAdmin = JSON.parse(localStorage.getItem("admin"));
    if (!savedAdmin) return { success: false, msg: "No admin registered!" };

    if (savedAdmin.email === email && savedAdmin.pass === pass) {
      setIsLoggedIn(true);
      setAdmin(savedAdmin);
      localStorage.setItem("isLoggedIn", "true");
      return { success: true };
    }
    return { success: false, msg: "Invalid credentials!" };
  };

  // Logout
  const logout = () => {
    setIsLoggedIn(false);
    setAdmin(null);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AppContext.Provider value={{ admin, signup, login, logout, isLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};