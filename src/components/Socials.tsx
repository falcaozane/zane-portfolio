'use client'

import React, { useEffect, useState } from 'react'

import { socials } from "@/data/socials";


const Socials = () => {
  const [isMounted, setIsMounted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // fade OUT
          setIsVisible(false);

          setTimeout(() => {
            setIsMounted(false); // remove AFTER fade
          }, 300);
        } else {
          // mount first
          setIsMounted(true);

          // small delay so DOM renders before fade in
          setTimeout(() => {
            setIsVisible(true); // fade IN
          }, 50);
        }
      });
    });

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  if (!isMounted) return null;

  return (
    <ul
      className={`border border-orange-500 fixed backdrop-blur-xs bg-white/10 right-0 z-50 -translate-y-1/2 shadow-xl top-3/4 menu rounded-l-box px-2 gap-2 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {socials
        .filter((social) => social.label !== "Instagram" && social.label !== "Hugging Face" && social.label !== "Spotify" && social.label !== "X (I prefer calling it Twitter, elon musk)")
        .map((social, index) => (
          <li
            key={social.label}
            style={{
              transitionDelay: `${index * 80}ms`,
            }}
            className={`text-amber-600 bg-white hover:bg-orange-500 hover:text-white rounded-full py-2
            transform transition-all duration-300 ease-in-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
            `}
          >
            <a target="blank" href={social.href}>
              {social.icon}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default Socials
