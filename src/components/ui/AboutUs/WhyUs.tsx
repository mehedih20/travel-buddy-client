import ImageContainer from "../ImageContainer/ImageContainer";
import { whyUsData } from "@/constants/whyUsData";

const WhyUs = () => {
  return (
    <ImageContainer>
      <div className="xl:container">
        <div className="text-center">
          <h2 className=" text-4xl inline-block text-white font-montserrat pb-3 border-b-4 border-b-yellow-400 uppercase">
            Why Us?
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 py-10 mt-10">
          {whyUsData.map((item, index) => {
            return (
              <div
                key={index}
                className=" bg-violet-900 shadow-2xl  flex flex-col items-center py-10 px-8 rounded-lg"
              >
                <p className="text-5xl mb-5">{item.icon}</p>
                <p className=" font-montserrat text-2xl text-white text-center font-semibold mb-5">
                  {item.title}
                </p>
                <p className="text-base text-gray-200 font-montserrat text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </ImageContainer>
  );
};

export default WhyUs;
