import { projectData } from "../data/project"
import Card from "../components/ui/ProjectCard"

export default function Project() {
  return (
    <div id="projects" className="scroll-mt-24 flex flex-col gap-10 my-20 px-20">
      {/* Section Title */}
      <div className="flex text-[#007BFF] text-4xl md:text-6xl font-semibold tracking-tight">
        Projects.
      </div>

      {/* Section Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((d) => (
          <Card
            thumbnail={d.thumbnail}
            preview={d.preview}
            title={d.title}
            description={d.description}
            skills={d.skills}
          />
        ))}
      </div>
    </div>
  )
}