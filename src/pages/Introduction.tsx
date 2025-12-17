export default function Introduction() {
  return (
    <div id="home" className="scroll-mt-24 min-h-screen flex flex-col justify-center items-start px-20">
      <div className="text-[#007BFF] text-xl tracking-wide font-bold md:text-2xl">
        Welcome to my Portfolio
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-400 text-5xl tracking-tight font-bold md:text-6xl lg:text-7xl">
          Tony Hsu Tai.
        </div>
        <div className="text-gray-600 text-5xl tracking-tight font-bold md:text-6xl lg:text-7xl">
          Sometimes I like to code.
        </div>
      </div>
      <div className="text-gray-600 text-md md:text-md sm:w-3/4 md:w-1/2 mt-6">
        I'm an aspiring software engineer currently pursuing a Master's degree in Computer Science. I'm focused on building web applications while actively exploring machine learning and artifiical intelligence.
      </div>
    </div>
  )
}