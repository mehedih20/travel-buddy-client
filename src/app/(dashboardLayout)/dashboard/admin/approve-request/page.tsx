"use client";
import ApproveRequestCard from "@/components/ui/ApproveRequestCard/ApproveRequestCard";
import PlainLoading from "@/components/ui/Loading/PlainLoading";
import { useGetAllBuddyRequestQuery } from "@/redux/features/travelBuddy/travelBuddyApi";

const ApproveRequestPage = () => {
  const { data: buddyData, isFetching } = useGetAllBuddyRequestQuery({});

  return (
    <div className="pb-[150px] px-2">
      <h1 className="font-semibold  inline-block text-3xl text-violet-950 mb-14">
        Approve Buddy Request
      </h1>
      {isFetching ? (
        <PlainLoading />
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:container">
          {buddyData &&
            buddyData.data.map((item: any, index: number) => (
              <ApproveRequestCard item={item} key={index} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ApproveRequestPage;
