import { Github, Linkedin, Mail, Instagram, TwitterIcon } from "lucide-react";
import { HuggingFace } from '@lobehub/icons';
import { AiOutlineSpotify } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

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
  {
    href: "https://www.instagram.com/falcaozane",
    icon: <Instagram size={24} />,
    label: "Instagram",
  },
  {
    href: "https://huggingface.co/lucifer7210",
    icon: <HuggingFace size={24} />,
    label: "Hugging Face",
  },
  {
    href: "https://open.spotify.com/user/31i7p26p2u5jgrhog6257jsquc24",
    icon: <AiOutlineSpotify size={24} />,
    label: "Spotify",
  },
  {
    href: "https://x.com/falcao_zane",
    icon: <FaXTwitter size={24} />,
    label: "X (I prefer calling it Twitter, elon musk)",
  },

];
