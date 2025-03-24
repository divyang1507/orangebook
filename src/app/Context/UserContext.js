// context/UserContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = async (email, password, username) => {
    try {
      const response = await axios.post(
       'https://orangebook-strapibackend-superbase.onrender.com/api/auth/local/register',
        {
          email,
          password,
          username,
        }
      );

      const { jwt, user } = response.data;
      setToken(jwt);
      setUser(user);
      localStorage.setItem("token", jwt);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Registration successful!");
      router.push("/page/dashboard"); // Redirect after successful registration
    } catch (error) {
      toast.error(error.response?.data?.error?.message || "Registration failed");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.info("Logged out successfully");
    router.push("/page/login");
  };

  return (
    <UserContext.Provider value={{ user, token, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
