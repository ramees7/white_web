import { useContext } from "react";
import HLandingBg from "../../assets/HLandingBg.png";
import { ThemeContext } from "../../Context/ThemeContextApi";

export default function HLanding() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`mt-24 h-[500px] relative ${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
      }
      `}
    >
      <img src={HLandingBg} alt="" className="mx-auto h-full" />
      <div className="flex justify-center">
        <div className="absolute top-40 text-7xl font-bold ">
          <h1>Discover Elegance</h1>
          <h1>Unique White Styles</h1>
        </div>
      </div>
    </div>
  );
}
