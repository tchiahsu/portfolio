import { skills } from "../data/about";
import pfp from "../assets/projects/pfp.png";
import SkillsCard from "../components/ui/SkillsCard";

export default function About() {
  return (
    <div id="about" className="scroll-mt-24 flex flex-col gap-10 my-10 sm:my-20 sm:px-20">
      {/* Section Title */}
      <div className="flex justify-start mt-4 text-4xl md:text-5xl tracking-tight gap-2">
        <span className="text-slate-600 font-semibold">ABOUT ME</span>
        <span className="text-[#007bff] font-bold">.</span>
      </div>

      {/* Section Content */}
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-12 items-center">
        {/* About me */}
        <div>
          {/* Accent line */}
          <div className="mb-8 h-0.5 w-55 bg-[#007bff]" />

          {/* Subtitle + Image row */}
          <div className="flex flex-row gap-2 items-center sm:gap-6">
            {/* Image */}
            <img
              src={pfp}
              alt="Profile photo"
              className="
                mt-4 sm:mt-0
                w-32
                sm:w-36
                md:w-40
                h-auto
                rounded-2xl
                object-cover
                shrink-0
              "
            />
            {/* Subtitle */}
            <p className="text-lg font-semibold text-slate-400 max-w-lg">
              I'm interested in solving real-world problems using clean and usable software.
            </p>
          </div>

          {/* Body */}
          <div className="mt-6 space-y-4 text-sm leading-6 text-zinc-600">
            <p>
              I studied Industrial Engineering for undergrad and spent nearly three years working as an operations
              manager at Boston Microgreens. We used spreadsheets extensively to manage data and keep things running.
              While building and maintaining those spreadsheets, I began to realize how powerful good software can be
              for any business’s operations, and that's what pushed me to transition into computer science.
            </p>

            <p>
              I'm now pursuing a Master's degree in Computer Science, where I attempt to use software development
              to build scalable, high-impact solutions to real-world problems. Recently, I finished building a new
              web application to manage order and planting data for my former company so they could finally move away
              from those spreadsheets for good.
            </p>

            <p>
              I've also started exploring AI and machine learning. I built a competitor-analysis tool using
              DigitalOcean's Gradient AI with multiple agentic workflows to analyze market strategy and pricing.
              Currently, I'm working on a financial insights application that uses Gemini AI to generate deeper
              insights from personal financial data.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-4 justify-center">
        {skills.map((s) => (
          <SkillsCard title={s.title} skills={s.skills}/>
        ))}
      </div>
    </div>
  )
}