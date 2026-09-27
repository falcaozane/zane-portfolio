export type Experience = {
  company: string;
  website?: string;
  post: string;
  type: 'Full-Time' | 'Internship';
  start: string;
  end: string;
  location: string;
  skills?: string[];
  description: string;
  letter?: string;

  // For detailed role information (Capgemini)
  department?: string;
  additionalInfo?: string;
  projects?: {
    title: string;
    bullets: string[];
    techStack?: string[];
  }[];
};

export const experiences: Experience[] = [
  // Applied A.I Engineer - Current Role
  {
    company: "Capgemini India",
    website: "https://www.capgemini.com/in-en/",
    post: "Applied A.I Engineer",
    type: "Full-Time",
    start: "Jul 2026",
    end: "Present",
    location: "Mumbai, Maharashtra, India (Hybrid)",
    department: "AppsNA QET-COE (Quality Engineering & Testing Centre of Excellence)",
    description: "Tinkering with AI for development of Testing and Quality Assurance usecases. Integration of Anthropic LLMs (sonnet-5, haiku-4.5) from Azure Microsoft Foundry in Quality Engineering Platform (QEP).",
    additionalInfo: "Experimenting with Claude Agents SDK, Playwright MCP server, Atlassian MCP server.",
    skills: ["Claude Agents SDK", "Playwright MCP", "Atlassian MCP", "Anthropic LLMs", "Microsoft Foundry", "QEP Platform", "Gen A.I."],
  },

  // Software Engineer - Previous Role at Capgemini
  {
    company: "Capgemini India",
    website: "https://www.capgemini.com/in-en/",
    post: "Software Engineer",
    type: "Full-Time",
    start: "Sep 2025",
    end: "Jul 2026",
    location: "Mumbai, Maharashtra, India (Hybrid)",
    department: "BU: AppsNA (TES-INNA-INDDOM-INDDOM_INDDOM_IN)",
    description: "Working as a Software Engineer with a focus on test automation, functional QA for enterprise healthcare applications, and developing internal AI utilities to automate manual workflows.",
    skills: ["Automation Testing", "Java", "Selenium", "Playwright", "JIRA", "Qtest", "Confluence", "Excel", "STLC", "Postman", "Azure", "Gen A.I."],
    projects: [
      {
        title: "Client Project — Healthcare & Life Sciences (Abbvie Inc.)",
        bullets: [
          "Conducted functional testing and User Acceptance Testing (UAT) on Salesforce-based enterprise quality and compliance applications",
          "Tested and validated internal GenAI utilities used by the engineering team to automatically generate test cases, test plans, and requirement revisions",
          "Tested and verified the extraction accuracy of an AI/ML application used for automated data extraction from unstructured medical documentation"
        ]
      },
      {
        title: "GreenTraceIT  —  Internal Tools & Contributions (Sustainability COE)",
        bullets: [
          "Developed an internal web-grounding agent built using Python, Gemini, and Streamlit, deployed on GCP using Cloud Run with Cloud SQL (MySQL)",
          "Automated the manual collection of Scope 3.1 carbon emissions (PCF) data from vendor websites and PDFs using multimodal AI capabilities, EasyOCR, Docling and PyMuPDF",
          "Optimized the research workflow, changing a manual 5-minute per-model task into a batch process handling 8-10 models simultaneously",
          "The POC / MVP was later scaled to multiple IT hardware for the client Imperial Brands UK.",
          "Contributed project ideas and implementation support on the company's internal innovation and crowdsourcing portal ( Wesynergize )"
        ],
        techStack: ["Python", "Gemini API", "Streamlit", "Cloud SQL", "GCP", "EasyOCR", "Docling", "PyMuPDF", "pdfminer"]
      }
    ]
  },

  // Arcon Internship
  {
    company: "Arcon",
    website: "https://arconnet.com/",
    post: "Quality Assurance Intern",
    type: "Internship",
    start: "February 2025",
    end: "July 2025",
    letter: "",
    skills: [
      "Functional Testing", "JIRA", "Excel", "STLC", "CLI", "Bug Reporting", "SSO", "Database Connectors", "Information Security"
    ],
    description: "Performed Functional Testing on Converged Identity, focusing on Bug Reporting & Integration.",
    location: "Andheri, Mumbai, India",
  },

  // Ignitus Networks Internship
  {
    company: "Ignitus Networks",
    website: "https://ignitusnetworks.com/",
    post: "Blockchain Developer Intern",
    type: "Internship",
    start: "June 2024",
    end: "September 2024",
    letter: "",
    skills: [
      "Next.js", "React.js", "Tailwind CSS", "Solidity", "Remix IDE", "Hardhat", "Ethers.js", "Web3.js", "IPFS", "Openzeppelin"
    ],
    description: "Developed decentralized applications (dApps) for EVM-compatible blockchains, including Ethereum, Celo, XDC, and Fractal.",
    location: "Remote",
  },

  // DigiHelic Solutions Internship
  {
    company: "DigiHelic Solutions Pvt. Ltd.",
    website: "https://digihelic.com/",
    post: "Web Developer Intern",
    type: "Internship",
    start: "December 2023",
    end: "March 2024",
    letter: "",
    skills: [
      "Next.js", "React", "Tailwind CSS", "MongoDB", "Clerk Auth"
    ],
    description: "Converted Figma designs to production-ready UIs for an Immigration Portal project.",
    location: "Remote",
  }
];
