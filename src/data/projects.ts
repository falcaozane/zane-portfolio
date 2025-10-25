// 1. Define the Project type to match your resume's project section
export type Project = {
  slug: string // For the URL, e.g., /Projects/legal-document-assistant
  post: string // The title of the project
  website?: string // The live URL of the project
  type: string // e.g., "Hackathon Project", "Mini Project"
  date: string // The date or date range of the project
  technologies: string[]
  detailedDescription: string
  demoLink?: string // For video demos (like your Google Drive link)
}

// 2. Your updated projects list, based on the "Projects" section of your resume
export const projects: Project[] = [
  {
    slug: 'legal-document-assistant',
    post: 'A.I powered Legal Document Assistant',
    type: 'Smart India Hackathon 23 (Group of 6)',
    date: 'Dec 2023',
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'MongoDB',
      'Langchain.js',
      'OpenAI API',
      'Pinecone',
      'Python',
      'Firebase',
      'Vercel',
      'Razorpay',
      'Beautiful Soup',
    ],
    detailedDescription:
      'Developed a multi-functional legal AI assistant for document creation, simplification & IPC chatbot.',
    // No website or demo link provided in the resume for this one
  },
  {
    slug: 'stock-allocation-engine',
    post: 'A.I based Stock Allocation Engine',
    website: 'https://nse-stocks-portfolio-allocation.streamlit.app/',
    type: 'TIAA RETIRE-AI-THON PROJECT', // Inferred from context
    date: 'May 2024',
    technologies: [
      'Python',
      'Streamlit',
      'Plotly',
      'Matplotlib',
      'NumPy',
      'Yahoo Finance',
      'Pandas',
      'PyPortfolioOpt',
      'Flask',
    ],
    detailedDescription:
      'Utilised machine learning techniques for portfolio optimization, considering risk tolerance and historical data. Built a user-friendly interface (playground) for easy portfolio construction, rebalancing and visualization.',
  },
  {
    slug: 'robo-hr',
    post: 'Robo HR',
    type: '3rd year mini project (Group of 3)',
    date: 'Aug 2023 - Apr 2024',
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Langchain.js',
      'OpenAI GPT 3.5',
      'Pinecone',
      'Python',
      'SpaCy',
      'NLP',
      'Streamlit',
      'Scikit-Learn',
      'PyMuPDF',
    ],
    detailedDescription:
      'Built AI-powered HR automation for resume parsing using OpenAI & NER models.',
  },
  {
    slug: 'doccrypt',
    post: 'DocCrypt : AI-powered Secure Document Management Platform',
    website: 'https://doc-crypt-aptos.vercel.app/',
    type: 'Unfold 2k24 Blockchain Hackathon', // Inferred from context
    date: 'Dec 2024',
    technologies: [
      'React',
      'Tailwind CSS',
      'ShadCN',
      'RadixUI',
      'Aptos',
      'Pinata',
      'IPFS',
      'Langchain',
      'Gemini( Google Gen A.I.)',
      'Smart Contracts ( Move )',
    ],
    detailedDescription:
      'Developed a decentralised, AI-powered platform for secure document storage, categorisation, digital signature, and natural language-based document interaction.',
    demoLink:
      'https://drive.google.com/file/d/1KnNaGDdDy1yXmMJITeSJ6fLnQact86oo/view',
  },
]