import Title from "../components/ui/Title"
import Projects from "../components/ui/Project"
import { projectData } from "../data/project" 

export default function Project() {
  return (
    <div id="projects" className="mb-24 pt-10">
      <div className="flex flex-col gap-10 justify-center items-center">
        <Title title="Selected Projects" />
        <div className="font-bold font-serif text-3xl">Check Out My Latest Work</div>
        <div className="grid grid-cols-3 gap-5">
          {projectData.map((item) => (
            <Projects
              thumbnail={item.thumbnail}
              preview={item.preview}
              title={item.title}
              description={item.description}
              github={item.github}
              website={item.website}
              hackathon={item.hackathon}
              winner={item.winner}
              demo={item.demo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}