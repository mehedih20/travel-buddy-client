import { useDeleteDestinationMutation } from "@/redux/features/destinations/destinationsApi";
import Image from "next/image";
import Spinner from "../../Spinner/Spinner";
import { toast } from "sonner";
import { useRef } from "react";

const DestinationManageCard = ({ destination }: { destination: any }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [deleteDestination, { isLoading }] = useDeleteDestinationMutation();

  const handleDeleteDestination = async () => {
    try {
      const result = await deleteDestination(destination.id).unwrap();
      if (result?.success) {
        toast.success(result?.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
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
      <div className="bg-white p-3 rounded-md shadow-lg flex flex-col items-center">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          width={650}
          height={300}
          className="h-[250px] mb-5 rounded-md"
        />
        <div className="mb-10">
          <h3 className="font-bold text-lg text-gray-700 mb-2">
            {destination.name}
          </h3>
          <p className="text-gray-600">{destination.description}</p>
        </div>
        <div className="mt-auto w-full">
          <p className="text-gray-600 mb-4 text-sm">
            <span className="font-semibold">Rating:</span> {destination.rating}
          </p>
          <button
            onClick={openDeleteModal}
            className="bg-red-500 w-full flex items-center justify-center rounded-md py-3 text-white hover:bg-teal-950 transition-all duration-300 ease-in-out"
          >
            {isLoading && <Spinner />} Delete
          </button>
        </div>
      </div>
      <dialog
        ref={modalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-red-700">
            Delete Destination?
          </h3>
          <p className="py-1">Are you sure? This action cannot be undone!</p>

          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={handleDeleteDestination}
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

export default DestinationManageCard;
