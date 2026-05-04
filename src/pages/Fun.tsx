import { useRef, useEffect } from "react";
import Title from "../components/ui/Title";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaQuoteLeft, FaUserFriends } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa6";

const quote = `In the depths of winter, I finally learned that within me there lay an invincible summer.`;
const quoteAuthor = `Albert Camus`;

const travel = [
  { name: "Uruguay",   detail: "HOME", color: "bg-blue-50 border-blue-400 text-blue-700"},
  { name: "Argentina", detail: "Buenos Aires, Ushuaia, Calafate", color: "bg-sky-50 border-sky-400 text-sky-700"},
  { name: "Brazil",    detail: "Curitiba, Chuy", color: "bg-green-50 border-green-500 text-green-700"},
  { name: "Ecuador",   detail: "Quito", color: "bg-yellow-50 border-yellow-400 text-yellow-700"},
  { name: "Peru",      detail: "Lima", color: "bg-red-50 border-red-400 text-red-700"},
  { name: "Chile",     detail: "Santiago", color: "bg-red-50 border-red-500 text-red-800"},
  { name: "Mexico",    detail: "Mexico City, Puebla, Cancun", color: "bg-green-50 border-green-600 text-green-800"},
  { name: "USA",       detail: "MA, FL, NH, ME, WA, CA, NY, NJ", color: "bg-blue-50 border-blue-600 text-blue-800"},
  { name: "China",     detail: "Shanghai, Beijing, Hong Kong, Nanjing, Yixing", color: "bg-red-50 border-red-600 text-red-800"},
  { name: "Spain",     detail: "Barcelona", color: "bg-yellow-50 border-yellow-500 text-yellow-800"},
  { name: "Italy",     detail: "Rome, Sicily", color: "bg-green-50 border-green-500 text-green-700"},
  { name: "France",    detail: "Marseille", color: "bg-blue-50 border-blue-500 text-blue-800"},
  { name: "Tunisia",   detail: "Tunis", color: "bg-red-50 border-red-400 text-red-700"},
];

const facts = [
  { category: "Location", text: "10+ years in Boston, but Uruguay is still home." },
  { category: "Hobbies", text: "Trying new restaurants, always looking for new suggestions." },
  { category: "Languages", text: "Speak English, Spanish, and Mandarin...what's next?" },
  { category: "Weather", text: "Love rainy days, something about it feels calm and focused." },
  { category: "Sports",  text: "Big soccer fan, will watch almost any sport, still figuring out hockey." },
  { category: "Games",  text: "Play games occasionally, mainly Valorant." },
  { category: "Travel",  text: "Next destination is Zhangjiajie, China. The Avatar movie was filmed there!" },
  { category: "Unexpected",  text: "Never watched The Office, Friends, or How I Met Your Mother." },
];

const doubled = [...travel, ...travel];

function TravelCard() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const speed = 0.75;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        if (posRef.current >= track.scrollWidth / 2) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative flex flex-col gap-3 rounded-3xl shadow-sm border-t border-gray-500/10 bg-white/60 backdrop-blur-md px-4 md:px-10 py-6 md:py-8 w-4/5"
          style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      <div className="flex flex-row items-center gap-3">
        <span className="inline-flex items-center gap-2 border border-orange-400 text-orange-400 bg-orange-50 rounded-full p-2">
          <MdOutlineTravelExplore size={15} />
        </span>
        <span className="font-serif uppercase tracking-widest text-[10pt]">Places I've Visited</span>
      </div>

      <span className="text-sm tracking-wide text-gray-500">
        I've explored over <span className="font-bold">13+ different parts of the world</span> over the years,
        experiencing new places, cultures, and perspectives along the way.
      </span>

      <div
        className="overflow-hidden border border-gray-200 rounded-2xl p-4 bg-white/40"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div ref={trackRef} className="flex items-center gap-2 w-max">
          {doubled.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`min-w-28 px-4 py-2 rounded-xl border text-center select-none ${item.color}`}>
                <div className="text-sm font-medium whitespace-nowrap">{item.name}</div>
                <div className="text-[8pt] mt-0.5 text-gray-500 whitespace-nowrap">{item.detail}</div>
              </div>
              <span className="text-gray-300 select-none">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuoteCard({ quote, author }: { quote: string; author?: string }) {
  return (
    <div className="relative flex flex-col gap-3 rounded-3xl shadow-sm border-t border-gray-500/10 bg-white/60 backdrop-blur-md px-4 md:px-10 py-6 md:py-8 w-4/5"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      <div className="flex flex-row items-center gap-3">
        <span className="inline-flex items-center gap-2 border border-red-400 text-red-400 bg-red-50 rounded-full p-2">
          <FaQuoteLeft size={15} />
        </span>
        <span className="font-serif uppercase tracking-widest text-[10pt]">Favorite Quote</span>
      </div>
      <div className="relative px-6 py-2 flex flex-col items-center gap-3">
        <p className="text-sm md:text-base text-center tracking-wide text-gray-400 italic font-serif leading-relaxed px-4">
          {quote}
        </p>
        {author && (
          <span className="text-sm italic font-serif tracking-widest text-gray-400">— {author}</span>
        )}
      </div>
    </div>
  );
}

