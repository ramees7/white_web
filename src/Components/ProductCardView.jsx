import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextApi";
import { Link } from "react-router-dom";

export default function ProductCardView() {
  const { theme } = useContext(ThemeContext);

  const products = [
    {
      title: "Floral Summer Dress",
      imageUrls: [
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_026.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_005.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_043.jpg?v=1736889008&width=1080",
      ],
      MRP: 2499,
      SKU: "121",
      offerPrice: 1499,
      stockCount: 0,
    },
    {
      title: "Men's Casual Shirt",
      imageUrls: [
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_005.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_043.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_026.jpg?v=1736889008&width=1080",
      ],
      MRP: 1999,
      SKU: "122",
      offerPrice: 1199,
      stockCount: 5,
    },
    {
      title: "Kids' Party Wear Dress",
      imageUrls: [
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_043.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_026.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_005.jpg?v=1736889008&width=1080",
      ],
      MRP: 3499,
      SKU: "123",
      offerPrice: 1999,
      stockCount: 2,
    },
  ];

  return (
    <div
      className={` ${
        theme === "dark" ? "bg-[#181818] text-white" : "bg-[#f6f6f6] text-black"
      } w-full  lg:px-20 md:px-10 px-6 py-10 font-carme`}
    >
      <div className="flex justify-between items-center mb-5">
        <h1 className="uppercase font-helvetica  md:text-xl text-lg">
          Best Seller
        </h1>
        <div>
          <Link
            to={"/allproducts"}
            className={` md:px-8 px-4 text-sm md:text-base py-1 border bg-transparent uppercase ${
              theme === "dark"
                ? "hover:bg-[#fff]  hover:text-black border-white hover:border-[#121212]"
                : " hover:bg-[#121212] hover:text-white border-black hover:border-white"
            }`}
          >
            View All Products
          </Link>
        </div>
      </div>
      <div
        className="grid grid-flow-col overflow-x-auto auto-cols-[calc(85%-1rem)] lg:auto-cols-[calc(23%-1rem)] md:auto-cols-[calc(40%-1rem)] gap-4  "
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden scroll-snap-align-start group"
          >
            <div
              className="relative group"
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(0deg, rgba(50,50,50,1) 6%, rgba(54,54,54,1) 100%)"
                    : "linear-gradient(0deg, rgba(225,225,225,1) 6%, rgba(239,239,239,1) 100%)",
              }}
            >
              <div className="relative ">
                <img
                  src={product.imageUrls[0]}
                  alt={product.title}
                  className="w-full md:h-[380px] h-[350px] object-cover group-hover:opacity-70 transition-opacity duration-300"
                />
                {product.stockCount <= 5 && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1">
                    {product.stockCount === 0
                      ? "Sold Out "
                      : product.stockCount <= 5 && "Limited Stock"}
                  </div>
                )}
                {/* View Product Button */}
                <div className="absolute inset-0  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={`${`/product/${product.SKU}`}`}
                    className={`border border-black text-black  py-2 px-4 `}
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="md:text-base text-sm font-semibold ">
                {product.title}
              </h2>
              <div className="flex items-center gap-3">
                <h1 className={`text-sm line-through text-[#8e8e8e]`}>
                  ₹{product.MRP}
                </h1>
                <h1 className="text-sm">₹{product.offerPrice}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
