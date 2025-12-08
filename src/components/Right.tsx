export default function Right() {
	return (
		<div className="fixed bottom-0 right-15 z-20 hidden md:flex flex-col items-center">
			{/* Email Address */}
			<a
				href="mailto:hsutai.c@gmail.com"
				className="text-sm font-mono tracking-wide [writing-mode:vertical-rl] hover:scale-105 hover:text-[#007BFF] hover:-translate-y-1 active:scale-100 cursor-pointer"
			>
				hsutai.c@gmail.com
			</a>

			{/* Vertical Line */}
			<div className="h-24 w-px mt-4 bg-black" />
		</div>
	)
}