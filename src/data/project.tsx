// Import Images for Portfolio
import mgThumbnail from "../assets/projects/microgreen_thumbnail.png";
import mgImage from "../assets/projects/microgreen_app.png";
import pokeThumbnail from "../assets/projects/pokeduel_thumbnail.png";
import pokeImage from "../assets/projects/pokeduel_app.png";
import spotifyThumbnail from "../assets/projects/spotify_thumbnail.png";
import spotifyImage from "../assets/projects/spotify_app.png";
import plThumbnail from "../assets/projects/product_lens_thumbnail.png";
import plImage from "../assets/projects/product_lens_app.png";
import goatThumbnail from "../assets/projects/goatThumbnail.png";
import goatImage from "../assets/projects/goatImage.png";

// Import Videos for Portfolio
import plDemo from "../assets/demo/product_lens_demo.mp4";
import mgDemo from "../assets/demo/microgreen_demo.mp4";
import pokeDemo from "../assets/demo/poke_demo.mp4";
import spotifyDemo from "../assets/demo/spotify_demo.mp4";
import goatDemo from "../assets/demo/goat_demo.mp4";

export const projectData = [
  {
    thumbnail: mgThumbnail,
    preview: mgImage,
    title: "GreenTrack: Microgreens Order Management",
    description: "A full-stack microgreens operations platform that manages crops, planting schedules, orders, and deliveries in one system. Built with React and TypeScript on the frontend, a SQL-backed database, and a REST API backend to ensure data integrity and real-time operational visibility.",
    skills: ["Python", "TypeScript", "React", "MySQL", "FastAPI"],
    github: "https://github.com/tchiahsu/microgreen_app",
    website: "",
    hackathon: "",
    winner: "",
    demo: mgDemo
  },
  {
    thumbnail: pokeThumbnail,
    preview: pokeImage,
    title: "PokeDuel: Pokémon Battle Game",
    description: "A real-time, multiplayer, turn-based battle game inspired by Pokémon, featuring live matchmaking and synchronized turns. Built with TypeScript and WebSockets, it uses a modular combat engine and a clean separation between game logic and UI.",
    skills: ["TypeScript", "React", "Socket.IO", "Express.js"],
    github: "https://github.com/tchiahsu/pokeduel",
    website: "https://pokeduel-gbbx.onrender.com/#/",
    hackathon: "",
    winner: "",
    demo: pokeDemo
  },
  {
    thumbnail: spotifyThumbnail,
    preview: spotifyImage,
    title: "Spotify Listening Profile",
    description: "A personalized analytics dashboard that transforms Spotify listening history into insights on top artists, tracks, playlists, and recent activity. Built with React and TypeScript, integrating OAuth 2.0 and the Spotify Web API for secure, real-time data access.",
    skills: ["TypeScript", "React", "Spotify Web API", "OAuth 2.0", "Express.js"],
    github: "https://github.com/tchiahsu/spotify-listening-profile",
    website: "https://spotifylisten.vercel.app",
    hackathon: "",
    winner: "",
    demo: spotifyDemo
  },
  {
    thumbnail: goatThumbnail,
    preview: goatImage,
    title: "The Time I Reincarnated as a Teleporting Goat in a 2D Puzzle Platformer",
    description: "A 2D puzzle platformer where players solve spatial challenges using a dual-portal teleportation mechanic (moving, redirecting, and thinking in two places at once) while guiding a teleporting goat through handcrafted levels",
    skills: ["Python", "Google Gemini"],
    github: "https://github.com/jassem-razzaq/ttiraatgia2dpp/tree/main",
    website: "",
    hackathon: "GoatHack 2026",
    winner: "",
    demo: goatDemo,
  },
  {
    thumbnail: plThumbnail,
    preview: plImage,
    title: "Product Lens: Competitor Analysis",
    description: "A competitor analysis web application that tracks pricing, product changes, hiring signals, and marketing activity across competitors. Built with React and TypeScript on the frontend and a backend API that leverages automated data collection and AI-powered analysis.",
    skills: ["Gradient AI", "Python", "TypeScript", "React"],
    github: "https://github.com/tchiahsu/product-lens",
    website: "",
    hackathon: "MLH x DigitalOcean Hackathon",
    winner: "",
    demo: plDemo
  }
]