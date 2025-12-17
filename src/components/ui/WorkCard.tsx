// import { useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";


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
  return (
    <button
      className="cursor-pointer w-full text-left rounded-xl border border-slate-200 bg-white px-6 py-4 flex justify-between items-center gap-6 hover:border-slate-300 hover:shadow-sm transition"
    >
      <div className="flex flex-row items-center gap-5">
        {/* Company Logo */}
        <div className="h-20 w-20 rounded-md flex items-center justify-center overflow-hidden shrink-0">
          <img src={logo} alt="logo not found" className="block h-full w-full object-contain" />
        </div>

        {/* Job Information */}
        <div className="flex flex-col gap-2 min-w-0">
          <div className="text-xl font-semibold text-slate-900 truncate">{jobTitle}</div>
          <div className="text-[13px] text-[#007bff] trucate">{company}</div>
          <div className="text-[13px] text-slate-600 trucate">{summary}</div>
          <div className="flex flex-row items-center gap-3 mt-1 text-[13px] text-slate-500">
            <div className="flex flex-row gap-2 items-center">{start}<FaArrowRight />{finish}</div>
            <LuDot />
            <div>{location}</div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <FaArrowRight className="text-slate-400 shrink-0" size={18}/>
    </button>
  )
}

export default WorkCard;