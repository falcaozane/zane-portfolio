import React from 'react';
import { pos } from '@/data/pos';
import { IconCertificate, IconExternalLink, IconCalendar, IconBuildingCommunity } from '@tabler/icons-react';

const PostOfRes = () => {
  return (
    <section id="por" className="py-16 bg-gray-100 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl lg:text-4xl font-extrabold text-orange-500 mb-12 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            POSITION OF RESPONSIBILITY
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></span>
          </span>
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pos.map((project) => (
            <div
              key={`${project.company}-${project.post}`}
              className="group relative bg-white rounded-xl border-2 border-orange-400 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400" />

              <div className="p-6">
                {/* Header with post title and certificate */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                      {project.post}
                    </h2>
                    <div className="flex items-center gap-2">
                      <IconBuildingCommunity className="w-4 h-4 text-orange-400" />
                      <span className="text-orange-500 font-medium">
                        {project.company}
                      </span>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                        aria-label="Visit website"
                      >
                        <IconExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Certificate button */}
                  {project.letter && (
                    <a
                      href={project.letter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-3 bg-orange-50 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 group-hover:scale-110"
                      aria-label="View certificate"
                    >
                      <IconCertificate className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconCalendar className="w-4 h-4 text-orange-400" />
                  <span>
                    {project.startdate} - {project.enddate}
                  </span>
                </div>

                {/* Optional: Add description if available */}
                {project.detailedDescription && (
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {project.detailedDescription}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostOfRes;