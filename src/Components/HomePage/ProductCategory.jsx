import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContextApi";
import { useContext } from "react";

export default function ProductCategory() {
  const { theme } = useContext(ThemeContext);

  const categoryList = [
    {
      title: "Shirts",
      thumbnail:
        "https://media.4rgos.it/s/Argos/tuc143953263_R_SET?w=270&h=366&qlt=75&fmt.jpeg.interlaced=true",
      link: "",
    },
    {
      title: "Dhoti",
      thumbnail:
        "https://ramrajcotton.in/cdn/shop/files/ramrajecom01247_6a82d81a-2cb0-40c3-9938-014c2f1879a5.jpg?v=1724328564",
      link: "",
    },
    {
      title: "Kandoor",
      thumbnail:
        "https://kandoraonline.wordpress.com/wp-content/uploads/2020/04/kandora.jpg?w=660&h=504&crop=1",
      link: "",
    },
    {
      title: "Perfumes",
      thumbnail:
        "https://m.media-amazon.com/images/I/51d3uHe0t3L.jpg",
      link: "",
    },
  ];
  return (
    <div
      className={`flex justify-center relative ${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
      }`}
    >
      <div className="absolute right-5 top-5">
        <Link to={'/'}>
          All Products
        </Link>
      </div>
      <div className="py-16 flex justify-start md:gap-10 gap-7 overflow-x-auto items-center scrollbar-hide md:px-10 px-5">
        {categoryList?.map((item, index) => (
          <div
            key={index}
            className="space-y-3 text-center md:text-xl text-base flex-shrink-0"
          >
            <Link>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="md:w-32 md:h-32 w-20 h-20 rounded-full"
                title={item.title}
              />
            </Link>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
