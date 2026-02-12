'use client';
import React, { useState, useEffect } from 'react'; // Added hooks
import Image from 'next/image';
import { IconFileCv, IconArrowRight, IconCode, IconBrain, IconDatabase, IconLock } from '@tabler/icons-react';
import { TypeAnimation } from 'react-type-animation';
import Zane from '../../public/Zane.jpg';
import Link from 'next/link';

const About = () => {
  // 1. Logic for the changing badge
  const [index, setIndex] = useState(0);
  const badges = [
    { label: 'AI', title: 'RAG Systems', icon: <IconBrain size={20} /> },
    { label: 'Web3', title: 'Smart Contracts', icon: <IconLock size={20} /> },
    { label: 'QA', title: 'Test Automation', icon: <IconCode size={20} /> },
    { label: 'Cloud', title: 'Azure/GCP', icon: <IconDatabase size={20} /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % badges.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Creative Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-orange-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-amber-100 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Section (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-orange-50 border border-orange-100 rounded-full">
              <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">
                Tech Enthusiast and Innovator
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight">
                Zane <span className="text-orange-500">Falcao</span>
              </h1>
              <div className="h-10 text-2xl lg:text-3xl font-bold text-slate-700 flex items-center gap-2">
                <span>I&apos;m a</span>
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer', 2000,
                    'Cloud Engineer', 2000,
                    'Generative A.I Developer', 2000,
                    'Blockchain Enthusiast', 2000,
                  ]}
                  speed={50}
                  className="text-orange-500 underline decoration-amber-400"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Computer Engineering graduate from <span className="font-bold text-slate-800">Fr. CRCE</span>. 
              Currently a Software Engineer at <span className="font-bold text-slate-800">Capgemini</span>. 
              I build scalable solutions ranging from <span className="text-orange-600 font-medium">RAG-based AI Assistants</span> to <span className="text-orange-600 font-medium">Blockchain supply chain platforms</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-orange-500 text-white font-bold rounded-xl overflow-hidden transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-200">
                <span className="flex items-center gap-2 relative z-10">
                  <IconFileCv /> DOWNLOAD CV
                </span>
              </button>
              
              <Link href="#projects" className="group flex items-center gap-2 text-slate-900 font-bold hover:text-orange-600 transition-colors">
                View My Work <IconArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
          </div>

          {/* Image Section (Right) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-dashed border-orange-200 rounded-3xl group-hover:rotate-3 transition-transform duration-500" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500 to-amber-400 opacity-10 rounded-3xl blur-sm group-hover:opacity-20 transition-opacity" />
              
              <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-2">
                <Image
                  src={Zane}
                  alt="Zane Falcao"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* 2. THE DYNAMIC FLOATING BADGE */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce transition-all duration-500">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-500 transform scale-110">
                  {badges[index].icon}
                </div>
                <div className="min-w-[100px]">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Focus</p>
                  <p className="text-sm font-black text-slate-800 tracking-tight animate-pulse">
                    {badges[index].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;