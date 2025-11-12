import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="p-10 footer text-base-content bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="flex">
          {socials.map((social) => (
            <a
              key={social.href}
              className="flex items-center gap-1 px-3 text-amber-500 hover:text-orange-500"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-xl text-orange-500 font-bold">Zane Falcao</div>

        <div className="text-amber-500">&copy; {new Date().getFullYear()} All Rights Reserved</div>
      </div>
    </footer>
  );
}