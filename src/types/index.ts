export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  requirements: string[];
  fitScore: number;
  posted: string;
  logo?: string;
}

export interface ResumeAnalysis {
  overallScore: number;
  strengths: string[];
  improvements: string[];
  keywords: string[];
  sections: {
    name: string;
    score: number;
    feedback: string;
  }[];
}

export interface NetworkConnection {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  mutualConnections: number;
  relevanceScore: number;
  reason: string;
}
