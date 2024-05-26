"use client";
import Title from "@/components/ui/Title/Title";
import { travelDescription } from "@/constants/descriptions";
import { useGetTripsQuery } from "@/redux/features/trips/tripsApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { TFormInput, TTrip } from "@/types/travelsTypes";
import TravelsForm from "@/components/ui/TravelsForm/TravelsForm";
import SingleTravel from "@/components/ui/SingleTravel/SingleTravel";

const Travels = () => {
  const [queryObj, setQueryObj] = useState({});
  const { data: travelsData, isFetching } = useGetTripsQuery(queryObj);
  const { register, handleSubmit, reset } = useForm<TFormInput>();

  const pages = Math.ceil(travelsData?.meta?.total / travelsData?.meta?.limit);

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    setQueryObj(data);
  };

  const handlePage = (value: number) => {
    setQueryObj({ ...queryObj, page: value });
  };

  const handleClear = () => {
    setQueryObj({});
    reset();
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
          handleClear={handleClear}
        />
        <h2 className="text-white text-2xl font-montserrat mt-16 bg-purple-950 py-2 px-5 inline-block rounded-md">
          Total post found : {travelsData?.meta?.total}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-10 py-[80px]">
          {travelsData?.data?.map((item: TTrip) => {
            return <SingleTravel key={item.id} item={item} />;
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
