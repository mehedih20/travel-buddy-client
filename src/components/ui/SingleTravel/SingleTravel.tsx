import { TTrip } from "@/types/travelsTypes";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const SingleTravel = ({ item }: { item: TTrip }) => {
  return (
    <div
      key={item.id}
      className="bg-white p-5 rounded-lg shadow-lg flex flex-col"
    >
      <Image
        src={item.imageLinks[0]}
        alt="card-img"
        width={600}
        height={100}
        className=" w-full xl:h-[250px] rounded-tl-3xl "
      />
      <h2 className="py-4 bg-purple-200 rounded-br-full text-orange-600 font-montserrat font-bold my-3 pl-3 text-lg w-full">
        {item.destination}
      </h2>
      <h4 className=" bg-blue-500 text-sm text-white font-semibold py-0.5 px-5 rounded-xl mb-5 max-w-fit">
        {item.travelType}
      </h4>
      <p className="text-gray-600 mb-5">{item.description}</p>
      <div className="mt-auto">
        <p className="flex items-center gap-3 mb-5">
          <span className="bg-green-200 py-0.5 px-3">{item.startDate}</span>{" "}
          <FaArrowRightLong className="text-blue-600" />{" "}
          <span className="bg-red-200 py-0.5 px-3">{item.endDate}</span>
        </p>
        <p className="text-3xl text-cyan-800 mb-3">${item.budget}</p>
        <Link href={`travels/${item.id}`}>
          <button className="bg-yellow-200 py-3 w-full rounded-md font-montserrat font-semibold text-gray-700 hover:bg-yellow-500 transition-all duration-300 ease-in-out mt-5">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTravel;
