"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.push("/")}
        className=" fixed md:bottom-28 bottom-20 right-5 md:right-10 text-white bg-purple-800 p-5 z-50 shadow-xl hover:bg-teal-800 rounded-full transition-all duration-300 ease-in-out"
      >
        {" "}
        <FaHome />
      </button>
      <button
        onClick={() => router.back()}
        className=" fixed bottom-4 md:bottom-10 right-5 md:right-10 text-white bg-purple-800 p-5 z-10 shadow-xl hover:bg-teal-800 rounded-full transition-all duration-300 ease-in-out"
      >
        {" "}
        <FaArrowLeft />
      </button>
    </>
  );
};

export default BackButton;
