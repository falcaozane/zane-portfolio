// 1. Define the Project type to match your resume's project section
export type Pos = {
  slug: string // For the URL, e.g., /Projects/legal-document-assistant
  post: string // The title of the project
  website?: string // The live URL of the project
  company: string // e.g., "Hackathon Project", "Mini Project"
  startdate: string // The date or date range of the project
  enddate:string
  letter: string
  detailedDescription: string
  demoLink?: string // For video demos (like your Google Drive link)
}

// 2. Your updated projects list, based on the "Projects" section of your resume
export const pos: Pos[] = [
  {
    slug: 'legal-document-assistant',
    post: 'Blockchain Lead',
    company: 'GDSC-CRCE',
    startdate: 'July 2023',
    enddate:'May 2024',
    website: 'https://gdsc-crce-2024.vercel.app/',
    letter:'',
    detailedDescription:
      'Bit-N-Build\'24 International Hackathon\n\nI was actively involved in formulating the problem statements for this hackathon\n\nCoordinated with 300+ participants.',
    // No website or demo link provided in the resume for this one
  },
  {
    slug: 'stock-allocation-engine',
    post: 'Web Development Associate',
    company: 'GDSC CRCE', // Inferred from context
    startdate: 'July 2022',
    enddate:'May 2023',
    website: 'https://www.instagram.com/gdsc_crce/',
    letter:'',
    detailedDescription:
      'Managed end-to-end operations of a 24-hour Bit n Build Hackathon and seamlessly coordinated with 300+ participants.',
  }
]