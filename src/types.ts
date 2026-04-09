export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  isAnswered: boolean;
  isFinished: boolean;
}
