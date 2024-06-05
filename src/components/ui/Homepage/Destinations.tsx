"use client";
import { useGetDestinationsQuery } from "@/redux/features/destinations/destinationsApi";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Destinations = () => {
  const { data: destinations } = useGetDestinationsQuery({});

  return (
    <div>
      <div className="bg-gray-100 pt-[80px] pb-[120px] px-4">
        <div className="xl:container">
          <div className="text-center">
            <h2 className="text-4xl inline-block text-gray-700 font-montserrat mb-14 pb-2  uppercase">
              Most desired destinations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {destinations?.data?.map((destination: any) => {
              return (
                <div
                  key={destination.id}
                  className="bg-white overflow-hidden shadow-xl p-4 border border-gray-200"
                >
                  <Image
                    src={destination.imageUrl}
                    alt={destination.name}
                    width={600}
                    height={300}
                    className="h-[280px]"
                  />
                  <div className="mt-5 flex flex-col">
                    <h3 className="font-bold bg-purple-100 py-2 px-2 text-purple-950 text-2xl mb-5">
                      {destination.name}
                    </h3>
                    <p className="text-justify text-gray-600 px-2 min-h-[180px]">
                      {destination.description}
                    </p>
                    <p className="px-2 mt-5 flex text-orange-500 mb-5">
                      {Array(destination?.rating)
                        .fill(null)
                        .map((_, index) => (
                          <FaStar key={index} />
                        ))}
                      {}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
