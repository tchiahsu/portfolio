export default function Introduction() {
  return (
    <div id="home" className="scroll-mt-24 my-36 sm:mt-0 sm:min-h-screen flex flex-col justify-center items-start sm:px-20">
      <div className="text-[#007BFF] text-xl tracking-wide font-bold md:text-2xl">
        Hello! My name is
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-400 text-5xl tracking-tight font-bold md:text-6xl lg:text-7xl">
          Tony Hsu Tai.
        </div>
        <div className="text-gray-600 text-4xl tracking-tight font-bold md:text-5xl lg:text-6xl">
          I make things with code.
        </div>
      </div>
      <div className="text-gray-600 text-md md:text-md sm:w-3/4 mt-6">
        I'm an aspiring software engineer currently pursuing a Master's degree in Computer Science. I enjoy building full-stack web applications and turning messy, real-world problems into clean, usable software.
      </div>
    </div>
  )
}