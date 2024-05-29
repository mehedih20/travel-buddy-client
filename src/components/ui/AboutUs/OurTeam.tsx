"use client";
import member1 from "@/assets/About/man-1.jpg";
import member2 from "@/assets/About/man-3.webp";
import member3 from "@/assets/About/man-2.webp";
import teamVector from "@/assets/About/team1.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ourTeamData = [
  {
    img: member1,
    name: "John Doe",
    position: "CEO",
    description:
      "John leads our vision and strategy, ensuring Travel Buddy delivers exceptional experiences and growth opportunities for travelers and partners",
  },
  {
    img: member2,
    name: "Mona Lisa",
    position: "Cheif Designer",
    description:
      "Mona crafts our user interface with creativity and precision, making Travel Buddy visually appealing and user-friendly for all our travelers.",
  },
  {
    img: member3,
    name: "Adam Smith",
    position: "Cheif Developer",
    description:
      "Adam drives our technological innovations, developing robust and efficient solutions to enhance the functionality and performance of Travel Buddy.",
  },
];

const OurTeam = () => {
  const [value, setValue] = useState(0);

  const handleLeft = () => {
    setValue(value - 1);
  };

  const handleRight = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  useEffect(() => {
    if (value < 0) {
      setValue(ourTeamData.length - 1);
    } else if (value === ourTeamData.length) {
      setValue(0);
    }
  }, [value]);

  return (
    <div className="max-w-[1200px] mx-auto py-[100px] px-4 mb-10">
      <div className="text-center mb-12">
        <h1 className=" font-montserrat inline-block text-4xl uppercase border-b-4 border-b-yellow-400 pb-3">
          Meet Our Team
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-slate-100 p-20 flex flex-col justify-center items-center">
          <Image src={teamVector} alt="team-vector" width={500} height={500} />
        </div>
        <div className="bg-purple-800 min-h-[500px] py-10 relative overflow-hidden">
          {ourTeamData.map((item, index) => {
            let position = "translate-x-[100%] opacity-0";

            if (index === value) {
              position = "translate-x-0 opacity-100";
            }
            if (
              index === value - 1 ||
              (value === 0 && index === ourTeamData.length - 1)
            ) {
              position = "translate-x-[-100%] opacity-0";
            }

            return (
              <div
                key={index}
                className={`flex flex-col items-center absolute ${position} p-10 top-0 left-0 h-full w-full transition-all duration-500 ease-in-out`}
              >
                <div className=" flex justify-center items-center overflow-hidden rounded-full w-[200px] h-[200px] shadow-lg mb-5 border-2">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="scale-110"
                  />
                </div>
                <h2 className="text-white font-montserrat text-2xl font-bold">
                  {item.name}
                </h2>
                <h4 className="mb-5 font-montserrat font-semibold text-slate-300">
                  {item.position}
                </h4>
                <p className="text-center font-montserrat text-white max-w-[400px]">
                  {item.description}
                </p>
              </div>
            );
          })}
          <button
            onClick={handleLeft}
            className="absolute top-1/2 left-10 -translate-y-1/2 text-xl bg-slate-200/50 text-white p-3 rounded-full hover:bg-violet-950 transition-all duration-300 ease-in-out"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleRight}
            className="absolute top-1/2 right-10 -translate-y-1/2 text-xl bg-slate-200/50 text-white p-3 rounded-full hover:bg-violet-950 transition-all duration-300 ease-in-out"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
