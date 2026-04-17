import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ContextBlock, Question } from '../types';
import OptionButton from './OptionButton';

interface QuestionCardProps {
  key?: number | string;
  question: Question;
  selectedAnswer: string | null;
  isAnswered: boolean;
  onSelect: (option: string) => void;
}

function renderBoldMarkup(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}

export default function QuestionCard({
  question,
  selectedAnswer,
  isAnswered,
  onSelect,
}: QuestionCardProps) {
  const contextLines = question.context
    ? question.context.split('\n').map(line => line.trim()).filter(Boolean)
    : [];
  const contextImages =
    question.contextImageUrls && question.contextImageUrls.length > 0
      ? question.contextImageUrls
      : question.imageUrl
        ? [question.imageUrl]
        : [];
  const contextBlocks: ContextBlock[] =
    question.contextBlocks && question.contextBlocks.length > 0
      ? question.contextBlocks
      : [
          ...contextLines.map((line): ContextBlock => ({ type: 'text', content: line })),
          ...contextImages.map((url): ContextBlock => ({ type: 'image', url })),
        ];
  const [isContextOpen, setIsContextOpen] = useState(true);

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-3xl overflow-hidden p-6 md:p-8 shadow-xl shadow-indigo-900/10 border border-gray-100"
    >
      {contextLines.length > 0 && (
        <div className="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 space-y-3">
          <button
            type="button"
            onClick={() => setIsContextOpen(prev => !prev)}
            className="w-full flex items-center justify-between gap-3 text-left"
            aria-expanded={isContextOpen}
            aria-label={isContextOpen ? 'Collapse context' : 'Expand context'}
          >
            <h3 className="text-sm font-bold uppercase tracking-wide text-indigo-900">Context</h3>
            <ChevronDown
              className={`h-4 w-4 text-indigo-700 transition-transform ${isContextOpen ? '' : '-rotate-90'}`}
            />
          </button>

          {isContextOpen && (
            <>
              <div className="space-y-3">
                {contextBlocks.map((block, index) =>
                  block.type === 'text' ? (
                    <p
                      key={`${question.id}-ctx-${index}`}
                      className="text-sm text-indigo-950 leading-relaxed whitespace-pre-line"
                    >
                      {renderBoldMarkup(block.content)}
                    </p>
                  ) : (
                    <img
                      key={`${question.id}-ctx-img-${index}`}
                      src={block.url}
                      alt={`Context visual ${index + 1}`}
                      className="w-full rounded-xl border border-indigo-100 bg-white"
                      loading="lazy"
                    />
                  ),
                )}
              </div>
            </>
          )}
        </div>
      )}

      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 leading-tight">
        {renderBoldMarkup(question.question)}
      </h2>

      {question.questionImageUrls && question.questionImageUrls.length > 0 && (
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.questionImageUrls.map((url, index) => (
            <img
              key={`${question.id}-qimg-${index}`}
              src={url}
              alt={`Question visual ${index + 1}`}
              className="w-full rounded-xl border border-gray-200 bg-white"
              loading="lazy"
            />
          ))}
        </div>
      )}
      
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
