export default function ProductCardView() {
  const products = [
    {
      title: "Floral Summer Dress",
      imageUrls: [
        "https://example.com/images/floral-dress1.jpg",
        "https://example.com/images/floral-dress2.jpg",
        "https://example.com/images/floral-dress3.jpg",
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
        "https://example.com/images/casual-shirt1.jpg",
        "https://example.com/images/casual-shirt2.jpg",
        "https://example.com/images/casual-shirt3.jpg",
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
        "https://example.com/images/party-dress1.jpg",
        "https://example.com/images/party-dress2.jpg",
        "https://example.com/images/party-dress3.jpg",
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden border"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-gray-800 font-semibold text-lg line-clamp-2">
              {product.title}
            </h3>
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-bold text-xl">
                Rs. {product.offerPrice}.00
              </span>
              <span className="text-gray-500 line-through ml-2">
                Rs. {product.MRP}.00
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
