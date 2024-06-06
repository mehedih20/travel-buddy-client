"use client";
import Title from "@/components/ui/Title/Title";
import { useGetSingleTripQuery } from "@/redux/features/trips/tripsApi";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Loading from "@/components/ui/Loading/Loading";
import { getUserInfo } from "@/services/auth.services";
import { userPayload } from "@/types";

type TParams = {
  params: {
    id: string;
  };
};

const TravelDetailsPage = ({ params }: TParams) => {
  const [value, setValue] = useState(0);
  const { data: travelDetails, isFetching } = useGetSingleTripQuery(params.id);
  const userInfo = getUserInfo() as userPayload;

  const notRegularUser =
    userInfo?.role === "admin" || userInfo?.role === "super-admin";

  const totalImages = travelDetails?.data?.imageLinks?.length;

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
      setValue(totalImages - 1);
    } else if (value === totalImages) {
      setValue(0);
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
          <div className="xl:container px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 pt-[80px] pb-[150px]">
            <div>
              <div className="h-[300px] md:h-[400px] relative overflow-hidden rounded-lg">
                {travelDetails?.data?.imageLinks.map(
                  (item: any, index: number) => {
                    let position = "translate-x-[100%] opacity-0";

                    if (index === value) {
                      position = "translate-x-0 opacity-100";
                    }
                    if (
                      index === value - 1 ||
                      (value === 0 &&
                        index === travelDetails?.data?.imageLinks.length - 1)
                    ) {
                      position = "translate-x-[-100%] opacity-0";
                    }

                    return (
                      <div
                        key={index}
                        className={`flex flex-col items-center absolute ${position} p-5 top-0 left-0 h-full w-full transition-all duration-500 ease-in-out bg-violet-400`}
                      >
                        <Image
                          src={item}
                          alt="image"
                          width={550}
                          height={400}
                          className="rounded-lg w-full h-full"
                        />
                      </div>
                    );
                  }
                )}
                <button
                  onClick={handleLeft}
                  className="absolute top-1/2 left-10 -translate-y-1/2 text-xl bg-slate-400/50 text-white p-3 rounded-full hover:bg-violet-950 transition-all duration-300 ease-in-out"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={handleRight}
                  className="absolute top-1/2 right-10 -translate-y-1/2 text-xl bg-slate-400/50 text-white p-3 rounded-full hover:bg-violet-950 transition-all duration-300 ease-in-out"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="text-gray-700 font-montserrat font-semibold text-base">
              <div className="mb-5 grid grid-cols-4 lg:grid-cols-5">
                <p className="col-span-1">Travel type: </p>
                <p className="bg-blue-500 col-span-3 lg:col-span-4 -mt-1 text-white font-semibold py-1 px-3 rounded-xl max-w-fit">
                  {travelDetails?.data?.travelType}
                </p>
              </div>

              <div className="mb-5 grid grid-cols-4 lg:grid-cols-5">
                <span>Acvities:</span>
                <div className="col-span-3 lg:col-span-4 flex flex-col text-gray-600">
                  {travelDetails?.data?.activities.map(
                    (item: string, index: number) => (
                      <p key={index} className="mb-2">
                        {item}
                      </p>
                    )
                  )}
                </div>
              </div>
              <div className="mb-5 grid grid-cols-4 lg:grid-cols-5">
                <span>Itinerary:</span>
                <div className="col-span-3 lg:col-span-4 flex flex-col text-gray-600">
                  {travelDetails?.data?.itinerary.map(
                    (item: string, index: number) => (
                      <p key={index} className="mb-2">
                        {item}
                      </p>
                    )
                  )}
                </div>
              </div>
              <div className="mb-10 grid grid-cols-4 lg:grid-cols-5">
                <p>Duration: </p>
                <p className="col-span-3 lg:col-span-4 flex items-center gap-3 -mt-1 text-white font-semibold ">
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
              <div className="mb-5 grid grid-cols-4 lg:grid-cols-5">
                <p>Budget: </p>
                <p className="col-span-3 lg:col-span-4 text-gray-600 -mt-1 font-semibold text-2xl">
                  <span className="text-green-600">$</span>
                  {travelDetails?.data?.budget}
                </p>
              </div>
              <Link href={`request/${travelDetails?.data?.id}`}>
                <button
                  className={`${
                    notRegularUser && "hidden"
                  } bg-yellow-400 text-gray-700 w-[300px] py-3 rounded-md mt-10 hover:bg-teal-900 hover:text-white transition-all duration-300 ease-in-out`}
                >
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
