type SkillsCardProp = {
  title: string;
  skills: string[];
}

const SkillsCard = ({ title, skills }: SkillsCardProp) => {
  return (
    <div className="w-full text-left rounded-xl border border-slate-200 bg-white px-6 py-4 flex flex-col items-center sm:items-start gap-6 hover:border-slate-300 hover:shadow-sm transition">
      <div className="text-slate-600 font-semibold">{title}</div>
      <ul className="flex flex-col sm:flex-row flex-wrap gap-2">
        {skills.map((s) => (
          <li className="bg-[#007bff] text-white font-bold px-2 py-1 rounded-md text-xs">{s}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsCard;