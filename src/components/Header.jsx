// src/Header.js

import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
         
          <span className="ml-2 text-xl font-bold bg-blue-500 text-white py-1 px-3 rounded-md">ST</span>
        </div>

        {/* Cart and User Info */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <button className="relative">
            <FaShoppingCart className="h-6 w-6 text-gray-700" />
            {/* Cart item count badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
              3
            </span>
          </button>

          {/* User Icon */}
          <div className="flex items-center space-x-2">
            <FaUserCircle className="h-6 w-6 text-gray-700" />
            <span className="text-gray-700"> Sayma Alam</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
