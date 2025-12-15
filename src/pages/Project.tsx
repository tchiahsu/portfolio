import { projectData } from "../data/project"
import Card from "../components/ui/card"

export default function Project() {
  return (
    <div id="projects" className="scroll-mt-24 flex flex-col gap-10 my-10">
      {/* Section Title */}
      <div className="flex justify-start text-[#007BFF] text-4xl md:text-6xl font-semibold tracking-tight">
        Projects.
      </div>

      {/* Section Content */}
      <div className="grid grid-cols-3 gap-x-5 gap-y-10">
        {projectData.map((d) => (
          <Card
            thumbnail={d.thumbnail}
            width={d.width}
            title={d.title}
            description={d.description}
            skills={d.skills}
          />
        ))}
      </div>
    </div>
  )
}