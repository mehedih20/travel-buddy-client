import React from "react";
import loadingImg from "@/assets/Homepage/travelling-3.jpg";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="relative text-3xl min-h-[80vh]">
      <div className=" absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image src={loadingImg} className="w-full" alt="loading-bg" />
      </div>
      <div className=" absolute top-0 left-0 w-full h-full bg-purple-950 opacity-80 flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-white"></span>
      </div>
    </div>
  );
};

export default Loading;
