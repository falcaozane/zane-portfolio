'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

import FZ from '../../public/fz.png';
import { navItems, themes } from '@/data/site';
import ThemeModeToggle from '@/components/theme-mode-toggle';

function Header() {

  // Close mobile drawer after clicking a link
  const closeDrawer = () => {
    const drawerToggle = document.getElementById('my-drawer-3') as HTMLInputElement;
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full md:px-5">
          
          {/* Logo */}
          <div className="mx-2 flex-1 md:px-2">
            <Link to="about" smooth duration={500} className="cursor-pointer">
              <Image src={FZ} alt="Logo" className="h-10 w-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-none lg:flex items-center gap-4">
            <ul className="menu menu-horizontal text-orange-400 font-medium">
              {navItems.map((item) => (
                <li key={item.to} className="hover:bg-slate-50 rounded-md">
                  <Link
                    to={item.to}
                    spy
                    smooth
                    offset={-80}
                    duration={500}
                    activeClass="text-orange-600 bg-orange-50"
                    className="cursor-pointer transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Switcher */}
            <ThemeModeToggle />
          </div>

          {/* Mobile Menu + Theme */}
          <div className="flex-none lg:hidden flex items-center gap-2">
            
            {/* Theme Switcher */}
            <ThemeModeToggle />

            {/* Hamburger */}
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-ghost btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 stroke-current bg-amber-600 rounded-sm text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />

        <ul className="menu bg-white font-medium min-h-full w-80 text-orange-400 pt-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  spy
                  smooth
                  offset={-80}
                  duration={500}
                  activeClass="text-orange-600 bg-orange-50"
                  className="cursor-pointer flex items-center"
                  onClick={closeDrawer}
                >
                  <Icon className="mr-2 text-orange-400" size={20} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;