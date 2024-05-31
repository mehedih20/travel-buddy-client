import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const layout = ({ children }: { children: React.ReactNode }) => {
  const ProfileDrawer = dynamic(
    () => import("@/components/ui/ProfileDrawer/ProfileDrawer"),
    {
      ssr: false,
    }
  );

  return (
    <>
      <ProfileDrawer>{children}</ProfileDrawer>
    </>
  );
};

export default layout;
