import { useUpdateBuddyRequestMutation } from "@/redux/features/travelBuddy/travelBuddyApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import Spinner from "../../Spinner/Spinner";

type TApproveFormat = {
  status: string;
};

const ApproveRequestCard = ({ item }: { item: any }) => {
  const [updateBuddyRequest, { isLoading }] = useUpdateBuddyRequestMutation();
  const { register, handleSubmit } = useForm<TApproveFormat>();

  const onSubmit: SubmitHandler<TApproveFormat> = async (data) => {
    if (data.status === "") {
      toast.error("Please select an action!");
    } else {
      const approveData = {
        status: data.status,
        buddyId: item.userId,
        tripId: item.tripId,
      };
      try {
        const result = await updateBuddyRequest(approveData).unwrap();
        if (result.success) {
          toast.success(result.message);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className=" bg-slate-100 py-8 px-4 lg:px-8 rounded-md">
      <p className="mb-2">
        Name:
        <span className="ml-2 font-semibold text-cyan-950">
          {item?.user?.name}
        </span>
      </p>
      <p className="mb-2">
        Email:
        <span className="ml-2 font-semibold text-cyan-950">
          {item?.user?.email}
        </span>
      </p>
      <p className="mb-2">
        Destination:
        <span className="ml-2 font-semibold text-cyan-950">
          {item?.trip?.destination}
        </span>
      </p>
      <p className="mb-5">
        Status:{" "}
        <span
          className={`${
            item.status === "PENDING" || item.status === "REJECTED"
              ? "bg-red-400"
              : "bg-green-500"
          } py-1 px-2 rounded-md text-white font-semibold ml-2`}
        >
          {item.status}
        </span>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2"
      >
        <select
          {...register("status")}
          className="bg-white border-purple-400 select select-bordered w-full max-w-xs"
        >
          <option value="">Select action</option>
          <option value="APPROVED">Approve</option>
          <option value="REJECTED">Reject</option>
        </select>
        <button
          type="submit"
          className="btn bg-purple-700 hover:bg-teal-950 text-white"
        >
          {isLoading && <Spinner />} Submit
        </button>
      </form>
    </div>
  );
};

export default ApproveRequestCard;
