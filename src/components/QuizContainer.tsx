import { QUESTIONS } from '../data/questions';
import SubjectQuizContainer from './SubjectQuizContainer';

const ASSIGNMENT_ID_RANGES_IN_ORDER = [
  [1, 10],     // Assignment 0
  [11, 20],    // Assignment 1
  [21, 30],    // Assignment 2
  [101, 110],  // Assignment 3
  [121, 130],  // Assignment 4
  [31, 40],    // Assignment 5
  [41, 50],    // Assignment 6
  [51, 60],    // Assignment 7
  [61, 70],    // Assignment 8
  [71, 80],    // Assignment 9
  [81, 90],    // Assignment 10
  [91, 100],   // Assignment 11
  [111, 120],  // Assignment 12
] as const;

interface QuizContainerProps {
  onBackToSubjects?: () => void;
}

export default function QuizContainer({ onBackToSubjects }: QuizContainerProps) {
  return (
    <SubjectQuizContainer
      questions={QUESTIONS}
      sessionStorageKey="forest-quiz-session-v3"
      assignmentIdRangesInOrder={ASSIGNMENT_ID_RANGES_IN_ORDER}
      analyticsSubject="forest_management"
      assignmentAnalyticsNumber={(index) => index}
      onBackToSubjects={onBackToSubjects}
      scopeDescription="Pick one assignment at a time (in order), or attempt every question together. You can repeat as many times as you like."
      allQuestionsDescription={() => 'Choose how to attempt all 130 questions. Your choice stays for this session, including retries.'}
      assignmentButtonLabel={(index) => `Assignment ${index}`}
      assignmentSessionLabel={(index) => `Assignment ${index}`}
    />
  );
}
