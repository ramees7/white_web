import { useContext, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ThemeContext } from "@emotion/react";
import { Link } from "react-router-dom";

export default function AllProductsView() {
  const { theme } = useContext(ThemeContext);
  const [category, setCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    {
      title: "Floral Summer Dress",
      category: "shirts",
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
      category: "shirts",
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
      category: "shirts",
      imageUrls: [
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_043.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_026.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_005.jpg?v=1736889008&width=1080",
      ],
      MRP: 3499,
      SKU: "123",
      offerPrice: 1999,
      stockCount: 10,
    },
    {
      title: "Floral Summer Dress",
      category: "shirts",
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
      category: "perfumes",
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
      category: "shirts",
      imageUrls: [
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_043.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_026.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_005.jpg?v=1736889008&width=1080",
      ],
      MRP: 3499,
      SKU: "123",
      offerPrice: 1999,
      stockCount: 10,
    },
    {
      title: "Floral Summer Dress",
      category: "dhoti",
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
      category: "perfumes",
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
      category: "perfumes",
      imageUrls: [
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_043.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_026.jpg?v=1736889008&width=1080",
        "https://www.kitandace.com/cdn/shop/files/N_stantonshortsleevecrew_brightwhite_005.jpg?v=1736889008&width=1080",
      ],
      MRP: 3499,
      SKU: "123",
      offerPrice: 1999,
      stockCount: 10,
    },
  ];

  const categories = [
    {
      label: "Shirts",
      value: "shirts",
      description: "Stylish and comfortable shirts.",
    },
    {
      label: "Dhoti",
      value: "dhoti",
      description: "Traditional and elegant dhotis.",
    },
    {
      label: "Kandoor",
      value: "kandoor",
      description: "Authentic Kandoor designs.",
    },
    {
      label: "Perfumes",
      value: "perfumes",
      description: "Luxurious perfumes.",
    },
    { label: "Caps", value: "caps", description: "Trendy and versatile caps." },
    {
      label: "Inner Wear",
      value: "innerwear",
      description: "Premium-quality innerwear.",
    },
  ];

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtering products based on search query
  const filteredProducts = products.filter((product) => {
    // Check if product title matches the search query
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Check if product category matches the selected category (if a category is selected)
    const matchesCategory = category ? product.category === category : true;

    return matchesSearch && matchesCategory;
  });

  // Optional: Sorting products by price
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (priceFilter === "low-to-high") {
      return a.offerPrice - b.offerPrice;
    }
    if (priceFilter === "high-to-low") {
      return b.offerPrice - a.offerPrice;
    }
    return 0;
  });

  return (
    <div
      className={`font-carme ${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
      } w-full lg:px-20 md:px-10 px-6 py-10`}
    >
      <h1 className="mb-3 text-lg">Sort and Filter:</h1>
      <div className="flex justify-between gap-10">
        {/* Category Selector */}
        <FormControl className="w-1/4">
          <InputLabel id="category-select-label">Select Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
            label="Select Category"
          >
            {categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Search Input */}
        <TextField
          id="search-input"
          label="Search Products"
          variant="outlined"
          className="w-1/2"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Price Filter */}
        <FormControl className="w-1/4">
          <InputLabel id="price-filter-label">Price Filter</InputLabel>
          <Select
            labelId="price-filter-label"
            id="price-filter"
            value={priceFilter}
            onChange={handlePriceFilterChange}
            label="Price Filter"
          >
            <MenuItem value="low-to-high">Low to High</MenuItem>
            <MenuItem value="high-to-low">High to Low</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 mt-10">
        {sortedProducts.map((product, index) => (
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
                <div className="absolute inset-0  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={`/product/${product.SKU}`}
                    className={`border border-black text-black py-2 px-4`}
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
                <h1 className="text-sm font-semibold">₹{product.offerPrice}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
