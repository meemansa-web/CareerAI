import { faker } from '@faker-js/faker';
import { Job, ResumeAnalysis, NetworkConnection } from '../types';

// Generate mock jobs
export const generateMockJobs = (count: number = 10): Job[] => {
  const jobTitles = [
    'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 
    'UI/UX Designer', 'Product Manager', 'Data Scientist', 
    'DevOps Engineer', 'Software Architect', 'Mobile Developer',
    'Machine Learning Engineer', 'QA Engineer', 'Technical Lead'
  ];

  const companies = [
    'TechCorp', 'InnovateLab', 'DataFlow', 'CloudTech', 'DigitalMind',
    'FutureTech', 'CodeBase', 'TechNova', 'ByteCraft', 'DevStream'
  ];

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    title: faker.helpers.arrayElement(jobTitles),
    company: faker.helpers.arrayElement(companies),
    location: `${faker.location.city()}, ${faker.location.state()}`,
    type: faker.helpers.arrayElement(['Full-time', 'Part-time', 'Contract', 'Remote'] as const),
    salary: `$${faker.number.int({ min: 60, max: 200 })}k - $${faker.number.int({ min: 200, max: 300 })}k`,
    description: faker.lorem.paragraph(3),
    requirements: Array.from({ length: faker.number.int({ min: 3, max: 6 }) }, () => faker.lorem.sentence()),
    fitScore: faker.number.int({ min: 65, max: 98 }),
    posted: faker.date.recent({ days: 30 }).toLocaleDateString(),
  }));
};

// Mock resume analysis
export const mockResumeAnalysis: ResumeAnalysis = {
  overallScore: 78,
  strengths: [
    'Strong technical skills section',
    'Relevant work experience',
    'Clear project descriptions',
    'Good use of action verbs'
  ],
  improvements: [
    'Add more quantifiable achievements',
    'Include relevant keywords for your target role',
    'Improve skills section formatting',
    'Add a professional summary'
  ],
  keywords: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'Agile'],
  sections: [
    { name: 'Contact Information', score: 95, feedback: 'Complete and professional' },
    { name: 'Professional Summary', score: 65, feedback: 'Could be more compelling and specific' },
    { name: 'Work Experience', score: 82, feedback: 'Good structure, add more metrics' },
    { name: 'Skills', score: 75, feedback: 'Relevant skills, better organization needed' },
    { name: 'Education', score: 90, feedback: 'Well formatted and complete' }
  ]
};

// Generate mock network connections
export const generateMockConnections = (count: number = 8): NetworkConnection[] => {
  const titles = [
    'Senior Software Engineer', 'Product Manager', 'Engineering Manager',
    'Tech Lead', 'Principal Developer', 'VP of Engineering',
    'Senior Designer', 'Data Scientist', 'DevOps Manager'
  ];

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    title: faker.helpers.arrayElement(titles),
    company: faker.company.name(),
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${faker.string.alphanumeric(8)}`,
    mutualConnections: faker.number.int({ min: 2, max: 15 }),
    relevanceScore: faker.number.int({ min: 75, max: 95 }),
    reason: faker.helpers.arrayElement([
      'Works at your target company',
      'Similar career path',
      'Alumni from your university',
      'Previous colleague connection',
      'Industry expert in your field'
    ])
  }));
};
