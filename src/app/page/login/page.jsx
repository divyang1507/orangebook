'use client';
import { useUser } from "@/app/Context/UserContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();
  const {loginUser} = useUser();
    const handleLogin = async (e) => {
      e.preventDefault();
      setError(null);
  
      try {
        await loginUser(identifier, password);
        router.push("/page/dashboard"); // Redirect to dashboard after login
      } catch (error) {
        setError("Invalid credentials. Please try again.");
      }
    };


  return (
    <div>
      <div className="min-h-screen bg-purple-400 flex justify-center items-center overflow-hidden">
        <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 -z-1 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 -z-1 transform rotate-12 hidden md:block"></div>
        <form onSubmit={handleLogin} className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
             Hello again
            </h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Welcome to Orange book publication
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email Addres or username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
            />
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">
             Login
            </button>
            <p className="mt-4 text-sm">
              Don't Have An Account?{" "}
              <span className="underline  cursor-pointer"> Sign up</span>
            </p>
          </div>
        </form>
        <div className="w-40 h-40 absolute bg-purple-300 rounded-full -z-1 top-0 right-12 hidden md:block"></div>
        <div className="w-20 h-40 absolute bg-purple-300 rounded-full -z-1 bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </div>
  );
};

export default page;
