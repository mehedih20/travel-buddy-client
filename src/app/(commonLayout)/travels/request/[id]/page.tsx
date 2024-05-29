"use client";
import Loading from "@/components/ui/Loading/Loading";
import Spinner from "@/components/ui/Spinner/Spinner";
import TermsAndConditions from "@/components/ui/TermsAndConditions/TermsAndConditions";
import Title from "@/components/ui/Title/Title";
import { postTravelDescription } from "@/constants/descriptions";
import { useSendTravelBuddyRequestMutation } from "@/redux/features/travelBuddy/travelBuddyApi";
import { useGetSingleTripQuery } from "@/redux/features/trips/tripsApi";
import { getUserInfo } from "@/services/auth.services";
import { userPayload } from "@/types";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TFormInput = {
  userEmail: string;
  tripDestination: string;
};

type TParams = {
  params: {
    id: string;
  };
};

const TravelRequestPage = ({ params }: TParams) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const userInfo = getUserInfo() as userPayload;
  const { data: travelDetails, isFetching } = useGetSingleTripQuery(params.id);
  const [sendTravelBuddyRequest, { isLoading }] =
    useSendTravelBuddyRequestMutation();
  const { register, handleSubmit } = useForm<TFormInput>();

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    const travelRequestData = {
      ...data,
      userId: userInfo?.id,
      tripId: params?.id,
    };
    try {
      const result = await sendTravelBuddyRequest(travelRequestData).unwrap();
      console.log(result);

      if (result?.success) {
        toast.success(result?.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <Title
            description={postTravelDescription}
            title="Travel request"
            route={`travels/request/${params.id}`}
          />
          <div className="bg-purple-800 py-[80px]">
            {travelDetails?.data && (
              <div className="xl:container px-2">
                <div className="max-w-[1000px] mx-auto rounded-lg grid lg:grid-cols-2 gap-4 mb-10">
                  <div className="rounded-lg p-5 bg-slate-50">
                    <h2 className="text-xl font-semibold font-montserrat text-orange-500 mb-5">
                      User summary
                    </h2>
                    {userInfo && (
                      <div>
                        <div className="mb-3 grid grid-cols-4">
                          <p>Name : </p>
                          <p className="col-span-3 -mt-1 text-gray-600 font-semibold py-1 px-3 rounded-xl max-w-fit">
                            {userInfo?.name}
                          </p>
                        </div>

                        <div className="mb-3 grid grid-cols-4">
                          <p>Email : </p>
                          <p className="col-span-3 -mt-1 text-gray-600 font-semibold py-1 px-3 rounded-xl max-w-fit">
                            {userInfo?.email}
                          </p>
                        </div>
                        <div className="mb-5 grid grid-cols-4">
                          <p>Username : </p>
                          <p className="col-span-3 -mt-1 text-gray-600 font-semibold py-1 px-3 rounded-xl max-w-fit">
                            {userInfo?.username}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="rounded-lg p-5 bg-slate-50">
                    <h2 className="text-xl font-semibold font-montserrat text-orange-500 mb-5">
                      Travel summary
                    </h2>
                    {travelDetails?.data && (
                      <div>
                        <div className="mb-3 grid grid-cols-4">
                          <p>Destination : </p>
                          <p className="col-span-3 -mt-1 text-gray-600 font-semibold py-1 px-3 rounded-xl max-w-fit">
                            {travelDetails?.data?.destination}
                          </p>
                        </div>

                        <div className="mb-3 grid grid-cols-4">
                          <p>Travel type : </p>
                          <p className="col-span-3 -mt-1 text-gray-600 font-semibold py-1 px-3 rounded-xl max-w-fit">
                            {travelDetails?.data?.travelType}
                          </p>
                        </div>
                        <div className="mb-5 grid grid-cols-4">
                          <p>Budget : </p>
                          <p className="col-span-3 -mt-1 text-gray-600 font-semibold py-1 px-3 rounded-xl max-w-fit">
                            ${travelDetails?.data?.budget}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className=" max-w-[1000px] mx-auto rounded-lg p-5 bg-slate-50 shadow-cyan-500/50 shadow-2xl mb-[100px]"
                >
                  <h2 className="text-xl font-semibold font-montserrat text-orange-500 mb-5">
                    Send Request
                  </h2>
                  <label className="form-control w-full mb-5">
                    <div className="label">
                      <span className="label-text">User Email</span>
                    </div>
                    <input
                      value={userInfo?.email}
                      type="text"
                      {...register("userEmail")}
                      className="input w-full text-sm bg-slate-200"
                    />
                  </label>
                  <label className="form-control w-full mb-10">
                    <div className="label">
                      <span className="label-text">Travel Destination</span>
                    </div>
                    <input
                      value={travelDetails?.data?.destination}
                      type="text"
                      {...register("tripDestination")}
                      className="input w-full text-sm bg-slate-200"
                    />
                  </label>
                  <div className="flex mb-10 ml-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="checkbox mr-2"
                    />
                    <p>
                      I agree to all the{" "}
                      <span
                        onClick={openModal}
                        className="text-blue-500 cursor-pointer"
                      >
                        terms and conditions
                      </span>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className={`text-white font-bold font-montserrat rounded-lg w-full py-3  transition-all duration-500 ease-in-out flex items-center justify-center ${
                      isChecked
                        ? "bg-yellow-500 hover:bg-yellow-800"
                        : "bg-gray-400"
                    }`}
                    disabled={!isChecked}
                  >
                    {isLoading && <Spinner />}
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
          <dialog
            ref={modalRef}
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <TermsAndConditions />
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn" onClick={closeModal}>
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      )}
    </>
  );
};

export default TravelRequestPage;
