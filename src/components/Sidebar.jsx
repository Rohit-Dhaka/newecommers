import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <aside className="sm:w-64 w-full     border-gray-200 shadow-sm flex flex-col justify-between p-4 sm:h-screen  h-[95px] max-sm:overflow-x-scroll ">
      {/* Header */}
     <div className="flex sm:flex-col" >
         <div className=" pb-4 border-b border-gray-100 max-sm:hidden">
        <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage your store easily
        </p>
      </div>

      {/* Navigation */}
      <div className="flex sm:flex-col gap-2 ">

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-black text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100 hover:text-black"
            }`
          }
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-white">
            <img
              className="w-5 h-5"
              src={assets.add_icon}
              alt="Add"
            />
          </div>

          <div>
            <h3 className="font-semibold text-nowrap">Add Product</h3>
            <p className="text-xs opacity-70 max-sm:hidden ">
              Upload new products
            </p>
          </div>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-black text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100 hover:text-black"
            }`
          }
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-white">
            <img
              className="w-5 h-5"
              src={assets.order_icon}
              alt="Products"
            />
          </div>

          <div>
            <h3 className="font-semibold">Products</h3>
            <p className="text-xs opacity-70 max-sm:hidden">
              View all products
            </p>
          </div>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-black text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100 hover:text-black"
            }`
          }
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-white">
            <img
              className="w-5 h-5"
              src={assets.order_icon}
              alt="Orders"
            />
          </div>

          <div>
            <h3 className="font-semibold text-nowrap">Orders</h3>
            <p className="text-xs opacity-70 max-sm:hidden">
              Manage customer orders
            </p>
          </div>
        </NavLink>

      </div>
     </div>

      {/* Bottom Section */}
      <div className="max-sm:hidden ">
        <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-800">
            Admin Panel
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Forever Store Dashboard
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;