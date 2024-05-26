"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.back()}
        className=" fixed bottom-10 right-10 text-white bg-purple-950 p-5 z-10 shadow-xl hover:bg-teal-800 rounded-full transition-all duration-300 ease-in-out"
      >
        {" "}
        <FaArrowLeft />
      </button>
    </>
  );
};

export default BackButton;
