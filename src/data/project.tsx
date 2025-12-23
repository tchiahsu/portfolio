import microgreenT from "../assets/projects/microgreen_thumbnail.png";
import microgreenP from "../assets/projects/microgreen_preview.png";
import pokeduelT from "../assets/projects/pokeduel_thumbnail.png";
import pokeduelP from "../assets/projects/pokeduel_preview.png";
import spotifyT from "../assets/projects/spotify_thumbnail.png";
import spotifyP from "../assets/projects/spotify_preview.png";
import productLensT from "../assets/projects/product_lens_thumbnail.png";
import productLensP from "../assets/projects/product_lens_preview.png";


export const projectData = [
  {
    thumbnail: microgreenT,
    preview: microgreenP,
    width: "120",
    title: "GreenTrack: Microgreens Order Management System",
    description: "It is a web-based application designed for microgreens farms to manage day-to-day operations.",
    skills: ["Python", "TypeScript", "React", "MySQL", "FastAPI"],
    github: "https://github.com/tchiahsu/microgreen_app",
    website: "",
    hackathon: ""
  },
  {
    thumbnail: pokeduelT,
    preview: pokeduelP,
    width: "140",
    title: "PokeDuel: Pokémon Battle Game",
    description: "A real-time, multiplayer, turn-based battle game inspired by Pokémon. Built with a clean separation between combat logic and UI, featuring live matchmaking, synchronized turns, and extensible battle mechanics.",
    skills: ["TypeScript", "React", "Socket.IO", "Express.js"],
    github: "https://github.com/tchiahsu/pokeduel",
    website: "https://pokeduel-gbbx.onrender.com/#/",
    hackathon: ""
  },
  {
    thumbnail: spotifyT,
    preview: spotifyP,
    width: "120",
    title: "Spotify Profile",
    description: "A frontend-focused application built with React and TypeScript that implements OAuth 2.0 authentication and consumes the Spotify Web API to fetch, transform, and present personalized listening analytics in a clean, responsive UI.",
    skills: ["TypeScript", "React", "Spotify API"],
    github: "https://github.com/tchiahsu/spotify-profile",
    website: "",
    hackathon: ""
  },
  {
    thumbnail: productLensT,
    preview: productLensP,
    width: "150",
    title: "Product Lens: Competitor Analysis",
    description: "A competitive intelligence dashboard that tracks pricing, product changes, hiring signals, and marketing activity across competitors, transforming unstructured web data into structured, historical insights.",
    skills: ["Gradient AI", "Python", "TypeScript", "React"],
    github: "https://github.com/tchiahsu/product-lens",
    website: "",
    hackathon: "https://luma.com/MLHAIHackathonNYC"
  }
]