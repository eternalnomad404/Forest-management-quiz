import { HCI_QUESTIONS } from '../data/hciQuestions';
import SubjectQuizContainer from './SubjectQuizContainer';

const ASSIGNMENT_ID_RANGES_IN_ORDER = [
  [1, 10],    // Week 1
  [11, 20],   // Week 2
  [21, 30],   // Week 3
  [31, 40],   // Week 4
  [41, 50],   // Week 5
  [51, 60],   // Week 6
  [61, 70],   // Week 7
  [71, 80],   // Week 8
  [81, 90],   // Week 9
  [91, 100],  // Week 10
  [101, 110], // Week 11
] as const;

interface HciQuizContainerProps {
  onBackToSubjects?: () => void;
}

export default function HciQuizContainer({ onBackToSubjects }: HciQuizContainerProps) {
  return (
    <SubjectQuizContainer
      questions={HCI_QUESTIONS}
      sessionStorageKey="hci-quiz-session-v1"
      assignmentIdRangesInOrder={ASSIGNMENT_ID_RANGES_IN_ORDER}
      onBackToSubjects={onBackToSubjects}
      scopeDescription="Pick one week at a time (in order), or attempt every question together. You can repeat as many times as you like."
      allQuestionsDescription={(count) => `Choose how to attempt all ${count} questions. Your choice stays for this session, including retries.`}
      assignmentDescription="Questions play in sequence for that assignment only. Retry or pick another assignment anytime."
      assignmentButtonLabel={(index) => `Assignment ${index + 1}`}
      assignmentSessionLabel={(index) => `Assignment ${index + 1}`}
    />
  );
}
