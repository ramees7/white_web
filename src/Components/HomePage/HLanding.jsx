import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContextApi";
import HLandingBg1 from "../../assets/Hlanding-bg-1.jpg";
import HLandingBg2 from "../../assets/Hlanding-bg-2.jpg";

export default function HLanding() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`mt-24 h-[600px] relative ${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
      }
      `}
    >
      <div className="flex justify-center">
        <div className="absolute md:top-[40%] top-[70%]   lg:text-7xl md:text-6xl text-5xl font-bold text-center space-y-3 text-white">
          <h1><span className="md:text-black">Discover</span> Elegance</h1> 
          <h1><span className="md:text-black ps-3">Unique W</span>hite Styles</h1>
          <button className="border-2 py-3 px-6 text-base"><span className="md:text-black">Discover</span> Products</button>
        </div>
      </div>

      <div className=" grid md:grid-cols-2 h-full">
        <div className="md:block hidden">
          <img src={HLandingBg1} alt="" className="h-full w-full" />
        </div>
        <div className="">
          <img src={HLandingBg2} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
