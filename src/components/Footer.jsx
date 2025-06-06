// src/components/Footer.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-orange-500">Nex</span>Biz
            </div>
            <p className="text-gray-400 mb-4">
              Providing innovative IT solutions for businesses to enhance productivity and drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Case Studies', 'Blog', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['IT Consulting', 'Cloud Services', 'Cyber Security', 'Web Development', 'App Development', 'Data Analytics'].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                <span className="text-gray-400">123 Business Avenue, Suite 100, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-orange-500 mr-3" />
                <span className="text-gray-400">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-3" />
                <span className="text-gray-400">info@nexbiz.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nexbiz IT Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;