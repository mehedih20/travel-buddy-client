import Image from "next/image";
import img1 from "@/assets/Homepage/hero-vector.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="py-[100px] bg-purple-800">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={img1} alt="hero-img" className="max-w-xl" />
          <div>
            <h1 className="mb-10 text-5xl max-w-2xl font-montserrat text-white  font-bold">
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
              className="btn mt-5 bg-orange-600 shadow-lg border-none text-white hover:text-black animate-pulsate px-10 text-lg font-macondo"
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
