"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const backRestrictedPaths = ["/", "/login", "/register"];

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const homeConditions = pathname === "/login" || pathname === "/register";

  return (
    <>
      {pathname !== "/" && (
        <Link
          href="/"
          className={`fixed ${
            homeConditions ? "bottom-10" : "bottom-20 md:bottom-28"
          } right-5 border-2 border-gray-500 md:right-10 text-white bg-violet-950 p-5 z-30 shadow-xl hover:bg-teal-800 rounded-full transition-all duration-300 ease-in-out`}
        >
          {" "}
          <FaHome />
        </Link>
      )}
      {!backRestrictedPaths.includes(pathname) && (
        <button
          onClick={() => router.back()}
          className=" fixed bottom-4 md:bottom-10 right-5 md:right-10 text-white bg-purple-950 border-2 border-gray-500 p-5 z-30 shadow-xl hover:bg-teal-800 rounded-full transition-all duration-300 ease-in-out"
        >
          {" "}
          <FaArrowLeft />
        </button>
      )}
    </>
  );
};

export default BackButton;
