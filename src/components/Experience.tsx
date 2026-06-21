import React from 'react';
import { IconWorldShare, IconCertificate, IconCalendar } from '@tabler/icons-react';
import { experiences } from '@/data/work-exp'; // Adjust the import path as needed

const Experience: React.FC = () => {
  return (
    <section id="work-experience" className="py-16 bg-sys-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl lg:text-4xl font-extrabold text-sys-primary mb-12 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            WORK EXPERIENCE
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sys-primary to-sys-secondary rounded-full" />
          </span>
        </h3>

        {/* Responsive grid: 1 / 2 columns */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.post}`}
              className="group relative bg-sys-card rounded-xl border-2 border-sys-primary/50 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:border-sys-primary hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sys-primary to-sys-secondary" />

              <div className="p-6">
                {/* Header with post title and company */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-sys-card-foreground mb-1 group-hover:text-sys-primary transition-colors">
                      {experience.post}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-sys-primary font-medium">{experience.company}</span>
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sys-muted-foreground hover:text-sys-primary transition-colors"
                        aria-label="Visit website"
                      >
                        <IconWorldShare className="w-4 h-4 text-sys-primary/80" />
                      </a>
                    </div>
                  </div>

                  {/* Certificate button */}
                  {experience.letter && (
                    <a
                      href={experience.letter}
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
                  <span>{experience.start} - {experience.end}</span>
                </div>

                {/* Location */}
                <p className="text-sm text-sys-muted-foreground italic mt-2">{experience.location}</p>

                {/* Skills */}
                {experience.skills && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="px-2 py-0.5 bg-sys-secondary/20 text-sys-foreground rounded text-xs sm:text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Description */}
                <p className="mt-4 text-sm text-sys-muted-foreground leading-relaxed">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
