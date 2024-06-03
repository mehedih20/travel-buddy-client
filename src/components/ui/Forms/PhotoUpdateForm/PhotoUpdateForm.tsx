import { useUpdateUserPhotoMutation } from "@/redux/features/user/userApi";
import { TUserPhotUpdateFormInput } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { toast } from "sonner";
import Spinner from "../../Spinner/Spinner";

type TProps = {
  handleClose: () => void;
};

const PhotoUpdateForm = ({ handleClose }: TProps) => {
  const { register, handleSubmit } = useForm<TUserPhotUpdateFormInput>();
  const [updateUserPhoto, { isLoading }] = useUpdateUserPhotoMutation();

  const onPhotoSubmit: SubmitHandler<TUserPhotUpdateFormInput> = async (
    data
  ) => {
    try {
      const result = await updateUserPhoto(data).unwrap();
      if (result.success) {
        toast.success(result.message);
      }
      console.log(data);
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    } finally {
      handleClose();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onPhotoSubmit)}
      className="flex flex-col mb-2 mt-5 items-center"
    >
      <input
        type="text"
        className="input input-bordered bg-white"
        placeholder="image link"
        {...register("photoUrl")}
      />
      <div className="flex gap-2">
        <button className="flex items-center mt-5 py-2 px-4 rounded-full bg-purple-800 text-white text-sm hover:bg-blue-900 duration-300 ease-in-out">
          {isLoading ? <Spinner /> : <FaCheck className="mr-2" />} Submit
        </button>
        <button
          onClick={handleClose}
          className="flex items-center mt-5 py-2 px-4 rounded-full bg-red-800 text-white text-sm hover:bg-blue-900 duration-300 ease-in-out"
        >
          <FaX className="mr-2" /> Cancel
        </button>
      </div>
    </form>
  );
};

export default PhotoUpdateForm;
