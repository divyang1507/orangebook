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

  const register = async (email, password, username, firstname, lastname, phone, address) => {
    try {

      const payload = { email, password, username };
      if (firstname) payload.firstname = firstname;
      if (lastname) payload.lastname = lastname;
      if (phone) payload.phone = phone;
      if (address) payload.address = address;

        const response = await axios.post(
        // "https://orangebook-strapibackend-superbase.onrender.com/api/auth/local/register",
        "http://localhost:1337/api/auth/local/register",
        payload
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


  const loginUser = async (identifier, password) => {
    try {
      const response = await axios.post("http://localhost:1337/api/auth/local", {
        identifier, // Can be an email or username
        password,
      });
      const { jwt, user } = response.data;
      setToken(jwt);
      setUser(user);
      localStorage.setItem("token", jwt);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Login error:", error.response?.data?.error?.message || error.message);
      return null;
    }
  };

   const getUser = () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : null;
    }
    return null;
  };

  const getToken = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  };

  return (
    <UserContext.Provider value={{ user, token, register, logout, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
