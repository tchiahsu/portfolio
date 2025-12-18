import { workData } from "../data/work";
import WorkCard from "../components/ui/WorkCard";


export default function Work() {
  return (
    <div id="work" className="scroll-mt-24 flex flex-col gap-10 my-10 sm:my-20 sm:px-20">
      {/* Section Title */}
      <div className="flex justify-start mt-4 text-4xl md:text-5xl tracking-tight gap-2">
        <span className="text-slate-600 font-semibold">WORK EXPERIENCE</span>
        <span className="text-[#007bff] font-bold">.</span>
      </div>

      {/* Section Content */}
      <div className="flex flex-col gap-5">
        {workData.map((e) => (
          <WorkCard
            logo={e.logo}
            jobTitle={e.jobTitle}
            company={e.company}
            summary={e.summary}
            location={e.location}
            start={e.start}
            finish={e.finish}
            description={e.description}
          />
        ))} 
      </div>
    </div>
  )
}