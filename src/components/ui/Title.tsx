interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <div className="font-mono uppercase tracking-widest text-[9pt]">
      <span className="border border-gray-500/20 rounded-full px-4 py-2">
        {title}
      </span>
    </div>
  )
}