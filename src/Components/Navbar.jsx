import { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContextApi";
import { FaBars, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import blackLogo from "../assets/logo-png-black.png";
import whiteLogo from "../assets/logo-png-white.png";
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { CiLight, CiLogin } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import axiosInstance from "../Axios/InstanceAxios";
import { message } from "antd";
import cryptoJs from "crypto-js";
import CartOffcanvas from "./CartOffcanvas";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [isCartOffcanvasOpen, setIsCartOffcanvasOpen] = useState(false);
  const [cartCount] = useState(0);
  const [isLogined, setIsLogined] = useState(false);
  const canvasRef = useRef(null); // Reference for the canvas container
  const navigate = useNavigate();
  const cartCanvasRef = useRef(null);

  const toggleCanvas = () => {
    setIsCanvasOpen(!isCanvasOpen);
  };

  const toggleCartOffcanvas = () => {
    setIsCartOffcanvasOpen(!isCartOffcanvasOpen);
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

  const profileItems = [
    { label: "Profile", path: "/profile" },
    { label: "Your Carts", path: "/carts" },
    { label: "Your Orders", path: "/orders" },
    { label: "Logout", path: "/api/logout", isLogout: true },
  ];

  useEffect(() => {
    const encryptedToken = localStorage.getItem("authToken");

    if (encryptedToken) {
      // Decrypt the token
      const bytes = cryptoJs.AES.decrypt(encryptedToken, "whiter_8113000314");
      const token = bytes.toString(cryptoJs.enc.Utf8);

      if (token) {
        // If a valid token exists, set the login state to true
        setIsLogined(true);
      } else {
        // If the token is invalid or expired, set the login state to false
        setIsLogined(false);
      }
    } else {
      setIsLogined(false);
    }
  }, []);

  const handleMenuClick = async (item) => {
    if (item.isLogout) {
      try {
        // Get the encrypted token from localStorage
        const encryptedToken = localStorage.getItem("authToken");

        if (!encryptedToken) {
          message.error("Something Went Wrong! Login First");
          return;
        }

        // Decrypt the token
        const bytes = cryptoJs.AES.decrypt(encryptedToken, "whiter_8113000314");
        const token = bytes.toString(cryptoJs.enc.Utf8);

        if (!token) {
          message.error("Invalid or expired token");
          return;
        }

        // Send logout request with decrypted token
        const response = await axiosInstance.post(
          "/api/logout", // Endpoint relative to the base URL
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Logout successful:", response.data);
        message.success("Logout successful");

        // Remove the token from localStorage
        localStorage.removeItem("authToken");

        // Update login state and redirect to login page
        setIsLogined(false);
        navigate("/login");
      } catch (error) {
        console.error(
          "Error during logout:",
          error.response?.data || error.message
        );
        message.error("Logout failed. Please try again.");
      }
    } else {
      navigate(item.path);
    }
  };

  // Close canvas if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (canvasRef.current && !canvasRef.current.contains(event.target)) {
        setIsCanvasOpen(false); // Close the canvas if click is outside
        setIsCartOffcanvasOpen(false); // Close cart offcanvas if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
    };
  }, []);

  return (
    <>
      <div
        className={`${
          theme === "dark"
            ? "bg-[#232323] text-white"
            : "bg-[#eeeeee] text-black"
        } flex justify-between gap-5 items-center h-24 md:px-10 px-5 fixed top-0 w-full z-30 font-carme`}
      >
        <div className="md:text-2xl text-xl flex gap-3" onClick={toggleCanvas}>
          <FaBars className=" cursor-pointer" />
          <FaBars style={{ visibility: "hidden" }} />
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

        <div className="flex gap-3 items-center md:text-2xl text-xl">
          <div className="relative group">
            <button
              onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")} // Toggle theme
              className="text-2xl flex items-center justify-center"
            >
              {theme === "dark" ? <CiLight /> : <MdDarkMode />}
            </button>
            <div
              className={`absolute bottom-full w-28 text-center left-1/2 transform -translate-x-1/2 mb-2 px-4 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                theme === "dark"
                  ? "bg-[#eeeeee] text-black"
                  : "bg-[#232323] text-white"
              }`}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </div>
          </div>
          <div className="relative group">
            <IoMdSearch className="text-2xl relative" />
            <div
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm  rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                theme === "dark"
                  ? "bg-[#eeeeee] text-black"
                  : " bg-[#232323] text-white"
              }`}
            >
              Search
            </div>
          </div>
          <div className="relative group">
            <Link className="relative" onClick={toggleCartOffcanvas}>
              <IoCartOutline className="text-2xl" />
              <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </div>
            </Link>
            <div
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                theme === "dark"
                  ? "bg-[#eeeeee] text-black"
                  : "bg-[#232323] text-white"
              }`}
            >
              Cart
            </div>
            {isCartOffcanvasOpen && (
              <div ref={cartCanvasRef}>
                <CartOffcanvas toggleCartOffcanvas={toggleCartOffcanvas} isCartOffcanvasOpen={isCartOffcanvasOpen}/>
              </div>
            )}
          </div>
          {isLogined ? (
            <div className="relative group">
              <div className="rounded-full">
                <img
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                  alt="Profile"
                  className="w-7 h-7 rounded-full"
                  loading="lazy"
                />
              </div>

              {/* Dropdown menu */}
              <div
                className={`absolute left-1/2 transform -translate-x-3/4  py-5 min-w-fit w-44 ${
                  theme === "dark"
                    ? "bg-[#121212] text-white"
                    : "bg-white text-black"
                } shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:block pointer-events-none group-hover:pointer-events-auto`}
              >
                <ul>
                  {profileItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleMenuClick(item)}
                      className={`px-5 py-2 text-base ${
                        theme === "dark"
                          ? "hover:bg-[#232323]"
                          : "hover:bg-[#eeeeee]"
                      }  cursor-pointer rounded-md`}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <Link to={"/login"} className="relative">
                <CiLogin className="text-2xl" />
              </Link>
              <div
                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm  rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                  theme === "dark"
                    ? "bg-[#eeeeee] text-black"
                    : " bg-[#232323] text-white"
                }`}
              >
                Login
              </div>
            </div>
          )}
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
                    theme === "dark"
                      ? "hover:bg-[#232323]"
                      : "hover:bg-[#eeeeee]"
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
      <div className="mt-24"></div>
    </>
  );
}
