"use client";
import Spinner from "@/components/ui/Spinner/Spinner";
import Title from "@/components/ui/Title/Title";
import { postTripDescription } from "@/constants/descriptions";
import { useCreateTripMutation } from "@/redux/features/trips/tripsApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

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

const TripPost = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const [createTrip, { isLoading }] = useCreateTripMutation();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const activities = data.activities.split(/\s*,\s*/);
    const imageLinks = data.imageLinks.split(/\s*,\s*/);
    const itinerary = data.itinerary.split(/\s*,\s*/);
    const postData = {
      ...data,
      budget: Number(data.budget),
      activities,
      imageLinks,
      itinerary,
    };

    try {
      const result = await createTrip(postData).unwrap();
      if (result.success) {
        toast.success(result.message);
        reset();
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Title
        title="Post a Trip"
        route="Trip Post"
        description={postTripDescription}
      />
      <div className=" bg-purple-800">
        <div className="xl:container min-h-screen p-5 py-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" max-w-[1000px] mx-auto rounded-lg p-5 bg-slate-50 shadow-cyan-500/50 shadow-2xl mb-[100px]"
          >
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
                <span className="label-text">
                  Itinerary (separated by comma)
                </span>
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
              className=" bg-yellow-500 text-white rounded-lg w-full py-3 hover:bg-yellow-800 transition-all duration-500 ease-in-out flex items-center justify-center"
            >
              {isLoading && <Spinner />}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripPost;
