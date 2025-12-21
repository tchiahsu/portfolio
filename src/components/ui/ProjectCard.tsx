import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";

type ProjectCardProps = {
  thumbnail: string;
  preview: string;
  title: string;
  description: string;
  skills: string[];
  github: string;
  website: string;
  hackathon: string;
}

const ProjectCard = ({ thumbnail, preview, title, description, skills, github, website, hackathon }: ProjectCardProps) => {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 hover:border-gray-300 transition-colors">
      <div className="flex h-full flex-col gap-2">
        {/* Image Effect */}
        <div
          className="group relative w-full overflow-hidden rounded-lg bg-linear-to-t from-transparent via-gray-100/80 to-gray-100 aspect-16/10 max-h-105"
        >
          <img
            src={thumbnail}
            alt="image not found"
            className="cursor-pointer relative z-10 object-cover object-top transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-105 group-hover:opacity-0"
          />
          <img
            src={preview}
            alt="image not found"
            className="cursor-pointer absolute inset-0 z-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          />
          <div 
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <div className="flex flex-col grow gap-2">
          <ul className="flex flex-wrap gap-1 my-2 text-white font-semibold">
            {skills.map((s) => (
              <li key={s} className="rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 text-xs font-medium">{s}</li>
            ))}
          </ul>
          <div className="font-semibold text-lg sm:text-xl">
            {title}
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">
            {description}
          </div>
        </div>

        {/* Links to Sites */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-row gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                className="cursor-pointer flex flex-row items-center gap-1 bg-slate-600 text-white text-sm rounded-md px-2 py-1"
              >
                <FaGithub /> Github
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                className="cursor-pointer flex flex-row items-center gap-1 bg-slate-600 text-white text-sm rounded-md px-2 py-1"
              >
                <HiLink /> Website
              </a>
            )}
          </div>
          <div>
            {hackathon && (
              <a
                href={hackathon}
                target="_blank"
                className="cursor-pointer inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 gap-2 text-xs font-medium text-zinc-700"
              >
                <FaLaptopCode /> Hack with MLH and DigitalOcean: NYC
              </a>              
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;