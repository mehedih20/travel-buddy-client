import Image from "next/image";
import aboutImg1 from "@/assets/About/about-1.webp";
import aboutImg2 from "@/assets/About/about-2.webp";

const OurMission = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 py-[100px] px-2">
        <div className="px-10 pb-10 flex">
          <div className="relative h-fit">
            <div className="bg-teal-200 rounded-md w-full p-2 h-fit shadow-2xl">
              <Image
                src={aboutImg1}
                alt="about-img-1"
                className="rounded-md"
                width={400}
              />
            </div>
            <div className="bg-yellow-200 absolute bottom-0 right-0 -rotate-12 shadow-2xl rounded-md p-2 ">
              <Image
                src={aboutImg2}
                alt="about-img-1"
                className="rounded-md"
                width={200}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl inline-block text-gray-700 font-montserrat mb-7 pb-2 border-b-4 border-b-yellow-400 uppercase">
            Our Mission
          </h1>
          <p className="text-base font-montserrat mb-5 text-justify">
            Travel Buddy is powered by a passionate team of travel enthusiasts,
            tech innovators, and customer service experts. Our diverse
            backgrounds and collective love for exploration fuel our dedication
            to creating a user-friendly, reliable, and comprehensive travel
            platform. With years of travel experience, we know the importance of
            having trustworthy information and good company on the road. Our
            goal is to make your travel planning effortless and your adventures
            extraordinary by connecting you with companions who share your
            interests and travel style.
          </p>
          <p className="text-base font-montserrat mb-5 text-justify">
            Here, our mission is to transform the way you travel. We understand
            that exploring new destinations is more than just ticking places off
            a list – it&apos;s about creating lasting memories, discovering
            hidden gems, and building meaningful connections. That&apos;s why we
            provide a robust platform where you can find like-minded travel
            companions, receive expert travel advice, and access personalized
            recommendations. Whether you&apos;re traveling solo, with friends,
            or seeking new acquaintances, Travel Buddy is here to enhance your
            journey every step of the way.
          </p>
          <p className="text-base font-montserrat font-medium mt-2">
            Travel Smart, Travel Together: Meet Your New Best Friend!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
