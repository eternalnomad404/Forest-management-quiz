import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, RotateCcw, Trophy } from 'lucide-react';
import QuestionCard from './QuestionCard';
import ProgressIndicator from './ProgressIndicator';
import { Question } from '../types';

type SessionMode = 'sequence' | 'sequence_shuffled_options' | 'jumbled';
type QuizScope = 'all' | 'assignment';

interface SubjectQuizContainerProps {
  questions: Question[];
  sessionStorageKey: string;
  assignmentIdRangesInOrder: readonly (readonly [number, number])[];
  onBackToSubjects?: () => void;
  scopeDescription: string;
  allQuestionsDescription: (count: number) => string;
  assignmentDescription: string;
  assignmentButtonLabel: (index: number) => string;
  assignmentSessionLabel: (index: number) => string;
}

function shuffleArray<T>(items: T[]): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function hasSameOrder<T>(a: T[], b: T[]) {
  if (a.length !== b.length) return false;
  return a.every((item, index) => item === b[index]);
}

function shuffleWithVisibleChange<T>(items: T[]): T[] {
  if (items.length <= 1) return [...items];
  let shuffled = shuffleArray(items);
  let attempts = 0;
  while (hasSameOrder(items, shuffled) && attempts < 5) {
    shuffled = shuffleArray(items);
    attempts += 1;
  }
  return shuffled;
}

function isValidQuestionShape(value: unknown): value is {
  id: string;
  question: string;
  options: string[];
  answer: string;
} {
  if (!value || typeof value !== 'object') return false;
  const item = value as { [key: string]: unknown };
  return (
    typeof item.id === 'string' &&
    typeof item.question === 'string' &&
    Array.isArray(item.options) &&
    item.options.every(option => typeof option === 'string') &&
    typeof item.answer === 'string'
  );
}

function CreditFooter({ className = '' }: { className?: string }) {
  return (
    <div className={`mt-6 text-center text-xs md:text-sm text-gray-500 ${className}`}>
      Made with ❤️ by{' '}
      <a
        href="https://www.linkedin.com/in/aman-jain-3a6609283/"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-indigo-700 hover:text-indigo-800 underline underline-offset-2"
      >
        Aman Jain
      </a>
    </div>
  );
}

