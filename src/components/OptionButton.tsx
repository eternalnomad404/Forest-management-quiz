import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface OptionButtonProps {
  key?: string;
  option: string;
  isSelected: boolean;
  isCorrect: boolean;
  isAnswered: boolean;
  onClick: () => void;
}

export default function OptionButton({
  option,
  isSelected,
  isCorrect,
  isAnswered,
  onClick,
}: OptionButtonProps) {
  let buttonStyles = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-center justify-between group";
  
  if (!isAnswered) {
    buttonStyles += " border-gray-100 bg-white hover:border-indigo-500 hover:shadow-md active:scale-[0.98]";
  } else {
    if (isCorrect) {
      buttonStyles += " border-emerald-500 bg-emerald-50 text-emerald-900";
    } else if (isSelected && !isCorrect) {
      buttonStyles += " border-rose-500 bg-rose-50 text-rose-900";
    } else {
      buttonStyles += " border-gray-100 bg-gray-50 text-gray-400 opacity-60";
    }
  }

  return (
    <motion.button
      whileTap={!isAnswered ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={isAnswered}
      className={buttonStyles}
    >
      <span className="font-medium text-lg">{option}</span>
      {isAnswered && isCorrect && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      )}
      {isAnswered && isSelected && !isCorrect && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
}
