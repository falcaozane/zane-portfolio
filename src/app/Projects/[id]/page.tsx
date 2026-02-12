'use client'; // Mark this as a Client Component

import React, { useEffect, useState } from 'react';
import { projects } from '@/data/projects'; // Import project data
import { IconWorldShare, IconPlayerPlay } from '@tabler/icons-react';

interface Project {
  slug: string;
  post: string;
  website?: string;
  type: string;
  date: string;
  technologies: string[];
  detailedDescription: string;
  demoLink?: string;
}

interface ProjectDetailProps {
  params: {
    id: string; // Dynamic route parameter
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ params }) => {
  const { id } = params; // Access the dynamic route parameter directly
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.slug === id);
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return (
      <div className="py-10 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl lg:text-2xl font-extrabold text-orange-500">
          Project not found
        </h3>
      </div>
    );
  }

  return (
    <section id="project-detail" className="py-10 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Project Title */}
        <h3 className="text-3xl lg:text-5xl font-extrabold text-orange-500 mb-12 relative pb-2 inline-block hover:text-amber-400 transition-all duration-300 ease-in-out">
          <span className="relative inline-block pb-1">
            {project.post}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
          </span>
        </h3>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Description and Technologies */}
          <div className="bg-white border-2 border-orange-400 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <p className="text-sm text-gray-600 mb-4">{project.detailedDescription}</p>

            {/* Technologies */}
            <h4 className="font-bold text-orange-500 mb-2">Technologies:</h4>
            <ul className="flex flex-wrap gap-3 mb-4">
              {project.technologies.map((tech, index) => (
                <li key={index} className="px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 ease-in-out">
                  {tech}
                </li>
              ))}
            </ul>

            {/* Project Type & Date */}
            <div className="text-sm text-gray-600">
              <p><strong>Project Type:</strong> {project.type}</p>
              <p><strong>Date:</strong> {project.date}</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col bg-white border-2 border-orange-400 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="flex flex-col gap-6">
              {/* View Live Site */}
              {project.website && (
                <a
                  className="btn btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 ease-in-out"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Live Site"
                >
                  <IconWorldShare size={20} className="mr-2 inline-block" />
                  View Live Site
                </a>
              )}

              {/* Watch Demo */}
              {project.demoLink && (
                <a
                  className="btn btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 ease-in-out"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Watch Demo"
                >
                  <IconPlayerPlay size={20} className="mr-2 inline-block" />
                  Watch Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
