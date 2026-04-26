import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import { recognition } from "../data/recognition"
import Event from "../components/ui/Event"
import Title from "../components/ui/Title"

const LIMIT = 6;

export default function Recognition() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? recognition : recognition.slice(0, LIMIT);

  return (
    <div className="mt-15">
      <Title title="Certifications" />
      <div className="flex flex-col mt-8 text-gray-600">
        {visible.map((item, i) => (
          <Event
            key={i}
            year={item.year}
            month={item.month}
            title={item.name}
            description={item.description}
          />
        ))}
      </div>
      {recognition.length > LIMIT && (
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
  );
}