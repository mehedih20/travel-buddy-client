"use client";
import logo from "../../../assets/Homepage/travel-logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail, IoMdCall } from "react-icons/io";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/ui/AuthButton/AuthButton"),
    {
      ssr: false,
    }
  );
  const ProfileLink = dynamic(
    () => import("@/components/ui/ProfileLink/ProfileLink"),
    {
      ssr: false,
    }
  );
  return (
    <>
      <div className="bg-purple-800">
        <div className="flex xl:container justify-between text-white p-2">
          <p className="flex items-center">
            <span className="mr-2">
              <IoMdMail className="text-red-400" />
            </span>
            help@travelbuddy.com
          </p>
          <p className="flex items-center">
            <span className="mr-2">
              <IoMdCall className="text-yellow-400" />
            </span>
            +1 (0800) 123 456
          </p>
        </div>
      </div>
      <div className="bg-white drop-shadow-2xl">
        <div className="xl:container navbar min-h-fit">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/aboutUs">About Us</Link>
                </li>
                <li>
                  <Link href="/travels">Travels</Link>
                </li>
                <ProfileLink />
              </ul>
            </div>
            <a className="btn btn-ghost h-fit flex xl:pl-0">
              <Image src={logo} alt="logo" width={70} height={70} />
              <span className="text-2xl text-gray-700 font-pacifico">
                Travel <span className="text-yellow-500">Buddy</span>
              </span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-montserrat font-semibold text-base text-gray-600">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link href="/travels">Travels</Link>
              </li>
              <ProfileLink />
            </ul>
          </div>
          <div className="navbar-end">
            <AuthButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
