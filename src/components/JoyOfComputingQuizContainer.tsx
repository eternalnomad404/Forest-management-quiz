import { JOY_OF_COMPUTING_QUESTIONS } from '../data/joyOfComputing';
import SubjectQuizContainer from './SubjectQuizContainer';

const ASSIGNMENT_ID_RANGES_IN_ORDER = [
  [1, 15], // Assignment 1
  [16, 30], // Assignment 2
  [31, 45], // Assignment 3
  [46, 60], // Assignment 4
  [61, 75], // Assignment 5
  [76, 90], // Assignment 6
  [91, 105], // Assignment 7
  [106, 120], // Assignment 8
  [121, 135], // Assignment 9
  [136, 150], // Assignment 10
  [151, 165], // Assignment 11
] as const;

interface JoyOfComputingQuizContainerProps {
  onBackToSubjects?: () => void;
}

export default function JoyOfComputingQuizContainer({
  onBackToSubjects,
}: JoyOfComputingQuizContainerProps) {
  return (
    <SubjectQuizContainer
      questions={JOY_OF_COMPUTING_QUESTIONS}
      sessionStorageKey="joy-of-computing-quiz-session-v9"
      assignmentIdRangesInOrder={ASSIGNMENT_ID_RANGES_IN_ORDER}
      analyticsSubject="joy_of_computing"
      assignmentAnalyticsNumber={(index) => index + 1}
      onBackToSubjects={onBackToSubjects}
      scopeDescription="Pick one assignment at a time (in order), or attempt every question together. You can repeat as many times as you like."
      allQuestionsDescription={(count) =>
        `Choose how to attempt all ${count} questions. Your choice stays for this session, including retries.`
      }
      assignmentButtonLabel={(index) => `Assignment ${index + 1}`}
      assignmentSessionLabel={(index) => `Assignment ${index + 1}`}
    />
  );
}
