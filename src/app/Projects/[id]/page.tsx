'use client';

import React, { use } from 'react';
import { projects } from '@/data/projects';
import { IconWorldShare, IconPlayerPlay, IconArrowLeft, IconCpu, IconCalendar, IconTag } from '@tabler/icons-react';
import Link from 'next/link';

interface ProjectDetailProps {
  params: Promise<{ id: string }>;
}

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const { id } = use(params);
  const project = projects.find((p) => p.slug === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800">Project Not Found</h3>
          <Link href="/Projects" className="mt-4 inline-block text-orange-500 hover:underline">← Back to all projects</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 pb-20">
      {/* 1. Minimal Navigation Header */}
      <nav className="max-w-7xl mx-auto px-6 py-8">
        <Link 
          href="/Projects" 
          className="group flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-orange-600 transition-colors"
        >
          <IconArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO PROJECTS
        </Link>
      </nav>

      {/* 2. Hero Section */}
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-4xl">
          <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">
            {project.type}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            {project.post}
          </h1>
        </div>
      </header>

      {/* 3. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: The Narrative */}
        <div className="lg:col-span-8">
          <section className="prose prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              About the Project
              <div className="h-[2px] flex-grow bg-orange-100 mt-1" />
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
              {project.detailedDescription}
            </p>
            
            {/* You could add more sections here like "Challenges" or "Key Features" later */}
          </section>
        </div>

        {/* Right Column: Sticky Metadata Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-8 space-y-8">
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-200"
                >
                  <IconWorldShare size={20} />
                  Live Preview
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white border-2 border-slate-200 hover:border-orange-500 hover:text-orange-600 text-slate-700 font-bold py-4 rounded-xl transition-all"
                >
                  <IconPlayerPlay size={20} />
                  Video Demo
                </a>
              )}
            </div>

            {/* Project Details Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <IconCalendar size={14} /> Date
                  </label>
                  <p className="text-slate-700 font-medium">{project.date}</p>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <IconTag size={14} /> Category
                  </label>
                  <p className="text-slate-700 font-medium">{project.type}</p>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <IconCpu size={14} /> Tech Stack
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-bold rounded-md border border-orange-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
};

export default ProjectDetail;