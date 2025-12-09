import Card from "../components/ui/card";
import greenTrack from "../assets/projects/green_track.png";
import pokeDuel from "../assets/projects/pokeduel.png";
import spotifyApp from "../assets/projects/spotify.png";
import adventureGame from "../assets/projects/adventure_game.png";

const lProjects = [
  { src: greenTrack, title: "GreenTrack",
    description: "It is a web-based application designed for microgreen farms to manage day-to-day operations.",
    skills: ["Python", "TypeScript", "MySQL", "FastAPI", "React.js"] },
  { src: spotifyApp, title: "Spotify App",
    description: "A web application to visualize personalized Spotify data using the Spotify Web API.",
    skills: ["TypeScript", "Next.js", "React.js"] }
]

const rProjects = [
  { src: pokeDuel, title: "PokeDuel",
    description: "A full-stack turn-based Pokemon battle game inspired by Nintendo 64's Pokemon Stadium.",
    skills: ["TypeScript", "React", "Socket.IO", "Node.js", "Express.js"] },
  { src: adventureGame, title: "Adventure Game Engine",
    description: "An object-oriented game engine that allows players to explore a dynamic world and interact with its environment.",
    skills: ["Java", "Java Swing", "Maven"] }
]

export default function Project() {
  return (
    <div className="flex flex-col gap-10 my-30">
      {/* Section Title */}
      <div className="flex justify-start text-[#007BFF] text-4xl md:text-6xl font-semibold tracking-tight">
        Projects.
      </div>
      {/* Project Section Content */}
      <div className="flex flex-row gap-4 w-full">

        {/* Left Column Project Cards */}
        <div className="flex flex-col gap-4 flex-1">
          {lProjects.map((p) => (
            <Card src={p.src} title={p.title} description={p.description} skills={p.skills} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 flex-1">
          {rProjects.map((p) => (
            <Card src={p.src} title={p.title} description={p.description} skills={p.skills} />
          ))}
        </div>

      </div>
    </div>
  )
}