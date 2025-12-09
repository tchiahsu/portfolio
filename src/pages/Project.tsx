import Card from "../components/ui/card";
import greenTrack from "../assets/projects/green_track.png";

const projects = [
  { src: "../assets/projects/green_track.png", title: "GreenTrack",
    description: "It is a web-based application designed for microgreen farms to manage day-to-day operations.",
    skills: ["Python", "TypeScript", "MySQL", "FastAPI", "React.js"] },
  { src: "../assets/projects/pokeduel.png", title: "PokeDuel",
    description: "A full-stack turn-based Pokemon battle game inspired by Nintendo 64's Pokemon Stadium.",
    skills: ["TypeScript", "React", "Socket.IO", "Node.js", "Express.js"] },
  { src: "../assets/projects/spotify.png", title: "Spotify App",
    description: "A web application to visualize personalized Spotify data using the Spotify Web API.",
    skills: ["TypeScript", "Next.js", "React.js"] },
  { src: "../assets/projects/adventure_game.png", title: "Adventure Game",
    description: "An object-oriented game engine that allows players to explore a dynamic world and interact with its environment.",
    skills: ["Java", "Java Swing", "Maven"] },
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
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-1">

          {/* Single Card */}
          <div className="relative rounded-xl w-full shadow-2xl overflow-hidden cursor-pointer group">

            {/* Background */}
            <img src={greenTrack} alt="image not found" className="w-full h-auto object-contain block"/>

            {/* Content Layer */}
            <div className="absolute inset-0 py-8 flex flex-col gap-4 items-start justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
              {/* Project Title */}
              <h2 className="px-8 text-2xl text-white tracking-wider font-bold">
                GreenTrack
              </h2>
              {/* Project Description */}
              <p className="px-8 text-sm text-gray-100">
                It is a web-based application designed for microgreen farms to manage day-to-day operations.
              </p>
              {/* Project Skills / Technologies */}
              <ul className="flex flex-row justify-center items-center gap-2 px-8 text-[8pt] text-white font-semibold">
                <li className="rounded-full bg-[#007BFF] px-3 py-2">Python</li>
                <li className="rounded-full bg-[#007BFF] px-3 py-2">TypeScript</li>
                <li className="rounded-full bg-[#007BFF] px-3 py-2">MySQL</li>
                <li className="rounded-full bg-[#007BFF] px-3 py-2">FastAPI</li>
                <li className="rounded-full bg-[#007BFF] px-3 py-2">React.JS</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 flex-1">

          {/* Single Card */}
          <div className="rounded-lg bg-blue-950 h-200">
            Right 1
          </div>
        </div>
      </div>
    </div>
  )
}