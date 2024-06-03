import { FaChevronRight } from "react-icons/fa";

type TitleProps = { title: string; route: string; description: string };

const Title = ({ title, route, description }: TitleProps) => {
  return (
    <div className="bg-[url('/bg-image.jpg')] bg-cover bg-center lg:h-[400px] overflow-hidden">
      <div className="w-full h-full pt-16 pb-28 px-2 bg-purple-950 bg-opacity-80 flex items-center">
        <div className="xl:container px-2 relative">
          <h1 className="inline-block text-4xl font-bold py-3 mb-5 font-montserrat text-white border-b-4 border-b-yellow-400">
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
