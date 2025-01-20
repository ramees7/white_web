import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5"; // Close icon

export default function CartOffcanvas({ toggleOffcanvas ,isCartOffcanvasOpen }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-all transform ${
        isCartOffcanvasOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={toggleOffcanvas} // Close the offcanvas when clicking outside
    >
      <div
        className="absolute top-0 right-0 w-80 bg-white h-full shadow-lg p-5"
        onClick={(e) => e.stopPropagation()} // Prevent closing the offcanvas when clicking inside
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button
            className="text-2xl"
            onClick={toggleOffcanvas} // Close the offcanvas
          >
            <IoCloseOutline />
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4">
          {/* Example Cart Item */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Item Name</h3>
              <p className="text-sm text-gray-500">Item Description</p>
            </div>
            <span className="font-bold">$25.00</span>
          </div>

          {/* More Cart Items Here */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Item Name</h3>
              <p className="text-sm text-gray-500">Item Description</p>
            </div>
            <span className="font-bold">$15.00</span>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-5">
          <button
            onClick={() => {
              // Handle checkout logic here
              alert("Proceed to Checkout");
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

CartOffcanvas.propTypes = {
  toggleOffcanvas: PropTypes.func.isRequired, // Ensures toggleOffcanvas is a required function
  isCartOffcanvasOpen: PropTypes.bool.isRequired, // Ensures toggleOffcanvas is a required function
};