function MoreAboutMe() {
  return (
    <div className="relative flex flex-col gap-3 rounded-3xl shadow-sm border-t border-gray-500/10 bg-white/60 backdrop-blur-md px-4 md:px-10 py-6 md:py-8 w-4/5"
          style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      <div className="flex flex-row items-center gap-3">
        <span className="inline-flex items-center gap-2 border border-blue-400 text-blue-400 bg-blue-50 rounded-full p-2">
          <FaHandPeace size={15} />
        </span>
        <span className="font-serif uppercase tracking-widest text-[10pt]">More About Me</span>
      </div>
      <ul className="flex flex-col gap-2 text-sm text-gray-500">
        {facts.map((fact, i) => (
          <li key={i}>
            <span className="font-bold text-gray-500">{fact.category}: </span>
            {fact.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConnectWithMe() {
  return (
    <div className="relative flex flex-col gap-5 rounded-3xl shadow-sm border-t border-gray-500/10 bg-white/60 backdrop-blur-md px-4 md:px-10 py-8 md:py-10 w-4/5"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      {/* Heading */}
      <div className="flex flex-row items-center gap-3">
        <span className="inline-flex gap-2 border border-green-600 text-green-600 bg-blue-50 rounded-full p-2">
          <FaUserFriends size={15} />
        </span>
        <span className="font-serif uppercase tracking-widest text-[10pt]">Connect with Me</span>
      </div>

      {/* Two panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <a
          href="mailto:hsutai.c@gmail.com"
          className="flex flex-col gap-2 rounded-2xl p-6 bg-amber-50 border border-amber-100 hover:border-amber-300 transition-all duration-200 group"
        >
          <span className="font-mono uppercase tracking-widest text-[8pt] text-amber-500">Via Email</span>
          <span className="font-serif text-lg text-gray-800">Let's discuss</span>
          <span className="text-sm text-gray-400">Discuss collaboration opportunities</span>
        </a>

        <a
          href="https://linkedin.com/in/tchiahsu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-2 rounded-2xl p-6 bg-sky-50 border border-sky-100 hover:border-sky-300 transition-all duration-200 group"
        >
          <span className="font-mono uppercase tracking-widest text-[8pt] text-sky-500">LinkedIn</span>
          <span className="font-serif text-lg text-gray-800">Let's connect</span>
          <span className="text-sm text-gray-400">Find me on LinkedIn and send a message</span>
        </a>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center text-center gap-2 text-[9pt] text-gray-400 font-mono mt-5">
        <span>Last updated: April 2026</span>
        <span>Thanks to <span className="text-gray-600">Zangwei Zheng</span> for the design inspiration.</span>
      </div>
    </div>
  );
}

export default function TravelLineage() {
  return (
    <div id="more" className="flex flex-col justify-center items-center gap-7 w-full mb-20 pt-10">
      <Title title="Interesting Facts" />
      <div className="font-serif text-3xl">Get to Know Me More!</div>
      <TravelCard />
      <QuoteCard quote={quote} author={quoteAuthor} />
      <MoreAboutMe />
      <ConnectWithMe />
    </div>
  );
}
