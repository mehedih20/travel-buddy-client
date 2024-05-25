"use client";
import Title from "@/components/ui/Title/Title";
import { travelDescription } from "@/constants/descriptions";
import { useGetTripsQuery } from "@/redux/features/trips/tripsApi";
import cardImg from "@/assets/Homepage/travelling-3.jpg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { TFormInput, TTrip } from "@/types/travelsTypes";
import TravelsForm from "@/components/ui/TravelsForm/TravelsForm";

const Travels = () => {
  const [queryObj, setQueryObj] = useState({});
  const { data: travelsData, isFetching } = useGetTripsQuery(queryObj);
  const { register, handleSubmit } = useForm<TFormInput>();

  const pages = Math.ceil(travelsData?.meta?.total / travelsData?.meta?.limit);

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    setQueryObj(data);
  };

  const handlePage = (value: number) => {
    setQueryObj({ ...queryObj, page: value });
  };

  return (
    <div className="bg-purple-800">
      <Title title="Travels" route="travels" description={travelDescription} />
      <div className="px-2 xl:container pb-10">
        <TravelsForm
          register={register}
          isFetching={isFetching}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <h2 className="text-white text-2xl font-montserrat mt-16 bg-purple-950 py-2 px-5 inline-block rounded-md">
          Total post found : {travelsData?.meta?.total}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-10 py-[80px]">
          {travelsData?.data?.map((item: TTrip) => {
            return (
              <div
                key={item.id}
                className="bg-white p-5 rounded-lg shadow-lg flex flex-col"
              >
                <Image
                  src={cardImg}
                  alt="card-img"
                  className=" w-full xl:h-[250px] rounded-tl-3xl "
                />
                <h2 className="py-4 bg-purple-200 rounded-br-full text-orange-600 font-montserrat font-bold my-3 pl-3 text-lg w-full">
                  {item.destination}
                </h2>
                <h4 className=" bg-blue-500 text-sm text-white font-semibold py-0.5 px-5 rounded-xl mb-5 max-w-fit">
                  {item.travelType}
                </h4>
                <p className="text-gray-600 mb-5">
                  {item.description} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sunt, hic deleniti vel iusto adipisci qui
                  quia consequuntur porro sit officiis.
                </p>
                <div className="mt-auto">
                  <p className="flex items-center gap-3 mb-5">
                    <span className="bg-green-200 py-0.5 px-3">
                      {item.startDate}
                    </span>{" "}
                    <FaArrowRightLong className="text-blue-600" />{" "}
                    <span className="bg-red-200 py-0.5 px-3">
                      {item.endDate}
                    </span>
                  </p>
                  <p className="text-3xl text-cyan-800 mb-3">${item.budget}</p>
                  <button className="bg-yellow-200 py-3 w-full rounded-md font-montserrat font-semibold text-gray-700 hover:bg-yellow-500 transition-all duration-300 ease-in-out mt-5">
                    Show Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mb-20">
          <div className=" flex gap-2 flex-wrap justify-center">
            {travelsData?.meta &&
              Array(pages)
                .fill(null)
                .map((_, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handlePage(index + 1)}
                      className={`w-10 h-10 rounded-xl ${
                        travelsData?.meta?.page === index + 1
                          ? "bg-yellow-400 cursor-not-allowed"
                          : "bg-orange-700 hover:bg-violet-950 hover:text-white transition-all duration-300 ease-in-out"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travels;
