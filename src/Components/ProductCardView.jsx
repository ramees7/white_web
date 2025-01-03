import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContextApi";
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCardView() {
  const { theme } = useContext(ThemeContext);
  const [favourite, setFavourite] = useState(false);

  const products = [
    {
      title: "Floral Summer Dress",
      imageUrls: [
        "https://pngimg.com/d/mario_PNG125.png",
        "https://img.freepik.com/free-photo/portrait-handsome-smiling-hipster-businessman-model-wearing-casual-summer-white-shirt_158538-1003.jpg",
        "https://w7.pngwing.com/pngs/806/434/png-transparent-white-business-shirt-white-business-shirt-mens-spring-thumbnail.png",
      ],
      MRP: 2499,
      offerPrice: 1499,
      stockCount: 25,
      sizes: ["S", "M", "L", "XL"],
      brand: "Elegant Wear",
      category: "Women",
      color: "Multicolor",
      description:
        "A lightweight and stylish floral summer dress perfect for casual outings.",
      material: "Cotton",
      careInstructions:
        "Machine wash cold with similar colors. Do not bleach. Tumble dry low.",
      occasion: "Casual",
      pattern: "Floral",
      ratings: 4.5,
      reviews: 123,
      sku: "EW-FSD123",
    },
    {
      title: "Men's Casual Shirt",
      imageUrls: [
        "https://w7.pngwing.com/pngs/857/401/png-transparent-men-s-white-crew-neck-t-shirt-long-sleeved-t-shirt-clothing-long-sleeved-t-shirt-t-shirt-tshirt-white-fashion-thumbnail.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvpHzRxrV3_J_su6TW_2y_XPgYPWS8kWv-w&s",
        "https://img.freepik.com/free-photo/portrait-handsome-smiling-hipster-businessman-model-wearing-casual-summer-white-shirt_158538-1003.jpg",
      ],
      MRP: 1999,
      offerPrice: 1199,
      stockCount: 40,
      sizes: ["M", "L", "XL", "XXL"],
      brand: "Urban Styles",
      category: "Men",
      color: "Navy Blue",
      description:
        "A classic navy blue casual shirt with a slim fit and modern design.",
      material: "Cotton Blend",
      careInstructions:
        "Hand wash preferred. Do not wring. Iron at low temperature.",
      occasion: "Casual",
      pattern: "Solid",
      ratings: 4.2,
      reviews: 89,
      sku: "US-CS456",
    },
    {
      title: "Kids' Party Wear Dress",
      imageUrls: [
        "https://w7.pngwing.com/pngs/806/434/png-transparent-white-business-shirt-white-business-shirt-mens-spring-thumbnail.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvpHzRxrV3_J_su6TW_2y_XPgYPWS8kWv-w&s",
        "https://img.freepik.com/free-photo/portrait-handsome-smiling-hipster-businessman-model-wearing-casual-summer-white-shirt_158538-1003.jpg",
      ],
      MRP: 3499,
      offerPrice: 1999,
      stockCount: 15,
      sizes: ["XS", "S", "M"],
      brand: "Tiny Tots",
      category: "Kids",
      color: "Pink",
      description:
        "A beautiful pink party wear dress for kids with lace detailing.",
      material: "Silk Blend",
      careInstructions:
        "Dry clean only. Avoid direct sunlight. Store in a cool place.",
      occasion: "Party",
      pattern: "Lace",
      ratings: 4.8,
      reviews: 54,
      sku: "TT-PWD789",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check for half star
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-green-600" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-green-600" />);
    }

    return stars;
  };

  const toggleFavourite = () => {
    setFavourite(!favourite); // Toggle the state
  };
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-16 px-5 md:px-10 ${
        theme === "dark" ? "bg-[#181818] text-white" : "bg-[#f6f6f6] text-black"
      }`}
    >
      {products.map((product, index) => (
        <div key={index} className="relative space-y-2">
          <div
            className={`absolute top-3 right-3  text-xl w-8 h-8 p-1 rounded-full flex items-center justify-center ${
              theme === "dark"
                ? " bg-[#f6f6f6] text-black"
                : "bg-[#181818] text-white"
            }`}
          >
            <button onClick={toggleFavourite}>
              {favourite ? (
                <FaHeart className="text-red-600" />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>
          <img
            src={product.imageUrls[0]}
            alt={product.title}
            loading="lazy"
            className={`h-[300px] w-full ${
              theme === "dark"
                ? "bg-[#232323] text-white"
                : "bg-[#eeeeee] text-black"
            } `}
          />
          <h1 className="text-lg ">{product.title}</h1>
          <div className="flex items-center space-x-2 md:text-lg text-base">
            {renderStars(product.ratings)}
            <span className="text-sm text-gray-500">({product.ratings})</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <h1>₹{product.offerPrice}</h1>
              <h2 className="line-through text-gray-500">₹{product.MRP}</h2>
            </div>
            <button
              className={`py-2 px-3 rounded-2xl border-2 ${
                theme === "dark" ? "border-white" : "border-black"
              }`}
            >
              Add to Cart
            </button>
          </div>
          <div className="">
            <Link>View Product</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
