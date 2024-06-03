import { TTrip } from "@/types";
import SingleTravel from "../SingleTravel/SingleTravel";
import { FaX } from "react-icons/fa6";

type TProps = {
  travelsData: any;
  handlePage: (value: number) => void;
  pages: number;
  openSideScreen: boolean;
  handleCloseSideScreen: () => void;
  isFetching: boolean;
};

const SearchSideScreen = ({
  travelsData,
  handlePage,
  pages,
  handleCloseSideScreen,
  openSideScreen,
  isFetching,
}: TProps) => {
  return (
    <div
      className={`${
        openSideScreen ? "translate-x-0" : "translate-x-full"
      } fixed z-20 top-0 left-0 h-full w-full bg-black/80 py-10 px-4 overflow-y-scroll`}
    >
      {isFetching ? (
        <div className="w-full h-full flex justify-center items-center">
          <span className="loading loading-ring loading-lg text-white"></span>
        </div>
      ) : (
        <>
          <div className="xl:container bg-violet-200 h-fit rounded-lg relative px-4 lg:px-8">
            <button
              onClick={handleCloseSideScreen}
              className="border-2 border-gray-800 p-2 rounded-full absolute top-5 right-5 hover:bg-slate-400 transition-all duration-300 ease-in-out "
            >
              <FaX />
            </button>
            {travelsData?.data && (
              <>
                <h2 className="text-gray-800 text-2xl font-montserrat inline-block rounded-md mt-5">
                  Total travels found : {travelsData?.meta?.total}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 py-[80px] px-2">
                  {travelsData?.data?.map((item: TTrip) => {
                    return <SingleTravel key={item.id} item={item} />;
                  })}
                </div>
              </>
            )}
            <div className="text-center pb-10">
              <div className=" flex gap-2 flex-wrap justify-center">
                {travelsData?.meta &&
                  Array(pages)
                    .fill(null)
                    .map((_, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => handlePage(index + 1)}
                          className={`w-10 h-10 rounded-xl ${
                            travelsData?.meta?.page === index + 1
                              ? "bg-yellow-400 cursor-not-allowed"
                              : "bg-white hover:bg-violet-950 hover:text-white transition-all duration-300 ease-in-out"
                          }`}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchSideScreen;
