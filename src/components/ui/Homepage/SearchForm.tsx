"use client";
import { useState } from "react";
import { useGetTripsQuery } from "@/redux/features/trips/tripsApi";
import { TTravelsFormInput } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import TravelsForm from "../Forms/TravelsForm/TravelsForm";
import SearchSideScreen from "./SearchSideScreen";
import { toast } from "sonner";

const isObjectEmpty = (obj: Object): boolean => {
  return Object.keys(obj).length === 0;
};

const areObjectPropertiesEmpty = (obj: Object): boolean => {
  return Object.values(obj).every((value) => value === "");
};

const SearchForm = () => {
  const [openSideScreen, setOpenSideScreen] = useState(false);
  const [queryObj, setQueryObj] = useState({});
  const { data: travelsData, isFetching } = useGetTripsQuery(queryObj, {
    skip: isObjectEmpty(queryObj) || areObjectPropertiesEmpty(queryObj),
  });
  const { register, handleSubmit, reset } = useForm<TTravelsFormInput>();

  const pages = Math.ceil(travelsData?.meta?.total / travelsData?.meta?.limit);

  const handlePage = (value: number) => {
    setQueryObj({ ...queryObj, page: value });
  };

  const handleClear = () => {
    setQueryObj({});
    reset();
  };

  const handleCloseSideScreen = () => {
    setOpenSideScreen(false);
  };

  const onSubmit: SubmitHandler<TTravelsFormInput> = async (data) => {
    if (isObjectEmpty(data) || areObjectPropertiesEmpty(data)) {
      toast.error("Please fill up one of the field!");
      return;
    }

    setQueryObj(data);
    setOpenSideScreen(true);
  };

  return (
    <>
      <div className=" bg-violet-300 pt-[80px] pb-[100px] px-4">
        <div className="xl:container">
          <div className="text-center">
            <h2 className="text-3xl inline-block text-gray-500 font-montserrat mb-10 pb-2  uppercase">
              Explore the World with Us
            </h2>
          </div>
          <TravelsForm
            register={register}
            isFetching={isFetching}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            handleClear={handleClear}
          />
        </div>
      </div>
      <SearchSideScreen
        travelsData={travelsData}
        pages={pages}
        handlePage={handlePage}
        openSideScreen={openSideScreen}
        handleCloseSideScreen={handleCloseSideScreen}
        isFetching={isFetching}
      />
    </>
  );
};

export default SearchForm;
