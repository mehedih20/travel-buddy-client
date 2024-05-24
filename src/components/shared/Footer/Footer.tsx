import Image from "next/image";
import React from "react";
import logo from "../../../assets/Homepage/travel-logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 text-base-content xl:container">
      <aside>
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={80} height={80} />
          <span className="text-2xl text-gray-700 font-pacifico">
            Travel <span className="text-yellow-500">Buddy</span>
          </span>
        </div>
        <p>
          Travel Buddy Ltd.
          <br />
          Providing reliable service since 2018
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
