import React from 'react'

import { socials } from "@/data/socials";


const Socials = () => {
  return (
    <div className=''>
      <ul className="border border-orange-500 fixed backdrop-blur-xs bg-white/10 right-0 z-50 -translate-y-1/2 shadow-xl top-3/4 menu rounded-l-box px-2 gap-2">
      {socials.map((social) => (
        <li
          key={social.label}
          className="text-amber-600 bg-white hover:bg-orange-500 hover:text-white rounded-full py-2"
        >
            <a target="blank" href={social.href}>
              {social.icon}
            </a>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Socials
