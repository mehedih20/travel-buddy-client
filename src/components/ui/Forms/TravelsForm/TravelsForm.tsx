import React from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { TTravelsFormInput } from "@/types/travelsTypes";
import { useGetTravelTypesQuery } from "@/redux/features/trips/tripsApi";
import Spinner from "../../Spinner/Spinner";
import { usePathname } from "next/navigation";

type TravelsFormProps = {
  register: UseFormRegister<TTravelsFormInput>;
  isFetching: boolean;
  handleSubmit: UseFormHandleSubmit<TTravelsFormInput, undefined>;
  onSubmit: SubmitHandler<TTravelsFormInput>;
  handleClear: () => void;
};

const TravelsForm = ({
  register,
  isFetching,
  handleSubmit,
  onSubmit,
  handleClear,
}: TravelsFormProps) => {
  const pathname = usePathname();
  const { data: travelTypesData } = useGetTravelTypesQuery(undefined);

  return (
    <>
      <form
        className={`max-w-[1000px] bg-[url('/bg-image.jpg')] bg-cover bg-top rounded-lg md:rounded-3xl mx-auto ${
          pathname === "/travels" && "-mt-14"
        } shadow-2xl`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-8 md:p-[60px] w-full h-full bg-purple-900/80 rounded-lg md:rounded-3xl border border-gray-500">
          <div className=" grid md:grid-cols-4 md:gap-3">
            <input
              type="text"
              placeholder="Search by destination, keywords"
              className="input input-bordered w-full mb-3 bg-white text-gray-600 placeholder:text-gray-500 font-montserrat md:col-span-3"
              {...register("searchTerm")}
            />
            <select
              className="mb-3 select select-bordered w-full text-base bg-white text-gray-600 font-montserrat"
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
          <div className=" grid md:grid-cols-6 gap-3">
            <input
              type="date"
              className="input input-bordered bg-white w-full col-span-2 text-gray-600 font-montserrat"
              {...register("startDate")}
            />
            <input
              type="date"
              className="input input-bordered bg-white w-full col-span-2 text-gray-600 font-montserrat"
              {...register("endDate")}
            />
            <button
              type="submit"
              className="flex items-center bg-orange-500 py-1 w-full rounded-lg text-white justify-center font-bold font-montserrat hover:bg-orange-800 transition-all duration-500 ease-in-out"
            >
              {isFetching ? <Spinner /> : <FaSearch className="mr-1 -mt-0.5" />}
              Search
            </button>
            <button
              type="reset"
              onClick={handleClear}
              className="flex items-center bg-red-800 py-3 w-full rounded-lg text-white justify-center font-bold font-montserrat hover:bg-red-950 transition-all duration-500 ease-in-out"
            >
              <FaTrash className="mr-1 -mt-0.5" />
              Clear
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TravelsForm;