export default function SubjectQuizContainer({
  questions,
  sessionStorageKey,
  assignmentIdRangesInOrder,
  onBackToSubjects,
  scopeDescription,
  allQuestionsDescription,
  assignmentDescription,
  assignmentButtonLabel,
  assignmentSessionLabel,
}: SubjectQuizContainerProps) {
  const assignmentCount = assignmentIdRangesInOrder.length;

  const getOrderedAllQuestions = useMemo(() => {
    return () => {
      const byId = new Map(questions.map(question => [Number(question.id), question]));
      const orderedQuestions = assignmentIdRangesInOrder.flatMap(([start, end]) => {
        const group = [];
        for (let id = start; id <= end; id += 1) {
          const question = byId.get(id);
          if (question) group.push(question);
        }
        return group;
      });

      const orderedIds = new Set(orderedQuestions.map(question => question.id));
      const leftovers = questions
        .filter(question => !orderedIds.has(question.id))
        .sort((a, b) => Number(a.id) - Number(b.id));

      return [...orderedQuestions, ...leftovers];
    };
  }, [questions, assignmentIdRangesInOrder]);

  const getAssignmentQuestions = (assignmentIndex: number) => {
    const range = assignmentIdRangesInOrder[assignmentIndex];
    if (!range) return [];
    const byId = new Map(questions.map(question => [Number(question.id), question]));
    const group = [];
    for (let id = range[0]; id <= range[1]; id += 1) {
      const question = byId.get(id);
      if (question) group.push(question);
    }
    return group;
  };

  const buildAllQuestionsSession = (mode: SessionMode) => {
    const ordered = getOrderedAllQuestions();

    if (mode === 'sequence') {
      return ordered;
    }

    if (mode === 'sequence_shuffled_options') {
      return ordered.map(question => ({
        ...question,
        options: shuffleWithVisibleChange(question.options),
      }));
    }

    const withShuffledOptions = ordered.map(question => ({
      ...question,
      options: shuffleWithVisibleChange(question.options),
    }));

    return shuffleWithVisibleChange(withShuffledOptions);
  };

  const [isHydrated, setIsHydrated] = useState(false);
  const [quizScope, setQuizScope] = useState<QuizScope | null>(null);
  const [selectedAssignmentIndex, setSelectedAssignmentIndex] = useState<number | null>(null);
  const [sessionMode, setSessionMode] = useState<SessionMode | null>(null);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(sessionStorageKey);
      if (!raw) {
        setIsHydrated(true);
        return;
      }

      const parsed = JSON.parse(raw) as {
        quizScope?: QuizScope;
        selectedAssignmentIndex?: number | null;
        sessionMode: SessionMode | null;
        sessionQuestions: unknown[];
        activeQuestions: unknown[];
        currentIndex: number;
        answers: (string | null)[];
        isFinished: boolean;
      };

      const scope: QuizScope | null =
        parsed.quizScope === 'all' || parsed.quizScope === 'assignment'
          ? parsed.quizScope
          : parsed.sessionMode !== null
            ? 'all'
            : null;

      const assignmentIdx =
        typeof parsed.selectedAssignmentIndex === 'number' &&
        parsed.selectedAssignmentIndex >= 0 &&
        parsed.selectedAssignmentIndex < assignmentCount
          ? parsed.selectedAssignmentIndex
          : null;

      const validMode =
        parsed.sessionMode === null ||
        parsed.sessionMode === 'sequence' ||
        parsed.sessionMode === 'sequence_shuffled_options' ||
        parsed.sessionMode === 'jumbled';
      const validSessionQuestions = Array.isArray(parsed.sessionQuestions) &&
        parsed.sessionQuestions.every(isValidQuestionShape);
      const validActiveQuestions = Array.isArray(parsed.activeQuestions) &&
        parsed.activeQuestions.every(isValidQuestionShape);
      const validCurrentIndex = Number.isInteger(parsed.currentIndex) && parsed.currentIndex >= 0;
      const validAnswers = Array.isArray(parsed.answers) &&
        parsed.answers.every(answer => answer === null || typeof answer === 'string');
      const validIsFinished = typeof parsed.isFinished === 'boolean';

      if (
        validMode &&
        validSessionQuestions &&
        validActiveQuestions &&
        validCurrentIndex &&
        validAnswers &&
        validIsFinished
      ) {
        setQuizScope(scope);
        setSelectedAssignmentIndex(assignmentIdx);
        setSessionMode(parsed.sessionMode);
        setSessionQuestions(parsed.sessionQuestions);
        setActiveQuestions(parsed.activeQuestions);
        setCurrentIndex(parsed.currentIndex);
        setAnswers(parsed.answers);
        setIsFinished(parsed.isFinished);
      }
    } catch {
      // Ignore corrupted session data and start fresh.
    } finally {
      setIsHydrated(true);
    }
  }, [assignmentCount, sessionStorageKey]);

  useEffect(() => {
    if (!isHydrated) return;

    if (quizScope === null && sessionMode === null) {
      window.sessionStorage.removeItem(sessionStorageKey);
      return;
    }

    const payload = {
      quizScope,
      selectedAssignmentIndex,
      sessionMode,
      sessionQuestions,
      activeQuestions,
      currentIndex,
      answers,
      isFinished,
    };

    window.sessionStorage.setItem(sessionStorageKey, JSON.stringify(payload));
  }, [
    sessionStorageKey,
    isHydrated,
    quizScope,
    selectedAssignmentIndex,
    sessionMode,
    sessionQuestions,
    activeQuestions,
    currentIndex,
    answers,
    isFinished,
  ]);

  const goToScopeScreen = () => {
    setQuizScope(null);
    setSelectedAssignmentIndex(null);
    setSessionMode(null);
    setSessionQuestions([]);
    setActiveQuestions([]);
    setCurrentIndex(0);
    setAnswers([]);
    setIsFinished(false);
  };

  const chooseAllQuestions = () => {
    setQuizScope('all');
    setSelectedAssignmentIndex(null);
    setSessionMode(null);
  };

  const chooseAssignmentWise = () => {
    setQuizScope('assignment');
    setSelectedAssignmentIndex(null);
    setSessionMode(null);
  };

  const exitToPreviousQuizStep = () => {
    setSessionMode(null);
    setSessionQuestions([]);
    setActiveQuestions([]);
    setCurrentIndex(0);
    setAnswers([]);
    setIsFinished(false);
    if (quizScope === 'assignment') {
      setSelectedAssignmentIndex(null);
    }
  };

  const startAllQuestionsSession = (mode: SessionMode) => {
    const preparedQuestions = buildAllQuestionsSession(mode);
    setSessionMode(mode);
    setSessionQuestions(preparedQuestions);
    setActiveQuestions(preparedQuestions);
    setCurrentIndex(0);
    setAnswers(new Array(preparedQuestions.length).fill(null));
    setIsFinished(false);
  };

  const startAssignmentQuiz = (assignmentIndex: number) => {
    const preparedQuestions = getAssignmentQuestions(assignmentIndex);
    if (preparedQuestions.length === 0) return;
    setSelectedAssignmentIndex(assignmentIndex);
    setSessionMode('sequence');
    setSessionQuestions(preparedQuestions);
    setActiveQuestions(preparedQuestions);
    setCurrentIndex(0);
    setAnswers(new Array(preparedQuestions.length).fill(null));
    setIsFinished(false);
  };

  if (!isHydrated) return null;

  if (quizScope === null) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-indigo-100"
        >
          {onBackToSubjects && (
            <button
              type="button"
              onClick={onBackToSubjects}
              className="mb-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              ← Back to subjects
            </button>
          )}
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            How do you want to practice?
          </h1>
          <p className="text-gray-600 mb-7">{scopeDescription}</p>
          <div className="space-y-3">
            <button
              type="button"
              onClick={chooseAssignmentWise}
              className="w-full py-4 px-4 bg-indigo-600 text-white rounded-xl font-bold text-base md:text-lg hover:bg-indigo-700 transition-colors active:scale-[0.98]"
            >
              Assignment wise
            </button>
            <button
              type="button"
              onClick={chooseAllQuestions}
              className="w-full py-4 px-4 bg-white text-indigo-700 border-2 border-indigo-200 rounded-xl font-bold text-base md:text-lg hover:bg-indigo-50 transition-colors active:scale-[0.98]"
            >
              All questions
            </button>
          </div>
          <CreditFooter />
        </motion.div>
      </div>
    );
  }

  if (quizScope === 'all' && sessionMode === null) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-indigo-100"
        >
          <button
            type="button"
            onClick={goToScopeScreen}
            className="mb-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            ← Back
          </button>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            All questions — how to attempt?
          </h1>
          <p className="text-gray-600 mb-7">{allQuestionsDescription(questions.length)}</p>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => startAllQuestionsSession('sequence')}
              className="w-full py-4 px-4 bg-indigo-600 text-white rounded-xl font-bold text-base md:text-lg hover:bg-indigo-700 transition-colors active:scale-[0.98]"
            >
              In Sequence
            </button>
            <button
              type="button"
              onClick={() => startAllQuestionsSession('sequence_shuffled_options')}
              className="w-full py-4 px-4 bg-white text-indigo-700 border-2 border-indigo-200 rounded-xl font-bold text-base md:text-lg hover:bg-indigo-50 transition-colors active:scale-[0.98] text-center leading-snug"
            >
              Sequential · Shuffled options
            </button>
            <button
              type="button"
              onClick={() => startAllQuestionsSession('jumbled')}
              className="w-full py-4 px-4 bg-white text-indigo-700 border-2 border-indigo-200 rounded-xl font-bold text-base md:text-lg hover:bg-indigo-50 transition-colors active:scale-[0.98]"
            >
              Jumbled (HARD)
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (quizScope === 'assignment' && sessionMode === null) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-indigo-100"
        >
          <button
            type="button"
            onClick={goToScopeScreen}
            className="mb-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            ← Back
          </button>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Choose an assignment
          </h1>
          <p className="text-gray-600 mb-6">{assignmentDescription}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 max-h-[min(52vh,420px)] overflow-y-auto pr-1 -mr-1">
            {Array.from({ length: assignmentCount }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => startAssignmentQuiz(i)}
                className="py-3 px-2 rounded-xl border-2 border-indigo-100 bg-indigo-50/50 text-indigo-900 font-bold text-sm md:text-base hover:bg-indigo-100 hover:border-indigo-200 transition-colors active:scale-[0.98]"
              >
                {assignmentButtonLabel(i)}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = activeQuestions[currentIndex];
  const selectedAnswer = answers[currentIndex];
  const isAnswered = selectedAnswer !== null;

  const score = answers.reduce((acc, curr, idx) => (curr === activeQuestions[idx].answer ? acc + 1 : acc), 0);
  const unansweredCount = answers.filter(answer => answer === null).length;
  const incorrectAnsweredCount = answers.reduce((acc, answer, idx) => {
    if (answer === null) return acc;
    return answer !== activeQuestions[idx].answer ? acc + 1 : acc;
  }, 0);
  const totalIncorrectCount = activeQuestions.length - score;
  const wrongQuestions = activeQuestions.filter((question, idx) => answers[idx] !== question.answer);

  const sessionTypeLabel =
    quizScope === 'assignment' && selectedAssignmentIndex !== null
      ? `${assignmentSessionLabel(selectedAssignmentIndex)} · In Sequence`
      : sessionMode === 'jumbled'
        ? 'All questions · Jumbled'
        : sessionMode === 'sequence_shuffled_options'
          ? 'All questions · Sequential · Shuffled options'
          : 'All questions · In Sequence';

  const handleSelectAnswer = (option: string) => {
    if (isAnswered) return;

    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = option;
      return newAnswers;
    });

    if (option === currentQuestion.answer) {
      window.setTimeout(() => {
        if (currentIndex === activeQuestions.length - 1) {
          setIsFinished(true);
        } else {
          setCurrentIndex(prev => prev + 1);
        }
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentIndex === activeQuestions.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setActiveQuestions(sessionQuestions);
    setCurrentIndex(0);
    setAnswers(new Array(sessionQuestions.length).fill(null));
    setIsFinished(false);
  };

  const handleRetryWrongOnly = () => {
    if (wrongQuestions.length === 0) {
      handleRestart();
      return;
    }
    setActiveQuestions(wrongQuestions);
    setCurrentIndex(0);
    setAnswers(new Array(wrongQuestions.length).fill(null));
    setIsFinished(false);
  };

  if (!currentQuestion) return null;

  if (isFinished) {
    return (
      <div className="max-w-lg mx-auto px-4 py-10 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-indigo-100/70"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <Trophy className="w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
          <p className="text-gray-500 mb-6">Review your results and choose what to retry.</p>
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
              {sessionTypeLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={exitToPreviousQuizStep}
            className="mb-5 w-full text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            ← Back to attempt options
          </button>

          <div className="bg-indigo-50 rounded-2xl p-6 mb-5">
            <div className="text-sm text-indigo-600 font-semibold uppercase tracking-wider mb-1">Final Score</div>
            <div className="text-5xl font-black text-indigo-900">
              {score} <span className="text-2xl text-indigo-400">/ {activeQuestions.length}</span>
            </div>
            <div className="mt-2 text-sm font-medium text-indigo-700">
              Unanswered questions are counted as incorrect.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-left">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
              <div className="text-[11px] uppercase tracking-[0.08em] font-semibold text-emerald-700 whitespace-nowrap">Correct</div>
              <div className="text-3xl font-black text-emerald-900 leading-none mt-1">{score}</div>
            </div>
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-3">
              <div className="text-[11px] uppercase tracking-[0.08em] font-semibold text-rose-700 whitespace-nowrap">Incorrect</div>
              <div className="text-3xl font-black text-rose-900 leading-none mt-1">{incorrectAnsweredCount}</div>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
              <div className="text-[10px] md:text-[11px] uppercase tracking-[0.06em] font-semibold text-amber-700 break-words">
                Unanswered
              </div>
              <div className="text-3xl font-black text-amber-900 leading-none mt-1">{unansweredCount}</div>
            </div>
          </div>

          <div className="mb-6 rounded-xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 text-sm text-indigo-800">
            Total incorrect (including unanswered): <span className="font-bold">{totalIncorrectCount}</span>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={handleRetryWrongOnly}
              disabled={wrongQuestions.length === 0}
              className="w-full py-4 px-4 bg-indigo-600 text-white rounded-xl font-bold text-base md:text-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-200 active:scale-[0.98] flex items-center justify-center gap-2 text-center"
            >
              <RotateCcw className="w-5 h-5 shrink-0" />
              Retry Incorrect / Unanswered Only
            </button>
            <button
              type="button"
              onClick={handleRestart}
              className="w-full py-4 px-4 bg-white text-indigo-700 border-2 border-indigo-200 rounded-xl font-bold text-base md:text-lg hover:bg-indigo-50 transition-colors active:scale-[0.98] flex items-center justify-center gap-2 text-center"
            >
              <RotateCcw className="w-5 h-5 shrink-0" />
              {quizScope === 'assignment' ? 'Restart this assignment' : 'Restart full quiz'}
            </button>
            <button
              type="button"
              onClick={goToScopeScreen}
              className="w-full py-3 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Change practice option
            </button>
          </div>
          <CreditFooter />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 md:py-10">
      <div className="mb-3 flex justify-center">
        <button
          type="button"
          onClick={exitToPreviousQuizStep}
          className="text-sm font-semibold text-indigo-100 hover:text-white underline underline-offset-2"
        >
          ← Back to attempt options
        </button>
      </div>
      <div className="mb-6">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="p-3 rounded-xl text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-90"
            aria-label="Previous Question"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex-1 px-4">
            <ProgressIndicator current={currentIndex + 1} total={activeQuestions.length} />
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="p-3 rounded-xl text-white hover:bg-white/10 transition-all active:scale-90"
            aria-label="Next Question"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentIndex}
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
          onSelect={handleSelectAnswer}
        />
      </AnimatePresence>
      <div className="mt-6 text-center text-xs md:text-sm font-semibold uppercase tracking-wide text-indigo-100">
        {sessionTypeLabel}
      </div>
    </div>
  );
}
