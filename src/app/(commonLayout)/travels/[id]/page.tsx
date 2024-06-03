"use client";
import Title from "@/components/ui/Title/Title";
import { useGetSingleTripQuery } from "@/redux/features/trips/tripsApi";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Loading from "@/components/ui/Loading/Loading";

type TParams = {
  params: {
    id: string;
  };
};

const TravelDetailsPage = ({ params }: TParams) => {
  const [value, setValue] = useState(0);
  const { data: travelDetails, isFetching } = useGetSingleTripQuery(params.id);

  const totalImages = travelDetails?.data?.imageLinks?.length;

  const handleLeft = () => {
    setValue(value - 1);
  };
  const handleRight = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    if (value === totalImages) {
      setValue(0);
    }
    if (value < 0) {
      setValue(totalImages - 1);
    }
  }, [value, totalImages]);

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <div className="bg-violet-300">
          <Title
            title={travelDetails?.data?.destination}
            description={travelDetails?.data?.description}
            route={`travels/${travelDetails?.data?.id}`}
          />
          <div className="xl:container px-2 grid grid-cols-[repeat(auto-fit,_minmax(500px,_1fr))] gap-10 pt-[80px] pb-[120px]">
            <div className=" bg-purple-950 rounded-xl shadow-2xl h-[400px] w-full overflow-hidden flex flex-wrap relative">
              {travelDetails?.data?.imageLinks.map(
                (image: string, index: number) => {
                  return (
                    <Image
                      key={index}
                      src={image}
                      width={500}
                      height={400}
                      className={`w-full h-full rounded-lg ${
                        value !== index && "hidden"
                      }`}
                      alt="image"
                    />
                  );
                }
              )}
              <button
                onClick={handleLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 mr-2 text-white bg-purple-800 p-5 z-10 shadow-xl hover:bg-teal-800 rounded-full transition-all duration-300 ease-in-out"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 mr-2 text-white bg-purple-950 p-5 z-10 shadow-xl hover:bg-teal-800 rounded-full transition-all duration-300 ease-in-out"
              >
                <FaArrowRight />
              </button>
            </div>
            <div className="text-gray-700 font-montserrat font-semibold text-base">
              <div className="mb-5 grid grid-cols-6">
                <p>Travel type : </p>
                <p className="bg-blue-500 col-span-5 -mt-1 text-white font-semibold py-1 px-3 rounded-xl max-w-fit">
                  {travelDetails?.data?.travelType}
                </p>
              </div>

              <div className="mb-5 grid grid-cols-6">
                <span>Acvities :</span>
                <div className="col-span-5 flex flex-col text-gray-600">
                  {travelDetails?.data?.activities.map(
                    (item: string, index: number) => (
                      <p key={index} className="mb-2">
                        {item}
                      </p>
                    )
                  )}
                </div>
              </div>
              <div className="mb-5 grid grid-cols-6">
                <span>Itinerary :</span>
                <div className="col-span-5 flex flex-col text-gray-600">
                  {travelDetails?.data?.itinerary.map(
                    (item: string, index: number) => (
                      <p key={index} className="mb-2">
                        {item}
                      </p>
                    )
                  )}
                </div>
              </div>
              <div className="mb-10 grid grid-cols-6">
                <p>Duration : </p>
                <p className="col-span-5 flex items-center gap-3 -mt-1 text-white font-semibold ">
                  <span className="bg-green-500 py-1 px-3 rounded-xl max-w-fit">
                    {travelDetails?.data?.startDate}
                  </span>
                  <span className="text-gray-600">
                    {" "}
                    <FaArrowRight />{" "}
                  </span>
                  <span className="bg-red-600 py-1 px-3 rounded-xl max-w-fit">
                    {travelDetails?.data?.endDate}
                  </span>
                </p>
              </div>
              <div className="mb-5 grid grid-cols-6">
                <p>Budget : </p>
                <p className="col-span-5 text-gray-600 -mt-1 font-semibold text-2xl">
                  <span className="text-green-600">$</span>
                  {travelDetails?.data?.budget}
                </p>
              </div>
              <Link href={`request/${travelDetails?.data?.id}`}>
                <button className=" bg-yellow-400 text-gray-700 w-[300px] py-3 rounded-md mt-10 hover:bg-teal-900 hover:text-white transition-all duration-300 ease-in-out">
                  Make travel request
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TravelDetailsPage;
