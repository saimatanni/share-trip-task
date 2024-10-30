import { useState } from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import wishlist from "../assets/wishlist.png";
import cart from "../assets/cart.png";
import eye from "../assets/eye.png";
import remove from "../assets/remove.png";
import { BiPlus } from "react-icons/bi";

const ProductCard = ({ product }) => {
  const { title, thumbnail, price, discountPercentage, brand, description } =
    product;
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div
      className="relative w-full h-auto p-2 overflow-hidden transition-all duration-300 rounded-md runded-lg b g-white hover:shadow-md sm:w-auto md:w-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wishlist Icon, Visible Only on Hover */}
      {isHovered && (
        <div className="absolute z-50 text-gray-400 cursor-pointer right-3 md:right-4 hover:text-red-500 top-[10px] md:top-[15px]">
          <img
            src={wishlist}
            alt="Wishlist"
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </div>
      )}

      {/* Discount Ribbon */}
      {discountPercentage && (
        <div className="ribbon-pop top-[10px] md:top-[15px] text-xs md:text-sm">
          ৳ {discountPercentage}
        </div>
      )}

      {/* Image Section with Overlay */}
      <div className="relative overflow-hidden bg-gray-100 rounded-lg">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-60 sm:h-56"
        />

        {/* Overlay with Dynamic Add to Cart Button */}
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 p-2 transition-opacity duration-300 bg-black bg-opacity-50">
            {count > 0 ? (
              <div className="flex items-center justify-around w-5/6 px-2 py-1.5 font-semibold text-white bg-green-500 rounded-md md:px-3">
                <button onClick={handleReset} className="flex items-center">
                  <FiTrash2 className="mr-1 text-lg text-white md:mr-2" />
                </button>
                <span className="text-xs md:text-sm">
                  {count} Added in Cart
                </span>
                <button onClick={handleIncrease} className="flex items-center">
                  <BiPlus className="w-6 h-4 ml-1 text-white md:ml-2" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleIncrease}
                className="flex items-center justify-center w-5/6 px-2 py-1  font-semibold text-white transition bg-[#b1afaf] rounded-md md:px-3   border border-white bg-opacity-80"
              >
                <img
                  src={cart}
                  alt={title}
                  className="w-5 h-5 mr-1 md:w-5 md:h-5 md:mr-2"
                />

                <span className="text-xs md:text-sm">Add to Cart</span>
              </button>
            )}

            <button className="flex items-center justify-center w-5/6 px-2 py-1 mb-2 font-semibold text-white transition bg-[#b1afaf] rounded-md md:px-3   border border-white bg-opacity-80">
              <img
                src={eye}
                alt={title}
                className="w-5 h-5 mr-1 md:w-5 md:h-5 md:mr-2"
              />
              <span className="text-xs text-white md:text-sm">Quick View</span>
            </button>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-2 text-left">
        <h3 className="text-xs text-gray-500 sm:text-sm">{brand}</h3>
        <h2 className="text-sm font-semibold text-gray-800 sm:text-base truncate-2-lines">
          {description}
        </h2>

        <div className="flex items-center mt-1 space-x-2 sm:mt-2">
          <span className="text-base font-bold text-blue-600 sm:text-lg">
            ৳ {price}
          </span>
          <span className="text-xs text-gray-400 line-through sm:text-sm">
            ৳ {Math.round(price + (price * discountPercentage) / 100)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
