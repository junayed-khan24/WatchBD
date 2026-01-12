import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../src/assets/images.jfif";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">

        {/* Brand */}
        <div>
          <img src={logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed">
            Premium watches designed for modern lifestyle.
            Style and precision in every moment.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-black">Home</Link></li>
            <li><Link className="hover:text-black">Men</Link></li>
            <li><Link className="hover:text-black">Women</Link></li>
            <li><Link className="hover:text-black">Shop</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-black">Contact</Link></li>
            <li><Link className="hover:text-black">FAQ</Link></li>
            <li><Link className="hover:text-black">Privacy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Follow Us</h3>
          <div className="flex gap-3">
            <a className="p-2 border rounded-full hover:bg-black hover:text-white">
              <FaFacebookF />
            </a>
            <a className="p-2 border rounded-full hover:bg-black hover:text-white">
              <FaInstagram />
            </a>
            <a className="p-2 border rounded-full hover:bg-black hover:text-white">
              <FaTwitter />
            </a>
            <a className="p-2 border rounded-full hover:bg-black hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Watches. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
