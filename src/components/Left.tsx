import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";


export default function Left() {
  return (
    <>
      <div className="fixed top-30 left-11 z-20 hidden md:flex flex-col items-center">
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

          {/* Mail Icon */}
          <a
            href="mailto:hsutai.c@gmail.com"
            aria-label="Email"
            className="hover:scale-105 hover:text-[#007BFF] hover:-translate-y-1 active:scale-100 cursor-pointer"
          >
            <LuMail />
          </a>
        </div>

        {/* Vertical Line */}
        <div className="h-40 w-px mt-2 bg-black"/>
      </div>

      <div className="fixed bottom-10 left-11 z-20 hidden md:flex flex-col items-center">
        {/* Year Built */}
        <div className="text-sm font-mono tracking-wide [writing-mode:vertical-rl] rotate-180">
          <span className="inline-block rotate-90">&copy;</span>
          <span> 2025</span>
        </div>
      </div>
    </>
  )
}