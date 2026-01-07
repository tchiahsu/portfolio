import { useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import clsx from "clsx";


type WorkCardProps = {
  logo: string;
  jobTitle: string;
  company: string;
  summary: string;
  location: string;
  start: string;
  finish: string;
  description: string[];
}

const WorkCard = ({ logo, jobTitle, company, summary, start, finish, location, description }: WorkCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className={clsx("cursor-pointer w-full text-left rounded-xl border border-slate-200 bg-white px-6 py-4 flex justify-between items-center gap-6 hover:border-slate-300 hover:shadow-sm transition",
          open ? "border-slate-300" : "border-slate-200"
        )}
      >
        <div className="flex flex-row items-center gap-5 min-w-0">
          {/* Company Logo */}
          <div className="h-20 w-20 rounded-md flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={logo}
              alt="logo not found"
              className="block h-full w-full object-contain"
            />
          </div>

          {/* Job Information */}
          <div className="flex flex-col gap-2 min-w-0">
            <div className="text-xl font-semibold text-slate-900">{jobTitle}</div>
            <div className="text-[13px] text-[#007bff]">{company}</div>
            <div className="text-[13px] text-slate-600">{summary}</div>
            <div className="flex flex-row items-center gap-3 mt-1 text-[13px] text-slate-500">
              <div className="flex flex-row gap-2 items-center">{start}<FaArrowRight />{finish}</div>
              <LuDot className="w-0 overflow-hidden sm:w-auto sm:overflow-visible text-transparent sm:text-slate-500"/>
              <div className="w-0 overflow-hidden sm:w-auto sm:overflow-visible text-transparent sm:text-slate-500">{location}</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0">
          {open ? (
            <FaArrowDown className="text-slate-400 shrink-0" size={18}/>
          ) : (
            <FaArrowRight className="text-slate-400 shrink-0" size={18}/>
          )}
        </div>
      </button>

      {/* Dropdown */}
      <div>
        <div className={clsx(
          "overflow-hidden transition-all duration-300 pt-4 mx-4 px-4 border-l-2 border-slate-400",
          open ? "max-h-125 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        )}>
          <div className="text-sm font-semibold text-[#007bff] mb-4">Responsibilities</div>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 mb-5">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WorkCard;