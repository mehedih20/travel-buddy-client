import { getUserInfo, isLoggedIn } from "@/services/auth.services";
import { userPayload } from "@/types";
import { useRouter } from "next/navigation";

const UserRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const userInfo = getUserInfo() as userPayload;
  const isUserLoggedIn = isLoggedIn();

  if (!isUserLoggedIn && userInfo.role !== "user") {
    router.push("/login");
    return;
  } else {
    return <>{children}</>;
  }
};

export default UserRoute;
