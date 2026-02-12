'use client'
import React from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { IconArrowUpRight, IconCalendar, IconDeviceLaptop, IconArrowLeft } from '@tabler/icons-react' // Added IconArrowLeft

export default function AllProjectsPage() {
  return (
    <section id="projects" className="py-20 bg-[#fafafa] px-6 sm:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation - Back to Home */}
        <div className="mb-10">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase tracking-widest"
          >
            <IconArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            SELECTED <span className="text-orange-500">WORKS</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl font-medium">
            A collection of engineering projects spanning AI/ML, Blockchain, and Full-Stack development.
          </p>
          <div className="w-20 h-1.5 bg-orange-500 mt-6 rounded-full" />
        </header>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              href={`/Projects/${project.slug}`}
              key={project.slug}
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Background Accent on Hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-2xl opacity-50" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-widest group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    {project.type}
                  </span>
                  <IconArrowUpRight className="text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors mb-3 leading-tight">
                  {project.post}
                </h2>
                
                <p className="text-slate-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                  {project.detailedDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md group-hover:border-orange-200 group-hover:text-orange-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-bold text-slate-300">+{project.technologies.length - 4} more</span>
                  )}
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="flex items-center gap-6 pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2 text-slate-400">
                  <IconCalendar size={16} />
                  <span className="text-xs font-medium uppercase tracking-tighter">{project.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
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