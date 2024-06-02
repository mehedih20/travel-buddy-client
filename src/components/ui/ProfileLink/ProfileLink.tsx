import { getUserInfo } from "@/services/auth.services";
import Link from "next/link";

const ProfileLink = () => {
  const userInfo = getUserInfo();

  return (
    <>
      {userInfo && (
        <>
          <Link
            className="hover:bg-purple-200 py-1 px-2 duration-500 ease-in-out"
            href="/dashboard/profile"
          >
            Profile
          </Link>
          <Link
            className="hover:bg-purple-200 py-1 px-2 duration-500 ease-in-out"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </>
      )}
    </>
  );
};

export default ProfileLink;
