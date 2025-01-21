import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextApi";
import blackLogo from "../assets/logo-png-black.png";
import whiteLogo from "../assets/logo-png-white.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaRegCopyright,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
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

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-[#232323] text-[#9d9d9d]"
          : "bg-[#eeeeee] text-[#636363]"
      } flex justify-center pt-10 pb-5 lg:px-20 md:px-10 px-6 font-carme`}
    >
      <div className="space-y-4 text-center text-sm md:text-base">
        <div>
          <Link to="/">
            <img
              src={theme === "dark" ? whiteLogo : blackLogo}
              alt="Logo Image"
              loading="lazy"
              className="w-24 h-24 mx-auto"
            />
          </Link>
          <h2>Chemmad, Kerala 676306</h2>
        </div>
        <ul className="space-x-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={` transition-colors w-full ${
                theme === "dark" ? "hover:bg-[#232323]" : "hover:bg-[#eeeeee]"
              }  `}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <div className="flex gap-5 justify-center">
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
        <h3 className="flex items-center justify-center">
          <FaRegCopyright /> 2020 Whiter.in. All rights reserved.
        </h3>
      </div>
    </div>
  );
}
