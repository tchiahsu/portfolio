import spotify from "../assets/projects/spotify.png"
import pokeball from "../assets/projects/pokeball.png"
import microgreen from "../assets/projects/microgreens.png"
import productLens from "../assets/projects/product_lens.png"
import adventure from "../assets/projects/adventure.png"

export default function Project() {
  return (
    <div className="flex flex-col gap-10 my-10">
      {/* Section Title */}
      <div className="flex justify-start text-[#007BFF] text-4xl md:text-6xl font-semibold tracking-tight">
        Projects.
      </div>

      {/* Section Content */}
      <div className="grid grid-cols-3 gap-x-5 gap-y-10">
        
        {/* Microgreen Project */}
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-center items-center h-[50vh] rounded-lg bg-gradient-to-t from-transparent via-gray-100/80 to-gray-100"
          >
            <img src={microgreen} alt="image not found" width="120" height="120"
              className="hover:-translate-y-2 hover:scale-105 ease-in-out duration-300" />            
          </div>
          <ul className="flex flex-row justify-start items-center gap-2 text-[6pt] text-white font-semibold font-mono">
            <li className="rounded-full bg-[#007BFF] px-2 py-1">Python</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">TypeScript</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">MySQL</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">FastAPI</li>
          </ul>
          <div className="hover:underline text-xl font-semibold cursor-pointer">
            GreenTrack: Microgreen Order Management
          </div>
          <div className="text-gray-400 text-sm">
            It is a web-based application designed for microgreen farms to manage day-to-day operations.
          </div>
        </div>

        {/* Pokemon Project */}
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-center items-center h-[50vh] rounded-lg bg-gradient-to-t from-transparent via-gray-100/80 to-gray-100"
          >
            <img src={pokeball} alt="image not found" width="130" height="130"
              className="hover:-translate-y-2 hover:scale-105 ease-in-out duration-300" />            
          </div>
          <ul className="flex flex-row justify-start items-center gap-2 text-[6pt] text-white font-semibold font-mono">
            <li className="rounded-full bg-[#007BFF] px-2 py-1">TypeScript</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">React</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">Socket.IO</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">Express.js</li>
          </ul>
          <div className="hover:underline text-xl font-semibold cursor-pointer">
            PokeDuel: Pokemon Battle Game
          </div>
          <div className="text-gray-400 text-sm">
            A full-stack turn-based Pokemon battle game inspired by Nintendo 64's Pokemon Stadium.
          </div>
        </div>

        {/* Spotify Project */}
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-center items-center h-[50vh] rounded-lg bg-gradient-to-t from-transparent via-gray-100/80 to-gray-100"
          >
            <img src={spotify} alt="image not found" width="100" height="100"
              className="hover:-translate-y-2 hover:scale-105 ease-in-out duration-300" />            
          </div>
          <ul className="flex flex-row justify-start items-center gap-2 text-[6pt] text-white font-semibold font-mono">
            <li className="rounded-full bg-[#007BFF] px-2 py-1">TypeScript</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">React.js</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">Next.JS</li>
          </ul>
          <div className="hover:underline text-xl font-semibold cursor-pointer">
            Spotify Profile
          </div>
          <div className="text-gray-400 text-sm">
            A web application to visualize personalized Spotify data using the Spotify Web API.
          </div>
        </div>

        {/* Product Lens Project */}
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-center items-center h-[50vh] rounded-lg bg-gradient-to-t from-transparent via-gray-100/80 to-gray-100"
          >
            <img src={productLens} alt="image not found" width="160" height="160"
              className="hover:-translate-y-2 hover:scale-105 ease-in-out duration-300" />            
          </div>
          <ul className="flex flex-row justify-start items-center gap-2 text-[6pt] text-white font-semibold font-mono">
            <li className="rounded-full bg-[#007BFF] px-2 py-1">Gradient AI</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">Python</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">TypeScript</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">React.js</li>
          </ul>
          <div className="hover:underline text-xl font-semibold cursor-pointer">
            Product Lens: Competitor Analysis
          </div>
          <div className="text-gray-400 text-sm">
            A competitor audit tool that cuts through the noise to uncover real competitive threats in real-time.
          </div>
        </div>

        {/* Adventure Game Project */}
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-center items-center h-[50vh] rounded-lg bg-gradient-to-t from-transparent via-gray-100/80 to-gray-100"
          >
            <img src={adventure} alt="image not found" width="100" height="100"
              className="hover:-translate-y-2 hover:scale-105 ease-in-out duration-300" />            
          </div>
          <ul className="flex flex-row justify-start items-center gap-2 text-[6pt] text-white font-semibold font-mono">
            <li className="rounded-full bg-[#007BFF] px-2 py-1">Java</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">Java Swing</li>
            <li className="rounded-full bg-[#007BFF] px-2 py-1">Maven</li>
          </ul>
          <div className="hover:underline text-xl font-semibold cursor-pointer">
            Adventure Game Engine
          </div>
          <div className="text-gray-400 text-sm">
            It is an object-oriented game engine that lets players explore a dynamic world, interact with items, solve puzzles, and battle monsters. 
          </div>
        </div>
      </div>
    </div>
  )
}