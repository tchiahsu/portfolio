import profilePic from "../../assets/projects/pfp.png";
import { useEffect, useState } from "react";
import { FaMapPin, FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiFilePaper2Fill } from "react-icons/ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const CHARS = "XXXXXXXXXABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function useScramble(text: string, delay: number = 0, fixedWidth?: number) {
  const width = fixedWidth ?? text.length;
  const [display, setDisplay] = useState(Array(width).fill("X").join(""));

  useEffect(() => {
    const timeout = setTimeout(() => {
      const chars: string[] = Array(width).fill("X");
      let charIndex = 0;
      const shufflesPerChar = 3;

      function resolveNext() {
        if (charIndex >= text.length) {
          let j = text.length;
          const clearNext = () => {
            if (j >= width) return;
            let shuffleCount = 0;
            const interval = setInterval(() => {
              chars[j] = CHARS[Math.floor(Math.random() * CHARS.length)];
              setDisplay([...chars].join(""));
              shuffleCount++;
              if (shuffleCount >= shufflesPerChar) {
                clearInterval(interval);
                chars[j] = " ";
                setDisplay([...chars].join(""));
                j++;
                clearNext();
              }
            }, 15);
          };
          clearNext();
          return;
        }

        const i = charIndex;
        if (text[i] === " ") {
          chars[i] = " ";
          charIndex++;
          resolveNext();
          return;
        }

        let shuffleCount = 0;
        const interval = setInterval(() => {
          chars[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
          setDisplay([...chars].join(""));
          shuffleCount++;

          if (shuffleCount >= shufflesPerChar) {
            clearInterval(interval);
            chars[i] = text[i].toUpperCase();
            setDisplay([...chars].join(""));
            charIndex++;
            resolveNext();
          }
        }, 15);
      }

      resolveNext();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, width]);

  return display;
}

function BentoItem({ icon, text, delay, width, accent }: {
  icon: React.ReactNode; text: string; delay?: number; width?: number; accent?: boolean
}) {
  const scrambled = useScramble(text, delay ?? 300, width);
  return (
    <div className="flex items-center gap-3">
      <span className={accent ? "text-[#007bff]/70" : "text-gray-300"}>{icon}</span>
      <span
        style={{ fontFamily: "'Doto', monospace" }}
        className={`uppercase tracking-widest text-xs ${accent ? "text-[#007bff]/70" : "text-gray-400"}`}
      >
        {scrambled}
      </span>
    </div>
  );
}

export default function HeroCard() {
  return (
    <div className="relative rounded-3xl shadow-lg border-t border-gray-500/10 bg-white/60 backdrop-blur-md px-6 md:px-12 py-8 md:py-10 flex flex-col-reverse md:flex-row justify-between items-center w-[90vw] lg:w-2/3 max-w-3xl overflow-hidden gap-6 lg:gap-0">

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse at 85% 50%, black 20%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 85% 50%, black 20%, transparent 65%)",
        }}
      />

      {/* Left: text */}
      <div className="relative z-10 flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
        <h1 className="font-serif text-4xl sm:text-6xl font-normal">Tony Hsu Tai</h1>
        <div className="pl-0 sm:pl-2 pt-2 flex flex-col gap-2">
          <BentoItem icon={<MdWork size={16} />} text="Software Developer Intern" delay={800} width={30} />
          <BentoItem icon={<IoCheckmarkDoneSharp size={16} />} text="Sentinel Group" delay={800} width={30} accent />
          <BentoItem icon={<FaMapPin size={16} />} text="Boston, MA" delay={800} width={30} />
          <BentoItem icon={<FaGraduationCap size={16} />} text="M.S. in Computer Science" delay={900} width={30} accent />
          <BentoItem icon={<RiFilePaper2Fill size={16} />} text="Northeastern University" delay={1000} width={30} />
        </div>
      </div>

      {/* Right: avatar */}
      <div className="relative z-10 rounded-full p-2 bg-linear-to-br from-[rgba(245,179,112,0.2)] via-white/20 to-[rgba(139,220,228,0.2)] shrink-0 sm:ml-8 shadow-sm">
        <div className="rounded-full overflow-hidden w-32 h-32 sm:w-48 sm:h-48">
          <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  );
}