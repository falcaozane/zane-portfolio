import React from 'react'
import { education } from '@/data/education'
import { IconCertificate, IconWorldShare } from '@tabler/icons-react'

const Education = () => {
  return (
    <section id="education" className="py-10 bg-gray-100 px-8">
        <div className="max-w-7xl mx-auto">
            <h3 className=" text-2xl lg:text-4xl font-extrabold text-orange-500 mb-12 relative pb-2 inline-block">
                <span className="relative inline-block pb-1">
                    Education
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></span>
                </span>
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {education.map((degree) => (
                <div
                    className="duration-200 card-compact shadow-md card hover:shadow-xl text-amber-600 border-2 border-orange-400 hover:border-orange-300 bg-white"
                    key={`${degree.company}-${degree.post}`}
                >
                    <div className="card-body">
                    {/* <img
                        className="rounded-full w-20 h-20 mb-2"
                        src={project.image}
                        alt={project.company}
                    /> */}
                    <h2 className="card-title">{degree.post}</h2>
                    <h3 className="flex items-center gap-1">
                        {degree.institue}
                        
                        <a
                            className="text-secondary"
                            target="blank"
                            href={degree.website}
                        >
                            <IconWorldShare size={20} />
                        </a>
                    </h3>
                    <h4 className="text-sm italic">{degree.type}</h4>
                    <p className="text-sm">
                        {degree.start} - {degree.end}
                    </p>
                    <div className="justify-end card-actions">
                        {degree.letter &&
                        
                            <a target="blank" href={degree.letter}>
                            <button className="btn btn-circle btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-amber-500">
                                <IconCertificate />
                            </button>
                            </a>
                        }
                        {/* {project.ongoing && (
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

export default Education
