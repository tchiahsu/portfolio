import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import Title from "../components/ui/Title"
import Experience from "../components/ui/Experience"
import { workData } from "../data/work"

const LIMIT = 3;

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? workData : workData.slice(0, LIMIT);

  return (
    <div id="work" className="mb-16 pt-10">
      <Title title="Internship & Work Experience" />
      <div className="mt-10">
        {visible.map((item, i) => (
          <Experience
            key={i}
            logo={item.logo}
            title={item.jobTitle}
            company={item.company}
            summary={item.summary}
            location={item.location}
            start={item.start}
            finish={item.finish}
            description={item.description}
          />
        ))}
      </div>
      {workData.length > LIMIT && (
        <div className="flex justify-center uppercase tracking-widest text-[8pt] mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 border uppercase border-gray-500/20 rounded-full px-4 py-2 hover:border-[#007BFF] hover:text-[#007BFF] transition-colors duration-200 cursor-pointer"
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
  );
}