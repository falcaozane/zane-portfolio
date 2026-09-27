'use client';

import React from 'react';
import { IconWorldShare } from '@tabler/icons-react';
import { experiences } from '@/data/work-exp';

const Experience: React.FC = () => {
  // Separate full-time and internship experiences
  const fullTimeExperiences = experiences.filter(exp => exp.type === 'Full-Time');
  const internshipExperiences = experiences.filter(exp => exp.type === 'Internship');

  // Group full-time experiences by company
  const groupedFullTime = fullTimeExperiences.reduce((acc, exp) => {
    if (!acc[exp.company]) {
      acc[exp.company] = [];
    }
    acc[exp.company].push(exp);
    return acc;
  }, {} as Record<string, typeof fullTimeExperiences>);

  return (
    <section id="work-experience" className="py-16 bg-gray-100 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl lg:text-4xl font-extrabold text-orange-500 mb-12 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            WORK EXPERIENCE
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
          </span>
        </h3>

        <div className="flex flex-col gap-6">

          {/* FULL-TIME EXPERIENCE */}
          {Object.entries(groupedFullTime).map(([company, roles]) => {
            const firstRole = roles[0];
            return (
              <div
                key={company}
                className="bg-white rounded-2xl border-2 border-orange-400 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-6 flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <h3 className="text-3xl font-extrabold text-white mb-2">{company}</h3>
                    <span className="inline-block bg-white/25 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Full-Time
                    </span>
                  </div>
                  <div className="text-white text-sm font-medium opacity-95">
                    <div>📅 {roles[roles.length - 1].start} - {roles[0].end}</div>
                    <div>📍 {firstRole.location.replace(/\s*\(.*?\)\s*/, '')}</div>
                  </div>
                </div>

                {/* Timeline of Roles */}
                <div className="p-8">
                  <div className="relative border-l-2 border-amber-100 pl-8">
                    {roles.map((role, index) => {
                      const isCurrent = role.end === "Present";
                      const isLast = index === roles.length - 1;

                      return (
                        <div
                          key={`${role.post}-${role.start}`}
                          className={`relative ${!isLast ? 'mb-10 pb-10' : ''}`}
                        >
                          <div
                            className={`absolute -left-[39px] top-0 w-3 h-3 border-2 border-white rounded-full ${
                              isCurrent
                                ? 'bg-green-500 shadow-[0_0_0_2px_#bbf7d0,0_0_12px_rgba(34,197,94,0.5)] animate-pulse'
                                : 'bg-orange-400 shadow-[0_0_0_2px_#fed7aa]'
                            }`}
                          />

                        <div className="mb-4">
                          <h4 className="text-2xl font-bold text-gray-800 mb-1">{role.post}</h4>
                          <p className="text-sm text-gray-600 font-medium mb-1">
                            {role.start} - {role.end} · {role.location.match(/\((.*?)\)/)?.[1] || 'On-site'}
                          </p>
                          {role.department && (
                            <p className="text-sm text-orange-500 font-semibold mt-2">
                              {role.department}
                            </p>
                          )}
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-2">
                          {role.description}
                        </p>

                        {role.additionalInfo && (
                          <p className="text-sm text-gray-600 leading-relaxed mb-5">
                            {role.additionalInfo}
                          </p>
                        )}

                        {/* Projects */}
                        {role.projects && role.projects.length > 0 && (
                          <div className="space-y-4 mt-5">
                            {role.projects.map((project, projIndex) => (
                              <div
                                key={projIndex}
                                className="bg-gray-50 border-l-[3px] border-orange-400 rounded-md p-4"
                              >
                                <h5 className="text-base font-bold text-gray-800 mb-2">
                                  {project.title}
                                </h5>
                                <ul className="space-y-1">
                                  {project.bullets.map((bullet, bulletIndex) => (
                                    <li
                                      key={bulletIndex}
                                      className="text-sm text-gray-600 leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-orange-400 before:font-semibold"
                                    >
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>

                                {/* Tech Stack */}
                                {project.techStack && project.techStack.length > 0 && (
                                  <div className="pt-3 border-t border-gray-200 mt-4">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                                      Tech Stack
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {project.techStack.map((tech, techIndex) => (
                                        <span
                                          key={techIndex}
                                          className="px-2 py-1 bg-amber-100 text-amber-900 text-xs font-medium rounded"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          {/* INTERNSHIP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
            {internshipExperiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.post}`}
                className="bg-white border-2 border-orange-400 rounded-xl p-6 relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-orange-500"
              >
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-400" />

                <h4 className="text-xl font-bold text-gray-800 mb-1 mt-2">{exp.post}</h4>
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-base font-semibold text-orange-500">{exp.company}</p>
                  {exp.website && (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      aria-label="Visit website"
                    >
                      <IconWorldShare className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-1">📅 {exp.start} - {exp.end}</p>
                <p className="text-sm text-gray-600 mb-4">📍 {exp.location}</p>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-amber-100 text-amber-900 text-xs font-medium rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
