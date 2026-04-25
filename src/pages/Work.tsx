import Title from "../components/ui/Title"
import Experience from "../components/ui/Experience"
import { workData } from "../data/work"

export default function Work() {
  return (
    <div id="work" className="mb-16 pt-10">
      <Title title="Internship & Work Experience" />
      <div className="mt-10">
        {workData.map((item) => (
          <Experience
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
    </div>
  );
}