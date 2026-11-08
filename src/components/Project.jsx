import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Project = ({ project }) => {
  const [ref, visible] = useIntersectionObserver(0.2);
  return (
    <div ref={ref} className="card">
      <div
        className={`relative grid grid-cols-5 w-100 h-40 bg-light rounded-xl mb-2 duration-1000 transition-transform ${
          project.righted
            ? `ml-auto mr-35 ${
                visible ? "translate-x-0" : "translate-x-[110vw]"
              }`
            : `ml-32 ${visible ? "translate-x-0" : "translate-x-[-110vw]"}`
        }`}
      >
        <div className="col-span-2 h-full flex flex-col-reverse">
          <div className="absolute -rotate-10 -left-11 -top-17 w-40 h-40 rounded-xl">
            <img
              src={project.img}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex gap-4 pl-4 pb-3">
            {project.tags.map((img) => (
              <img src={img} alt="" className="h-5" />
            ))}
          </div>
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="text-sm text-dark w-50">{project.description}</p>
          <div className="flex gap-2 mt-3">
            <a
              href={project.github}
              className="bg-dark w-20 h-7 rounded-xl flex justify-center items-center text-light text-sm"
            >
              Github
            </a>
            <a
              href={project.demo}
              className="w-20 h-7 border-2 border-dark rounded-xl flex justify-center items-center text-dark text-sm"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
      <img
        src="/conveyor.svg"
        alt=""
        className={`absolute ${project.righted ? "-right-50" : "-left-50"}`}
      />
    </div>
  );
};

export default Project;
