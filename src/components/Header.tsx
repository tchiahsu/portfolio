import { useState } from "react";
import clsx from "clsx";
import { CgMenuRight } from "react-icons/cg";
import { IoClose, IoHome, IoBriefcase, IoDocumentText, IoDownload } from "react-icons/io5";
import resume from "../hsutai_resume.pdf";

const pillBg: React.CSSProperties = {
  backgroundColor: "rgb(248, 246, 242)",
  backgroundSize: "80px 80px, 80px 80px, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
};

const NAV_ITEMS = [
  { icon: IoHome,         label: "About Me",        href: "#about"    },
  { icon: IoBriefcase,    label: "Work Experience", href: "#work"     },
  { icon: IoDocumentText, label: "Projects",        href: "#projects" },
];

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("");

  return (
    <>
      {/* Desktop: vertical floating pill on the right */}
      <aside
        className="hidden md:flex fixed right-6 top-6 z-50 flex-col items-center gap-5 px-3 py-6 rounded-full border border-black/10 shadow-sm"
        style={pillBg}
      >
        {NAV_ITEMS.map(({ icon: Icon, label, href }) => (
          <a
            key={href}
            href={href}
            onClick={() => setActive(href)}
            title={label}
            className={clsx(
              "flex flex-col items-center gap-1 cursor-pointer transition-all duration-200 hover:scale-110 active:scale-100",
              active === href ? "text-[#007BFF]" : "text-gray-400 hover:text-[#007BFF]"
            )}
          >
            <Icon size={20} />
            <span className="font-mono text-[9px] whitespace-nowrap">{label === "Work Experience" ? "Work" : label}</span>
          </a>
        ))}

        {/* Divider */}
        <div className="w-6 h-px bg-black/15" />

        {/* Resume */}
        <a
          href={resume}
          target="_blank"
          title="Download Resume"
          className="flex flex-col items-center gap-1 cursor-pointer text-gray-600 hover:scale-110 transition-all duration-200 active:scale-100"
        >
          <IoDownload size={20} />
          <span className="font-mono text-[9px]">Resume</span>
        </a>
      </aside>

      {/* Mobile: hamburger + slide-in drawer */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          className="relative w-8 h-8 hover:text-[#007BFF] transition-colors duration-200"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className={clsx("absolute inset-0 flex justify-center transition-all duration-300 ease-in-out", openMenu ? "opacity-100 scale-100" : "opacity-0 scale-75")}>
            <IoClose size={32} />
          </span>
          <span className={clsx("absolute inset-0 flex justify-center items-center transition-all duration-300 ease-in-out", openMenu ? "opacity-0 scale-75" : "opacity-100 scale-100")}>
            <CgMenuRight size={28} />
          </span>
        </button>
      </div>

      <div
        className={clsx(
          "fixed inset-y-0 right-0 w-3/5 bg-slate-600 shadow-2xl z-40 flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 md:hidden",
          openMenu ? "translate-x-0" : "translate-x-full"
        )}
        onClick={() => setOpenMenu(false)}
      >
        {openMenu && (
          <div className="absolute flex flex-col justify-center items-center gap-12 h-full">
            {[...NAV_ITEMS].reverse().map(({ icon: Icon, label, href }) => (
              <a key={href} href={href} className="flex items-center gap-3 font-mono cursor-pointer text-white hover:scale-105 hover:font-semibold active:scale-100">
                <Icon size={18} />
                {label}
              </a>
            ))}
            <a href={resume} target="_blank" className="flex items-center gap-3 font-mono border rounded-md px-6 py-2 cursor-pointer border-white text-white hover:scale-105 hover:font-semibold active:scale-100">
              <IoDownload size={18} />
              Resume
            </a>
          </div>
        )}
      </div>
    </>
  );
}