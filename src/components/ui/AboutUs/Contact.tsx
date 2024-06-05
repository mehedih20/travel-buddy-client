import person1 from "@/assets/About/man-1.jpg";
import person2 from "@/assets/About//man-2.webp";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="py-20 lg:py-[100px] bg-violet-200 px-4">
      <div className="max-w-[1200px] mx-auto overflow-hidden grid lg:grid-cols-2 gap-10 rounded-lg">
        <div className="px-10 pb-10 flex justify-center">
          <div className="relative">
            <Image
              src={person1}
              alt="person1"
              className="border-8 border-teal-200 rounded-lg shadow-xl"
              width={350}
            />
            <Image
              src={person2}
              alt="person2"
              className="absolute -bottom-10 -right-10 border-4 border-blue-300 shadow-xl rounded-lg"
              width={200}
            />
          </div>
        </div>
        <div className="font-montserrat">
          <h1 className="inline-block text-4xl uppercase border-b-4 border-b-yellow-400 pb-3 mb-5 text-gray-600">
            Contact us
          </h1>
          <p className="mb-10">
            Have questions or need assistance? We&apos;re here to help! Contact
            us via email, phone, or our online form for prompt support and
            answers to your inquiries.
          </p>
          <p className="flex items-center text-gray-600 mb-4">
            <span className="text-green-500 inline-block mr-2">
              <FaPhoneAlt />
            </span>{" "}
            +1 (0800) 123 456
          </p>
          <p className="flex items-center text-gray-600 mb-4">
            <span className="text-pink-500 text-lg inline-block mr-2">
              <IoMdMail />
            </span>{" "}
            help@travelbuddy.com
          </p>
          <p className="flex items-center text-gray-600 mb-10">
            <span className="text-blue-500 text-lg inline-block mr-2 -mt-1">
              <FaLocationDot />
            </span>{" "}
            26 South Blackburn Lane Brooklyn, NY 11218
          </p>
          <div className="pt-5 flex gap-3">
            <a
              href=""
              className="text-blue-600 p-2 rounded-full bg-white text-3xl hover:bg-gray-300 transition-all duration-300 ease-in-out"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              className="text-orange-600 p-2 rounded-full bg-white text-3xl hover:bg-gray-300 transition-all duration-300 ease-in-out"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="text-blue-400 p-2 rounded-full bg-white text-3xl hover:bg-gray-300 transition-all duration-300 ease-in-out"
            >
              <FaLinkedin />
            </a>
            <a
              href=""
              className="text-amber-900 p-2 rounded-full bg-white text-3xl hover:bg-gray-300 transition-all duration-300 ease-in-out"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
