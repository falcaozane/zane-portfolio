import React from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects' // Assuming this is your data file


export default function AllProjectsPage() {
  return (
    <section id="projects" className="py-10 bg-gray-100 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h3 className="text-2xl lg:text-4xl font-extrabold text-orange-500 mb-12 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            ALL PROJECTS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></span>
          </span>
        </h3>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            // Each card is a Link to the detailed page
            <Link
              href={`/Projects/${project.slug}`} // <-- This links to the dynamic page
              key={project.slug}
              className="duration-200 card-compact shadow-md card hover:shadow-xl text-amber-600 border-2 border-orange-400 hover:border-orange-300 bg-white"
            >
              <div className="card-body">
                {/* You can add an image here if you have one */}
                {/* <figure><img src={project.imageUrl} alt={project.post} /></figure> */}
                <h2 className="card-title">{project.post}</h2>
                <p className="text-sm italic">{project.date}</p>
                <p className="text-sm">{project.type}</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-sm btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}