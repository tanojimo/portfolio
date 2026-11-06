const Hero = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-between px-34">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl text-black">Hello, I am Tanjim Rahman</h1>
        <p className="text-xl text-dark">Student | Programmer | Maker</p>
      </div>
      <div className="relative w-40 h-40 flex flex-col justify-center items-center">
        <img src="/crane.svg" alt="" className="absolute -z-10 -top-148" />
        <div className="w-full h-full bg-dark rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;
