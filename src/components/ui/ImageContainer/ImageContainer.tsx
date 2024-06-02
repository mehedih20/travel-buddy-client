import Image from "next/image";
import backgroundImage from "@/assets/Homepage/bg-image.jpg";

type ContainerProps = {
  children: React.ReactNode;
};

const ImageContainer = ({ children }: ContainerProps) => {
  return (
    <div className="bg-[url('/bg-image.jpg')] bg-cover bg-center relative border overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full z-10 bg-purple-950 opacity-90"></div>
      <div className="w-full h-full relative z-30 py-[100px] px-4">
        {children}
      </div>
    </div>
  );
};

export default ImageContainer;
