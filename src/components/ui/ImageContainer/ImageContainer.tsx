import Image, { StaticImageData } from "next/image";

type ContainerProps = {
  backgroundImage: StaticImageData;
  children: React.ReactNode;
  opacity: number;
};

const ImageContainer = ({
  children,
  backgroundImage,
  opacity: opacityValue,
}: ContainerProps) => {
  return (
    <div className="relative border overflow-hidden">
      <Image
        src={backgroundImage}
        width={1400}
        alt="background-img"
        className="absolute top-0 left-0 w-full -z-20"
      />
      <div
        className={`absolute -z-10 top-0 left-0 w-full h-full bg-purple-950 opacity-${opacityValue}`}
      ></div>

      <div className="w-full h-full py-[100px] px-4">{children}</div>
    </div>
  );
};

export default ImageContainer;
