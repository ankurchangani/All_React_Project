import React from "react";
import { Search, RefreshCcw, LayoutList, Settings, Grid, Menu } from "lucide-react";
import KeppLogo from '../../assets/Keeplogo/keep_2020q4_48dp.png'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-100 shadow-md">
      {/* Left Section */}
      <div className="flex items-center">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
        <h1 className="ml-2 text-lg font-medium text-gray-700">Keep</h1>
        <img src= {KeppLogo} alt="keep logo" className="w-10"  />
      </div>

      {/* Center Section */}
      <div className="flex items-center flex-grow mx-4 bg-gray-200 rounded-lg">
        <Search className="h-5 w-5 text-gray-600 ml-3" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-3 py-2 text-sm bg-transparent outline-none placeholder-gray-500"
        />
      </div>
      {/* Right Section */}
      <div className="flex items-center space-x-3">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <RefreshCcw className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <LayoutList className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Grid className="h-5 w-5 text-gray-600" />
        </button>
        <img
          src="https://via.placeholder.com/32"
          alt="User Avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
