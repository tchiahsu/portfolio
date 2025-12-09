type CardProps = {
  src: string;
  title: string;
  description: string;
  skills: string[];
}

const Card = ({ src, title, description, skills }: CardProps) => {
  return (
    <div className="relative rounded-xl w-full shadow-2xl overflow-hidden cursor-pointer group">

      {/* Background */}
      <img src={src} alt="image not found" className="w-full h-auto object-contain block"/>

      {/* Content Layer */}
      <div className="absolute inset-0 py-8 flex flex-col gap-4 items-start justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
        {/* Project Title */}
        <h2 className="px-8 text-2xl text-white tracking-wider font-bold">
          {title}
        </h2>
        {/* Project Description */}
        <p className="px-8 text-sm text-gray-100">
          {description}
        </p>
        {/* Project Skills / Technologies */}
        <ul className="flex flex-row justify-center items-center gap-2 px-8 text-[8pt] text-white font-semibold">
          {skills.map((s) => (
            <li className="rounded-full bg-[#007BFF] px-3 py-2">{s}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Card;