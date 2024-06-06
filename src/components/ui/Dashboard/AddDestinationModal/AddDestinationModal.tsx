import { useCreateDestinationMutation } from "@/redux/features/destinations/destinationsApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaX } from "react-icons/fa6";
import { toast } from "sonner";
import Spinner from "../../Spinner/Spinner";

type TAddDestinationInput = {
  name: string;
  imageUrl: string;
  description: string;
  rating: number;
};

type TProps = {
  isModalOpen: boolean;
  handleModalClose: () => void;
};

const AddDestinationModal = ({ isModalOpen, handleModalClose }: TProps) => {
  const [createDestination, { isLoading }] = useCreateDestinationMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAddDestinationInput>();

  const onSubmit: SubmitHandler<TAddDestinationInput> = async (data) => {
    try {
      const finalObj = { ...data, rating: Number(data.rating) };

      const result = await createDestination(finalObj).unwrap();
      if (result.success) {
        toast.success(result.message);
        reset();
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      handleModalClose();
    }
  };

  return (
    <div
      className={`${
        isModalOpen ? "fixed" : "hidden"
      } top-0 left-0 w-full h-full bg-black/90 flex justify-center items-center px-4`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[800px] bg-white p-8 rounded-lg"
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-gray-800 text-xl">Add Destination</h2>
          <button
            onClick={handleModalClose}
            className="p-1 rounded-full border-2 border-gray-700 text-gray-700"
          >
            <FaX />
          </button>
        </div>
        <div className="mb-5 w-full">
          <label className="font-semibold text-sm text-gray-600">Name</label>
          <input
            type="text"
            className="mt-2 input input-bordered bg-white border-violet-300 w-full"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-right text-sm text-red-500 mt-1 font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="font-semibold text-sm text-gray-600">
            Image Url
          </label>
          <input
            type="text"
            className="mt-2 input input-bordered bg-white border-violet-300  w-full"
            placeholder="Image Url"
            {...register("imageUrl", { required: "Image Url is required" })}
          />
          {errors.imageUrl && (
            <p className="text-right text-sm text-red-500 mt-1 font-semibold">
              {errors.imageUrl.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="font-semibold text-sm text-gray-600">
            Description
          </label>
          <textarea
            className="mt-2 textarea textarea-bordered bg-white border-violet-300 w-full"
            placeholder="Description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-right text-sm text-red-500 mt-1 font-semibold">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="font-semibold text-sm text-gray-600">Rating</label>
          <input
            type="number"
            className="mt-2 input input-bordered bg-white border-violet-300 w-full"
            placeholder="Rating"
            {...register("rating", { required: "Rating is required" })}
          />
          {errors.rating && (
            <p className="text-right text-sm text-red-500 mt-1 font-semibold">
              {errors.rating.message}
            </p>
          )}
        </div>
        <button
          className="btn btn-warning w-full flex items-center"
          type="submit"
        >
          {isLoading && <Spinner />} Submit
        </button>
        <button
          onClick={handleModalClose}
          type="button"
          className="btn btn-error w-full mt-5 mb-10"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddDestinationModal;
