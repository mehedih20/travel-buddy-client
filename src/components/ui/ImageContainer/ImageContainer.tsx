import Image from "next/image";
import backgroundImage from "@/assets/Homepage/bg-image.jpg";

type ContainerProps = {
  children: React.ReactNode;
};

const ImageContainer = ({ children }: ContainerProps) => {
  return (
    <div className="relative border overflow-hidden">
      <Image
        src={backgroundImage}
        width={1400}
        alt="background-img"
        className="absolute top-0 left-0 w-full h-full -z-20"
      />
      <div
        className={`absolute -z-10 top-0 left-0 w-full h-full bg-purple-950 opacity-90`}
      ></div>

      <div className="w-full h-full relative z-10 py-[100px] px-4">
        {children}
      </div>
    </div>
  );
};

export default ImageContainer;
