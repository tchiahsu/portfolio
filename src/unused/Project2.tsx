import Card from "./card";
import greenTrack from "../assets/projects/microgreens.png";
import pokeDuel from "../assets/projects/pokeduel.png";
import spotifyApp from "../assets/projects/spotify.png";
import adventureGame from "../assets/projects/adventure_game.png";
import greenTrack2 from "../assets/projects/microgreens2.png";
import pokeDuel2 from "../assets/projects/pokeduel2.png";
import spotifyApp2 from "../assets/projects/spotify2.png";

const lProjects = [
  { src: greenTrack,
    title: "GreenTrack",
    description: "It is a web-based application designed for microgreen farms to manage day-to-day operations.",
    skills: ["Python", "TypeScript", "MySQL", "FastAPI", "React.js"],
    src2: greenTrack2,
    about: "This web application is a microgreen order management system tailored to Boston Microgreens’ operations. It provides its users all the functionality needed to manage their daily operations such as: recording restaurant orders, managing product offerings, storing crop growth information, tracking delivery records as well as restaurant information.",
    github: "https://github.com/tchiahsu/microgreen_app",
    website: ""
  },
  { src: spotifyApp, title: "Spotify App",
    description: "A web application to visualize personalized Spotify data using the Spotify Web API.",
    skills: ["TypeScript", "Next.js", "React.js"],
    src2: spotifyApp2,
    about: "A personal 'Spotify Wrapped' clone. Sign in with your own Spotify account, then view your top artists, tracks, genres, and listening trends. This project uses OAuth 2.0 + PKCE and calls the Spotify Web API directly from the client. No server is required.",
    github: "https://github.com/tchiahsu/spotify-wrapped-clone",
    website: ""
  }
]

const rProjects = [
  { src: pokeDuel, title: "PokeDuel",
    description: "A full-stack turn-based Pokemon battle game inspired by Nintendo 64's Pokemon Stadium.",
    skills: ["TypeScript", "React", "Socket.IO", "Node.js", "Express.js"],
    src2: pokeDuel2,
    about: "A full-stack turn-based Pokemon battle game inspired by Nintendo 64's Pokemon Stadium. It features real-time 1-on-1 battles, team selection, type advantages, and 2D battle animations. Its designed to deliver a competitive multiplayer experience in the browser.",
    github: "https://github.com/tchiahsu/pokeduel",
    website: "https://pokeduel-gbbx.onrender.com/#/"
  },
  { src: adventureGame, title: "Adventure Game Engine",
    description: "An object-oriented game engine that allows players to explore a dynamic world and interact with its environment.",
    skills: ["Java", "Java Swing", "Maven"],
    src2: adventureGame,
    about: "Interactive Adventure Game is an object-oriented game engine that lets players explore a dynamic world, interact with items, solve puzzles, and battle monsters. Built using the Model-View-Controller (MVC) architecture, the project focuses on a clean design, flexibility, and scalability - demonstrating core software engineering principles while being a fun and interactive game.",
    github: "https://github.com/tchiahsu/interactive-adventure-game",
    website: ""
  }
]

export default function Project() {
  return (
    <div className="flex flex-col gap-10 my-10">
      {/* Section Title */}
      <div className="flex justify-start text-[#007BFF] text-4xl md:text-6xl font-semibold tracking-tight">
        Projects.
      </div>
      {/* Project Section Content */}
      <div className="flex justify-center">
        <div className="flex flex-row gap-4 w-5xl">

          {/* Left Column Project Cards */}
          <div className="flex flex-col gap-4 flex-1">
            {lProjects.map((p) => (
              <Card src={p.src} title={p.title} description={p.description} skills={p.skills} src2={p.src2} about={p.about} gh={p.github} web={p.website} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 flex-1">
            {rProjects.map((p) => (
              <Card src={p.src} title={p.title} description={p.description} skills={p.skills} src2={p.src2} about={p.about} gh={p.github} web={p.website} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}