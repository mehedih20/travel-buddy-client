"use client";
import { useGetTripsQuery } from "@/redux/features/trips/tripsApi";
import PlainLoading from "../Loading/PlainLoading";
import SingleTravel from "../SingleTravel/SingleTravel";
import { TTrip } from "@/types";
import ImageContainer from "../ImageContainer/ImageContainer";
import Link from "next/link";

const RecentPost = () => {
  const { data: travelsData, isFetching } = useGetTripsQuery({
    limit: 9,
    sortBy: "createdAt",
    sortOrder: "desc",
  });

  return (
    <div className="bg-violet-300 py-[100px] px-2">
      <div className="text-center">
        <h2 className="text-4xl inline-block text-gray-800 font-montserrat pb-2  uppercase">
          Recent Travel Posts
        </h2>
      </div>
      <div className="xl:container pb-10">
        {isFetching ? (
          <PlainLoading />
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 py-[80px] px-2">
              {travelsData?.data?.map((item: TTrip) => {
                return <SingleTravel key={item.id} item={item} />;
              })}
            </div>
            <div className="flex justify-center">
              <Link
                href="/travels"
                className=" bg-violet-100 text-black font-semibold py-3 w-[150px] rounded-md flex justify-center hover:bg-violet-500 transition-all duration-300 ease-in-out shadow-2xl"
              >
                Show More
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentPost;
