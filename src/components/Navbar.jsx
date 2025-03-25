"use client";
import { useUser } from "@/app/Context/UserContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import UserButton from "./UserButton";

const Navbar = () => {
  const {user, logout} = useUser()
  const router = useRouter();
  const data = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="w-full p-4 bg-gray-300 flex justify-between items-center">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <div>
        <ul className="space-x-12 bg-red-200">
          {data.map((item, id) => {
            return (
              <li
                key={id}
                className="inline-block hover:text-orange-500 text-lg">
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-4 ">
        {user ? (
          <div>
          <UserButton/>
         
          </div>
        ) : (
          <>
          <Button  onClick={() => router.push("/page/login")} className="bg-orange-500 hover:bg-orange-700 text-white">
          Login
          </Button>
          <Button variant='outline' onClick={() => router.push("/page/signup")} className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
          Signup
          </Button>
          

          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
