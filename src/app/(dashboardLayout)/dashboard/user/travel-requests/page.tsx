"use client";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useGetUserAllBuddyRequestQuery } from "@/redux/features/travelBuddy/travelBuddyApi";

const TravelRequestPage = () => {
  const { data: requestData } = useGetUserAllBuddyRequestQuery(undefined);

  return (
    <div className="pb-[150px] px-2">
      <h1 className="font-semibold  inline-block text-3xl text-violet-950 mb-14">
        Travel Requests
      </h1>
      {!requestData && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:container">
        {requestData &&
          requestData.data.map((item: any, index: number) => {
            return (
              <div
                className=" bg-slate-100 py-8 px-4 lg:px-8 rounded-md"
                key={index}
              >
                <h2 className="pb-3">
                  Destination:
                  <span className="ml-2 font-semibold text-cyan-950">
                    {item.tripDestination}
                  </span>
                </h2>
                <p>
                  Status:{" "}
                  <span
                    className={`${
                      item.status === "PENDING" ? "bg-red-400" : "bg-green-400"
                    } py-1 px-2 rounded-md text-white font-semibold ml-2`}
                  >
                    {item.status}
                  </span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TravelRequestPage;
