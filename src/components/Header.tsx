import clsx from "clsx";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import resume from "../hsutai_resume.pdf";


export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="fixed top-0 flex justify-between items-center w-full h-[8vh] min-h-20 px-10 bg-white z-50">
      {/* Simple Logo */}
      <a href="#home" className="flex items-center font-bold tracking-wider cursor-pointer">
        <span className="text-xl">TH</span>
        <span className="text-[#007BFF] text-3xl">.</span>
      </a>

      {/* Header Options */}
      <nav className="hidden md:flex flex-row items-center gap-10 font-mono text-sm">
        <a href="#projects" className="cursor-pointer hover:text-[#007BFF] hover:scale-105 hover:font-semibold active:scale-100">Projects</a>
        <a href="#work" className="cursor-pointer hover:text-[#007BFF] hover:scale-105 hover:font-semibold active:scale-100">Work Experience</a>
        <a href="#about" className="cursor-pointer hover:text-[#007BFF] hover:scale-105 hover:font-semibold active:scale-100">About Me</a>
        <a href={resume} target="_blank" className="border rounded-md px-6 py-2 mx-2 cursor-pointer hover:border-[#007BFF] hover:text-[#007BFF] hover:scale-105 hover:font-semibold active:scale-100">
          Resume
        </a>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">

        {/* Hamburger Icon */}
        <button
          className="relative w-8 h-8 z-50 hover:text-[#007BFF] transition-colors duration-200"
          onClick={() => {setOpenMenu(!openMenu)}}
        >
          {/* Close Icon */}
          <span
            className={clsx(
              "absolute inset-0 flex justify-center transition-all duration-300 ease-in-out",
              openMenu ? "opacity-100 scale-100" : "opacity-0 scale-75"
            )}
          >
            <IoClose size={32} />
          </span>
          {/* Menu Icon */}
          <span
            className={clsx(
              "absolute inset-0 flex justify-center items-center transition-all duration-300 ease-in-out",
              openMenu ? "opacity-0 scale-75" : "opacity-100 scale-100"
            )}
          >
            <CgMenuRight size={28} />
          </span>
        </button>
        
        <div
          className={clsx(
            "fixed inset-y-0 right-0 w-3/5 bg-slate-600 shadow-2xl z-40 flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 md:hidden",
            openMenu ? "translate-x-0" : "translate-x-full"
          )}
          onClick={() => setOpenMenu(false)}
        >
          {/* Hamburger Menu Options */}
          {openMenu && (
            <div className="absolute flex flex-col justify-center items-center gap-12 h-full">
              <a href="#projects"  className="font-mono cursor-pointer text-white hover:scale-105 hover:font-semibold active:scale-100">
                Projects
              </a>
              <a href="#work"  className="font-mono cursor-pointer text-white hover:scale-105 hover:font-semibold active:scale-100">
                Work Experience
              </a>
              <a href="#about" className="font-mono cursor-pointer text-white hover:scale-105 hover:font-semibold active:scale-100">
                About Me
              </a>
              <a href={resume} target="_blank" className="font-mono border rounded-md px-6 py-2 mx-2 cursor-pointer border-white text-white hover:scale-105 hover:font-semibold active:scale-100">
                Resume
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}