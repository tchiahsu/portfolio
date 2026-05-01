import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import clsx from "clsx";

interface Props {
  logo: string,
  title: string,
  company: string,
  summary: string,
  location: string,
  start: string,
  finish: string,
  description: string[],
}

export default function Experience({ logo, title, company, summary, location, start, finish, description }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-gray-600 my-5 rounded-xl border-2 border-transparent hover:border-2 hover:border-[#007BFF]/30">
      <div className={clsx(
        "w-full rounded-xl bg-white shadow-sm transition",
        open ? "border-slate-300" : "border-slate-200"
      )}>

        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full cursor-pointer text-left px-4 sm:px-6 py-4"
        >
          <div className="flex flex-row items-start gap-4 w-full">

            {/* Company Logo */}
            <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-md flex items-center justify-center overflow-hidden shrink-0 mt-1">
              <img src={logo} alt="logo not found" className="block h-full w-full object-contain" />
            </div>

            {/* Right side: all info */}
            <div className="flex flex-col gap-1 min-w-0 flex-1">

              {/* Row 1: Title + Date + Chevron */}
              <div className="flex flex-row items-start justify-between gap-2">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="text-base sm:text-xl text-slate-900 tracking-wide font-serif wrap-break-words">{title}</div>
                  <div className="text-[10px] sm:text-xs tracking-widest text-gray-400 uppercase md:hidden">{start} – {finish}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="hidden md:block text-xs tracking-widest text-gray-400 uppercase">{start} – {finish}</div>
                  {open
                    ? <FaAngleDown className="text-slate-400" size={16} />
                    : <FaAngleRight className="text-slate-400" size={14} />
                  }
                </div>
              </div>

              {/* Row 2: Company + Location */}
              <div className="text-[11px] sm:text-[12px] text-[#151617]">{company}, {location}</div>

              {/* Row 3: Summary */}
              <div className="text-[11px] sm:text-[12px] text-slate-500">{summary}</div>

            </div>
          </div>
        </button>

        {/* Dropdown */}
        <div className={clsx(
          "overflow-hidden transition-all duration-300 px-4 sm:px-6",
          open ? "max-h-500 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}>
          <div className="text-sm font-semibold text-[#007bff] mb-4 mt-4">Responsibilities</div>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}