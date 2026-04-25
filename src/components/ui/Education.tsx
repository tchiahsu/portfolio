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
        <div className="flex flex-row items-start gap-4 w-full px-4 sm:px-6 py-4">

          {/* Logo */}
          <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-md flex items-center justify-center overflow-hidden shrink-0 mt-1">
            <img src={logo} alt="logo not found" className="block h-full w-full object-contain" />
          </div>

          {/* Right side: all info */}
          <div className="flex flex-col gap-1 min-w-0 flex-1">

            {/* Row 1: University + Date */}
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="text-base sm:text-xl text-slate-900 tracking-wide font-serif truncate">{university}</div>
                <div className="text-[10px] sm:text-xs tracking-widest text-gray-400 uppercase md:hidden">{start} – {finish}</div>
              </div>
              <div className="hidden md:block text-xs tracking-widest text-gray-400 uppercase shrink-0">{start} – {finish}</div>
            </div>

            {/* Row 2: Degree + GPA */}
            <div className="text-[11px] sm:text-[12px] text-[#151617]">{degree} -- <span className="font-bold">{gpa}</span></div>

            {/* Row 3: Program */}
            <div className="text-[11px] sm:text-[12px] text-slate-500">{program}</div>

          </div>
        </div>
      </div>
    </div>
  );
}