import { useContext, useState } from "react";
import { MdDelete, MdFullscreen } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContextApi";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CartOffcanvas() {
  const { theme } = useContext(ThemeContext);

  const [cartProducts] = useState([
    {
      id: 1,
      thumbnail:
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_026.jpg?v=1736889008&width=1080",
      category: "T-Shirts",
      title: "tshirt",
      size: "M",
      offerPrice: 499,
      quantity: 2,
    },
    {
      id: 2,
      thumbnail:
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_043.jpg?v=1736889008&width=1080",
      category: "Shoes",
      title: "shpes",
      size: "9",
      offerPrice: 999,
      quantity: 1,
    },
  ]);

  return (
    <div className="h-full flex flex-col">
      {/* Top Section */}
      <div className="flex justify-between p-5 border-b items-center h-fit text-2xl">
        <h1>Cart : {cartProducts.length}</h1>
        <Link to={"/"}>
          <MdFullscreen />
        </Link>
      </div>

      {/* Center Section */}
      <div
        className={`flex-grow ${
          cartProducts.length > 0 ? "overflow-y-auto" : ""
        }`}
      >
        {cartProducts.length > 0 ? (
          <div className="p-5 space-y-5">
            {/* Product cart content starts from the top */}
            {cartProducts.map((product, index) => (
              <div key={index} className="flex justify-between gap-3 h-full text-[#8e8e8e]">
                <div className="flex items-center gap-3">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h1 className="text-lg">{product.title}</h1>
                    <p className="text-sm">
                      Price: {product.offerPrice}
                    </p>
                    <p className="text-sm">
                      Quantity: {product.quantity}
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col justify-between items-end">
                  <button className="text-2xl" title="Remove From Cart">
                    <MdDelete />
                  </button>
                  <div className="flex gap-5">
                    <button className="p-1 border" title="Increase Quantity">
                      <FaPlus />
                    </button>
                    <button className="p-1 border" title="Decrease Quantity">
                      <FaMinus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col gap-3 h-full">
            <h1>Empty Cart</h1>
          </div>
        )}
      </div>

      <div className="p-2 h-fit">
        <button
          className={`w-full py-2 text-base uppercase ${
            theme === "dark" ? "bg-white text-black" : "bg-[#121212] text-white"
          }`}
        >
          {cartProducts.length > 0 ? "Check Out Now" : "Shop Now"}
        </button>
      </div>
    </div>
  );
}
