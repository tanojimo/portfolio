const Cards = () => {
  return (
    <div className="h-screen flex flex-col gap-35">
      <h2 className="text-3xl text-center">My Projects</h2>
      <div>
        <div className="relative grid grid-cols-5 w-100 h-40 bg-light rounded-xl mb-2 ml-32">
          <div className="col-span-2 h-full flex flex-col-reverse">
            <div className="absolute -rotate-10 -left-11 -top-17 w-40 h-40 rounded-xl">
              <img
                src="/ginggongOS.png"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex gap-4 pl-4 pb-3">
              <img src="/html.svg" alt="" className="h-5" />
              <img src="/css.svg" alt="" className="h-5" />
              <img src="/js.svg" alt="" className="h-5" />
            </div>
          </div>
          <div className="col-span-3 flex flex-col justify-center">
            <h3 className="text-xl font-bold">GingGong OS</h3>
            <p className="text-sm text-dark w-50">
              GingGong OS is a simple web os I made for stardance.
            </p>
            <div className="flex gap-2 mt-3">
              <div className="bg-dark w-20 h-7 rounded-xl flex justify-center items-center text-light text-sm">
                Github
              </div>
              <div className="w-20 h-7 border-2 border-dark rounded-xl flex justify-center items-center text-dark text-sm">
                Demo
              </div>
            </div>
          </div>
        </div>
        <img src="/conveyor.svg" alt="" className="absolute -left-50" />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Cards;
