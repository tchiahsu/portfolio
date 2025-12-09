import { useState, useEffect } from "react"
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub, IoIosGlobe } from "react-icons/io";

import clsx from "clsx"

type CardProps = {
  src: string;
  title: string;
  description: string;
  skills: string[];
  src2: string;
  about: string;
  gh: string;
  web: string;
}

const Card = ({ src, title, description, skills, src2, about, gh, web }: CardProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

  useEffect(() => {
    if (isDescriptionOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return (() => {
      document.body.style.overflow = "";
    })
  }, [isDescriptionOpen])

  return (
    <div className="relative rounded-xl w-full shadow-2xl overflow-hidden cursor-pointer group">
      {/* Background */}
      <img src={src} alt="image not found" className="w-full h-auto object-contain block" />

      {/* Content Layer */}
      <div
        className="absolute inset-0 py-8 flex flex-col gap-4 items-start justify-end bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out"
        onClick={() => setIsDescriptionOpen(true)}      
      >
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

      {/* Page Blur */}
      {isDescriptionOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 transition-opacity"
          onClick={() => setIsDescriptionOpen(false)}
        />
      )}

      {/* Extra Information Panel */}
      <div
        className={clsx(
          "fixed inset-y-0 right-0 w-1/3 bg-white z-60 flex flex-col justify-start transform transition-transform duration-300",
          isDescriptionOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Panel Header */}
        <div className="flex flex-col gap-3 justify-end items-end mx-8 mt-2 h-[8vh] font-semibold text-sm tracking-wide text-[#007BFF] shrink-0">
          <button
            className="hover:underline cursor-pointer"
            onClick={() => setIsDescriptionOpen(false)}
          >
            Back to Projects
          </button>
          <hr className="border-1 w-full mb-4" />
        </div>

        {/* Panel Content */}
        <div className="flex flex-1 flex-col gap-6 mx-8 overflow-y-auto">
          <div className="flex flex-col gap-3">
            <div className="text-[#007BFF] font-bold tracking-wider text-2xl">
              {title}
            </div>
            <div className="text-gray-400 text-sm">
              {description}
            </div>
            <img src={src2} alt="image not found" className="rounded-lg"/>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center text-[#007BFF] font-semibold tracking-wider">About</div>
            <div className="text-gray-400 text-sm">
              {about}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center text-[#007BFF] font-semibold tracking-wider">Technologies</div>
            <ul className="flex flex-row text-xs gap-2 text-gray-800">
              {skills.map((s) => (
                <li className="bg-blue-300 px-3 py-2 rounded-full">{s}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center text-[#007BFF] font-semibold tracking-wider"><IoLogoGithub /> Github</div>
            <a href={gh} target="_new" className="text-gray-400 hover:underline tracking-wider text-sm">{gh}</a>
          </div>

          <div className="flex flex-col gap-2 pb-24">
            <div className="flex flex-row gap-2 items-center text-[#007BFF] font-semibold tracking-wider"><IoIosGlobe /> Website</div>
            <a href={web} target="_new" className="text-gray-400 hover:underline tracking-wider text-sm">{web}</a>
          </div>
        </div>
        
        {/* Panel Footer */}
        <div className="fixed bottom-0 flex justify-center items-center bg-gray-300 w-full h-[8vh] font-semibold hover:underline">
          <a href={web} target="_new" className="flex gap-2">
            <FiExternalLink size={24} /> Open Project
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card;