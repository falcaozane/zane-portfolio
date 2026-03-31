import {
  IconBriefcase,
  IconFileCertificate,
  IconInfoCircle,
  IconSchool,
  IconTools,
  IconUsersGroup,
  IconCode,
  IconTrophy,
} from '@tabler/icons-react';


// Navigation items configuration
export const navItems = [
  { name: 'About', to: 'about', icon: IconInfoCircle },
  { name: 'Skills', to: 'skills', icon: IconTools },
  { name: 'Experience', to: 'work-experience', icon: IconBriefcase },
  { name: 'Projects', to: 'projects', icon: IconCode },
  { name: 'Achievements', to: 'achievements', icon: IconTrophy },
  { name: 'Position of Responsibility', to: 'por', icon: IconUsersGroup },
  { name: 'Certifications', to: 'certifications', icon: IconFileCertificate },
  { name: 'Education', to: 'education', icon: IconSchool },
];


export const themes = [
    "Morning Bliss",
    "Afternoon Glow",
    "Evening Twilight",
    "Night Serenity",
];