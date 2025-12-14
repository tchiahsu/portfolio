import Introduction from "./Introduction"
import About from "./About"
import Work from "./Work"
import Project from "./Project"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col gap-5 px-5 md:px-30 lg:px-50">
      <Introduction />
      <Project />
      <Work />
      <About />
      <Footer />
    </div>
  )
}