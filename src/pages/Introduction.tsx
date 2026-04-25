import Panel from "../components/ui/Panel"
import SocialLinks from "../components/ui/Social";

export default function Introduction() {
  return (
    <div id="home" className="pt-20 sm:pt-46 mb-12 flex flex-col items-center w-full">
      <Panel />
      <SocialLinks />
    </div>
  )
}