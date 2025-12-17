type ProjectCardProps = {
  thumbnail: string;
  preview: string;
  title: string;
  description: string;
  skills: string[];
  github: string;
  website: string;
}

const ProjectCard = ({ thumbnail, preview, title, description, skills }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2">
      {/* Image Effect */}
      <div
        className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-t from-transparent via-gray-100/80 to-gray-100 aspect-[16/10] max-h-[420px]"
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
      <ul className="flex flex-wrap gap-2 mb-2 text-[7pt] sm:text-[8pt] text-white font-semibold font-mono">
        {skills.map((s) => (
          <li key={s} className="rounded-full bg-[#007BFF] px-3 py-1">{s}</li>
        ))}
      </ul>
      <div className="cursor-pointer font-semibold text-lg sm:text-xl hover:underline">
        {title}
      </div>
      <div className="text-gray-400 text-xs sm:text-sm">
        {description}
      </div>
    </div>
  )
}

export default ProjectCard;