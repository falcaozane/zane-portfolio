'use client';

import React from 'react';
import Image from 'next/image';
import { IconAward, IconChevronRight } from '@tabler/icons-react';
import Wins from '../../public/Wins.jpeg'; // Assuming the image is in your public folder

const achievements = [
  {
    title: "Winner, Smart India Hackathon 2023",
    detail: "Ministry of Law and Justice. Awarded ₹1,00,000 for AI-powered Legal Assistant.",
  },
  {
    title: "A.I Retire-Thon 2024 Intercollege Winner",
    detail: "TIAA Global Capabilities. Recognized for innovative stock allocation engine.",
  },
  {
    title: "S.P.I.T Technovate 2.0 Winner",
    detail: "First place in the technical innovation track.",
  },
  {
    title: "Rank 5 in IDE — Hyderabad",
    detail: "Innovation, Design and Entrepreneurship competition organized by AICTE and Wadhwani Foundation.",
  },
  {
    title: "Strategem Hackathon Runner Up",
    detail: "Second place in technical implementation and problem solving.",
  },
  {
    title: "Unfold 2k24 Hackathon Finalist — Bangalore",
    detail: "Top finalist in the premier blockchain challenge organized by CoinDCX.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-100 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <h3 className="text-2xl lg:text-4xl font-extrabold text-orange-500 mb-12 relative pb-2 inline-block">
            <span className="relative inline-block pb-1">
                ACHIEVEMENTS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></span>
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image Content */}
          <div className="relative group">
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 bg-orange-100/50 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            
            <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={Wins}
                alt="Hackathon Victory Moments"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
              
              {/* Corner Icon */}
              <div className="absolute bottom-6 right-6 bg-orange-500 text-white p-3 rounded-xl shadow-xl">
                <IconAward size={28} />
              </div>
            </div>
          </div>

          {/* Right Side: Bullet Points */}
          <div className="space-y-8">
            <ul className="space-y-6">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex gap-4 group">
                  <div className="mt-1.5 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                      <IconChevronRight size={14} className="text-orange-600 group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed mt-1">
                      {achievement.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Bottom Callout */}
            <div className="p-6 bg-[#fafafa] border-l-4 border-orange-500 rounded-r-xl">
              <p className="text-slate-600 font-medium italic">
                &ldquo;Consistently delivering winning solutions under pressure in fast-paced competitive environments.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;