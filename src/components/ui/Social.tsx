import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiDevpost } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function SocialLinks() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-14 mt-4 pt-18 py-8">
        {[
          { icon: <FaGithub size={26} />, href: "https://github.com/tchiahsu" },
          { icon: <FaLinkedin size={26} />, href: "https://linkedin.com/in/tchiahsu" },
          { icon: <SiDevpost size={26} />, href: "https://devpost.com/tchiahsu?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" },
          { icon: <MdEmail size={26} />, href: "mailto:hsutai.c@email.com" },
        ].map(({ icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 hover:scale-125 hover:-translate-y-1 origin-bottom transition-all duration-200"
          >
            {icon}
          </a>
        ))}
      </div>
      <div className="w-2xl h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />
    </div>
  );
}
