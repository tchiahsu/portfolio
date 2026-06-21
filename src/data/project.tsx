// Import Images for Portfolio
import mgThumbnail from "../assets/projects/microgreen_thumbnail.png";
import mgImage from "../assets/projects/microgreen_app.png";
import pokeThumbnail from "../assets/projects/pokeduel_thumbnail.png";
import pokeImage from "../assets/projects/pokeduel_app.png";
import spotifyThumbnail from "../assets/projects/spotify_thumbnail.png";
import spotifyImage from "../assets/projects/spotify_app.png";
import plThumbnail from "../assets/projects/product_lens_thumbnail.png";
import plImage from "../assets/projects/product_lens_app.png";
import goatThumbnail from "../assets/projects/goat_thumbnail.png";
import goatImage from "../assets/projects/goat_app.png";
import clioThumbnail from "../assets/projects/clio_thumbnail.png";
import clioImage from "../assets/projects/clio_app.png";

// Import Videos for Portfolio
import plDemo from "../assets/demo/product_lens_demo.mp4";
import mgDemo from "../assets/demo/microgreen_demo.mp4";
import pokeDemo from "../assets/demo/poke_demo.mp4";
import spotifyDemo from "../assets/demo/spotify_demo.mp4";
import goatDemo from "../assets/demo/goat_demo.mp4";
import clioDemo from "../assets/demo/clio_demo.mp4";

export const projectData = [
  {
    thumbnail: clioThumbnail,
    preview: clioImage,
    title: "AI-Driven Financial Dashboard",
    description: "This is a personal finance AI app that parses your bank statements and organizes your spending into categories, trends, and summaries. It combines a clean dashboard with an AI chat assistant that lets you ask natural language questions about your finances.",
    github: "https://github.com/tchiahsu/clio.ai",
    website: "https://clio-ai.onrender.com/",
    hackathon: "",
    winner: "",
    demo: clioDemo
  },
  {
    thumbnail: mgThumbnail,
    preview: mgImage,
    title: "Microgreens Order Management",
    description: "A full-stack microgreens operations platform that manages crops, planting schedules, orders, and deliveries in one system. Built with React and TypeScript on the frontend, a SQL-backed database, and a REST API backend to ensure data integrity and real-time operational visibility.",
    github: "https://github.com/tchiahsu/microgreen_app",
    website: "https://microgreen-app-fiqc.onrender.com/app",
    hackathon: "",
    winner: "",
    demo: mgDemo
  },
  {
    thumbnail: pokeThumbnail,
    preview: pokeImage,
    title: "PokeDuel: Pokémon Battle Game",
    description: "A real-time, multiplayer, turn-based battle game inspired by Pokémon, featuring live matchmaking and synchronized turns. Built with TypeScript and WebSockets, it uses a modular combat engine and a clean separation between game logic and UI.",
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
    github: "https://github.com/tchiahsu/spotify-listening-profile",
    website: "https://spotify-frontend-j3yv.onrender.com/",
    hackathon: "",
    winner: "",
    demo: spotifyDemo
  },
  {
    thumbnail: goatThumbnail,
    preview: goatImage,
    title: "2D Puzzle Platformer",
    description: "A 2D puzzle platformer where players solve spatial challenges using a dual-portal teleportation mechanic (moving, redirecting, and thinking in two places at once) while guiding a teleporting goat through handcrafted levels",
    github: "https://github.com/jassem-razzaq/ttiraatgia2dpp/tree/main",
    website: "",
    hackathon: "GoatHack 2026",
    winner: "Winner (Best Game)",
    demo: goatDemo,
  },
  {
    thumbnail: plThumbnail,
    preview: plImage,
    title: "Competitor Analysis",
    description: "A competitor analysis web application that tracks pricing, product changes, hiring signals, and marketing activity across competitors. Built with React and TypeScript on the frontend and a backend API that leverages automated data collection and AI-powered analysis.",
    github: "https://github.com/tchiahsu/product-lens",
    website: "",
    hackathon: "MLH x DigitalOcean Hackathon",
    winner: "",
    demo: plDemo
  }
]