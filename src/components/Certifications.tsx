import React from 'react'
import { projects } from '@/data/projects'

const Certifications = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100 px-8">
        <div className="max-w-7xl mx-auto">
            <h3 className=" text-2xl lg:text-4xl font-extrabold text-orange-500 mb-12 relative pb-2 inline-block">
                <span className="relative inline-block pb-1">
                    CERTIFICATIONS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></span>
                </span>
            </h3>
            <div className="grid bg-base-200 gap-0.5 p-0.5 md:grid-cols-2">
                {projects.map((project) => (
                <a
                    key={`${project.company}-${project.post}`}
                    target="blank"
                    // Link to the certificate letter, or fallback to website
                    href={project.letter || project.website || '#'}
                    className="duration-200 group flex items-center bg-base-100 h-full w-full justify-between p-4 hover:bg-amber-500 hover:text-white hover:shadow-2xl hover:scale-105"
                >
                    <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="bg-base-100 w-12 rounded-full outline outline-offset-2 outline-base-content/40 group-hover:outline-primary-content">
                        <img
                            loading="eager"
                            // Use project.image (make sure it exists in your data)
                            src={project.image}
                            alt={project.company}
                        />
                        </div>
                    </div>
                    <div className="flex flex-col ml-4">
                        {/* Mapped project.post to title */}
                        <h2 className="font-bold text-lg">{project.post}</h2>
                        {/* Mapped project.company to organization */}
                        <p>{project.company}</p>
                        {/* Mapped date range */}
                        <p className="text-sm opacity-70">
                        {project.start} - {project.end}
                        </p>
                    </div>
                    </div>
                    {/* The target layout doesn't have a separate icon/button, 
                    as the whole card is one link.
                    */}
                </a>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Certifications
