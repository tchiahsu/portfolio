import Title from "../components/ui/Title"

export default function About() {
  return (
    <div id="about" className="pt-10 px-4 sm:px-0">
      <Title title="About" />
      <span className="flex flex-col gap-5 mb-8 text-gray-600 font-inter mt-10 text-sm sm:text-base leading-relaxed">
        <span>Hello, I'm Tony 👋🏼</span>
        <span>
          I got my B.S. degree in Industrial Engineering and spent nearly three years as an operations manager
          at <a href="https://www.microgreens.boston/" className="cursor-pointer font-bold underline">Boston Microgreens</a> 🌱,
          where working closely with spreadsheet-based systems showed me both their value and limitations, ultimately leading me to transition
          into computer science. I'm now pursuing a Master's in Computer Science
          at <a href="https://www.khoury.northeastern.edu/programs/align-masters-of-science-in-computer-science/" className="cursor-pointer font-bold underline">Northeastern University</a> 🎓, focused on building practical,
          high-impact solutions, including a web app that helped my former company move from spreadsheets to a more automated system.
        </span>
        <span>
          <span className="font-bold">🔬 Interests:</span> Agent-based Workflows, AI/ML, and Computer Vision.
        </span>
      </span>
    </div>
  )
}