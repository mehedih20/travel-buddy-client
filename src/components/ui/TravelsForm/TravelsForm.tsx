import React from "react";
import Spinner from "../Spinner/Spinner";
import { FaSearch } from "react-icons/fa";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { TFormInput } from "@/types/travelsTypes";

type TravelsFormProps = {
  register: UseFormRegister<TFormInput>;
  isFetching: boolean;
  handleSubmit: UseFormHandleSubmit<TFormInput, undefined>;
  onSubmit: SubmitHandler<TFormInput>;
};

const TravelsForm = ({
  register,
  isFetching,
  handleSubmit,
  onSubmit,
}: TravelsFormProps) => {
  return (
    <>
      <form
        className="p-[60px] max-w-[1000px] bg-purple-600 rounded-3xl mx-auto -mt-14 relative z-10 shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Search by destination,travel type, keywords"
          className="input input-bordered w-full mb-5 text-gray-600 placeholder:text-gray-500 font-montserrat"
          {...register("searchTerm")}
        />
        <div className=" grid grid-cols-5 gap-3">
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
            {isFetching ? <Spinner /> : <FaSearch className="mr-1" />}
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default TravelsForm;
