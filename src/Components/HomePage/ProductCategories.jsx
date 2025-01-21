import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContextApi";
import { Link } from "react-router-dom";
import oudhThumbnail from "../../assets/oudh-2.jpg";
import capsThumbnail from "../../assets/caps.jpg";

export default function ProductCategories() {
  const { theme } = useContext(ThemeContext);

  const categoryList = [
    {
      title: "Shirts",
      thumbnail:
        "https://bananaclub.co.in/cdn/shop/files/GlazeWhiteCottonShirt_1_c3ad3377-ff34-40e7-b892-d5cb28d53ca6.jpg?v=1736413608&width=1000",
      description:
        "Explore a variety of stylish and comfortable shirts for all occasions.",
      link: "",
    },
    {
      title: "Dhoti",
      thumbnail:
        "https://assets.ajio.com/medias/sys_master/root/20241029/sXaS/672090f3f9b8ef490beddb87/-473Wx593H-700664804-white-MODEL.jpg",
      description:
        "Traditional and elegant dhotis crafted from premium fabrics.",
      link: "",
    },
    {
      title: "Kandoor",
      thumbnail:
        "https://kandoraonline.wordpress.com/wp-content/uploads/2020/04/kandora.jpg?w=660&h=504&crop=1",
      description: "Authentic Kandoor designs for a royal and refined look.",
      link: "",
    },
    {
      title: "Perfumes",
      thumbnail: oudhThumbnail,
      description:
        "Discover an array of luxurious perfumes with enchanting fragrances.",
      link: "",
    },
    {
      title: "Caps",
      thumbnail: capsThumbnail,
      description:
        "A selection of trendy and versatile caps for a perfect finishing touch.",
      link: "",
    },
    {
      title: "Inner Wear",
      thumbnail:
        "https://img.damensch.com/damensch/cms-media/blog-images/mens%20innerwear%205.png",
      description:
        "Comfortable and premium-quality innerwear designed for everyday wear.",
      link: "",
    },
  ];

  return (
    <div className={` relative font-montserrat `}>
      <div
        className={`grid grid-cols-2 grid-rows-2  lg:gap-10 md:gap-5 gap-2 max-h-screen min-h-[400px] lg:px-20 md:px-10 px-6 lg:py-10 py-5 h-fit ${
          theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
        }`}
      >
        <div className="row-span-2 relative">
          <Link
            className="w-full h-full"
            to={"/"}
            title={categoryList[0].description}
          >
            <img
              src={categoryList[0].thumbnail}
              alt=""
              className="w-full h-full"
            />
            <button
              className={`absolute md:top-5 top-3  md:right-5 right-3 md:px-8 px-4 text-sm md:text-base py-1 border bg-transparent uppercase ${
                theme === "dark"
                  ? "hover:bg-[#121212]  hover:text-white border-white hover:border-[#121212]"
                  : " hover:bg-white hover:text-black border-black hover:border-white"
              }`}
            >
              {categoryList[0].title}
            </button>
          </Link>
        </div>
        <div className="row-span-1 relative">
          <Link
            className="w-full h-full"
            to={"/"}
            title={categoryList[1].description}
          >
            <img
              src={categoryList[1].thumbnail}
              alt=""
              className="w-full h-full"
            />
            <button
              className={`absolute md:top-5 top-3  md:left-5 left-3 md:px-8 px-4 text-sm md:text-base py-1 border bg-transparent uppercase ${
                theme === "dark"
                  ? "hover:bg-[#121212]  hover:text-white border-white hover:border-[#121212]"
                  : " hover:bg-white hover:text-black border-black hover:border-white"
              }`}
            >
              {categoryList[1].title}
            </button>
          </Link>
        </div>
        <div className="row-span-1 relative">
          <Link
            className="w-full h-full"
            to={"/"}
            title={categoryList[2].description}
          >
            <img
              src={categoryList[2].thumbnail}
              alt=""
              className="w-full h-full"
            />
            <button
              className={`absolute md:top-5 top-3  md:left-5 left-3 md:px-8 px-4 text-sm md:text-base py-1 border bg-transparent uppercase ${
                theme === "dark"
                  ? "hover:bg-[#121212]  hover:text-white border-white hover:border-[#121212]"
                  : " hover:bg-white hover:text-black border-black hover:border-white"
              }`}
            >
              {categoryList[2].title}
            </button>
          </Link>
        </div>
      </div>
      <div className="h-[400px] relative ">
        <div
          className="fixed top-0 left-0 w-full h-screen -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${categoryList[3].thumbnail})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center h-full">
          <div
            className={`text-white text-center`}
          >
            <h1 className={`md:text-5xl text-3xl font-semibold uppercase `}>
              {categoryList[3].title}
            </h1>
            <h3 className="text-sm md:text-base">
              {categoryList[3].description}
            </h3>
          </div>
          <button
            className={`px-8 py-2  text-base uppercase ${
              theme === "dark"
                ? "bg-[#121212] text-white "
                : "bg-white text-black "
            }`}
          >
            Shop now
          </button>
        </div>
      </div>
      <div
        className={`lg:px-20 md:px-10 px-6 lg:py-10 py-5 ${
          theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
        }`}
      >
        {categoryList.slice(4).map((category, index) => (
          <div
            className={`grid md:grid-cols-2 gap-5 md:gap-0 ${
              index === 0 ? "" : "md:mt-0 mt-10"
            } h-fit `}
            key={index}
          >
            <div
              className={`${
                index % 2 === 0 ? "md:order-1 order-2" : " order-2"
              } `}
            >
              <img
                src={category.thumbnail}
                alt={category.title}
                className="h-[400px] w-full object-cover"
              />
            </div>
            <div
              className={`flex flex-col justify-center items-center gap-6  ${
                index % 2 === 0 ? "md:order-2 order-1" : "order-1"
              }`}
            >
              <div
                className={`${
                  theme === "dark" ? " text-white " : " text-black "
                } text-center`}
              >
                <h1 className={`md:text-5xl text-3xl font-semibold uppercase `}>
                  {category.title}
                </h1>
                <h3 className="text-sm md:text-base">{category.description}</h3>
              </div>
              <button
                className={` md:px-8 px-4 text-sm md:text-base py-1 border bg-transparent uppercase ${
                  theme === "dark"
                    ? "hover:bg-[#fff]  hover:text-black border-white hover:border-[#121212]"
                    : " hover:bg-[#121212] hover:text-white border-black hover:border-white"
                }`}
              >
                shop now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
