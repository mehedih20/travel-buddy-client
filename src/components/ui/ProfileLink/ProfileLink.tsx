import { getUserInfo } from "@/services/auth.services";
import { userPayload } from "@/types";
import Link from "next/link";

type TProps = {
  closeSideBar?: () => void;
};

const ProfileLink = ({ closeSideBar }: TProps) => {
  const userInfo = getUserInfo() as userPayload;

  return (
    <>
      {userInfo && (
        <>
          <Link
            onClick={closeSideBar}
            className="hover:bg-purple-200 py-1 px-2 duration-500 ease-in-out"
            href="/dashboard/profile"
          >
            Profile
          </Link>
          <Link
            onClick={closeSideBar}
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
