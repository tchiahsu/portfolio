import { useState } from "react";
import clsx from "clsx";
import { IoHome, IoBriefcase, IoDocumentText, IoDownload, IoMenu } from "react-icons/io5";
import resume from "../hsutai_resume.pdf";

const pillBg: React.CSSProperties = {
  backgroundColor: "rgb(248, 246, 242)",
  backgroundSize: "80px 80px, 80px 80px, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
};

const NAV_ITEMS = [
  { icon: IoHome,         label: "About Me", href: "#about"    },
  { icon: IoBriefcase,    label: "Work",     href: "#work"     },
  { icon: IoDocumentText, label: "Projects", href: "#projects" },
];

export default function Sidebar() {
  const [active, setActive] = useState("");
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed right-6 top-6 z-50">

      {/* ── Desktop: always-visible vertical pill ── */}
      <aside
        className="hidden md:flex flex-col items-center gap-5 px-3 py-6 rounded-full border border-black/10 shadow-sm"
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
            <span className="font-mono text-[9px]">{label}</span>
          </a>
        ))}

        <div className="w-6 h-px bg-black/15" />

        <a
          href={resume}
          target="_blank"
          title="Download Resume"
          className="flex flex-col items-center gap-1 cursor-pointer text-gray-500 hover:scale-110 transition-all duration-200 active:scale-100"
        >
          <IoDownload size={20} />
          <span className="font-mono text-[9px]">Resume</span>
        </a>
      </aside>

      {/* ── Mobile: circle that expands into pill ── */}
      <div className="md:hidden flex flex-col items-center">

        {/* Expanded pill — animates in above the button */}
        <div
          className={clsx(
            "flex flex-col items-center gap-5 px-3 py-5 rounded-full border border-black/10 shadow-sm mb-2 overflow-hidden transition-all duration-300 ease-in-out",
            expanded ? "opacity-100 max-h-96 pointer-events-auto" : "opacity-0 max-h-0 py-0 pointer-events-none border-none"
          )}
          style={expanded ? pillBg : {}}
        >
          {NAV_ITEMS.map(({ icon: Icon, label, href }) => (
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
            className="flex flex-col items-center gap-1 cursor-pointer text-[#007BFF] hover:scale-110 transition-all duration-200 active:scale-100"
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
          <IoMenu
            size={20}
            className={clsx(
              "transition-all duration-300",
              expanded ? "text-[#007BFF] rotate-90" : "text-gray-400"
            )}
          />
        </button>
      </div>

      {/* Backdrop — closes menu when tapping outside */}
      {expanded && (
        <div
          className="fixed inset-0 z-[-1] md:hidden"
          onClick={() => setExpanded(false)}
        />
      )}
    </div>
  );
}