const Loading = () => {
  return (
    <div className="relative text-3xl min-h-[80vh] bg-[url('/bg-image.jpg')] bg-cover bg-center">
      <div className=" absolute top-0 left-0 w-full h-full bg-purple-950/80 flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-white"></span>
      </div>
    </div>
  );
};

export default Loading;
