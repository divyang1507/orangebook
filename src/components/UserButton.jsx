"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useUser } from "@/app/Context/UserContext";
import { FiUser } from "react-icons/fi";

const UserButton = () => {
  const { logout } = useUser();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-orange-500 rounded-full p-2 text-xl outline-0">
          <FiUser />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => logout()}
            className="focus:bg-red-300 hover:bg-red-700 transition-colors">
            logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
