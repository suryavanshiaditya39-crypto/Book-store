import React, { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Check localStorage on boot to see if user was already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  const login = (email, password) => {
    // Standardized Admin Credentials
    if (email === "admin@gmail.com" && password === "admin123") {
      const adminUser = { email, role: 'admin' };
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      return { success: true, role: 'admin' };
    }
    
    // Default User Logic
    if (email !== "" && password !== "") {
      const regularUser = { email, role: 'user' };
      setUser(regularUser);
      localStorage.setItem("user", JSON.stringify(regularUser));
      return { success: true, role: 'user' };
    }
    return { success: false };
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const userAuth = () => useContext(AuthContext);