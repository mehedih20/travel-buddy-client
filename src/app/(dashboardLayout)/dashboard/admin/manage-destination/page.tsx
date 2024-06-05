"use client";
import AddDestinationModal from "@/components/ui/Dashboard/AddDestinationModal/AddDestinationModal";
import DestinationManageCard from "@/components/ui/Dashboard/DestinationManageCard/DestinationManageCard";
import PlainLoading from "@/components/ui/Loading/PlainLoading";
import { useGetDestinationsQuery } from "@/redux/features/destinations/destinationsApi";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const ManageDestinationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: destination, isFetching } = useGetDestinationsQuery({});

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="pb-[150px] px-2">
        <h1 className="font-semibold  inline-block text-3xl text-violet-950 mb-14">
          Manage Destination
        </h1>
        <button
          type="button"
          onClick={handleModalOpen}
          className="flex justify-center items-center bg-purple-800 text-white py-4 w-[200px] rounded-md mb-10 font-semibold hover:bg-teal-950 transition-all duration-300 ease-in-out"
        >
          <FaPlus className="-mt-0.5 mr-1" /> Add Destination
        </button>
        {isFetching ? (
          <PlainLoading />
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:container gap-10 px-2">
            {destination &&
              destination.data.map((item: any, index: number) => (
                <DestinationManageCard destination={item} key={index} />
              ))}
          </div>
        )}
      </div>
      <AddDestinationModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
      />
    </>
  );
};

export default ManageDestinationPage;
