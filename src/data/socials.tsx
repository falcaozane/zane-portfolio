import { Github, Linkedin, Mail } from "lucide-react";

export interface Social {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const socials: Social[] = [
  {
    href: "https://github.com/falcaozane",
    icon: <Github size={24} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/zane-falcao-014a41247/",
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:falcaozane@example.com",
    icon: <Mail size={24} />,
    label: "Email",
  },
];
