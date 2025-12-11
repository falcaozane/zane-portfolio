
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
];
