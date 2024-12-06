import { create } from 'zustand';

interface InterviewState {
  currentQuestion: string;
  answers: string[];
  feedback: string;
  isLoading: boolean;
  setCurrentQuestion: (question: string) => void;
  addAnswer: (answer: string) => void;
  setFeedback: (feedback: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useInterviewStore = create<InterviewState>((set) => ({
  currentQuestion: '',
  answers: [],
  feedback: '',
  isLoading: false,
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  addAnswer: (answer) => set((state) => ({ answers: [...state.answers, answer] })),
  setFeedback: (feedback) => set({ feedback }),
  setLoading: (loading) => set({ isLoading: loading }),
}));