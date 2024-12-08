import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="bg-[#000000] text-white text-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-2 flex-col sm:flex-row">
        {/* Left: Announcement */}
        <div className="mb-2 sm:mb-0">
          <p>📢 Free shipping on all orders over $50!</p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
          <Link href="/faq">
            <span className="hover:underline cursor-pointer">Eng</span>
          </Link>
          <Link href="/FAQ">
            <span className="hover:underline cursor-pointer">FAQs</span>
          </Link>
          <Link href="/contact">
            <span className="hover:underline cursor-pointer">Need help</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

export const Header1: React.FC = () => {
  return (
    <header className="bg-white text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/Image/comforty.png" 
            alt="comforty Logo" 
            className="w-32 h-auto" // Adjusted for better size
          />
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4 sm:space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/cart">
            <span className="text-gray-300 hover:text-orange-500 cursor-pointer">
              🛒 Cart
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export const Header2: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-8 py-4 border-b border-gray-200">
      {/* Navigation Links */}
      <nav className="flex flex-col sm:flex-row items-center sm:ml-[150px] space-y-4 sm:space-y-0 sm:space-x-6">
        <Link href="/" className="text-teal-500 hover:underline">
          Home
        </Link>
        <Link href="/shop" className="text-gray-700 hover:underline">
          Shop
        </Link>
        <Link href="/products" className="text-gray-700 hover:underline">
          Products
        </Link>
        <Link href="/contact" className="text-gray-700 hover:underline">
          Contact
        </Link>
        <Link href="/about" className="text-gray-700 hover:underline">
          About
        </Link>
      </nav>

      {/* Contact Info */}
      <div className="mt-4 sm:mt-0 text-center sm:text-right">
        <span className="text-gray-500">Contact:</span>{' '}
        <a href="tel:8085550111" className="text-gray-800 font-semibold">
          (808) 555-0111
        </a>
      </div>
    </header>
  );
};
