'use client'
import React from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { IconArrowUpRight, IconCalendar, IconDeviceLaptop, IconArrowLeft } from '@tabler/icons-react' // Added IconArrowLeft

export default function AllProjectsPage() {
  return (
    <section id="projects" className="py-20 bg-sys-background px-6 sm:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation - Back to Home */}
        <div className="mb-10">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 text-sm font-bold text-sys-muted-foreground hover:text-sys-primary transition-colors uppercase tracking-widest"
          >
            <IconArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-black text-sys-foreground mb-4 tracking-tight">
            SELECTED <span className="text-sys-primary">WORKS</span>
          </h1>
          <p className="text-sys-muted-foreground text-lg max-w-2xl font-medium">
            A collection of engineering projects spanning AI/ML, Blockchain, and Full-Stack development.
          </p>
          <div className="w-20 h-1.5 bg-sys-primary mt-6 rounded-full" />
        </header>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              href={`/Projects/${project.slug}`}
              key={project.slug}
              className="group relative bg-sys-card border border-sys-border rounded-3xl p-8 hover:border-sys-primary/50 hover:shadow-2xl hover:shadow-sys-primary/10 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Background Accent on Hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-sys-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-2xl opacity-50" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="px-4 py-1.5 bg-sys-muted text-sys-muted-foreground rounded-full text-xs font-bold uppercase tracking-widest group-hover:bg-sys-primary group-hover:text-sys-primary-foreground transition-colors duration-300">
                    {project.type}
                  </span>
                  <IconArrowUpRight className="text-sys-muted-foreground/50 group-hover:text-sys-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                </div>

                <h2 className="text-2xl font-extrabold text-sys-card-foreground group-hover:text-sys-primary transition-colors mb-3 leading-tight">
                  {project.post}
                </h2>
                
                <p className="text-sys-muted-foreground text-sm line-clamp-2 mb-6 leading-relaxed">
                  {project.detailedDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-bold text-sys-muted-foreground border border-sys-border px-2 py-0.5 rounded-md group-hover:border-sys-primary/40 group-hover:text-sys-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-bold text-sys-muted-foreground/50">+{project.technologies.length - 4} more</span>
                  )}
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="flex items-center gap-6 pt-6 border-t border-sys-border/30">
                <div className="flex items-center gap-2 text-sys-muted-foreground">
                  <IconCalendar size={16} />
                  <span className="text-xs font-medium uppercase tracking-tighter">{project.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sys-muted-foreground">
                  <IconDeviceLaptop size={16} />
                  <span className="text-xs font-medium uppercase tracking-tighter">Live Demo</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}