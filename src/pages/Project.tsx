import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import Title from "../components/ui/Title"
import Projects from "../components/ui/Project"
import { projectData } from "../data/project"

const LIMIT = 3;

export default function Project() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projectData : projectData.slice(0, LIMIT);

  return (
    <div id="projects" className="mb-12 pt-10">
      <div className="flex flex-col gap-10 justify-center items-center">
        <Title title="Selected Projects" />
        <div className="font-serif text-4xl">Check Out My Latest Work</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visible.map((item, i) => (
            <Projects
              key={i}
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
        {projectData.length > LIMIT && (
          <div className="flex justify-center uppercase tracking-widest text-[8pt]">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 border uppercase border-gray-500/20 rounded-full px-4 py-2 hover:border-[#007BFF] hover:text-[#007BFF] transition-colors duration-200"
            >
              {showAll ? (
                <><FaAngleUp size={12} /> see less</>
              ) : (
                <><FaAngleDown size={12} /> see more</>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}