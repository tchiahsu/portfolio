type CardProps = {
  thumbnail: string;
  width: string;
  title: string;
  description: string;
  skills: string[];
}

const Card = ({ thumbnail, width, title, description, skills }: CardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex justify-center items-center h-[50vh] rounded-lg bg-gradient-to-t from-transparent via-gray-100/80 to-gray-100"
      >
        <img src={thumbnail} alt="image not found" width={width}
          className="cursor-pointer hover:-translate-y-2 hover:scale-105 ease-in-out duration-300" />            
      </div>
      <ul className="flex flex-row justify-start items-center gap-2 text-[6pt] text-white font-semibold font-mono">
        {skills.map((s) => (
          <li className="rounded-full bg-[#007BFF] px-2 py-1">{s}</li>
        ))}
      </ul>
      <div className="hover:underline text-xl font-semibold cursor-pointer">
        {title}
      </div>
      <div className="text-gray-400 text-sm">
        {description}
      </div>
    </div>
  )
}

export default Card;