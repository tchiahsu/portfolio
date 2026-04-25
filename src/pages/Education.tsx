import Title from "../components/ui/Title"
import Education from "../components/ui/Education"
import { educationData } from "../data/education"

export default function Educations() {
  return (
    <div id="more">
      <Title title="Education" />
      {educationData.map((item) => (
        <Education 
          logo={item.logo}
          university={item.university}
          degree={item.degree}
          program={item.program}
          gpa={item.gpa}
          start={item.start}
          finish={item.finish}
        />
      ))}
    </div>
  );
}