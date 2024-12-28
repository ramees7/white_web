import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextApi";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
      }`}
    ></div>
  );
}
