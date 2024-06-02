import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "sonner";
import Spinner from "../Spinner/Spinner";
import { useDeleteTripMutation } from "@/redux/features/trips/tripsApi";
import { useGetSingleTripTravelBuddiesQuery } from "@/redux/features/travelBuddy/travelBuddyApi";

type TProps = {
  item: any;
  handleRefetch: () => void;
};

const SingleTravelPost = ({ item, handleRefetch }: TProps) => {
  const [deleteTrip, { isLoading: deleteLoading }] = useDeleteTripMutation();
  const { data: existingBuddyData, isSuccess } =
    useGetSingleTripTravelBuddiesQuery(item.id);

  const handleDelete = async () => {
    if (isSuccess) {
      if (existingBuddyData?.data?.length > 0) {
        toast.error("You can't delete this trip. It has buddies already");
        return;
      }
    }

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

  return (
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
        <div className="mb-10">
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
        <div className="flex gap-3">
          <button className="w-[150px] bg-purple-800 py-2 px-8 text-white font-semibold hover:bg-teal-950 duration-300 ease-in-out">
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="w-[150px] flex items-center bg-red-600 py-2 px-8 text-white font-semibold hover:bg-teal-950 duration-300 ease-in-out"
          >
            {deleteLoading && <Spinner />} Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTravelPost;
