import React from 'react';
import { education } from '@/data/education';
import { IconCalendar, IconSchool, IconTrophy, IconExternalLink } from '@tabler/icons-react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-sys-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl lg:text-4xl font-extrabold text-sys-primary mb-12 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            EDUCATION
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sys-primary to-sys-secondary rounded-full"></span>
          </span>
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((degree) => (
            <div
              key={`${degree.institue}-${degree.post}`}
              className="group relative bg-sys-card rounded-xl border-2 border-sys-primary/50 overflow-hidden p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-sys-primary hover:-translate-y-1"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sys-primary to-sys-secondary rounded-t-xl" />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sys-primary/10 rounded-lg group-hover:bg-sys-primary/20 transition-colors">
                    <IconSchool className="w-6 h-6 text-sys-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sys-card-foreground text-lg leading-tight">
                      {degree.institue}
                    </h3>
                    <p className="text-sys-primary font-medium text-sm">
                      {degree.type}
                    </p>
                  </div>
                </div>
                <a
                  href={degree.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-sys-muted-foreground hover:text-sys-primary hover:bg-sys-primary/10 rounded-lg transition-colors"
                  aria-label="Visit website"
                >
                  <IconExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Degree/Post name */}
              {degree.post && (
                <p className="text-sys-muted-foreground mb-4 font-medium">{degree.post}</p>
              )}

              {/* Details */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-sys-muted-foreground">
                  <IconCalendar className="w-4 h-4 text-sys-primary/80" />
                  <span>
                    {degree.start} - {degree.end}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconTrophy className="w-4 h-4 text-sys-primary/80" />
                  <span className="font-semibold text-sys-primary">
                    {degree.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;