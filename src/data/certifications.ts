


export type certifications = {

  slug: string // <-- ADDED: for the URL (e.g., /Projects/capgemini-analyst)

  company: string

  website: string

  post: string

  type: string

  start: string

  end: string

  letter?: string // Optional

  image?: string // Optional

  technologies: string[] // <-- RENAMED: from 'skills'

  detailedDescription: string // <-- ADDED: for the detail page

}



// 2. Your updated projects list

export const projects: certifications[] = [

  {

    slug: 'capgemini-analyst-a4', // Added slug

    company: 'Capgemini India',

    website: 'https://www.capgemini.com/in-en/',

    post: 'Analyst A4',

    type: 'Full-Time',

    start: 'September 2025',

    end: 'Present',

    // letter: "https://..."

    technologies: [ // Renamed from 'skills'

      'Python',

      'FastAPI',

      'Flask',

      'Next.js',

      'React.js',

      'Langchain',

      'Docker',

      'Linux',

    ],

    detailedDescription: // Added description

      'As an Analyst at Capgemini, my role involves [Explain your role here... e.g., developing and maintaining backend services using Python and FastAPI, collaborating with front-end teams on Next.js applications, and deploying solutions using Docker...]',

  },

  {

    slug: 'arcon-qa-intern', // Added slug

    company: 'Arcon',

    website: 'https://arconnet.com/',

    post: 'Quality Assurance Intern',

    type: 'Internship',

    start: 'February 2025',

    end: 'August 2025',

    letter:

      'https://drive.google.com/file/d/1707kOKDgg7-anMMdfSwSS1Svg9oUeHD7/view?usp=sharing',

    technologies: ['Next.js', 'SQLite', 'Pocketbase', 'Recharts'], // Renamed from 'skills'

    detailedDescription: // Added description

      'During my internship at Arcon, I was responsible for [Explain your role here... e.g., testing and ensuring the quality of web applications, developing test cases, and working with Next.js and Pocketbase to identify and fix bugs...]',

  },

  {

    slug: 'ignitus-blockchain-intern', // Added slug

    company: 'Ignitus Network',

    image:

      'https://media.licdn.com/dms/image/C4D0BAQFwq94aaHO6Mw/company-logo_200_200/0/1657880937495?e=1695254400&v=beta&t=uc1-RlDWy8O5JaJtK5zsws3yJvgW3kJWvdlDn2hy_YE',

    website: '',

    post: 'Blockchain Developer Intern',

    type: 'Internship',

    start: 'June 2024',

    end: 'September 2024',

    letter:

      'https://drive.google.com/file/d/10WHIq1OnUl244AFBnENK9wsl5oCDd9YL/view?usp=sharing',

    technologies: [ // Renamed from 'skills'

      'Flutter',

      'Android',

      'iOS',

      'Firebase',

      'REST APIs',

      'UI/UX',

      'Python',

      'Django',

    ],

    detailedDescription: // Added description

      'My work as a Blockchain Developer Intern involved [Explain your role here... e.g., developing mobile applications with Flutter, integrating with Firebase, and learning about blockchain concepts...]',

  },

  {

    slug: 'digihelic-web-intern', // Added slug

    company: 'DigiHelic Solutions Pvt. Ltd.',

    image:

      'https://skinzy.in/static/media/logo-transparent-background.8d754bd6e489edf2f14d.png',

    website: 'https://digihelic.com/',

    post: 'Web Developer Intern',

    type: 'Internship',

    start: 'July 2022',

    end: 'November 2022',

    letter:

      'https://drive.google.com/file/d/1cBWE5BZ1Kq7XbPw9_NxefVjEgYs2BWlD/view?usp=sharing',

    technologies: [ // Renamed from 'skills'

      'Mentoring',

      'Management',

      'Python',

      'Communication',

      'Flutter',

      'Public Speaking',

    ],

    detailedDescription: // Added description

      'At DigiHelic, I worked as a Web Developer Intern where I [Explain your role here... e.g., assisted in the development of web projects, learned about project management, and developed communication skills...]',

  },

]