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
  slug: 'fintel-ai',
  post: 'Fintel A.I: Agentic Financial Intelligence for Indian Markets',
  website: 'https://fintel-agents.vercel.app/',
  demoLink: 'https://www.youtube.com/watch?v=7hOBj5KySk4&feature=youtu.be',
  type: 'Mumbai Hacks Hackathon Project',
  date: 'Sept 2025 - Nov 2025',
  technologies: [
    'Python',
    'Kotlin',
    'FastAPI',
    'FastMCP',
    'Next.js',
    'OpenAI',
    'SwarmsAPI',
    'Gemini',
    'Hugging Face',
    'Android Room',
    'Yahoo Finance',
    'n8n',
    'Tailwind CSS',
    'ShadCN',
    'Streamlit',
  ],
    detailedDescription:
      'Fintel is an AI-powered financial intelligence mobile app designed to eliminate manual expense tracking by automatically reading UPI transaction SMS notifications in real-time. Utilizing a team of specialized agents, it classifies transactions, analyzes cashflow, and optimizes budgets while keeping data encrypted locally via SQLCipher. The platform extends into an investment engine for the Indian market, unifying portfolio analysis, mutual fund evaluation, and SEBI-aware risk management through an MCP-driven agentic tool selection layer. \n \n https://www.canva.com/design/DAG5_nGzA9E/xjAos89R6OImdoqZItYeEg/view',
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
      'Utilised machine learning techniques for portfolio optimization, considering risk tolerance and historical data. Built a user-friendly interface (playground) for easy portfolio construction, rebalancing and visualization.\nPost Hackathon, I have kept updating the project with new features and optimizations.',
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
  type: 'Blockchain Project (Fr. CRCE)',
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
  },
  {
    slug: 'skfolio version of Portfolio allocation engine',
    post: 'Skfolio: AI-Powered Stock Portfolio Allocation Engine',
    website: 'https://lucifer7210-portfolio-skfolio.hf.space/',
    type: 'TIAA RETIRE-AI-THON WINNER PROJECT updated version',
    date: 'Nov 2025',
    technologies: [
      'Python',
      'Streamlit',
      'Skfolio',
      'Plotly',
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'Yahoo Finance',
      'Hugging Face',
    ],
    detailedDescription: 'Advanced retirement portfolio optimizer leveraging skfolio\'s sophisticated ML algorithms for multi-objective portfolio optimization. Features 8+ optimization strategies (Mean-Risk, HRP, NCO, DRO CVaR, Stacking, Benchmark Tracking), efficient frontier visualization with interactive parameter tuning, walk-forward backtesting for out-of-sample validation, target-date/glide-path planning with automatic rebalancing, risk metrics (Sharpe, Sortino, Calmar ratios, CVaR), portfolio clustering analysis, and Monte Carlo simulations. Supports Indian NSE stocks with customizable constraints and risk tolerance-based allocation generation. Includes comprehensive retirement projection and goal achievement analysis.',
    demoLink: 'https://lucifer7210-portfolio-skfolio.hf.space/'
  },
  {
    slug: 'stocks-sentiment-analysis',
    post: 'Real Time Stock Sentiment Analysis',
    website: 'https://stockmarket-sentiment-analysis-zane.streamlit.app/',
    type: 'Fintech Project',
    date: 'Jan 2025',
    technologies: [
      'Python',
      'Streamlit',
      'Pandas',
      'BeautifulSoup',
      'Plotly',
      'NLTK (VADER)',
      'yfinance',
      'LXML',
    ],
    detailedDescription: 'Built an interactive Streamlit application for real-time stock sentiment analysis. Fetches financial news from Finviz using BeautifulSoup, analyzes sentiment using NLTK\'s VADER analyzer on headlines and descriptions, visualizes trends with Plotly, and displays historical stock price data using yfinance. Features multi-stock selection, customizable update intervals, and detailed sentiment metrics with interactive charts.',
  },
  {
    slug: 'technical-analysis-dashboard',
    post: 'Real-Time Technical Analysis Dashboard',
    website: 'https://technical-analysis-zane.streamlit.app/',
    type: 'Fintech Project',
    date: 'Jul 2025',
    technologies: [
      'Python',
      'Streamlit',
      'Plotly',
      'Pandas',
      'NumPy',
      'yfinance',
      'TA-Lib',
    ],
    detailedDescription: 'Interactive real-time stock technical analysis dashboard with advanced data processing capabilities. Supports multiple chart types (Candlestick, Line), multiple timeframes (1D, 1WK, 1MO, 1Y, Max), and technical indicators (SMA 20, EMA 20). Features robust data handling with MultiIndex column flattening, timezone-aware datetime processing, and error recovery. Displays comprehensive metrics (OHLCV), real-time prices for 45+ Indian NSE stocks, historical data tables, indicator analysis with comparative explanations. Uses Plotly for interactive visualizations and automated data validation to ensure data integrity.',
  },

]