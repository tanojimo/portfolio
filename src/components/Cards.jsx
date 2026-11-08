import projects from "../data/projects.json";
import Project from "./Project";

const Cards = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-35 overflow-hidden">
      <h2 className="text-3xl text-center">My Projects</h2>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};

export default Cards;
