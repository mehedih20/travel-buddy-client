import { TUserUpdateFormInput } from "@/types";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import Spinner from "../../Spinner/Spinner";

type ProfileFormProps = {
  register: UseFormRegister<TUserUpdateFormInput>;
  handleSubmit: UseFormHandleSubmit<TUserUpdateFormInput, undefined>;
  onSubmit: SubmitHandler<TUserUpdateFormInput>;
  data: any;
  handleCancel: () => void;
  isLoading: boolean;
};

const ProfileUpdateForm = ({
  register,
  handleSubmit,
  onSubmit,
  data,
  handleCancel,
  isLoading,
}: ProfileFormProps) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-fit">
      <div className="mb-5">
        <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
          Name
        </p>
        <input
          type="text"
          className="bg-slate-200 border-2 border-violet-600 p-3 w-full sm:w-[500px] rounded-md overflow-hidden"
          defaultValue={data?.name}
          {...register("name")}
        />
      </div>
      <div className="mb-5">
        <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
          Email
        </p>
        <input
          type="text"
          className="bg-slate-200 border-2 border-violet-600 p-3 w-full sm:w-[500px] rounded-md overflow-hidden"
          defaultValue={data?.email}
          {...register("email")}
        />
      </div>
      <div className="mb-5">
        <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
          Username
        </p>
        <input
          type="text"
          className="bg-slate-200 border-2 border-violet-600 p-3 w-full sm:w-[500px] rounded-md overflow-hidden"
          defaultValue={data?.username}
          {...register("username")}
        />
      </div>
      <div className="mb-5">
        <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
          Age
        </p>
        <input
          type="text"
          className="bg-slate-200 border-2 border-violet-600 p-3 w-full sm:w-[500px] rounded-md overflow-hidden"
          defaultValue={data?.userProfile?.age}
          {...register("profile.age")}
        />
      </div>
      <div className="mb-5">
        <p className="w-[120px] font-semibold text-gray-600 text-sm mb-2">
          Bio
        </p>
        <textarea
          className="bg-slate-200 border-2 border-violet-600 p-3 w-full sm:w-[500px] rounded-md overflow-hidden"
          defaultValue={data?.userProfile?.bio}
          {...register("profile.bio")}
        />
      </div>
      <div className="lg:flex gap-2">
        <button
          type="submit"
          className="flex items-center mt-5 py-2 w-[200px] justify-center rounded-full bg-violet-800 text-white text-sm hover:bg-blue-900 duration-300 ease-in-out"
        >
          {isLoading && <Spinner />} Submit
        </button>
        <button
          onClick={handleCancel}
          className="flex items-center mt-5 py-2 w-[200px] justify-center rounded-full bg-red-800 text-white text-sm hover:bg-blue-900 duration-300 ease-in-out"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileUpdateForm;
