import projects from "../data/projects.json";
import Project from "./Project";

const Cards = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-35 overflow-x-clip">
      <h2 className="text-4xl text-center">My Projects</h2>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Cards;
