import React from 'react';
import { education } from '@/data/education';
import { IconCalendar, IconSchool, IconTrophy, IconExternalLink } from '@tabler/icons-react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-100 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl lg:text-4xl font-extrabold text-orange-500 mb-12 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            EDUCATION
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></span>
          </span>
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((degree) => (
            <div
              key={`${degree.institue}-${degree.post}`}
              className="group relative bg-white rounded-xl border-2 border-orange-400 overflow-hidden p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-t-xl" />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                    <IconSchool className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg leading-tight">
                      {degree.institue}
                    </h3>
                    <p className="text-orange-500 font-medium text-sm">
                      {degree.type}
                    </p>
                  </div>
                </div>
                <a
                  href={degree.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                  aria-label="Visit website"
                >
                  <IconExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Degree/Post name */}
              {degree.post && (
                <p className="text-gray-600 mb-4 font-medium">{degree.post}</p>
              )}

              {/* Details */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <IconCalendar className="w-4 h-4 text-orange-400" />
                  <span>
                    {degree.start} - {degree.end}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconTrophy className="w-4 h-4 text-orange-400" />
                  <span className="font-semibold text-orange-600">
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