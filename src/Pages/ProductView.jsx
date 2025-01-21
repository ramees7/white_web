import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeContextApi";
import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function ProductView() {
  const { theme } = useContext(ThemeContext);
  const [selectedSize, setSelectedSize] = useState("S"); // Default selected size
  const [showAll, setShowAll] = useState(false);

  const location = useLocation();

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, [location]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => {
        if (rating >= i + 1) {
          return <MdOutlineStar key={i} />;
        } else if (rating > i && rating < i + 1) {
          return rating - i >= 0.5 ? (
            <MdOutlineStarHalf key={i} />
          ) : (
            <MdOutlineStarBorder key={i} />
          );
        } else {
          return <MdOutlineStarBorder key={i} className="text-[#8e8e8e]" />;
        }
      });
  };
  const productData = [
    {
      category: "Shirt", // Replace with actual ObjectId reference if needed
      title: "Stanton Crew 3 Pack Tees",
      imageUrls: [
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_026.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_005.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_043.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/Stanton_Short_Sleeve_Crew_Tee_-_3_Pack_061.jpg?v=1736888999&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_075.jpg?v=1736889008&width=900",
        "https://www.kitandace.com/cdn/shop/files/Stanton_Short_Sleeve_Crew_Tee_-_3_Pack_018.jpg?v=1735254503&width=1080",
      ],
      MRP: "399",
      offerPrice: "199",
      stockCount: 10,
      sizes: ["S", "M", "L"],
      brand: "Puma",
      color: "White",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error nulla, debitis non minima ullam aliquam pariatur in quis corrupti itaque vel deleniti aperiam assumenda quasi quaerat eligendi sit ratione.",
      material: "Cotton",
      careInstructions: "Machine wash cold, tumble dry low",
      occasion: "Casual",
      pattern: "Plain",
      ratings: 4,
      reviews: [
        {
          rating: 2,
          title: "Super product",
          buyer: "Ramees",
          date: "May 2024",
        },
        {
          rating: 5,
          title: "Super product",
          buyer: "Ramees",
          date: "May 2024",
        },
        {
          rating: 2,
          title: "Super product",
          buyer: "Ramees",
          date: "May 2024",
        },
      ],
      sku: "12121",
    },
  ];
  const product = productData[0];

  // Show either first 3 reviews or all reviews based on state
  const displayedReviews = showAll
    ? product.reviews
    : product.reviews.slice(0, 3);

  // Check if the number of reviews is greater than 3 to conditionally render the "See More" button
  const shouldShowSeeMore = product.reviews.length > 3;

  return (
    <div
      className={`grid lg:grid-cols-3 gap-10 lg:px-20 px-10 md:py-10 py-5 font-helvetica ${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
      }`}
    >
      <div className="col-span-2 space-y-1">
        <div className="grid grid-cols-2  gap-1 ">
          {product.imageUrls.slice(0, 2).map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Image ${idx + 1}`}
              className="md:h-[500px] h-[300px] w-full"
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1">
          {product.imageUrls.slice(2).map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Image ${idx + 3}`}
              className="md:h-[300px] h-[150px] w-full"
            />
          ))}
        </div>
      </div>
      <div className="col-span-1 space-y-7">
        <div className="border-b pb-3">
          <h1 className="text-4xl mb-2">{product.title}</h1>
          <div className="flex items-center gap-5">
            <div className="flex items-center space-x-1 text-base pe-5 border-r w-fit">
              {renderStars(product.ratings)}
              <span className="text-sm text-[#8e8e8e]">
                ({product.ratings})
              </span>
            </div>
            <h3>
              SKU : <span className="text-[#8e8e8e]">{product.sku}</span>
            </h3>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-5">
            <h1 className="text-xl">₹{product.offerPrice}</h1>
            <h1 className={`text-xl line-through text-[#8e8e8e]`}>
              ₹{product.MRP}
            </h1>
          </div>
          <h3>Color : {product.color}</h3>
          <h3>Brand : {product.brand}</h3>
          <h3>Category : {product.category}</h3>

          <h3> Size : {selectedSize}</h3>
          <div className="flex gap-2 ">
            {product.sizes.map((size) => (
              <div
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`border px-2 cursor-pointer ${
                  selectedSize === size
                    ? theme === "dark"
                      ? "border-[#fff] border-2"
                      : "border-[#000] border-2"
                    : "border-[#8e8e8e]"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
          <h3> Quantity : 2</h3>
          <div className="flex gap-2">
            <button className="p-1 border" title="Increase Quantity">
              <FaPlus />
            </button>
            <button className="p-1 border" title="Decrease Quantity">
              <FaMinus />
            </button>
          </div>
        </div>
        <div
          className={`flex justify-between items-center py-2 px-5 ${
            theme === "dark"
              ? "bg-[#232323] text-white"
              : "bg-[#eeeeee] text-black"
          } `}
        >
          <h2>Stock Availability</h2>
          <h2>: {product.stockCount > 0 ? "AVAILABLE" : "NOT-AVAILABLE"} </h2>
        </div>
        <div>
          <button
            disabled={product.stockCount <= 0}
            className={`py-2 w-full text-base uppercase  ${
              theme === "dark"
                ? "bg-white text-black "
                : "bg-[#121212] text-white "
            } `}
          >
            {product.stockCount > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
        <div className="space-y-2">
          <h3>
            Material :{" "}
            <span className="text-[#8e8e8e]">{product.material}</span>
          </h3>
          <h3>
            Care Instruction :{" "}
            <span className="text-[#8e8e8e]">{product.careInstructions}</span>
          </h3>
          <p>
            Description :{" "}
            <span className="text-[#8e8e8e]">{product.description}</span>
          </p>
        </div>
        <div>
          <h3 className="mb-3">Reviews :</h3>
          {displayedReviews.map((review, index) => (
            <div
              key={index}
              className="border border-[#8e8e8e] p-2 mb-1 rounded-md"
            >
              <div className="flex gap-5">
                <div className="flex items-center text-base rounded-sm text-white px-1 bg-[#388e3c] h-fit">
                  <span>{review.rating}</span>
                  <MdOutlineStar />
                </div>
                <h3>{review.title}</h3>
              </div>
              <div className="text-[#8e8e8e] mt-2 flex items-center justify-between text-sm">
                <h4>Buyer : {review.buyer}</h4>
                <h4>Date : {review.date}</h4>
              </div>
            </div>
          ))}
          {shouldShowSeeMore ? (
            !showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="mt-3  w-full  rounded shadow "
              >
                See More
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="mt-3  w-full  rounded shadow "
              >
                See Less
              </button>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
