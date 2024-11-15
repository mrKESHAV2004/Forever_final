import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="mt-40 mb-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-10 text-sm">
        <div>
          <img src={assets.logo} alt="Company Logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestiae ipsam iure aperiam, 
            quisquam fugit est ullam id eius doloremque ipsa aut asperiores quibusdam laboriosam molestias 
            soluta, delectus dolore saepe.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-5">COMPANY</h2>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="/" className="hover:text-gray-800">Home</a></li>
            <li><a href="/about" className="hover:text-gray-800">About</a></li>
            <li><a href="/delivery" className="hover:text-gray-800">Delivery</a></li>
            <li><a href="/privacy-policy" className="hover:text-gray-800">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-5">Get in Touch</h2>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="tel:+12124567890" className="hover:text-gray-800">+1-212-456-7890</a></li>
            <li><a href="mailto:contact@foreveryou.com" className="hover:text-gray-800">contact@foreveryou.com</a></li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="py-5 text-sm text-center text-gray-600">
        Copyright © {new Date().getFullYear()} Forever.com - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;