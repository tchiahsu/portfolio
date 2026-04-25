import Introduction from "./Introduction"
import About from "./About"
import Journey from "./Journey"
import Work from "./Work"
import Education from "./Education"
import Project from "./Project"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full max-w-7xl justify-center px-6 sm:px-20">
      <Introduction />
      <About />
      <Work />
      <Project />
      <Education />
      <Journey />
      <Footer />
    </div>
  )
}