"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaHandPointRight } from "react-icons/fa";

const travelTipsData = [
  {
    title: "Packing Efficiently",
    points: [
      "Make List of Essentials",
      "Use Packing Cubes",
      "Roll Your Clothes",
      "Pack Versatile Clothing",
      "Limit shoes",
    ],
  },
  {
    title: "Staying Safe",
    points: [
      "Research Your Destination",
      "Keep Copies if Important Documents",
      "Use Secure Bags",
      "Stay Connected",
      "Stay Aware of Your Surroundings",
    ],
  },
  {
    title: "Managing Money",
    points: [
      "Notify Your Bank",
      "Use Multiple Payment Methods",
      "Understand Exchange Rates",
      "Track Your Spending",
      "Be Wary of Scams",
    ],
  },
  {
    title: "Staying Healthy",
    points: [
      "Stay Hydrated",
      "Eat Wisely",
      "Get Necessary Vaccinations",
      "Protect Against Sun Exposure",
      "Stay Active",
    ],
  },
  {
    title: "Making the Most of Your Trip",
    points: [
      "Plan Ahead, But Stay Flexible",
      "Learn Basic Phrases",
      "Immerse in Local Culture",
      "Document Your Journey",
      "Be Environmentally Conscious",
    ],
  },
];

const TravelTips = () => {
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
      setValue(travelTipsData.length - 1);
    } else if (value === travelTipsData.length) {
      setValue(0);
    }
  }, [value]);

  return (
    <div className="bg-violet-300">
      <div className="max-w-[1400px] mx-auto py-[140px] px-4">
        <div className="grid lg:grid-cols-2 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-[url('/bg-image-2.webp')] bg-cover bg-bottom">
            <div className="bg-violet-200/80 p-5 md:p-10 flex flex-col items-center h-full">
              <h2 className="font-semibold text-gray-800 text-3xl text-center mb-8">
                Essential Travel Hacks for Every Explorer
              </h2>
              <p className=" text-justify font-medium text-gray-800">
                Discover a treasure trove of expert advice and insider secrets
                designed to make your adventures smooth, safe, and
                unforgettable. Our comprehensive Travel Tips and Guides section
                covers everything from efficient packing strategies and savvy
                booking tips to essential safety advice and cultural insights.
                Whether you&apos;re a seasoned traveler or embarking on your
                first journey, our tips will help you navigate any destination
                with confidence and ease. Dive in to learn how to manage your
                travel budget, stay healthy on the road, and immerse yourself in
                local cultures for a truly enriching travel experience. Make the
                most of your trip with our practical guides and become a travel
                pro today!
              </p>
              <p className="flex items-center mt-10 text-sm font-semibold text-gray-700 py-2 px-5 bg-purple-200 shadow-xl uppercase rounded-md">
                Only for you{" "}
                <FaArrowRight className="ml-2 -mt-1 animate-pulse" />
              </p>
            </div>
          </div>
          <div className=" bg-gradient-to-bl from-violet-600 to-violet-400 min-h-[550px] py-10 relative overflow-hidden">
            {travelTipsData.map((item, index) => {
              let position = "translate-x-[100%] opacity-0";

              if (index === value) {
                position = "translate-x-0 opacity-100";
              }
              if (
                index === value - 1 ||
                (value === 0 && index === travelTipsData.length - 1)
              ) {
                position = "translate-x-[-100%] opacity-0";
              }

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center absolute ${position} p-10 top-0 left-0 h-full w-full transition-all duration-500 ease-in-out`}
                >
                  <div className="bg-violet-200 w-[320px] md:w-[400px] h-full rounded-md overflow-hidden">
                    <div className="py-10 bg-violet-900 px-5">
                      <h2 className="text-white text-2xl font-bold">
                        {item.title}
                      </h2>
                    </div>
                    <div className="p-5">
                      {item.points.map((point, index) => {
                        return (
                          <p
                            key={index}
                            className="font-montserrat text-lg font-semibold flex items-center mb-4"
                          >
                            <FaHandPointRight className="mr-3 text-green-600" />
                            {point}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
            <button
              onClick={handleLeft}
              className="absolute top-1/2 left-10 -translate-y-1/2 text-xl bg-slate-400/50 text-white p-3 shadow-md rounded-full hover:bg-violet-950 transition-all duration-300 ease-in-out"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleRight}
              className="absolute top-1/2 right-10 -translate-y-1/2 text-xl bg-slate-400/50 text-white p-3 shadow-md rounded-full hover:bg-violet-950 transition-all duration-300 ease-in-out"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
