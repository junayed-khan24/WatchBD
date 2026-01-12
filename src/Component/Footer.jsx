import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-red-600
 text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Watches<span className="bg-white text-red-600 px-2 rounded ml-1">
              PRO
            </span>
          </h2>
          <p className="mt-4 text-red-100 text-sm leading-relaxed">
            Premium watches crafted for modern lifestyle.
            Style, precision, and durability in every timepiece.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-black">Home</Link></li>
            <li><Link className="hover:text-black">Men's Watches</Link></li>
            <li><Link className="hover:text-black">Women's Watches</Link></li>
            <li><Link className="hover:text-black">Shop</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-black">Contact Us</Link></li>
            <li><Link className="hover:text-black">FAQ</Link></li>
            <li><Link className="hover:text-black">Privacy Policy</Link></li>
            <li><Link className="hover:text-black">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a className="btn btn-circle btn-sm bg-white text-red-600 hover:bg-black hover:text-white">
              <FaFacebookF />
            </a>
            <a className="btn btn-circle btn-sm bg-white text-red-600 hover:bg-black hover:text-white">
              <FaInstagram />
            </a>
            <a className="btn btn-circle btn-sm bg-white text-red-600 hover:bg-black hover:text-white">
              <FaTwitter />
            </a>
            <a className="btn btn-circle btn-sm bg-white text-red-600 hover:bg-black hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-14 border-t border-red-400">
        <p className="text-center text-sm text-red-100 py-6">
          © {new Date().getFullYear()} WatchesPRO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
