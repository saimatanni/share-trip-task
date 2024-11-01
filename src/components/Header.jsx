import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useCartContext } from "../context/CartProvider";

const Header = () => {
  const { cartItems } = useCartContext();
  
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl text-white">
    
        <div className="flex items-center">
          <a href="/" className="px-3 py-1 ml-2 text-2xl font-bold bg-white bg-opacity-20 rounded-md">
            ST
          </a>
        </div>

        {/* Cart and User Info */}
        <div className="flex items-center space-x-6">
        
          <button className="relative focus:outline-none hover:scale-105 transition-transform">
            <FaShoppingCart className="w-6 h-6" />
            {/* Dynamic Cart item count badge */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5 shadow-md">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* User Icon */}
          <div className="flex items-center space-x-3 cursor-pointer hover:opacity-90 transition-opacity">
            <FaUserCircle className="w-7 h-7" />
            <span className="text-lg font-medium">Sayma Alam</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
