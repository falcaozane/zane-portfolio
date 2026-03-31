
// src/data/certifications.ts

export type Certification = {
  slug: string;
  company: string;
  website?: string;
  post: string;
  type: 'Certification';
  start: string;
  end?: string;
  letter?: string;
  image?: string;               // remote URL
  credentialId?: string;
  technologies: string[];
  detailedDescription: string;
};

export const certifications: Certification[] = [
  {
  slug: 'google-cloud-associate-cloud-engineer-ace',
  company: 'Google Cloud',
  website: 'https://cloud.google.com/learn/certification/cloud-engineer',
  post: 'Google Cloud Certified: Associate Cloud Engineer',
  type: 'Certification',
  start: 'Mar 2026',
  end: 'Mar 2029',
  letter: 'https://www.credly.com/badges/6a143ccf-81d8-463b-ac79-23612e064369/public_url', // add your credential URL if available
  image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/GCP-1.png',
  credentialId: 'd55c6773d2ea41b790ed4780ae15fc25',
  technologies: [
    'Google Cloud Platform (GCP)',
    'Compute Engine',
    'Google Kubernetes Engine (GKE)',
    'Cloud Storage',
    'Identity and Access Management (IAM)',
    'Networking',
    'Pub/Sub',
    'Cloud SQL',
    'Infrastructure as Code (IaC)',
    'Cloud Security'
  ],
  detailedDescription:
    'Validates the ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud. Covers core concepts such as compute, storage, networking, IAM, and infrastructure management using the Google Cloud Console and CLI. Focuses on real-world cloud operations including configuring environments, ensuring reliability, and maintaining scalable cloud solutions.'
  },
  {
  slug: 'generative-ai-llms-deeplearningai',
  company: 'DeepLearning.AI x AWS (Coursera)',
  website: 'https://www.coursera.org/learn/generative-ai-with-llms',
  post: 'Generative AI with Large Language Models (LLMs)',
  type: 'Certification',
  start: 'Feb 2026',
  end: 'No expiry',
  credentialId: 'JX2S1FG28U50',
  letter: 'https://www.coursera.org/account/accomplishments/verify/JX2S1FG28U50',
  image: 'https://coursera-university-assets.s3.amazonaws.com/b4/5cb90bb92f420b99bf323a0356f451/Icon.png',
  technologies: [
    'Generative AI',
    'Large Language Models (LLMs)',
    'Transformers',
    'Prompt Engineering',
    'Fine-tuning (PEFT, LoRA)',
    'RLHF (Reinforcement Learning from Human Feedback)',
    'Model Evaluation',
    'LLM Deployment',
    'AWS AI/ML Services'
  ],
    detailedDescription:
    'Completed an intermediate-level certification by DeepLearning.AI in collaboration with AWS, focused on building practical understanding of Generative AI and Large Language Models (LLMs). Covered transformer architecture, prompt engineering, fine-tuning techniques (including LoRA and PEFT), reinforcement learning with human feedback (RLHF), and real-world LLM application deployment. Gained hands-on experience with model evaluation, scalability challenges, and production-ready AI workflows.'
  },
  {
    slug: 'microsoft-azure-ai-fundamentals-ai-900',
    company: 'Microsoft',
    website: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/',
    post: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
    type: 'Certification',
    start: 'Jan 2026',
    end: 'No expiry',
    letter:
      'https://learn.microsoft.com/en-us/users/zanefalcao-2780/credentials/9b1b2e160238f00f',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    credentialId: '9B1B2E160238F00F',
    technologies: [
      'AI Fundamentals',
      'Machine Learning',
      'Azure AI Services',
      'Azure Machine Learning',
      'Responsible AI'
    ],
    detailedDescription:
      'Validates foundational knowledge of AI and ML concepts, responsible AI, and core Azure AI services such as Vision, NLP, and decision-making tools.'
  },
  {
    slug: 'microsoft-azure-data-fundamentals-dp-900',
    company: 'Microsoft',
    website: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/',
    post: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
    type: 'Certification',
    start: 'Jan 2026',
    end: 'No expiry',
    letter:
      'https://learn.microsoft.com/en-us/users/zanefalcao-2780/credentials/8c0cc8b13330aaba',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    credentialId: '8C0CC8B13330AABA',
    technologies: [
      'Data Fundamentals',
      'Azure SQL',
      'Azure Cosmos DB',
      'Data Warehousing',
      'Analytics',
      'ETL & Data Pipelines'
    ],
    detailedDescription:
      'Covers foundational data concepts, relational and non-relational data, analytics workloads, and core data services within the Azure ecosystem.'
  },
  {
    slug: 'microsoft-azure-fundamentals-az-900',
    company: 'Microsoft',
    website: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
    post: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    type: 'Certification',
    start: 'Dec 2025',
    end: 'No expiry',
    letter:
      'https://learn.microsoft.com/en-gb/users/zanefalcao-2780/credentials/f6a35014a99ebcd8?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    credentialId: 'F6A35014A99EBCD8',
    technologies: ['Cloud Computing', 'Microsoft Azure', 'Governance', 'Identity'],
    detailedDescription:
      'Validates foundational knowledge of cloud concepts and core Azure services, plus Azure management and governance. Ideal starting point for Azure roles.',
  },
  {
    slug: 'google-cloud-computing-foundations',
    company: 'Google Cloud',
    website: 'https://cloud.google.com/learn/training/credentials',
    post: 'Google Cloud Computing Foundations Certificate',
    type: 'Certification',
    start: 'Oct 2025',
    end: 'No expiry',
    letter:
      'https://www.credly.com/badges/50db605d-da96-4c18-8f9d-9a06c1b4fe42/linked_in_profile',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/GCP-1.png',
    credentialId: '50db605d-da96-4c18-8f9d-9a06c1b4fe42',
    technologies: [
      'Cloud Computing',
      'GCP',
      'Compute Engine',
      'IAM',
      'Networking',
      'Security',
      'Data & ML',
      'Cloud Storage',
    ],
    detailedDescription:
      'Completion-based certificate spanning cloud fundamentals, infrastructure, networking & security, data/ML/AI, plus hands-on skill badges in GCP.',
  },
  {
    slug: 'oracle-oci-foundations-2025-associate',
    company: 'Oracle',
    website:
      'https://education.oracle.com/oracle-cloud-infrastructure-2025-certified-foundations-associate/trackp_OCI25FNDCFA',
    post: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    type: 'Certification',
    start: 'Oct 2025',
    end: 'Expires Oct 2027',
    letter:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4FDE00B6191805B59D2742A2614C0F473722EC59AFEC452D1516D970A8F205C5',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/OracleLogo.png',
    credentialId:
      '4FDE00B6191805B59D2742A2614C0F473722EC59AFEC452D1516D970A8F205C5',
    technologies: ['Cloud Computing', 'OCI', 'Identity', 'Networking', 'Compute', 'Storage'],
    detailedDescription:
      'Demonstrates foundational understanding of Oracle Cloud Infrastructure (OCI) services, architecture, security, cost, and governance.',
  },
  {
    slug: 'aws-academy-cloud-foundations',
    company: 'Amazon Web Services (AWS)',
    website: 'https://aws.amazon.com/training/awsacademy/',
    post: 'AWS Academy Graduate – AWS Academy Cloud Foundations',
    type: 'Certification',
    start: 'Apr 2024',
    end: 'No expiry',
    letter:
      'https://www.credly.com/badges/762f95ae-a56d-4431-838a-da1ab8e4480d/public_url',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Aws_image.png',
    credentialId: '762f95ae-a56d-4431-838a-da1ab8e4480d',
    technologies: ['Cloud Computing','AWS', 'EC2', 'IAM', 'Security', 'Architecture', 'Pricing'],
    detailedDescription:
      'Introductory AWS Academy program covering core AWS services, security, architecture, pricing and support; verified via Credly badge.',
  },
  {
  slug: 'bcg-genai-virtual-experience',
  company: 'Boston Consulting Group (BCG) via Forage',
  website: 'https://www.theforage.com/simulations/bcg/gen-ai-anlo',
  post: 'GenAI Virtual Experience Program',
  type: 'Certification',
  start: 'Apr 2024',
  end: 'No expiry',
  letter: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/gabev3vXhuACr48eb_BCG_ePPrsKuNMAQKaSEzk_1713542281562_completion_certificate.pdf',
  image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/BCG_Corporate_Logo.svg',
  credentialId: 'ePPrsKuNMAQKaSEzk',
  technologies: [
    'Generative AI',
    'LLMs',
    'AI Strategy',
    'Business Problem Solving',
    'Prompt Engineering',
    'AI Use Cases',
  ],
  detailedDescription:
    'Completed BCG’s GenAI Virtual Experience Program on Forage, gaining practical exposure to applying generative AI in business contexts. Worked on identifying high-impact AI use cases, leveraging large language models (LLMs), and developing strategic solutions for real-world business problems. Built foundational understanding of how GenAI can enhance productivity, decision-making, and innovation in organizations.',
}
];
