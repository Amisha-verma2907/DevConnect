"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationBar from "./notification/NotificationBar";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import { useTheme } from "next-themes";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      fetch("/api/sync-user", { method: "GET" });
    }
  }, [isSignedIn]);

  return (
    <nav className="bg-[#441752] dark:bg-[#0f0f0f] text-white dark:text-gray-200 fixed top-0 left-0 w-full shadow-md z-50 opacity-95 px-6 py-2 font-serif transition-colors duration-300 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="text-2xl font-bold">devConnect</div>

      {/* Center: Nav Icons */}
      <ul className="flex gap-12 items-center text-center">
        {[
          {
            name: "Home",
            path: "/",
            icon: <HomeIcon className="mx-auto w-6 h-6" />,
          },
          {
            name: "Connections",
            path: "/connections",
            icon: <GroupsIcon className="mx-auto w-6 h-6" />,
          },
          {
            name: "Messaging",
            path: "/messaging",
            icon: <LocalPostOfficeIcon className="mx-auto w-6 h-6" />,
          },
        ].map((item) => (
          <li key={item.name} className="group relative">
            <Link href={item.path}>
              <div className="flex flex-col items-center px-2 py-1 text-sm hover:text-gray-300 dark:hover:text-gray-400 relative after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white dark:after:bg-gray-300 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                {item.icon}
                <span className="mt-1 text-xs">{item.name}</span>
              </div>
            </Link>
          </li>
        ))}

        {/* Notification Icon */}
        <li className="group relative">
          <div className="flex flex-col items-center px-2 py-1 text-sm hover:text-gray-300 dark:hover:text-gray-400 relative after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white dark:after:bg-gray-300 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
            <NotificationBar />
            <span className="mt-1 text-xs">Notifications</span>
          </div>
        </li>
      </ul>

      {/* Right: Theme Toggle & Auth */}
      <div className="flex items-center gap-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black dark:bg-gray-700 dark:text-white transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        )}

        {/* Auth Buttons */}
        {/* <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-white text-black px-3 py-1.5 rounded hover:bg-gray-200 text-sm transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="bg-purple-600 text-white px-3 py-1.5 rounded hover:bg-purple-700 text-sm transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn> */}

        <SignedOut>
          <Link href="/login">
            <button className="bg-white text-black px-3 py-1.5 rounded hover:bg-gray-200 text-sm transition">
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="bg-purple-600 text-white px-3 py-1.5 rounded hover:bg-purple-700 text-sm transition">
              Sign Up
            </button>
          </Link>
        </SignedOut>

        <SignedIn>
          <Link href="/profile">
            <button className="bg-gray-200 text-black px-3 py-1.5 rounded hover:bg-gray-300 text-sm transition">
              Profile
            </button>
          </Link>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
