const Hero = () => {
  return (
    <div className="h-screen w-full flex items-center justify-between px-34">
      <div className="flex flex-col gap-3">
        <h1 className="heroText text-5xl text-black">
          Hello, I am Tanjim Rahman
        </h1>
        <p className="text-xl text-dark">Student | Programmer | Maker</p>
      </div>
      <div className="relative w-40 h-40 flex flex-col justify-center items-center">
        <img
          src="/crane.svg"
          alt=""
          className="crane absolute -z-10 -top-270"
        />
        <div className="pfp absolute w-full h-full bg-dark rounded-3xl -top-122"></div>
      </div>
    </div>
  );
};

export default Hero;
