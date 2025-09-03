/* eslint-disable @next/next/no-img-element */

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
import Image from 'next/image';
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
    id: 'languages',
    name: 'Languages',
    icon: 'https://img.shields.io/badge/Languages-239120?style=flat&logo=codeigniter&logoColor=white',
    skills: [
      { name: 'C', icon: skill_badges.c },
      { name: 'C++', icon: skill_badges.cplusplus },
      { name: 'JavaScript', icon: skill_badges.javascript },
      { name: 'Python', icon: skill_badges.python },
      { name: 'SQL', icon: skill_badges.sql },
      { name: 'TypeScript', icon: skill_badges.typescript },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Libraries',
    icon: 'https://img.shields.io/badge/Frameworks-61DAFB?style=flat&logo=react&logoColor=white',
    skills: [
      { name: 'Next.js', icon: skill_badges.nextjs },
      { name: 'React', icon: skill_badges.reactjs },
      { name: 'Tailwind CSS', icon: skill_badges.tailwind },
      { name: 'Bootstrap', icon: skill_badges.bootstrap },
      { name: 'Express', icon: skill_badges.express },
      { name: 'Langchain', icon: skill_badges.langchain },
      { name: 'Flask', icon: skill_badges.flask },
      { name: 'Fast-API', icon: skill_badges.fastapi },
      { name: 'Streamlit', icon: skill_badges.streamlit },
      { name: 'Pandas', icon: skill_badges.pandas },
      { name: 'NumPy', icon: skill_badges.numpy },
      { name: 'Matplotlib', icon: skill_badges.matplotlib },
      { name: 'Plotly', icon: skill_badges.plotly },
      { name: 'SpaCy', icon: skill_badges.spacy },
      { name: 'Beautiful Soup 4', icon: skill_badges.beautifulsoup },
    ],
  },
  {
    id: 'platforms',
    name: 'Platforms & Tools',
    icon: 'https://img.shields.io/badge/Tools-007ACC?style=flat&logo=visualstudiocode&logoColor=white',
    skills: [
      { name: 'VScode', icon: skill_badges.vscode },
      { name: 'Git', icon: skill_badges.git },
      { name: 'GitHub', icon: skill_badges.github },
      { name: 'MongoDB', icon: skill_badges.mongodb },
      { name: 'Linux', icon: skill_badges.linux },
      { name: 'Windows', icon: skill_badges.windows },
      { name: 'Vercel', icon: skill_badges.vercel },
      { name: 'Render', icon: skill_badges.render },
      { name: 'Netlify', icon: skill_badges.netlify },
      { name: 'Firebase', icon: skill_badges.firebase },
      { name: 'Huggingface', icon: skill_badges.huggingface },
    ],
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    icon: skill_badges.blockchain || 'https://img.shields.io/badge/Blockchain-blueviolet?style=flat&logo=bitcoin&logoColor=white',
    skills: [
      { name: 'NEXT.JS', icon: skill_badges.nextjs },
      { name: 'React', icon: skill_badges.reactjs },
      { name: 'Solidity', icon: skill_badges.solidity },
      { name: 'Ethers.js', icon: skill_badges.ethersjs },
      { name: 'IPFS', icon: skill_badges.ipfs },
    ],
  },
  // Add more categories as needed, find more badges at https://shields.io/badges
];
const SkillsCarousel: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-12 relative pb-4 px-8">
          <span className="relative z-10">
            SKILLS
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full"></span>
          </span>
        </h2>
        <Splide
          options={{
            type: 'loop',
            perPage: 4, // Show 4 cards on larger screens
            gap: '1.5rem',
            arrows: false,
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
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start h-full duration-300 hover:shadow-2xl border-1 border-amber-500 z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex rounded-full items-center text-gray-700 text-sm font-medium whitespace-nowrap shadow-sm transition-all duration-200 hover:text-blue-800 cursor-pointer"
                    >
                      {/* Use img tag for Shields.io badges for individual skills */}
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="h-6 w-auto rounded-full" // Adjust size as needed
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/16x16/cccccc/ffffff?text=X'; }} // Fallback image
                      />
                      
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