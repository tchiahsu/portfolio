import Introduction from "./Introduction"
import About from "./About"
import Work from "./Work"
import Project from "./Project"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col gap-5 px-5 md:px-10 lg:px-30 max-w-480 mx-auto">
      <Introduction />
      <Project />
      <Work />
      <About />
      <Footer />
    </div>
  )
}

// flex flex-col items-center gap-5 px-5 md:px-10 lg:px-24 max-w-5xl mx-auto