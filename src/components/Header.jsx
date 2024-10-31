import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useCartContext } from "../context/CartProvider";

const Header = () => {
  const { cartItems } = useCartContext();
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center">
          <span className="px-3 py-1 ml-2 text-xl font-bold text-white bg-blue-500 rounded-md">
            ST
          </span>
        </div>

        {/* Cart and User Info */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <button className="relative">
            <FaShoppingCart className="w-6 h-6 text-gray-700" />
            {/* Dynamic Cart item count badge */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* User Icon */}
          <div className="flex items-center space-x-2">
            <FaUserCircle className="w-6 h-6 text-gray-700" />
            <span className="text-gray-700"> Sayma Alam</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
