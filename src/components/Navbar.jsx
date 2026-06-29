import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">

        
        
          <img
            className=" h-10  object-cover"
            src={assets.logo}
            alt="Logo"
          />

        
        

        {/* Right Side */}
        <div className="flex items-center gap-4">

         

          {/* Logout Button */}
          <button
            onClick={() => setToken("")}
            className="px-5 py-2.5 bg-black text-white rounded-xl font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-95"
          >
            Logout
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;