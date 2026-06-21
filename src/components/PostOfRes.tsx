import React from 'react';
import { pos } from '@/data/pos';
import { IconCertificate, IconExternalLink, IconCalendar, IconBuildingCommunity } from '@tabler/icons-react';

const PostOfRes = () => {
  return (
    <section id="por" className="py-16 bg-sys-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl lg:text-4xl font-extrabold text-sys-primary mb-12 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            POSITION OF RESPONSIBILITY
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sys-primary to-sys-secondary rounded-full"></span>
          </span>
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pos.map((project) => (
            <div
              key={`${project.company}-${project.post}`}
              className="group relative bg-sys-card rounded-xl border-2 border-sys-primary/50 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:border-sys-primary hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sys-primary to-sys-secondary" />

              <div className="p-6">
                {/* Header with post title and certificate */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-sys-card-foreground mb-1 group-hover:text-sys-primary transition-colors">
                      {project.post}
                    </h2>
                    <div className="flex items-center gap-2">
                      <IconBuildingCommunity className="w-4 h-4 text-sys-primary/80" />
                      <span className="text-sys-primary font-medium">
                        {project.company}
                      </span>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sys-muted-foreground hover:text-sys-primary transition-colors"
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
                      className="flex-shrink-0 p-3 bg-sys-primary/10 rounded-full text-sys-primary hover:bg-sys-primary hover:text-sys-primary-foreground transition-all duration-300 group-hover:scale-110"
                      aria-label="View certificate"
                    >
                      <IconCertificate className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-sys-muted-foreground">
                  <IconCalendar className="w-4 h-4 text-sys-primary/80" />
                  <span>
                    {project.startdate} - {project.enddate}
                  </span>
                </div>

                {/* Optional: Add description if available */}
                {project.detailedDescription && (
                  <p className="mt-4 text-sys-muted-foreground text-sm leading-relaxed">
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