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
          className="w-full cursor-pointer text-left px-6 py-4 flex justify-between items-center"
        >
          <div className="flex flex-row items-center gap-5 w-full">
            {/* Company Logo */}
            <div className="h-20 w-20 rounded-md flex items-center justify-center overflow-hidden shrink-0">
              <img src={logo} alt="logo not found" className="block h-full w-full object-contain" />
            </div>

            {/* Job Information */}
            <div className="flex flex-col gap-2 min-w-0 flex-1">
              <div className="text-xl text-slate-900 tracking-wide font-serif">{title}</div>
              <div className="text-[12px] text-[#151617]">{company}, {location}</div>
              <div className="text-[12px] text-slate-600">{summary}</div>
            </div>

            {/* Date */}
            <div className="flex flex-row justify-center items-center gap-4 self-start">
              <div className="text-sm tracking-widest text-gray-500 shrink-0 uppercase">{start} - {finish}</div>
              <div className="shrink-0">
                {open ? <FaAngleDown className="text-slate-400" size={20} /> : <FaAngleRight className="text-slate-400" size={18} />}
              </div>
            </div>
          </div>
        </button>

        {/* Dropdown - inside panel, outside button */}
        <div className={clsx(
          "overflow-hidden transition-all duration-300 px-6",
          open ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
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
  )
}