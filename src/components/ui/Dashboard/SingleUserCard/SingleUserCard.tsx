import {
  useChangeUserRoleMutation,
  useChangeUserStatusMutation,
} from "@/redux/features/user/userApi";
import { usePathname } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import Spinner from "../../Spinner/Spinner";

const SingleUserCard = ({ user }: { user: any }) => {
  const pathname = usePathname();
  const [changeUserRole, { isLoading: changeRoleLoading }] =
    useChangeUserRoleMutation();

  const [changeUserStatus, { isLoading: changeStatusLoading }] =
    useChangeUserStatusMutation();

  const handleRoleChange = async (userId: string) => {
    if (user?.status === "deactivated" && user?.role === "user") {
      toast.error("Deactivated user can't be made an admin!");
      return;
    }

    try {
      const result = await changeUserRole(userId).unwrap();
      if (result.success) {
        toast.success(result.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const handleStatusChange = async (userId: string) => {
    try {
      const result = await changeUserStatus(userId).unwrap();
      if (result.success) {
        toast.success(result.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className=" bg-slate-100 p-5 rounded-lg shadow-xl text-wrap">
      <h3 className="mb-2">
        <span className="font-bold mr-2">Name:</span>
        {user.name}
      </h3>
      <p className="mb-2">
        <span className="font-bold mr-2">Email:</span>
        {user.email}
      </p>
      <p className="mb-2">
        <span className="font-bold mr-2">Username:</span>
        {user.username}
      </p>
      <p className="mb-2">
        <span className="font-bold mr-2">Role:</span>
        <span
          className={`${
            user?.role === "admin" ? "text-red-500" : "text-blue-500"
          } font-semibold`}
        >
          {user.role}
        </span>
      </p>
      <p>
        <span className="font-bold mr-2">Status:</span>
        <span
          className={`${
            user.status === "active" ? "bg-green-200" : "bg-red-200"
          } p-1 rounded-md text-gray-800`}
        >
          {user.status}
        </span>
      </p>

      {pathname.startsWith("/dashboard/admin") && user?.role === "admin" ? (
        <button className="text-center py-2 w-full bg-gray-400 text-white font-semibold mt-5 rounded-lg pointer-events-none">
          No actions allowed
        </button>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleRoleChange(user?.id)}
            className={`${
              user?.role === "admin" ? "bg-red-600" : "bg-green-600"
            } flex justify-center items-center py-2 px-3 text-white font-semibold mt-5 rounded-lg hover:bg-teal-950 transition-all duration-300 ease-in-out`}
          >
            {changeRoleLoading && <Spinner />}
            {user?.role === "admin" ? "Remove Admin" : "Make Admin"}
          </button>
          <button
            onClick={() => handleStatusChange(user?.id)}
            className="bg-blue-800 py-2 px-3 text-white flex justify-center items-center font-semibold mt-5 rounded-lg hover:bg-teal-950 transition-all duration-300 ease-in-out"
          >
            {changeStatusLoading && <Spinner />}
            Change status
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleUserCard;
