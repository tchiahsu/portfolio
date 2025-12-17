import { workData } from "../data/work";
import WorkCard from "../components/ui/WorkCard";


export default function Work() {
  return (
    <div id="work" className="scroll-mt-24 flex flex-col gap-10 my-20 px-20">
      {/* Section Title */}
      <div className="flex justify-start text-[#007BFF] mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
        Work Experience.
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