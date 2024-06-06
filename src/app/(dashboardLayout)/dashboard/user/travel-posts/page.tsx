"use client";
import ManageSingleTravel from "@/components/ui/Dashboard/ManageSingleTravel/ManageSingleTravel";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useGetSingleUserTripsQuery } from "@/redux/features/trips/tripsApi";

const TravelPostsPage = () => {
  const {
    data: tripsData,
    isSuccess,
    refetch,
  } = useGetSingleUserTripsQuery(undefined);

  const handleRefetch = () => {
    refetch();
  };

  return (
    <>
      <div className="pb-[150px] px-2">
        <h1 className="font-semibold  inline-block text-3xl text-violet-950 mb-14">
          Travel Posts
        </h1>
        {!tripsData && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}
        {isSuccess && tripsData?.data?.length === 0 && (
          <h2 className="text-2xl text-gray-500 text-center mt-10">
            No data found!
          </h2>
        )}
        <div className="grid xl:grid-cols-2 gap-10 xl:container xl:px-10 pb-16">
          {tripsData &&
            tripsData.data.map((item: any) => (
              <ManageSingleTravel
                key={item.id}
                item={item}
                handleRefetch={handleRefetch}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default TravelPostsPage;
