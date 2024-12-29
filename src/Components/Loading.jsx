import { useContext } from "react";
import blackLogo from "../assets/logo-png-black.png";
import whiteLogo from "../assets/logo-png-white.png";
import { ThemeContext } from "../Context/ThemeContextApi";

export default function Loading() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen flex justify-center items-center ${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
      }`}
    >
      <img
        src={theme === "dark" ? whiteLogo : blackLogo}
        alt="Logo Image" loading="lazy"
        className="md:w-40 md:h-40 w-28 h-28"
      />
    </div>
  );
}
