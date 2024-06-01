"use client";
import Spinner from "@/components/ui/Spinner/Spinner";
import {
  useCheckUserPasswordMutation,
  useUpdateUserPasswordMutation,
} from "@/redux/features/user/userApi";
import { TUserChangePasswordFormInput } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const ChangePasswordPage = () => {
  const [checkUserPassword, { isLoading: checkPassLoading }] =
    useCheckUserPasswordMutation();
  const [changePassword, { isLoading: changePassLoading }] =
    useUpdateUserPasswordMutation();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TUserChangePasswordFormInput>();

  const onSubmit: SubmitHandler<TUserChangePasswordFormInput> = async (
    data
  ) => {
    const checkPasswordObj = {
      password: data.oldPassword,
    };
    const changePasswordObj = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };

    const isPasswordValid = await checkUserPassword(checkPasswordObj).unwrap();

    if (!isPasswordValid.result) {
      toast.error("Old Password is incorrect");
      return;
    }

    try {
      const result = await changePassword(changePasswordObj).unwrap();
      if (result.success) {
        toast.success(result.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    } finally {
      reset();
    }
  };

  return (
    <div className="mb-[100px] px-2">
      <h1 className="font-semibold   inline-block text-3xl text-violet-950 mb-14">
        Change Password
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-[600px] lg:ml-16 gap-5 bg-violet-800 p-10 rounded-lg shadow-2xl"
      >
        <div className="mb-3">
          <p className="font-semibold text-gray-200 text-sm mb-2">
            Old Password
          </p>
          <input
            type="password"
            className="bg-slate-200 p-3 w-full rounded-md overflow-hidden"
            {...register("oldPassword", {
              required: "Old Password is required",
            })}
          />
          {errors.oldPassword && (
            <p className="text-red-300 text-sm font-bold mt-2 text-right">
              {errors.oldPassword.message}
            </p>
          )}
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-200 text-sm mb-2">
            New Password
          </p>
          <input
            type="password"
            className="bg-slate-200 p-3 w-full rounded-md overflow-hidden"
            {...register("newPassword", {
              required: "New Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.newPassword && (
            <p className="text-red-300 text-sm font-bold mt-2 text-right">
              {errors.newPassword.message}
            </p>
          )}
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-200 text-sm mb-2">
            Confirm New Password
          </p>
          <input
            type="password"
            className="bg-slate-200 p-3 w-full rounded-md overflow-hidden"
            {...register("confirmNewPassword", {
              required: "Please confirm your new password",
              validate: (value) =>
                value === watch("newPassword") || "Passwords do not match",
            })}
          />
          {errors.confirmNewPassword && (
            <p className="text-red-300 text-sm font-bold mt-2 text-right">
              {errors.confirmNewPassword.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className=" bg-yellow-400 hover:bg-teal-600 flex items-center justify-center hover:text-white py-3 font-semibold text-gray-600 rounded-lg mt-3 w-full transition-all duration-300 ease-in-out text-base"
        >
          {(checkPassLoading || changePassLoading) && <Spinner />} Submit
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
