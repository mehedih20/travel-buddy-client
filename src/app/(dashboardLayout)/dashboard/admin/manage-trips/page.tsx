"use client";
import TravelsForm from "@/components/ui/Forms/TravelsForm/TravelsForm";
import PlainLoading from "@/components/ui/Loading/PlainLoading";
import ManageSingleTravel from "@/components/ui/Dashboard/ManageSingleTravel/ManageSingleTravel";
import { useGetTripsQuery } from "@/redux/features/trips/tripsApi";
import { TTravelsFormInput } from "@/types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ManageTrips = () => {
  const [queryObj, setQueryObj] = useState({});
  const {
    data: tripsData,
    isFetching,
    refetch,
  } = useGetTripsQuery({ ...queryObj, limit: 10 });
  const { register, handleSubmit, reset } = useForm<TTravelsFormInput>();

  const pages = Math.ceil(tripsData?.meta?.total / tripsData?.meta?.limit);

  const onSubmit: SubmitHandler<TTravelsFormInput> = async (data) => {
    setQueryObj(data);
  };

  const handlePage = (value: number) => {
    setQueryObj({ ...queryObj, page: value });
  };

  const handleClear = () => {
    setQueryObj({});
    reset();
  };
  const handleRefetch = () => {
    refetch();
  };

  return (
    <>
      <div className="pb-[150px] px-2">
        <h1 className="font-semibold  inline-block text-3xl text-violet-950 mb-14">
          Manage Trips
        </h1>
        <TravelsForm
          register={register}
          isFetching={isFetching}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          handleClear={handleClear}
        />
        {isFetching ? (
          <PlainLoading />
        ) : (
          <div className="grid xl:grid-cols-2 gap-10 xl:container xl:px-10 pb-[100px] mt-20">
            {tripsData &&
              tripsData.data.map((item: any) => (
                <ManageSingleTravel
                  key={item.id}
                  item={item}
                  handleRefetch={handleRefetch}
                />
              ))}
          </div>
        )}

        <div className="text-center mb-20">
          <div className=" flex gap-2 flex-wrap justify-center">
            {tripsData?.meta &&
              Array(pages)
                .fill(null)
                .map((_, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handlePage(index + 1)}
                      className={`w-10 h-10 rounded-xl ${
                        tripsData?.meta?.page === index + 1
                          ? "bg-yellow-400 cursor-not-allowed"
                          : "bg-white hover:bg-violet-950 hover:text-white transition-all duration-300 ease-in-out"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageTrips;
