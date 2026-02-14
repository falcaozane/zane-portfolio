'use client'

import React, { useEffect, useState } from 'react'

import { socials } from "@/data/socials";


const Socials = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Find the footer element
    const footer = document.querySelector('footer');
    if (!footer) return;

    // Create intersection observer to detect when footer enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Footer is visible, start fade out animation
            setIsAnimatingOut(true);
            // Wait for animation to complete before unmounting
            setTimeout(() => setShouldRender(false), 300);
          } else {
            // Footer is not visible, fade back in
            setShouldRender(true);
            setIsAnimatingOut(false);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className=''>
      {shouldRender && (
        <ul 
          className={`border border-orange-500 fixed backdrop-blur-xs bg-white/10 right-0 z-50 -translate-y-1/2 shadow-xl top-3/4 menu rounded-l-box px-2 gap-2 transition-opacity duration-300 ${
            isAnimatingOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
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
      )}
    </div>
  )
}

export default Socials
