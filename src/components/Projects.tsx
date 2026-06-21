'use client'
import React from 'react'
import { projects } from '@/data/projects'
import { IconPlayerPlay, IconWorldShare, IconCode, IconBrandGithubCopilot } from '@tabler/icons-react'
import Link from 'next/link'

const Projects = () => {
  const displayedProjects = projects.slice(0, 4) // Show only the first 4 projects
  return (
    <section id="projects" className="py-10 bg-sys-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl lg:text-4xl font-extrabold text-sys-primary mb-12 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            PROJECTS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sys-primary to-sys-secondary rounded-full"></span>
          </span>
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {displayedProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between bg-sys-card border border-sys-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1 text-[10px] font-bold tracking-widest text-sys-primary bg-sys-primary/10 px-2 py-1 rounded-md uppercase">
                    <IconCode size={12} /> {project.type}
                  </span>
                  <span className="text-[11px] font-semibold text-sys-muted-foreground uppercase tracking-tighter">
                    {project.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-sys-card-foreground group-hover:text-sys-primary transition-colors mb-2">
                  {project.post}
                </h2>

                {/* Description Snippet */}
                <p className="text-sm text-sys-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                  {project.detailedDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-sys-muted text-sys-muted-foreground text-[10px] font-bold rounded border border-sys-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-bold text-sys-muted-foreground/50 self-center">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-4 border-t border-sys-border/50">
                <Link 
                   href={`/Projects/${project.slug}`}
                   className="text-xs font-bold text-sys-muted-foreground hover:text-sys-primary transition-colors"
                >
                  LEARN MORE →
                </Link>
                
                <div className="flex gap-2">
                  {project.website && (
                    <a
                      className="btn btn-circle btn-sm btn-outline border-sys-primary/50 text-sys-primary hover:bg-sys-primary hover:text-sys-primary-foreground hover:border-sys-primary transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.website}
                      title="View Live Site"
                    >
                      <IconWorldShare size={18} />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      className="btn btn-circle btn-sm btn-outline border-sys-primary/50 text-sys-primary hover:bg-sys-primary hover:text-sys-primary-foreground hover:border-sys-primary transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.demoLink}
                      title="Watch Demo"
                    >
                      <IconPlayerPlay size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/Projects"
            className="rounded-xl w-full mt-10 btn bg-sys-primary border-sys-primary text-sys-primary-foreground hover:bg-sys-secondary hover:border-sys-secondary shadow-lg shadow-sys-primary/20"
          >
            <IconBrandGithubCopilot size={18} className="mr-2" /> View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects