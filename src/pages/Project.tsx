import { projectData } from "../data/project"
import Card from "../components/ui/ProjectCard"

export default function Project() {
  return (
    <div id="projects" className="scroll-mt-24 flex flex-col gap-10 my-10 sm:my-20 sm:px-20">
      {/* Section Title */}
      <div className="flex justify-start mt-4 text-4xl md:text-5xl tracking-tight gap-2">
        <span className="text-slate-600 font-semibold">PROJECTS</span>
        <span className="text-[#007bff] font-bold">.</span>
      </div>

      {/* Section Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {projectData.map((d) => (
          <Card
            thumbnail={d.thumbnail}
            preview={d.preview}
            title={d.title}
            description={d.description}
            skills={d.skills}
            github={d.github}
            website={d.website}
            hackathon={d.hackathon}
            winner={d.winner}
            demo={d.demo}
          />
        ))}
      </div>
    </div>
  )
}