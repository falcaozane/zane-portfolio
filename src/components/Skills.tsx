/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
// @ts-expect-error Ignore type errors for Splide imports
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { skill_badges, skill_badges_mono } from '@/data/skills';
import { ChevronRight } from 'lucide-react'; // or use your icon library

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: [
      { name: 'C', icon: skill_badges.c },
      { name: 'C++', icon: skill_badges.cplusplus },
      { name: 'JavaScript', icon: skill_badges.javascript },
      { name: 'Java', icon: skill_badges_mono.java },
      { name: 'Python', icon: skill_badges.python },
      { name: 'SQL', icon: skill_badges.sql },
      { name: 'TypeScript', icon: skill_badges.typescript },
      { name: 'HTML5', icon: skill_badges.html5 },
      { name: 'CSS3', icon: skill_badges.css3 },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'Next.js', icon: skill_badges.nextjs },
      { name: 'React', icon: skill_badges.reactjs },
      { name: 'Tailwind CSS', icon: skill_badges.tailwind },
      { name: 'Bootstrap', icon: skill_badges.bootstrap },
      { name: 'Express', icon: skill_badges.express },
      { name: 'Flask', icon: skill_badges.flask },
      { name: 'Fast-API', icon: skill_badges.fastapi },
      { name: 'Streamlit', icon: skill_badges.streamlit },
      { name: 'Selenium', icon: skill_badges.selenium },
    ],
  },
  {
    id: 'platforms',
    name: 'Platforms & Tools',
    skills: [
      { name: 'VScode', icon: skill_badges.vscode },
      { name: 'Git', icon: skill_badges.git },
      { name: 'GitHub', icon: skill_badges.github },
      { name: 'MongoDB', icon: skill_badges.mongodb },
      { name: 'PostgreSQL', icon: skill_badges.postgresql },
      { name: 'Linux', icon: skill_badges.linux },
      { name: 'Azure', icon: skill_badges.azure },
      { name: 'AWS', icon: skill_badges.aws },
      { name: 'GCP', icon: skill_badges.gcp },
      { name: 'Firebase', icon: skill_badges.firebase },
      { name: 'Postman', icon: skill_badges.postman },
      { name: 'Jira', icon: skill_badges.jira },
    ],
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    skills: [
      { name: 'Solidity', icon: skill_badges.solidity },
      { name: 'Ethers.js', icon: skill_badges.ethersjs },
      { name: 'Web3.js', icon: skill_badges.web3js },
      { name: 'IPFS', icon: skill_badges.ipfs },
      { name: 'Hardhat', icon: skill_badges.hardhat },
      { name: 'Remix', icon: skill_badges.remix },
    ],
  },
  {
    id: 'ai-ml-ds',
    name: 'AI / ML / Data Science',
    skills: [
      { name: 'TensorFlow', icon: skill_badges.tensorflow },
      { name: 'PyTorch', icon: skill_badges.pytorch },
      { name: 'Scikit-learn', icon: skill_badges.scikitlearn },
      { name: 'Langchain', icon: skill_badges_mono.langchain },
      { name: 'OpenAI', icon: skill_badges.openai },
      { name: 'Huggingface', icon: skill_badges.huggingface },
      { name: 'OpenCV', icon: skill_badges.opencv },
      { name: 'Pandas', icon: skill_badges.pandas },
      { name: 'NumPy', icon: skill_badges.numpy },
      { name: 'SpaCy', icon: skill_badges.spacy },
    ],
  },
];

const SkillsCarousel: React.FC = () => {
  return (
    <section id="skills" className="w-full pt-24 pb-16 bg-gray-100">
      {/* Header - Constrained width */}
      <div className="w-full max-w-7xl mx-auto mb-12 px-4 md:px-0">
        <h3 className="text-2xl lg:text-4xl font-extrabold text-orange-500 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            SKILLS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></span>
          </span>
        </h3>
      </div>

      {/* Carousel - Full width */}
      <Splide
        options={{
          gap: 16,
          type: 'loop',
          drag: 'free',
          focus: 'center',
          autoWidth: true,
          arrows: true,
          pagination: false,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
        hasTrack={false}
        aria-label="Skills Carousel"
      >
        <SplideTrack>
          {skillCategories.map((category) => (
            <SplideSlide key={category.id} className="h-[320px] w-72">
              {/* Card */}
              <div className="w-full h-full bg-white rounded-xl p-6 border-2 border-orange-400 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Category Title */}
                <h4 className="text-xl font-bold text-orange-500 mb-5">
                  {category.name}
                </h4>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-full border border-amber-400 hover:border-orange-600 transition-colors duration-200"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-6 w-auto"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/80x24/f97316/ffffff?text=${skill.name}`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* Custom Arrows */}
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev !bg-orange-500 !opacity-100 hover:!bg-orange-600">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
          <button className="splide__arrow splide__arrow--next !bg-orange-500 !opacity-100 hover:!bg-orange-600">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </Splide>

      {/* Custom Splide Styles */}
      <style jsx global>{`
        #skills .splide__arrow {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
        }
        #skills .splide__arrow svg {
          fill: white;
        }
        #skills .splide__arrow--prev svg {
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};

export default SkillsCarousel;