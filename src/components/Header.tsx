import { useState } from "react";
import clsx from "clsx";
import { CgMenuRight } from "react-icons/cg";
import { IoClose, IoHome, IoBriefcase, IoDocumentText, IoDownload } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import resume from "../hsutai_resume.pdf";

const pillBg: React.CSSProperties = {
  backgroundColor: "rgb(248, 246, 242)",
  backgroundSize: "80px 80px, 80px 80px, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
};

const NAV_ITEMS = [
  { icon: IoHome,         label: "About Me", href: "#about"    },
  { icon: IoBriefcase,    label: "Work",     href: "#work"     },
  { icon: IoDocumentText, label: "Projects", href: "#projects" },
  { icon: IoIosMore,      label: "More", href: "#more" }
];

export default function Sidebar() {
  const [active, setActive] = useState("");
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed right-6 z-50 flex flex-col items-center"
      style={{ bottom: "1.5rem", top: "auto" }}
    >
      {/* ── Desktop: always-visible vertical pill top-right ── */}
      <aside
        className="hidden md:flex flex-col items-center gap-5 px-3 py-6 rounded-full border border-black/10 shadow-sm"
        style={{ ...pillBg, position: "fixed", top: "1.5rem", right: "1.5rem" }}
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
            <span className="font-mono text-[9px]">{label}</span>
          </a>
        ))}

        <div className="w-6 h-px bg-black/15" />

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

      {/* ── Mobile: pill expands upward, button at bottom ── */}
      <div className="md:hidden flex flex-col items-center gap-2">

        {/* Expanded pill — animates upward above the button */}
        <div
          className={clsx(
            "flex flex-col items-center gap-5 px-3 py-5 rounded-full border border-black/10 shadow-sm overflow-hidden transition-all duration-300 ease-in-out",
            expanded ? "opacity-100 max-h-96 pointer-events-auto" : "opacity-0 max-h-0 py-0 pointer-events-none border-none"
          )}
          style={expanded ? pillBg : {}}
        >
          {/* Resume at top when expanded upward */}
  
          {/* Nav items in reverse so About is closest to button */}
          {[...NAV_ITEMS].map(({ icon: Icon, label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => { setActive(href); setExpanded(false); }}
              className={clsx(
                "flex flex-col items-center gap-1 cursor-pointer transition-all duration-200 hover:scale-110 active:scale-100",
                active === href ? "text-[#007BFF]" : "text-gray-400 hover:text-[#007BFF]"
              )}
            >
              <Icon size={20} />
              <span className="font-mono text-[9px]">{label}</span>
            </a>
          ))}

          <div className="w-6 h-px bg-black/15" />

          <a
            href={resume}
            target="_blank"
            onClick={() => setExpanded(false)}
            className="flex flex-col items-center gap-1 cursor-pointer text-gray-600 hover:scale-110 transition-all duration-200 active:scale-100"
          >
            <IoDownload size={20} />
            <span className="font-mono text-[9px]">Resume</span>
          </a>
        </div>

        {/* Circle toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-12 h-12 rounded-full border border-black/10 shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          style={pillBg}
        >
          {expanded
            ? <IoClose size={20} className="text-gray-600" />
            : <CgMenuRight size={20} className="text-gray-400" />
          }
        </button>
      </div>

      {/* Backdrop */}
      {expanded && (
        <div
          className="fixed inset-0 z-[-1] md:hidden"
          onClick={() => setExpanded(false)}
        />
      )}
    </div>
  );
}