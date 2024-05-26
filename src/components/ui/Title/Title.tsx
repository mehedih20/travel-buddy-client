import Image from "next/image";
import titleBg from "@/assets/Homepage/travelling-3.jpg";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

type TitleProps = { title: string; route: string; description: string };

const Title = ({ title, route, description }: TitleProps) => {
  const router = useRouter();

  return (
    <div className="h-[400px] bg-purple-800 relative overflow-hidden">
      <Image
        src={titleBg}
        alt="title-img"
        className="absolute w-full top-0 left-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-purple-950 bg-opacity-80 flex items-center">
        <div className="xl:container px-2 relative">
          <button
            onClick={() => router.back()}
            className="absolute -top-10 right-0 mr-2 text-white bg-purple-950 p-5 z-10 shadow-xl hover:bg-teal-800 rounded-full transition-all duration-300 ease-in-out"
          >
            {" "}
            <FaArrowLeft />
          </button>
          <h1 className="inline-block text-4xl py-3 mb-5 font-montserrat text-white border-b-4 border-b-yellow-400">
            {title}
          </h1>
          <h4 className="text-gray-300 max-w-[800px]">{description}</h4>
          <p className="flex items-center my-5 text-gray-300 font-montserrat font-bold text-sm">
            Home{" "}
            <span className="mx-1 text-orange-600">
              <FaChevronRight />{" "}
            </span>{" "}
            <span className=" text-cyan-600">{route}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
