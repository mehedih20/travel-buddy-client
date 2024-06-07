"use client";
import logo from "@/assets/Homepage/travel-logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail, IoMdCall } from "react-icons/io";
import dynamic from "next/dynamic";
import { IoMenu } from "react-icons/io5";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { usePathname } from "next/navigation";

const commonLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/aboutUs",
  },
  {
    name: "Travels",
    path: "/travels",
  },
];

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/ui/AuthButton/AuthButton"),
    {
      ssr: false,
    }
  );
  const ProfileLink = dynamic(
    () => import("@/components/ui/NavProtectedLinks/NavProtectedLinks"),
    {
      ssr: false,
    }
  );
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const pathname = usePathname();

  const openSidebar = () => {
    setSideBarOpen(true);
  };

  const closeSidebar = () => {
    setSideBarOpen(false);
  };

  return (
    <div className="relative">
      <div className="bg-[url('/bg-image.jpg')] bg-cover bg-center h-[40px] overflow-hidden">
        <div className=" bg-purple-950 opacity-80 w-full h-[40px] text-white p-2 absolute top-0 left-0">
          <div className="flex xl:container justify-between px-2">
            <p className="text-sm sm:text-base flex items-center">
              <span className="mr-2">
                <IoMdMail className="text-red-400" />
              </span>
              help@travelbuddy.com
            </p>
            <p className="text-sm sm:text-base flex items-center">
              <span className="mr-2">
                <IoMdCall className="text-yellow-400" />
              </span>
              +1 (0800) 123 456
            </p>
          </div>
        </div>
      </div>
      <div className="xl:container bg-white py-3 px-2 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={openSidebar}
            className="inline-block lg:hidden border-2 rounded-md w-[40px] h-[35px] mr-2 border-gray-700"
          >
            <IoMenu className="w-full h-full text-gray-700" />
          </button>
          <div className="flex items-center">
            <Image src={logo} height={70} width={70} alt="logo" />
            <span className="hidden sm:inline-block text-2xl text-gray-700 font-pacifico">
              Travel <span className="text-yellow-500">Buddy</span>
            </span>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 font-medium list-none text-gray-700">
          {commonLinks.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className="hover:bg-purple-200 py-1 px-2 duration-500 ease-in-out"
              >
                {item.name}
              </Link>
            );
          })}
          <ProfileLink />
        </div>
        <AuthButton />
      </div>
      <div
        className={`${
          sideBarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-[100vh] z-30 w-[350px] py-5 px-4 bg-violet-950 transition-all duration-500 ease-in-out`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={logo} height={60} width={60} alt="logo" />
            <span className="text-xl text-white font-pacifico">
              Travel <span className="text-yellow-500">Buddy</span>
            </span>
          </div>
          <button
            onClick={closeSidebar}
            className="inline-block lg:hidden border-2 p-2 rounded-md w-[40px] h-[35px] mr-2 "
          >
            <FaX className="w-full h-full text-white" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 font-medium list-none text-lg text-gray-200 py-10">
          {commonLinks.map((item, index) => {
            return (
              <Link key={index} href={item.path} onClick={closeSidebar}>
                {item.name}
              </Link>
            );
          })}

          <ProfileLink closeSideBar={closeSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
