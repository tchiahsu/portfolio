interface Props {
  year: string,
  month: string,
  title: string,
  description: string,
}

export default function Event({ year, month, title, description }: Props) {
  return (
    <div className="flex flex-row gap-4 px-3 py-3 rounded-xl hover:bg-[#007BFF]/10 cursor-pointer duration-100">
      {/* Date */}
      <div className="text-sm mt-0.5">{month}.{year}</div>

      {/* Content */}
      <div>
        <div className="font-serif text-black">{title}</div>
        <div className="text-xs">{description}</div>
      </div>
    </div>
  );
}