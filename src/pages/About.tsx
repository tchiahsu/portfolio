import { education, skills } from "../data/about";

export default function About() {
  return (
    <div id="work" className="scroll-mt-24 flex flex-col gap-10 my-20 px-20">
      {/* Section Title */}
      <div className="flex justify-start text-[#007BFF] mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
        More About Me
      </div>

      {/* Section Content */}
      <div className="flex flex-col gap-5">
        {/* Education */}
        <div></div>
        {/* Skills */}
        <ul>
          <li></li>
        </ul>
        {/* About Me */}
        <div></div>
      </div>
    </div>
  )
}