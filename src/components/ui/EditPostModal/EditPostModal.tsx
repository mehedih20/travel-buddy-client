import {
  useGetSingleTripQuery,
  useUpdateTripMutation,
} from "@/redux/features/trips/tripsApi";
import { SubmitHandler, useForm } from "react-hook-form";
import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";
import { toast } from "sonner";
import { FaX } from "react-icons/fa6";

interface IFormInput {
  destination: string;
  description: string;
  travelType: string;
  activities: string;
  itinerary: string;
  imageLinks: string;
  startDate: string;
  endDate: string;
  budget: string;
}

type TProps = {
  tripId: string;
  handleCloseEditModal: () => void;
  isEditModalOpen: boolean;
};

const EditPostModal = ({
  tripId,
  handleCloseEditModal,
  isEditModalOpen,
}: TProps) => {
  const { data } = useGetSingleTripQuery(tripId);
  const [updateTrip, { isLoading }] = useUpdateTripMutation();

  const singleTripData = data?.data;

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const activities = data.activities.split(/\s*,\s*/);
    const imageLinks = data.imageLinks.split(/\s*,\s*/);
    const itinerary = data.itinerary.split(/\s*,\s*/);

    const postData = {
      tripId: singleTripData?.id,
      ...data,
      budget: Number(data.budget),
      activities,
      imageLinks,
      itinerary,
    };

    try {
      const result = await updateTrip(postData).unwrap();
      if (result?.success) {
        toast.success(result?.message);
        handleCloseEditModal();
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    setValue("destination", singleTripData?.destination);
    setValue("description", singleTripData?.description);
    setValue("travelType", singleTripData?.travelType);
    setValue("activities", singleTripData?.activities.join(", "));
    setValue("itinerary", singleTripData?.itinerary.join(", "));
    setValue("imageLinks", singleTripData?.imageLinks.join(", "));
    setValue("startDate", singleTripData?.startDate);
    setValue("endDate", singleTripData?.endDate);
    setValue("budget", singleTripData?.budget.toString());
  }, [singleTripData, setValue]);

  return (
    <div
      className={`${
        isEditModalOpen ? "flex" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black/80 z-50 justify-center  px-4 py-10 overflow-y-scroll`}
    >
      <div className="bg-white w-full lg:w-[800px] h-fit py-10 px-5 rounded-lg">
        <div className="mb-10 flex justify-between items-center">
          <h2 className=" text-gray-700 text-2xl">Edit Post</h2>
          <button
            onClick={handleCloseEditModal}
            className="border-2 text-gray-600 border-gray-600 hover:text-red-600 hover:border-red-500 p-1 rounded-full transition-all duration-300 ease-in-out"
          >
            <FaX />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full mb-5">
            <div className="label">
              <span className="label-text">Destination</span>
            </div>
            <input
              type="text"
              {...register("destination", {
                required: "Destination is required",
              })}
              className="input input-bordered w-full text-sm"
              placeholder="eg. France"
            />
            {errors.destination && (
              <span className="ml-2 mt-2 text-sm text-red-500">
                {errors.destination.message}
              </span>
            )}
          </label>
          <label className="form-control w-full mb-5">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="textarea 
                textarea-bordered h-24"
              placeholder="Detailed description"
            ></textarea>
            {errors.description && (
              <span className="ml-2 mt-2 text-sm text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>

          <label className="form-control w-full mb-5">
            <div className="label">
              <span className="label-text">Travel Type</span>
            </div>
            <input
              type="text"
              {...register("travelType", {
                required: "Travel type is required",
              })}
              className="input input-bordered w-full text-sm"
              placeholder="eg. Business"
            />
            {errors.travelType && (
              <span className="ml-2 mt-2 text-sm text-red-500">
                {errors.travelType.message}
              </span>
            )}
          </label>
          <label className="form-control w-full mb-5">
            <div className="label">
              <span className="label-text">
                Activities (separated by comma)
              </span>
            </div>
            <input
              type="text"
              {...register("activities", {
                required: "Activities is required",
              })}
              className="input input-bordered w-full text-sm"
              placeholder="eg. Hiking, Running"
            />
            {errors.activities && (
              <span className="ml-2 mt-2 text-sm text-red-500">
                {errors.activities.message}
              </span>
            )}
          </label>
          <label className="form-control w-full mb-5">
            <div className="label">
              <span className="label-text">Itinerary (separated by comma)</span>
            </div>
            <textarea
              {...register("itinerary", {
                required: "Itinerary is required",
              })}
              className="textarea 
                textarea-bordered h-24"
              placeholder={`Day 1: Arrival and beach day,\nDay 2: Yoga retreat`}
            ></textarea>
            {errors.itinerary && (
              <span className="ml-2 mt-2 text-sm text-red-500">
                {errors.itinerary.message}
              </span>
            )}
          </label>
          <label className="form-control w-full mb-5">
            <div className="label">
              <span className="label-text">
                Image links (separated by comma)
              </span>
            </div>
            <input
              type="text"
              {...register("imageLinks", {
                required: "Image links are required",
              })}
              className="input input-bordered w-full text-sm"
              placeholder="eg. https://www.img1.com , https://www.img2.com "
            />
            {errors.imageLinks && (
              <span className="ml-2 mt-2 text-sm text-red-500">
                {errors.imageLinks.message}
              </span>
            )}
          </label>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Start Date</span>
              </div>
              <input
                type="date"
                {...register("startDate", {
                  required: "Start date is required",
                })}
                className="input input-bordered w-full text-sm"
              />
              {errors.startDate && (
                <span className="ml-2 mt-2 text-sm text-red-500">
                  {errors.startDate.message}
                </span>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">End Date</span>
              </div>
              <input
                type="date"
                {...register("endDate", {
                  required: "End date is required",
                })}
                className="input input-bordered w-full text-sm"
              />
              {errors.endDate && (
                <span className="ml-2 mt-2 text-sm text-red-500">
                  {errors.endDate.message}
                </span>
              )}
            </label>
          </div>
          <label className="form-control w-full mb-5">
            <div className="label">
              <span className="label-text">Budget</span>
            </div>
            <input
              type="text"
              {...register("budget", {
                required: "Budget is required",
              })}
              className="input input-bordered w-full text-sm"
              placeholder="eg. 3000"
            />
            {errors.budget && (
              <span className="ml-2 mt-2 text-sm text-red-500">
                {errors.budget.message}
              </span>
            )}
          </label>
          <button
            type="submit"
            className="bg-yellow-500 text-white rounded-lg w-full py-3 hover:bg-yellow-800 transition-all duration-500 ease-in-out flex items-center justify-center mb-5"
          >
            {isLoading && <Spinner />}
            Submit
          </button>
        </form>
        <button
          onClick={handleCloseEditModal}
          className=" bg-red-500 text-white rounded-lg w-full py-3 hover:bg-yellow-800 transition-all duration-500 ease-in-out flex items-center justify-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditPostModal;
