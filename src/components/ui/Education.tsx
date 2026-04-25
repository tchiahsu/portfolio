interface Props {
  logo: string,
  university: string,
  degree: string,
  program: string,
  gpa: string,
  start: string,
  finish: string,
}

export default function Education({ logo, university, degree, program, gpa, start, finish }: Props) {
  return (
    <div className="w-full text-gray-600 my-5 rounded-xl border-2 border-transparent hover:border-2 hover:border-[#007BFF]/30">
      <div className="w-full rounded-xl bg-white shadow-sm transition">
          <div className="flex flex-row items-center gap-5 w-full px-6 py-4">
            {/* Company Logo */}
            <div className="h-20 w-20 rounded-md flex items-center justify-center overflow-hidden shrink-0">
              <img src={logo} alt="logo not found" className="block h-full w-full object-contain" />
            </div>

            {/* Job Information */}
            <div className="flex flex-col gap-2 min-w-0 flex-1">
              <div className="text-xl text-slate-900 tracking-wide font-serif">{university}</div>
              <div className="text-[12px] text-[#151617]">{degree} -- <span className="font-bold">{gpa}</span></div>
              <div className="text-[12px] text-slate-600">{program}</div>
            </div>

            {/* Date */}
            <div className="text-sm tracking-widest text-gray-500 shrink-0 uppercase self-start">{start} - {finish}</div>
          </div>
      </div>
    </div>
  )
}