type SkillsCardProp = {
  title: string;
  skills: string[];
}

const SkillsCard = ({ title, skills }: SkillsCardProp) => {
  return (
    <div className="w-full text-left rounded-2xl border border-slate-200/70 bg-white p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-px transition-all">
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>

      <ul className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <li
            key={s}
            className="rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 text-xs font-medium"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsCard;