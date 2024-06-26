"use client";
import PhotoUpdateForm from "@/components/ui/Forms/PhotoUpdateForm/PhotoUpdateForm";
import ProfileUpdateForm from "@/components/ui/Forms/ProfileUpdateForm/ProfileUpdateForm";
import Spinner from "@/components/ui/Spinner/Spinner";
import {
  useCheckProfileUpdateCredentialsMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/features/user/userApi";
import { TUserUpdateFormInput } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaKey, FaPen } from "react-icons/fa";
import { toast } from "sonner";

const ProfilePage = () => {
  const [isProfileEditing, setIsProfileEditing] = useState(false);
  const [isPhotoEditing, setIsPhotoEditing] = useState(false);
  const { data: userData, isFetching } = useGetUserProfileQuery({});
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();
  const [
    checkProfileUpdateCredentials,
    { isLoading: checkCredentialsLoading },
  ] = useCheckProfileUpdateCredentialsMutation();

  const { register: profileRegister, handleSubmit: handleProfileSubmit } =
    useForm<TUserUpdateFormInput>();

  const onProfileSubmit: SubmitHandler<TUserUpdateFormInput> = async (data) => {
    if (data?.profile?.age === "" || data?.profile?.bio === "") {
      toast.error("Please fill up all profile info!");
      return;
    }
    const profile = {
      age: data?.profile?.age && Number(data?.profile?.age),
      bio: data?.profile?.bio,
    };
    const updatedData = { ...data, profile };

    const checkCredentialsObj = {
      email: data.email,
      username: data.username,
    };

    try {
      const isCredentialsExists = await checkProfileUpdateCredentials(
        checkCredentialsObj
      ).unwrap();
      if (isCredentialsExists?.data) {
        const { data } = isCredentialsExists;
        if (data.email && data.username) {
          toast.error("Email & Username already exists");
          return;
        }
        if (data.email && !data.username) {
          toast.error("Email already exists");
          return;
        }
        if (!data.email && data.username) {
          toast.error("Username already exists");
          return;
        }
      }

      const result = await updateUserProfile(updatedData).unwrap();
      if (result.success) {
        toast.success(result.message);
        setIsProfileEditing(false);
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="pb-[150px] px-2">
      <h1 className="font-semibold  inline-block text-3xl text-violet-950 mb-14">
        Profile
      </h1>

      {isFetching ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col items-center xl:ml-20 xl:items-start xl:flex-row gap-20 pb-16">
          <div className="flex flex-col items-center">
            {userData?.data?.photoUrl ? (
              <div className=" overflow-hidden w-[200px] h-[200px] rounded-full border-4 border-violet-700 shadow-2xl">
                <Image
                  src={userData?.data?.photoUrl}
                  alt={userData?.data?.name}
                  width={400}
                  height={300}
                  className=" h-full"
                />
              </div>
            ) : (
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
                alt={userData?.data?.name}
                width={200}
                height={200}
                className="rounded-full border-2 border-violet-600"
              />
            )}
            {!isProfileEditing && !isPhotoEditing && (
              <button
                onClick={() => setIsPhotoEditing(true)}
                className="flex items-center mt-5 py-2 px-4 rounded-full bg-purple-800 text-white text-sm hover:bg-blue-900 duration-300 ease-in-out"
              >
                <FaPen className="mr-2" /> Update Photo
              </button>
            )}
            {isPhotoEditing && (
              <PhotoUpdateForm handleClose={() => setIsPhotoEditing(false)} />
            )}
          </div>
          {!isProfileEditing ? (
            <div className="w-full md:w-fit">
              <div className="mb-5">
                <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
                  Name
                </p>
                <p className="bg-slate-200 p-2 w-full sm:w-[500px] rounded-md overflow-hidden">
                  {userData?.data?.name}
                </p>
              </div>
              <div className="mb-5">
                <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
                  Email
                </p>
                <p className="bg-slate-200 p-2 w-full sm:w-[500px] rounded-md overflow-hidden">
                  {userData?.data?.email}
                </p>
              </div>
              <div className="mb-5">
                <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
                  Username
                </p>
                <p className="bg-slate-200 p-2 w-full sm:w-[500px] rounded-md overflow-hidden">
                  {userData?.data?.username}
                </p>
              </div>
              <div className="mb-5">
                <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
                  Role
                </p>
                <p className="bg-slate-200 p-2 w-full sm:w-[500px] rounded-md overflow-hidden">
                  {userData?.data?.role}
                </p>
              </div>
              <div className="mb-5">
                <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
                  Age
                </p>
                <p className="bg-slate-200 p-2 w-full sm:w-[500px] rounded-md overflow-hidden">
                  {userData?.data?.userProfile?.age || "?"}
                </p>
              </div>
              <div className="mb-5">
                <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
                  Bio
                </p>
                <p className="bg-slate-200 p-2 w-full sm:w-[500px] min-h-32 rounded-md overflow-hidden">
                  {userData?.data?.userProfile?.bio || "?"}
                </p>
              </div>
              <div className="lg:flex gap-2">
                {!isPhotoEditing && (
                  <button
                    onClick={() => setIsProfileEditing(true)}
                    className="flex items-center mt-5 py-2 w-[200px] justify-center rounded-full bg-purple-800 text-white text-sm hover:bg-blue-900 duration-300 ease-in-out"
                  >
                    <FaPen className="mr-2" /> Edit Profile
                  </button>
                )}
                <Link
                  href="/dashboard/change-password"
                  className="flex items-center mt-5 py-2 w-[200px] justify-center rounded-full bg-purple-800 text-white text-sm hover:bg-blue-900 duration-300 ease-in-out"
                >
                  <FaKey className="mr-2" /> Change Password
                </Link>
              </div>
            </div>
          ) : (
            <ProfileUpdateForm
              isLoading={isLoading}
              checkCredentialsLoading={checkCredentialsLoading}
              register={profileRegister}
              handleSubmit={handleProfileSubmit}
              onSubmit={onProfileSubmit}
              data={userData?.data}
              handleCancel={() => setIsProfileEditing(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
