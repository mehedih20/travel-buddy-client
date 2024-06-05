"use client";
import SingleUserCard from "@/components/ui/SingleUserCard/SingleUserCard";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useGetUsersQuery } from "@/redux/features/user/userApi";

const ManageUsersPage = () => {
  const { data: usersData, isFetching } = useGetUsersQuery(undefined);

  return (
    <div className="pb-[100px] px-2">
      <h1 className="font-semibold   inline-block text-3xl text-violet-950 mb-14">
        Manage Users
      </h1>
      {isFetching && (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      )}
      <div className="xl:container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pb-16">
        {!isFetching &&
          usersData?.data &&
          usersData?.data?.map((user: any) => (
            <SingleUserCard key={user.id} user={user} />
          ))}
      </div>
    </div>
  );
};

export default ManageUsersPage;
