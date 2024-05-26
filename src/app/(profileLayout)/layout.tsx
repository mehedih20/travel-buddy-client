import dynamic from "next/dynamic";

const layout = ({ children }: { children: React.ReactNode }) => {
  const ProfileDrawer = dynamic(
    () => import("@/components/shared/ProfileDrawer/ProfileDrawer"),
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
