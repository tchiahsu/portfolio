import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";

export default function Left() {
  return (
    <div className="fixed bottom-0 left-15 z-20 hidden md:flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 mb-4 text-2xl">
        {/* Github Icon */}
        <a
          href="https://github.com/tchiahsu"
          aria-label="Github"
          className="hover:scale-105 hover:text-[#007BFF] hover:-translate-y-1 active:scale-100 cursor-pointer"
          >
            <LuGithub />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/tchiahsu/"
          aria-label="LinkedIn"
          className="hover:scale-105 hover:text-[#007BFF] hover:-translate-y-1 active:scale-100 cursor-pointer"
        >
          <LuLinkedin />
        </a>
      </div>

      {/* Vertical Line */}
      <div className="h-24 w-px mt-2 bg-black"/>
    </div>
  )
}