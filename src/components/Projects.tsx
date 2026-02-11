'use client'
import React from 'react'
import { projects } from '@/data/projects'
// Updated icon import
import { IconPlayerPlay, IconWorldShare } from '@tabler/icons-react'
import Link from 'next/link'

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className=" text-2xl lg:text-4xl font-extrabold text-orange-500 mb-12 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            PROJECTS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></span>
          </span>
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <div
              className="duration-200 card-compact shadow-md card hover:shadow-xl text-amber-600 border-2 border-orange-400 hover:border-orange-300 bg-white"
              // Use slug for a unique key
              key={project.slug}
            >
              <div className="card-body">
                <h2 className="card-title">{project.post}</h2>
                {/* Added Date and removed Company */}
                <h4 className="text-sm italic text-gray-600">
                  {project.type} • {project.date}
                </h4>
                

                {/* Updated Card Actions for website and demoLink */}
                <div className="justify-end card-actions mt-4">
                  {project.website && (
                    <a
                      className="btn btn-circle btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-amber-500"
                      target="_blank" // Corrected from "blank"
                      rel="noopener noreferrer"
                      href={project.website}
                      title="View Live Site"
                    >
                      <IconWorldShare size={20} />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      className="btn btn-circle btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-amber-500"
                      target="_blank" // Corrected from "blank"
                      rel="noopener noreferrer"
                      href={project.demoLink}
                      title="Watch Demo"
                    >
                      <IconPlayerPlay />
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
            className="rounded-sm w-full mt-8 btn bg-orange-500 border-orange-600 text-white hover:bg-amber-500 hover:border-amber-500"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects