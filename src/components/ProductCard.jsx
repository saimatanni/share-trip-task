import { useState } from "react";
import PropTypes from "prop-types";
import { FiTrash2 } from "react-icons/fi";
import cart from "../assets/cart.png";
import eye from "../assets/eye.png";
import ribbon from "../assets/ribbon.png";
import { BiPlus } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCartContext } from "../context/CartProvider";

const ProductCard = ({ product }) => {
  const { title, thumbnail, price, discountPercentage, description } = product;
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [wish, setWish] = useState(false);

  const handleIncrease = (product1) => {
    console.log('product1', product1)
    setCount(count + 1);
    if (product1) addToCart(product);
  };
  const { addToCart, removeFromCart } = useCartContext();

  const handleReset = (product) => {
    setCount(0);
    if (product) removeFromCart(product?.id);
  };

  const discountedValue = discountPercentage
    ? Math.round((price * discountPercentage) / 100)
    : 0;
  return (
    <div
      className="relative w-auto transition-all duration-300 bg-white rounded-lg hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {discountPercentage && (
        <div
          className="absolute z-10 left-[-4px] top-5 bg-no-repeat w-full h-10  inline-block"
          style={{ backgroundImage: `url(${ribbon})` }}
        >
          <p className="ml-2.5 text-xs text-left text-white mt-[4px] font-[525] ">
            {" "}
            - ৳ {discountedValue}
            {/* - ৳ <span className="text-xs">{discountPercentage} </span> */}

          </p>
        </div>
      )}
      <div className="h-auto p-2 ">
        {isHovered && (
          <div className="absolute z-10 text-gray-400 cursor-pointer right-5 hover:text-red-500 top-5 ">
            {wish ? (
              <FaHeart
                onClick={() => setWish(!wish)}
                className={`text-lg md:w-6 md:h-6 ${wish ? "text-red-500" : "text-white"
                  }`}
              />
            ) : (
              <FaRegHeart
                onClick={() => setWish(!wish)}
                className="text-lg text-white md:w-6 md:h-6"
              />
            )}
          </div>
        )}

        <div className="relative overflow-hidden bg-gray-100 rounded-lg ">
          <img
            src={thumbnail}
            alt={title}
            className="object-contain w-full h-60 sm:h-56"
            loading="lazy"
          />
          {isHovered && (
            <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 p-2 transition-opacity duration-300 bg-black bg-opacity-50">
              {count > 0 ? (
                <div className="flex items-center justify-around w-full px-2 py-1.5 font-semibold text-white bg-green-500 rounded-md md:px-3">
                  <button onClick={() => handleReset(product)} className="flex items-center">
                    <FiTrash2 className="mr-1 text-lg text-white md:mr-2" />
                  </button>
                  <span className="text-xs md:text-sm">
                    {count} Added in Cart
                  </span>
                  <button
                    onClick={() => handleIncrease(product)}
                    className="flex items-center"
                  >
                    <BiPlus className="w-6 h-4 ml-1 text-white md:ml-2" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleIncrease(product)}
                  className="flex items-center justify-center w-full px-2 py-1  font-semibold text-white transition bg-[#b1afaf] rounded-md md:px-3   border border-white bg-opacity-80"
                >
                  <img
                    src={cart}
                    alt={title}
                    className="w-5 h-5 mr-1 md:w-5 md:h-5 md:mr-2"
                  />
                  <span className="text-xs md:text-sm">Add to Cart</span>
                </button>
              )}
              <button className="flex items-center justify-center w-full px-2 py-1 mb-2 font-semibold text-white transition bg-[#b1afaf] rounded-md md:px-3   border border-white bg-opacity-80">
                <img
                  src={eye}
                  alt={title}
                  className="w-5 h-5 mr-1 md:w-5 md:h-5 md:mr-2"
                />
                <span className="text-xs text-white md:text-sm">
                  Quick View
                </span>
              </button>
            </div>
          )}
        </div>

        <div className="p-2 text-left">
          <h3 className="text-sm text-[#5A6573] font-[400] ">{title}</h3>
          <h2 className="text-sm font-[525] sm:text-base truncate-2-lines text-[#1A2B3D]">
            {description}
          </h2>

          <div className="flex items-center mt-1 space-x-2 sm:mt-2">
            <span className="font-[475] text-[#1882FF] text-xl">৳ {price}</span>
            <span className=" text-[#77818C] line-through ">
              ৳ {Math.round(price + discountedValue)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes for the ProductCard component
ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPercentage: PropTypes.number,
    // brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
