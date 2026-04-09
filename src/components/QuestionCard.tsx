import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../types';
import OptionButton from './OptionButton';

interface QuestionCardProps {
  key?: number | string;
  question: Question;
  selectedAnswer: string | null;
  isAnswered: boolean;
  onSelect: (option: string) => void;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  isAnswered,
  onSelect,
}: QuestionCardProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-indigo-900/10 border border-gray-100"
    >
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 leading-tight">
        {question.question}
      </h2>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <OptionButton
            key={option}
            option={option}
            isSelected={selectedAnswer === option}
            isCorrect={option === question.answer}
            isAnswered={isAnswered}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </motion.div>
  );
}
