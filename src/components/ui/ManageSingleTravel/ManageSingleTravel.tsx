"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "sonner";
import Spinner from "../Spinner/Spinner";
import { useDeleteTripMutation } from "@/redux/features/trips/tripsApi";
import { useGetSingleTripTravelBuddiesQuery } from "@/redux/features/travelBuddy/travelBuddyApi";
import EditPostModal from "../EditPostModal/EditPostModal";
import { useRef, useState } from "react";

type TProps = {
  item: any;
  handleRefetch: () => void;
};

const ManageSingleTravel = ({ item, handleRefetch }: TProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteTrip, { isLoading: deleteLoading }] = useDeleteTripMutation();
  const { data: existingBuddyData, isFetching } =
    useGetSingleTripTravelBuddiesQuery(item.id);

  const handleDelete = async () => {
    try {
      const result: any = await deleteTrip(item.id).unwrap();

      if (result?.success) {
        toast.success(result?.message);
        handleRefetch();
      }
    } catch (err) {
      console.log(err);
      toast("Something went wrong");
    }
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  const closeDeleteModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <div className="bg-white p-5 shadow-xl gap-2 grid xl:grid-cols-3 rounded-md">
        <Image
          src={item.imageLinks[0]}
          alt={item.destination}
          width={200}
          height={200}
          className=" max-h-[120px]"
        />
        <div className="col-span-2">
          <h2 className="font-bold text-violet-950 mb-2 text-lg">
            {item.destination}
          </h2>
          <p className="mb-5">
            {(item.description as string).substring(0, 100)}...
          </p>
          <div className="mb-5">
            <p className="col-span-5 flex items-center gap-2 -mt-1 text-white font-semibold text-sm">
              <span className="bg-green-500 py-1 px-3 rounded-xl max-w-fit">
                {item.startDate}
              </span>
              <span className="text-gray-700">
                {" "}
                <FaArrowRight />{" "}
              </span>
              <span className="bg-blue-600 py-1 px-3 rounded-xl max-w-fit">
                {item.endDate}
              </span>
            </p>
          </div>
          <p className="mb-6 font-bold text-gray-800 px-1 py-0.5 text-lg rounded-xl bg-slate-200 inline-block">
            <span className="text-green-800">$</span>
            {item.budget}
          </p>
          <div className="flex gap-3 mb-5">
            <button
              onClick={handleOpenEditModal}
              className="w-[150px] bg-purple-800 py-2 text-white font-semibold hover:bg-teal-950 duration-300 ease-in-out rounded-md"
            >
              Edit
            </button>
            <button
              onClick={openDeleteModal}
              className="w-[150px] cursor-pointer flex justify-center items-center bg-red-600 py-2 text-white font-semibold hover:bg-teal-950 duration-300 ease-in-out rounded-md"
            >
              {deleteLoading && <Spinner />} Delete
            </button>
          </div>
        </div>
      </div>
      <EditPostModal
        tripId={item.id}
        isEditModalOpen={isEditModalOpen}
        handleCloseEditModal={handleCloseEditModal}
      />
      <dialog
        ref={modalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-red-700">Delete Trip</h3>
          <p className="py-1">Are you sure? This action cannot be undone!</p>
          <p className="py-4 font-bold text-red-800">
            Travel buddy request made:{" "}
            {isFetching ? <Spinner /> : existingBuddyData?.data?.length}
          </p>

          {existingBuddyData?.data?.length > 0 && (
            <p className="py-1 font-bold">
              N.B. If any travel request is made for this trip, they will be
              deleted also!
            </p>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={handleDelete}
                className="btn bg-red-600 text-white mr-2"
              >
                Delete
              </button>
              <button className="btn btn-warning" onClick={closeDeleteModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ManageSingleTravel;
