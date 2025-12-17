type EducationCardProps = {
  logo: string;
  college: string;
  degree: string;
  start: string;
  end: string;
  award: string;
}

const WorkCard = ({ logo, college, degree, start, end }: EducationCardProps) => {
  return (
    <button
      className="cursor-pointer w-full text-left rounded-xl border border-slate-200 bg-white px-6 py-4 flex justify-between items-center gap-6 hover:border-slate-300 hover:shadow-sm transition"
    >
      <div className="flex flex-row items-center gap-5">
        {/* University Logo */}
        <div className="h-20 w-20 rounded-full flex items-center justify-center overflow-hidden shrink-0">
          <img src={logo} alt="logo not found" className="block h-full w-full object-contain" />
        </div>

        {/* Degree Information */}
        <div className="flex flex-col gap-2 min-w-0">
          <div className="text-xl font-semibold text-slate-900 truncate">{college}</div>
          <div className="text-[13px] text-[#007bff] trucate">{degree}</div>
        </div>
      </div>

      {/* School Duration */}
      <div>{start} - {end}</div>
    </button>
  )
}

export default WorkCard;