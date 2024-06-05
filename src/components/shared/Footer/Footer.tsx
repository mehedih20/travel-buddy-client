import Image from "next/image";
import React from "react";
import logo from "../../../assets/Homepage/travel-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer px-10 py-16 text-base-content bg-white xl:container">
      <aside>
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={100} height={100} />
          <span className="text-2xl text-gray-700 font-pacifico">
            Travel <span className="text-yellow-500">Buddy</span>
          </span>
        </div>
        <p className="text-gray-700 font-medium mb-5">
          Travel Buddy Ltd.
          <br />
          Providing reliable service since 2018
        </p>
        <p className="font-medium text-gray-700">
          &copy; 2024 Travel Buddy | All Rights Reserved
        </p>
      </aside>
      <div>
        <h6 className="font-semibold text-lg text-gray-500 mb-3">
          Contact Information
        </h6>
        <p className="flex items-center text-gray-600 font-medium mb-3">
          <span className="text-green-500 inline-block mr-2">
            <FaPhoneAlt />
          </span>{" "}
          +1 (0800) 123 456
        </p>
        <p className="flex items-center text-gray-600 font-medium mb-3">
          <span className="text-pink-500 text-lg inline-block mr-2">
            <IoMdMail />
          </span>{" "}
          help@travelbuddy.com
        </p>
        <p className="flex items-center text-gray-600 font-medium mb-5">
          <span className="text-blue-500 text-lg inline-block mr-2 -mt-1">
            <FaLocationDot />
          </span>{" "}
          26 South Blackburn Lane Brooklyn, NY 11218
        </p>
        <div className="flex gap-3">
          <a
            href=""
            className="text-blue-600 p-1 rounded-full bg-white border border-gray-400 text-2xl hover:bg-gray-300 transition-all duration-300 ease-in-out"
          >
            <FaFacebook />
          </a>
          <a
            href=""
            className="text-orange-600 p-1 rounded-full bg-white border border-gray-400 text-2xl hover:bg-gray-300 transition-all duration-300 ease-in-out"
          >
            <FaInstagram />
          </a>
          <a
            href=""
            className="text-blue-400 p-1 rounded-full bg-white border border-gray-400 text-2xl hover:bg-gray-300 transition-all duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
          <a
            href=""
            className="text-blue-800 p-1 rounded-full bg-white border border-gray-400 text-2xl hover:bg-gray-300 transition-all duration-300 ease-in-out"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <div>
        <h6 className="font-semibold text-lg text-gray-500 mb-3">
          Additional Links
        </h6>
        <a className="text-gray-600 font-medium mb-2 -mt-1 hover:underline cursor-pointer">
          Terms of Use
        </a>
        <a className="text-gray-600 font-medium mb-2 hover:underline cursor-pointer">
          Privacy Policy
        </a>
        <a className="text-gray-600 font-medium mb-2 hover:underline cursor-pointer">
          About Us
        </a>
        <a className="text-gray-600 font-medium mb-2 hover:underline cursor-pointer">
          FAQ
        </a>
        <a className="text-gray-600 font-medium mb-2 hover:underline cursor-pointer">
          Support
        </a>
      </div>
    </footer>
  );
};

export default Footer;
