import "../dist/output.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("mode", "dark");
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("mode", theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      data-testid="NavBar"
      className="fixed w-full bg-[#FAFAFA] dark:bg-[#1F2D36] z-50"
    >
      <nav className="flex justify-between px-6 py-8 shadow-md shadow-gray-100 dark:bg-[#2b3945] dark:text-white dark:shadow-xl dark:shadow-gray-800">
        <Link to="/">
          <div>
            <p className="font-bold">Where in the world?</p>
          </div>
        </Link>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => themeSwitch()}
        >
          <Icon icon="ph:moon-light" />
          <p className="capitalize">dark mode</p>
        </div>
      </nav>
    </div>
  );
};
