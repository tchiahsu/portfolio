export default function Introduction() {
  return (
    <div className="flex flex-col justify-center items-start gap-6 h-screen">
      <div className="text-[#007BFF] text-2xl tracking-wide font-bold">
        Welcome to my Portfolio
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-400 text-7xl tracking-tight font-bold">
          Tony Hsu Tai.
        </div>
        <div className="text-gray-600 text-7xl tracking-tight font-bold">
          Sometimes I like to code.
        </div>
      </div>
      <div className="w-1/2 text-gray-600 text-md">
        I'm an aspiring software engineer currently pursuing a Master's degree in Computer Science. I'm focused on building web applications while actively exploring machine learning and artifiical intelligence.
      </div>
    </div>
  )
}