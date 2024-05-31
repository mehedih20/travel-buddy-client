import { getUserInfo } from "@/services/auth.services";
import Link from "next/link";

const ProfileLink = () => {
  const userInfo = getUserInfo();

  return (
    <>
      {userInfo && (
        <li>
          <Link href="/dashboard/profile">My Profile</Link>
        </li>
      )}
    </>
  );
};

export default ProfileLink;
