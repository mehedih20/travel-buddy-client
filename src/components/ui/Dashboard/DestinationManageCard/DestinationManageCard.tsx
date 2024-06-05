import { useDeleteDestinationMutation } from "@/redux/features/destinations/destinationsApi";
import Image from "next/image";
import Spinner from "../../Spinner/Spinner";
import { toast } from "sonner";

const DestinationManageCard = ({ destination }: { destination: any }) => {
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

  return (
    <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
      <Image
        src={destination.imageUrl}
        alt={destination.name}
        width={650}
        height={300}
        className="h-[250px] mb-5"
      />
      <div className="mb-10">
        <h3 className="font-bold text-lg text-gray-700 mb-2">
          {destination.name}
        </h3>
        <p className="text-gray-600">{destination.description}</p>
      </div>
      <button
        onClick={handleDeleteDestination}
        className="bg-red-500 w-full flex items-center justify-center py-3 text-white hover:bg-teal-950 transition-all duration-300 ease-in-out mt-auto"
      >
        {isLoading && <Spinner />} Delete
      </button>
    </div>
  );
};

export default DestinationManageCard;
