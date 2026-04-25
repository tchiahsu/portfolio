import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { LuTrophy } from "react-icons/lu";

interface Props {
  thumbnail: string;
  preview: string;
  title: string;
  description: string;
  github?: string;
  website?: string;
  hackathon?: string;
  winner?: string;
  demo?: string;
}

export default function ProjectCard({ thumbnail, preview, title, description, github, website, hackathon, winner, demo }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-full flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-3 hover:border-gray-300 transition-colors shadow-sm">
      
      {/* Image with hover preview */}
      <div
        onClick={() => setOpen(true)}
        className="group relative w-full overflow-hidden rounded-xl bg-gray-100 aspect-video cursor-pointer"
      >
        <img
          src={thumbnail}
          alt={title}
          className="relative z-10 h-full w-full object-cover object-top transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-105 group-hover:opacity-0"
        />
        <img
          src={preview}
          alt={title}
          className="absolute inset-0 z-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col grow gap-2 p-2">

        {/* Title */}
        <div
          onClick={() => setOpen(true)}
          className="font-semibold text-lg text-slate-900 cursor-pointer hover:underline font-serif"
        >
          {title}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        {/* Links + badges */}
        <div className="flex flex-col gap-3 mt-auto pt-2">
          
          {/* Hackathon + winner badges */}
          {hackathon && (
            <div className={`w-fit inline-flex items-center rounded-full px-3 py-1 gap-2 text-xs font-medium ${
              winner
                ? "border border-amber-300 bg-amber-100 text-amber-500"
                : "border border-zinc-200 bg-zinc-100 text-zinc-700"
            }`}>
              {winner ? <LuTrophy /> : <FaLaptopCode />}
              {hackathon}{winner ? ` - ${winner}` : ""}
            </div>
          )}

          {/* Action links */}
          <div className="flex flex-row gap-2">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-500 border border-gray-500/60 hover:border-gray-500 hover:bg-gray-200/90 text-xs rounded-md px-3 py-1.5 transition">
                <FaGithub /> Github
              </a>
            )}
            {demo && (
              <button onClick={() => setOpen(true)}
                className="flex items-center gap-1 text-gray-500 border border-gray-500/60 hover:border-gray-500 hover:bg-gray-200/90 text-xs rounded-md px-3 py-1.5 transition cursor-pointer">
                <MdSlowMotionVideo size={14} /> Demo
              </button>
            )}
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-500 border border-gray-500/60 hover:border-gray-500 hover:bg-gray-200/90 text-xs rounded-md px-3 py-1.5 transition">
                <HiLink /> Website
              </a>
            )}
          </div>

        </div>
      </div>

      {/* Demo modal */}
      {open && demo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex flex-col gap-4 max-w-4xl w-full px-6 pt-5 pb-10 bg-white rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="flex justify-end text-[#007bff] text-2xl hover:text-[#007bff]/60"
            >
              <IoClose />
            </button>

            <div className="relative w-full overflow-hidden rounded-xl aspect-video bg-black">
              <video controls autoPlay muted playsInline preload="metadata"
                className="absolute inset-0 h-full w-full object-cover">
                <source src={demo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-slate-800 text-2xl font-bold">{title}</div>
              <div className="text-gray-500 text-sm">{description}</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
