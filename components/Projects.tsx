import { projects } from "../lib/projects";

export default function Section() {
  return (
    <div>
      <h1 className="text-4xl font-bold pb-2 text-white">Projects</h1>
      {
        projects.map(project => {
          return (
            <div id={project.id} className="bg-[#0D0D0D] py-4 px-6 my-4 rounded-xl shadow-md flex flex-col">
              <h1 className="font-bold text-xl md:text-3xl">{project.name}</h1>
              <p className="my-2 text-sm md:text-base">{project.description}</p>
              <img src={project.imageUrl} alt="Project" className="my-2" />
              <div className="font-bold text-right md:text-base flex self-end my-2 md:pt-0">
                <a href={project.codeUrl} className="underline mx-1" target="_blank" rel="noopener noreferrer">code</a>
                <a href={project.demoUrl} className="underline mx-1" target="_blank" rel="noopener noreferrer">demo</a>
              </div>
            </div>
          );
        })
      };
    </div>
  );
}