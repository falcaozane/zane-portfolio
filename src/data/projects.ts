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
    demoLink:
      'https://drive.google.com/file/d/1joRqaG6UpNXENyAP-gnrHsGi2XPlJIpC/view',
  },
  {
    slug: 'stock-allocation-engine',
    post: 'A.I based Stock Allocation Engine',
    website: 'https://nse-stocks-portfolio-allocation.streamlit.app/',
    type: 'TIAA RETIRE-AI-THON WINNER PROJECT', // Inferred from context
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
    demoLink:
      'https://www.linkedin.com/feed/update/urn:li:activity:7220024802537795584?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_multiple_media_viewer_details_modal%3Bj5bXQ%2Fc4TMqjFuaFwWv7Hg%3D%3D',
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
      'A.I Resume Parsing & Candidate Ranking System. Built AI-powered HR automation for resume parsing using OpenAI & NER models. ',
  },
  {
  slug: 'foodcheck-ai',
  post: 'FoodCheckAI: Reducing Food Waste Through Smart Tracking & AI',
  website: 'https://devfolio.co/projects/foodcheckai-3d89',
  type: 'Technovate2.0 S.P.I.T Hackathon (Group of 6)', // Inferred from context
  date: 'Jan 2025',
  technologies: [
    'Django',
    'Kotlin',
    'OpenCV',
    'WebXR',
    'Twilio',
    'Gemini 1.5 Flash',
    'Groq',
    'CNN (Color Detection)',
    'OCR',
  ],
  detailedDescription:
    'India is the second-largest food producer, yet wastes 20% of its food annually. FoodCheckAI is a "Phygital" solution that tracks household food quality and connects surplus restaurant food with NGOs to minimize wastage.',
  demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7262698273885323266/',
  // keyFeatures: [
  //   'Voice Engine: Hands-free food logging via natural language.',
  //   'Real-time Fridge Monitoring: CNN-based quality and expiry tracking.',
  //   'AR AI Chef: Step-by-step 3D guided recipes using expiring items.',
  //   'NGO Distribution: Route-optimized donation platform for surplus food.',
  // ],
  // challenges: [
  //   'Implementing real-time tracking of food quality using CNN and color detection.',
  //   'Developing a responsive and low-latency Web AR Chef AI.',
  //   'Optimizing complex delivery routes for NGO-based food distribution.',
  // ],
  },
  {
  slug: 'bhagavad-gita-gpt',
  post: 'Bhagavad Gita GPT: AI-Powered Spiritual RAG Assistant',
  website: 'https://lucifer7210-sankrit-llm-bhagvad-gita.hf.space/',
  type: 'College Project (Fr. CRCE)',
  date: 'Jan 2025 – Feb 2025',
  technologies: [
    'Langchain',
    'ChromaDB',
    'Hugging Face',
    'LLMs',
    'Vector Databases',
    'Generative AI',
    'Git',
  ],
  detailedDescription:
    'Developed a Retrieval-Augmented Generation (RAG) application focused on the Bhagavad Gita, utilizing a comprehensive dataset encompassing all chapters in Sanskrit, English, and Hindi. The system enables semantic search and conversational interaction with ancient scriptures, providing contextually grounded responses.',
  demoLink: 'https://drive.google.com/file/d/1LLQY_KapLlBaTtiYnwqocXyZJrQuhJGi/view',
  // keyFeatures: [
  //   'Multilingual Dataset: Full support for Sanskrit, English, and Hindi text translations.',
  //   'RAG Implementation: Utilizes Langchain and ChromaDB for efficient document retrieval and context window management.',
  //   'Vector Database: High-dimensional embeddings stored in ChromaDB for fast, semantic similarity searches.',
  //   'Hugging Face Deployment: Hosted as an interactive space for public access.',
  // ],
  // challenges: [
  //   'Ensuring semantic alignment between Sanskrit transliterations and modern Hindi/English translations.',
  //   'Optimizing the vector store retrieval to ensure verse context is preserved during generation.',
  // ],
  },
  {
  slug: 'construction-material-tracking',
  post: 'Construction Material Tracking on Blockchain',
  website: 'https://construction-material-tracking-dapp.vercel.app/',
  type: 'Blockchain Project (Fr. CRCE) for Sem 7',
  date: 'Sep 2024 – Oct 2024',
  technologies: [
    'Solidity',
    'Ethereum',
    'Ethers.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'ShadCN',
    'MetaMask',
    'Git',
  ],
  demoLink: 'https://www.linkedin.com/in/zane-falcao-014a41247/overlay/Project/1233871153/treasury/?profileId=ACoAAD0zMtABUGsox_1EgbtjnbpKhK1MYC9MGiQ',
  detailedDescription:
    'Developed a decentralized application (dApp) designed to bring transparency and traceability to the construction material supply chain. Built with Solidity smart contracts on the Ethereum blockchain, the platform enables real-time tracking of material lifecycles—from supplier to construction site—while ensuring data integrity and secure interactions via MetaMask and Ethers.js.',
  },
  {
  slug: 'dzillow',
  post: 'Dzillow: Decentralized Real Estate Marketplace',
  website: 'https://realestate-marketplace-zane.vercel.app/',
  type: 'Blockchain Project',
  date: 'Jun 2024',
  technologies: [
    'Solidity',
    'Core Chain',
    'IPFS',
    'Next.js',
    'Ethereum',
    'Tailwind CSS',
    'Blockchain',
    'Git',
  ],
  detailedDescription:
    'Developed Dzillow, a decentralized real-estate marketplace built on the Core Chain blockchain. The platform utilizes Solidity for smart contract development and IPFS for decentralized storage of property metadata, ensuring a transparent, secure, and tamper-proof environment for real estate listings and transactions.',
  }
  
]