import React from 'react'
import Image from "next/image";
import { IconBriefcase, IconFileCertificate, IconFileDescription, IconHome, IconSchool, IconTools, IconUsersGroup, IconTrophy } from "@tabler/icons-react";
import FZ from "../../public/fz.png";

function Header() {
  return (
    <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar w-full bg-white px-5">
            <div className="mx-2 flex-1 px-3">
                <Image src={FZ} alt="Logo" className="h-10 w-12" />
            </div>
            <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal text-orange-400 font-medium">
                {/* Navbar menu content here */}
                    <li className='hover:bg-slate-50 rounded-md'><a>Home</a></li>
                    <li className='hover:bg-slate-50 rounded-md'><a>Skills</a></li>
                    <li className='hover:bg-slate-50 rounded-md'><a>Projects</a></li>
                    <li className='hover:bg-slate-50 rounded-md'><a>Experience</a></li>
                    <li className='hover:bg-slate-50 rounded-md'><a>Achievements</a></li>
                    <li className='hover:bg-slate-50 rounded-md'><a>Position of Responsibility</a></li>
                    <li className='hover:bg-slate-50 rounded-md'><a>Certifications</a></li>
                    <li className='hover:bg-slate-50 rounded-md'><a>Education</a></li>
                </ul>
            </div>
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost btn-square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current bg-amber-600 rounded-sm text-white"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
                </label>
            </div>
            </div>
        </div>
        <div className="drawer-side bg-transparent">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-white fond-medium min-h-full w-80 text-orange-400">
            {/* Sidebar content here */}
                <li><a><IconHome className="mr-2 text-orange-400" /> Home</a></li>
                <li><a><IconTools className="mr-2 text-orange-400" /> Skills</a></li>
                <li><a><IconBriefcase className="mr-2 text-orange-400" /> Projects</a></li>
                <li><a><IconFileDescription className="mr-2 text-orange-400" /> Experience</a></li>
                <li><a><IconTrophy className="mr-2 text-orange-400" /> Achievements</a></li>
                <li><a><IconUsersGroup className="mr-2 text-orange-400" /> Position of Responsibility</a></li>
                <li><a><IconFileCertificate className="mr-2 text-orange-400" /> Certifications</a></li>
                <li><a><IconSchool className="mr-2 text-orange-400" /> Education</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header

