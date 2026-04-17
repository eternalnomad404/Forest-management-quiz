export interface ContextBlockText {
  type: 'text';
  content: string;
}

export interface ContextBlockImage {
  type: 'image';
  url: string;
}

export type ContextBlock = ContextBlockText | ContextBlockImage;

export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
  context?: string;
  imageUrl?: string;
  contextImageUrls?: string[];
  contextBlocks?: ContextBlock[];
  questionImageUrls?: string[];
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  isAnswered: boolean;
  isFinished: boolean;
}
