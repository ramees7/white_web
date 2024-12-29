import { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContextApi";
import { FaBars, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import blackLogo from "../assets/logo-png-black.png";
import whiteLogo from "../assets/logo-png-white.png";
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const canvasRef = useRef(null); // Reference for the canvas container

  const toggleCanvas = () => {
    setIsCanvasOpen(!isCanvasOpen);
  };

  // Define the navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Exchange", path: "/exchange" },
    { name: "Contact", path: "/contact" },
  ];

  const socialMediaList = [
    {
      name: "Instagram",
      link: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/918113000314",
      icon: <FaWhatsapp />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
  ];

  // Close canvas if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (canvasRef.current && !canvasRef.current.contains(event.target)) {
        setIsCanvasOpen(false); // Close the canvas if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
    };
  }, []);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#232323] text-white" : "bg-[#eeeeee] text-black"
      } flex justify-between gap-5 items-center h-24 md:px-10 px-5 fixed top-0 w-full z-30`}
    >
      <div className="text-2xl flex" onClick={toggleCanvas}>
        <FaBars className=" cursor-pointer" />
        <FaBars style={{ visibility: "hidden" }} />
        <FaBars style={{ visibility: "hidden" }} />
      </div>

      <Link to="/">
        <img
          src={theme === "dark" ? whiteLogo : blackLogo}
          alt="Logo Image"
          loading="lazy"
          className="w-24 h-24"
        />
      </Link>

      <div className="flex gap-3 items-center text-2xl">
        <button
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")} // Toggle theme
          className={`text-2xl`} // Tailwind classes for styling
        >
          {theme === "dark" ? <CiLight /> : <MdDarkMode />}
        </button>

        <IoMdSearch />
        <IoCartOutline />
      </div>

      {/* Left Canvas (Off-canvas navigation) */}
      <div
        ref={canvasRef} // Attach ref to the off-canvas div
        className={`fixed top-0 left-0 w-80 h-full ${
          theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
        } transition-transform transform ${
          isCanvasOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex ps-5 md:ps-10 h-24 items-center ">
          <button onClick={toggleCanvas} className=" text-2xl cursor-pointer">
            <IoMdClose />
          </button>
        </div>

        <nav className="pt-10 ">
          <ul className="space-y-3 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xl transition-colors w-full px-8 ${
                  theme === "dark" ? "hover:bg-[#232323]" : "hover:bg-[#eeeeee]"
                } py-2 `}
                onClick={toggleCanvas} // Close canvas when a link is clicked
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div
          className={`absolute bottom-0 flex gap-5 w-full py-5  justify-center ${
            theme === "dark" ? "bg-[#232323]" : "bg-[#eeeeee]"
          }`}
        >
          {socialMediaList?.map(({ name, link, icon }, index) => (
            <a
              href={link}
              key={index}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
