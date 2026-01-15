import React from "react";
import { Link } from "react-router";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-white px-4 md:px-10 shadow-sm">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost ">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Men’s</Link></li>
            <li><Link to="/">Women’s</Link></li>
          </ul>
        </div>

        <Link to="/" className="text-2xl font-bold">
          Watches<span className="badge badge-error ml-1">PRO</span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Men’s</Link></li>
          <li><Link to="/">Women’s</Link></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-4">
        <FaSearch className="cursor-pointer" />
        <FaShoppingCart className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
