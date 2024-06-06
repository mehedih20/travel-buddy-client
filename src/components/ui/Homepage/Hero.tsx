"use client";
import Image from "next/image";
import img1 from "@/assets/Homepage/hero-vector.png";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.services";
import { userPayload } from "@/types";

const Hero = () => {
  const userInfo = getUserInfo() as userPayload;

  const notRegularUser =
    userInfo?.role === "admin" || userInfo?.role === "super-admin";

  return (
    <div className="overflow-hidden bg-[url('/bg-image.jpg')] bg-cover bg-center">
      <div className="hero bg-purple-950 opacity-80 pt-[50px] pb-[100px] lg:pt-[100px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={img1} alt="hero-img" width={500} height={500} />
          <div>
            <h1 className="mb-10 text-4xl xl:text-5xl max-w-2xl font-montserrat text-white  font-bold">
              Travel Smart, Travel Together: Meet Your New Best Friend!
            </h1>
            <p className="mb-10 text-lg text-gray-300">
              Welcome to Travel Buddy, where travel enthusiasts find the perfect
              companions for their adventures. Whether it’s a weekend getaway or
              a globe-trotting expedition, connect with like-minded travelers
              and make every trip unforgettable.
              <br /> <br />
              Join us today to start your journey with new friends. Travel
              smart, travel together, and experience the world in a whole new
              way!
            </p>
            <Link
              href="/trip-post"
              className={`${
                notRegularUser && "hidden"
              } btn mt-5 bg-orange-600 shadow-lg border-none text-white hover:text-black animate-pulsate px-10 text-lg font-macondo`}
            >
              Share Your Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
