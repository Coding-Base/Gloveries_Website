 // src/components/Navbar.jsx
import React, { useState } from "react";
// v1 named imports:
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import image from "./unclelogo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Menu items
  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Pages", href: "#" },
    { label: "Service", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inner container: flex between logo and menu */}
        <div className="flex justify-between h-16 items-center">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              {/* Replace this placeholder with your actual logo image */}
              <img
                className="h-8 w-auto"
                src={image}
                alt="gloveries Logo"
              />
            </a>
          </div>

          {/* Desktop menu (hidden on small screens) */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primaryBlue px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#get-started"
              className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-primaryBlue hover:bg-blue-600"
            >
              Get Started ↗
            </a>
          </div>

          {/* Mobile menu button (visible on small screens) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown (rendered only if open === true) */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="block mt-2 px-3 py-2 text-center rounded-md text-base font-medium text-white bg-primaryBlue hover:bg-blue-600"
            >
              Get Started ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
