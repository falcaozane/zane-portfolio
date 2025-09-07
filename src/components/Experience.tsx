import React from 'react'
import { experiences } from '@/data/work-exp'
import { IconCertificate, IconWorldShare } from '@tabler/icons-react'

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-orange-500 mb-12 relative pb-2">
                <span className="relative z-10">
                    WORK EXPERIENCE
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-82 h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></span>
            </span>
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {experiences.map((experience) => (
                <div
                    className="duration-200 card-compact shadow-md card hover:shadow-xl text-amber-600 border-2 border-orange-400 hover:border-orange-300 bg-white"
                    key={`${experience.company}-${experience.post}`}
                >
                    <div className="card-body">
                    {/* <img
                        className="rounded-full w-20 h-20 mb-2"
                        src={experience.image}
                        alt={experience.company}
                    /> */}
                    <h2 className="card-title">{experience.post}</h2>
                    <h3 className="flex items-center gap-1">
                        {experience.company}
                        
                        <a
                            className="text-secondary"
                            target="blank"
                            href={experience.website}
                        >
                            <IconWorldShare className="text-orange-500 hover:text-amber-400" size={20} />
                        </a>
                    </h3>
                    <h4 className="text-sm italic">{experience.type}</h4>
                    <p className="text-sm">
                        {experience.start} - {experience.end}
                    </p>
                    <div className="justify-end card-actions">
                        {experience.letter &&
                        
                            <a target="blank" href={experience.letter}>
                            <button className="btn btn-circle btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-amber-500">
                                <IconCertificate />
                            </button>
                            </a>
                        }
                        {/* {experience.ongoing && (
                        <span className="badge badge-primary">Ongoing</span>
                        )} */}
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experience
