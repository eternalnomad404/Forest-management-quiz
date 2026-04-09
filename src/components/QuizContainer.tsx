import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, RotateCcw, Trophy } from 'lucide-react';
import { QUESTIONS } from '../data/questions';
import QuestionCard from './QuestionCard';
import ProgressIndicator from './ProgressIndicator';

export default function QuizContainer() {
  const [activeQuestions, setActiveQuestions] = useState(QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(new Array(QUESTIONS.length).fill(null));
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = activeQuestions[currentIndex];
  const selectedAnswer = answers[currentIndex];
  const isAnswered = selectedAnswer !== null;

  const score = answers.reduce((acc, curr, idx) => {
    return curr === activeQuestions[idx].answer ? acc + 1 : acc;
  }, 0);
  const unansweredCount = answers.filter(answer => answer === null).length;
  const incorrectAnsweredCount = answers.reduce((acc, answer, idx) => {
    if (answer === null) return acc;
    return answer !== activeQuestions[idx].answer ? acc + 1 : acc;
  }, 0);
  const totalIncorrectCount = activeQuestions.length - score;
  const wrongQuestions = activeQuestions.filter((question, idx) => {
    return answers[idx] !== question.answer;
  });

  const handleSelectAnswer = useCallback((option: string) => {
    if (isAnswered) return;

    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = option;
      return newAnswers;
    });

    // Auto-advance quickly only when the selected answer is correct.
    if (option === currentQuestion.answer) {
      window.setTimeout(() => {
        if (currentIndex === activeQuestions.length - 1) {
          setIsFinished(true);
        } else {
          setCurrentIndex(prev => prev + 1);
        }
      }, 300);
    }
  }, [isAnswered, currentIndex, currentQuestion.answer, activeQuestions.length]);

  const handleNext = useCallback(() => {
    if (currentIndex === activeQuestions.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, activeQuestions.length]);

  const handleBack = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const handleRestart = () => {
    setActiveQuestions(QUESTIONS);
    setCurrentIndex(0);
    setAnswers(new Array(QUESTIONS.length).fill(null));
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
              onClick={handleRetryWrongOnly}
              disabled={wrongQuestions.length === 0}
              className="w-full py-4 px-4 bg-indigo-600 text-white rounded-xl font-bold text-base md:text-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-200 active:scale-[0.98] flex items-center justify-center gap-2 text-center"
            >
              <RotateCcw className="w-5 h-5 shrink-0" />
              Retry Incorrect / Unanswered Only
            </button>
            <button
              onClick={handleRestart}
              className="w-full py-4 px-4 bg-white text-indigo-700 border-2 border-indigo-200 rounded-xl font-bold text-base md:text-lg hover:bg-indigo-50 transition-colors active:scale-[0.98] flex items-center justify-center gap-2 text-center"
            >
              <RotateCcw className="w-5 h-5 shrink-0" />
              Restart Full Quiz
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 md:py-12">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-white text-center text-2xl md:text-3xl font-extrabold mb-6 tracking-tight">
          Forests and their management quiz
        </h1>
        
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="p-3 rounded-xl text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-90"
            aria-label="Previous Question"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex-1 px-4">
            <ProgressIndicator 
              current={currentIndex + 1} 
              total={activeQuestions.length} 
            />
          </div>

          <button
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
    </div>
  );
}
