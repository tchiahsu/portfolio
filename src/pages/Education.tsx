import { useState } from "react"
import Title from "../components/ui/Title"
import Education from "../components/ui/Education"
import { educationData } from "../data/education"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const LIMIT = 3;

export default function Educations() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? educationData : educationData.slice(0, LIMIT);

  return (
    <div className="pt-10">
      <Title title="Education" />
      {visible.map((item, i) => (
        <Education
          key={i}
          logo={item.logo}
          university={item.university}
          degree={item.degree}
          program={item.program}
          gpa={item.gpa}
          start={item.start}
          finish={item.finish}
        />
      ))}
      {educationData.length > LIMIT && (
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