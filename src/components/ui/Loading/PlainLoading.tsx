import React from "react";
import loadingImg from "@/assets/Homepage/travelling-3.jpg";
import Image from "next/image";

const PlainLoading = () => {
  return (
    <div className="text-3xl min-h-[60vh] flex justify-center items-center">
      <span className="loading loading-ring loading-lg text-white"></span>
    </div>
  );
};

export default PlainLoading;
