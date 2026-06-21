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
      <div className="min-h-screen flex items-center justify-center bg-sys-background">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-sys-foreground">Project Not Found</h3>
          <Link href="/Projects" className="mt-4 inline-block text-sys-primary hover:underline">← Back to all projects</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-sys-background text-sys-foreground pb-20">
      {/* 1. Minimal Navigation Header */}
      <nav className="max-w-7xl mx-auto px-6 py-8">
        <Link 
          href="/Projects" 
          className="group flex items-center gap-2 text-sm font-medium text-sys-muted-foreground hover:text-sys-primary transition-colors"
        >
          <IconArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO PROJECTS
        </Link>
      </nav>

      {/* 2. Hero Section */}
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-4xl">
          <span className="text-sys-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            {project.type}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-sys-foreground leading-[1.1]">
            {project.post}
          </h1>
        </div>
      </header>

      {/* 3. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: The Narrative */}
        <div className="lg:col-span-8 text-wrap">
          <section className="prose prose-slate max-w-none">
            <h3 className="text-xl font-bold text-sys-foreground mb-6 flex items-center gap-2">
              About the Project
              <div className="h-[2px] flex-grow bg-sys-primary/20 mt-1" />
            </h3>
            <div className="text-base sm:text-lg text-sys-muted-foreground leading-relaxed whitespace-pre-line break-words space-y-4">
              {project.detailedDescription.split('\n').map((line, index) => {
                const urlRegex = /(https?:\/\/[^\s]+)/g;

                const parts = line.split(urlRegex);

                return (
                  <p key={index}>
                    {parts.map((part, i) =>
                      urlRegex.test(part) ? (
                        <a
                          key={i}
                          href={part}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sys-primary underline break-all hover:text-sys-primary/80"
                        >
                          View Presentation
                        </a>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              })}
            </div>
            
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
                  className="flex items-center justify-center gap-2 w-full bg-sys-primary hover:bg-sys-primary/90 text-sys-primary-foreground font-bold py-4 rounded-xl transition-all shadow-lg shadow-sys-primary/20"
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
                  className="flex items-center justify-center gap-2 w-full bg-sys-card border-2 border-sys-border hover:border-sys-primary hover:text-sys-primary text-sys-card-foreground font-bold py-4 rounded-xl transition-all"
                >
                  <IconPlayerPlay size={20} />
                  Video Demo
                </a>
              )}
            </div>

            {/* Project Details Box */}
            <div className="bg-sys-card border border-sys-border rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-sys-muted-foreground uppercase tracking-wider mb-2">
                    <IconCalendar size={14} /> Date
                  </label>
                  <p className="text-sys-card-foreground font-medium">{project.date}</p>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-sys-muted-foreground uppercase tracking-wider mb-2">
                    <IconTag size={14} /> Category
                  </label>
                  <p className="text-sys-card-foreground font-medium">{project.type}</p>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-sys-muted-foreground uppercase tracking-wider mb-3">
                    <IconCpu size={14} /> Tech Stack
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-sys-primary/10 text-sys-primary text-xs font-bold rounded-md border border-sys-primary/20"
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