// src/components/SkillsCarousel.tsx

'use client'; // This is a client component as it uses Splide.js and interactive elements.

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Import the Splide core CSS
import '@splidejs/react-splide/css';

// Import the AutoScroll extension
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// Import the skill badges data
import { skill_badges } from '@/data/skills';

// Define TypeScript interfaces for skill data
interface SkillItem {
  name: string;
  icon: string; // Now a string to hold the Shields.io badge URL
}

interface SkillCategory {
  id: string;
  name: string;
  icon: string; // Now a string to hold the Shields.io badge URL
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'mobile-dev',
    name: 'Mobile Development',
    icon: skill_badges.mobile || 'https://img.shields.io/badge/Mobile-blue?style=flat&logo=smartphone&logoColor=white', // Using a generic placeholder if not found
    skills: [
      { name: 'Flutter', icon: skill_badges.flutter },
      { name: 'Android Studio', icon: skill_badges.androidstudio },
      { name: 'Firebase', icon: skill_badges.firebase },
    ],
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    icon: skill_badges.blockchain || 'https://img.shields.io/badge/Blockchain-blueviolet?style=flat&logo=bitcoin&logoColor=white', // Using a generic placeholder if not found
    skills: [
      { name: 'NEXT.JS', icon: skill_badges.nextjs },
      { name: 'Solidity', icon: skill_badges.solidity },
      { name: 'Ethers.js', icon: skill_badges.ethersjs },
      { name: 'IPFS', icon: skill_badges.ipfs },
    ],
  },
  {
    id: 'dev-deploy-test',
    name: 'Development, Deployment & Testing',
    icon: skill_badges.devops || 'https://img.shields.io/badge/DevOps-F54A58?style=flat&logo=aws&logoColor=white', // Using a generic placeholder if not found
    skills: [
      { name: 'Linux', icon: skill_badges.linux },
      { name: 'VIM', icon: skill_badges.vim },
      { name: 'GIT', icon: skill_badges.git },
      { name: 'Docker', icon: skill_badges.docker },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    icon: skill_badges.database || 'https://img.shields.io/badge/Database-47A248?style=flat&logo=mongodb&logoColor=white', // Using a generic placeholder if not found
    skills: [
      { name: 'MongoDB', icon: skill_badges.mongodb },
      { name: 'PostgreSQL', icon: skill_badges.postgresql },
      { name: 'Firebase', icon: skill_badges.firebase },
      { name: 'Pocketbase', icon: skill_badges.pocketbase },
    ],
  },
  {
    id: 'AI ML',
    name: 'AI/ML & Gen A.I',
    icon: skill_badges.tensorflow || 'https://img.shields.io/badge/AI%2FML-FF6F00?style=flat&logo=tensorflow&logoColor=white', // Using a generic placeholder if not found
    skills: [
      { name: 'TensorFlow', icon: skill_badges.tensorflow },
      { name: 'scikit-learn', icon: skill_badges.scikit },
      { name: 'Pandas', icon: skill_badges.pandas },
      { name: 'Numpy', icon: skill_badges.numpy },
      { name: 'Matplotlib', icon: skill_badges.matplotlib },
      { name: 'Kaggle', icon: skill_badges.kaggle },
      { name: 'OpenCV', icon: skill_badges.opencv },
      { name: 'LangChain', icon: skill_badges.langchain },
    ],
  },
  // Add more categories as needed, find more badges at https://shields.io/badges
];

const SkillsCarousel: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-12 relative pb-4">
          <span className="relative z-10">
            SKILLS
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          </span>
        </h2>

        <Splide
          options={{
            type: 'loop',
            perPage: 4, // Show 4 cards on larger screens
            gap: '1.5rem',
            arrows: true,
            pagination: true,
            drag: 'free',
            focus: 'center', // Often used with drag: 'free'
            breakpoints: {
              1280: {
                perPage: 3, // 3 cards on extra large desktops
              },
              1024: {
                perPage: 2, // 2 cards on desktops/laptops
              },
              768: {
                perPage: 1, // 1 card on tablets
                arrows: false, // Hide arrows on smaller screens
              },
            },
            // AutoScroll options
            autoScroll: {
              speed: 1, // Adjust speed as needed (lower is slower)
              pauseOnHover: true, // Pause autoscroll on hover
              pauseOnFocus: false, // Don't pause on focus (can be true if desired)
            },
          }}
          extensions={{ AutoScroll }} // Mount the AutoScroll extension
          aria-label="My Skills Carousel"
          className="splide-custom-arrows" // Custom class for styling Splide arrows
        >
          {skillCategories.map((category) => (
            <SplideSlide key={category.id}>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start h-full duration-300 hover:shadow-2xl border-1 border-orange-300">
                <div className="flex items-center space-x-3 mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700 text-sm font-medium whitespace-nowrap shadow-sm transition-all duration-200 hover:text-blue-800 cursor-pointer"
                    >
                      {/* Use img tag for Shields.io badges for individual skills */}
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="h-5 w-auto" // Adjust size as needed
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/16x16/cccccc/ffffff?text=X'; }} // Fallback image
                      />
                      {/* {skill.name} */}
                    </div>
                  ))}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default SkillsCarousel;
