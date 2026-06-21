import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import { journey } from "../data/journey"
import Event from "../components/ui/Event"
import Title from "../components/ui/Title"

const LIMIT = 6;

export default function Journey() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? journey : journey.slice(0, LIMIT);

  return (
    <div className="mb-20 mt-15">
      <Title title="My Journey" />
      <div className="flex flex-col gap-2 mt-8 text-gray-600">
        {visible.map((item, i) => (
          <Event
            key={i}
            year={item.year}
            month={item.month}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      {journey.length > LIMIT && (
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