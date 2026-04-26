import Title from "../components/ui/Title"
import { skills } from "../data/skills"

export default function Skills() {
  return (
    <div className="mt-5">
      <Title title="Skills" />

      {/* Grid for 3 panels */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {skills.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl shadow-sm border-t border-gray-500/10 bg-white/60 backdrop-blur-md p-6 flex flex-col gap-4"
          >
            {/* Title */}
            <h3 className="font-serif text-gray-800 tracking-wide text-lg">
              {section.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono tracking-wide px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:bg-green-800/20 hover:border-green-800/60 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}