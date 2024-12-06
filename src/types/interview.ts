export interface InterviewSetup {
  role: string;
  yearsOfExperience: number;
  skills: string[];
}

export interface Question {
  id: number;
  question: string;
  answer?: string;
}

export interface Interview {
  id: string;
  userId: string;
  setup: InterviewSetup;
  questions: Question[];
  createdAt: string;
  status: 'pending' | 'in_progress' | 'completed';
}