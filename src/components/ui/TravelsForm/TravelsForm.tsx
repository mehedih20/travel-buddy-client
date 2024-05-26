import React from "react";
import Spinner from "../Spinner/Spinner";
import { FaSearch, FaTrash } from "react-icons/fa";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { TFormInput } from "@/types/travelsTypes";
import { useGetTravelTypesQuery } from "@/redux/features/trips/tripsApi";

type TravelsFormProps = {
  register: UseFormRegister<TFormInput>;
  isFetching: boolean;
  handleSubmit: UseFormHandleSubmit<TFormInput, undefined>;
  onSubmit: SubmitHandler<TFormInput>;
  handleClear: () => void;
};

const TravelsForm = ({
  register,
  isFetching,
  handleSubmit,
  onSubmit,
  handleClear,
}: TravelsFormProps) => {
  const { data: travelTypesData } = useGetTravelTypesQuery(undefined);

  return (
    <>
      <form
        className="p-[60px] max-w-[1000px] bg-purple-600 rounded-3xl mx-auto -mt-14 relative z-10 shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" grid grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Search by destination, keywords"
            className="input input-bordered w-full mb-5 text-gray-600 placeholder:text-gray-500 font-montserrat col-span-3"
            {...register("searchTerm")}
          />
          <select
            className="select select-bordered w-full text-base text-gray-600 font-montserrat"
            {...register("travelType")}
          >
            <option label="Travel type" value=""></option>
            {travelTypesData?.data?.map((item: string, index: number) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className=" grid grid-cols-6 gap-3">
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full col-span-2 text-gray-500 font-montserrat"
            {...register("startDate")}
          />
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full col-span-2 text-gray-500 font-montserrat"
            {...register("endDate")}
          />
          <button
            type="submit"
            className="flex items-center bg-orange-500 py-3 w-full rounded-lg text-white justify-center font-bold font-montserrat hover:bg-orange-800 transition-all duration-500 ease-in-out"
          >
            {isFetching ? <Spinner /> : <FaSearch className="mr-1 -mt-0.5" />}
            Search
          </button>
          <button
            onClick={handleClear}
            type="submit"
            className="flex items-center bg-red-800 py-3 w-full rounded-lg text-white justify-center font-bold font-montserrat hover:bg-red-950 transition-all duration-500 ease-in-out"
          >
            <FaTrash className="mr-1 -mt-0.5" />
            Clear
          </button>
        </div>
      </form>
    </>
  );
};

export default TravelsForm;
