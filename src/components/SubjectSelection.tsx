import { motion } from 'motion/react';

export type SubjectKey =
  | 'forest-management'
  | 'human-computer-interactions'
  | 'joy-of-computing';

interface SubjectSelectionProps {
  onSelectSubject: (subject: SubjectKey) => void;
}

const SUBJECTS: Array<{
  key: SubjectKey;
  title: string;
}> = [
  {
    key: 'forest-management',
    title: 'Forest Management',
  },
  {
    key: 'human-computer-interactions',
    title: 'Human Computer Interactions',
  },
  {
    key: 'joy-of-computing',
    title: 'Joy of Computing',
  },
];

export default function SubjectSelection({ onSelectSubject }: SubjectSelectionProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-indigo-100"
      >
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          Choose a subject
        </h1>
        <p className="text-gray-600 mb-7">
          Select what you want to practice. More subjects will appear here over time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SUBJECTS.map(subject => (
            <button
              key={subject.key}
              type="button"
              onClick={() => onSelectSubject(subject.key)}
              className="text-left rounded-2xl border-2 border-indigo-100 bg-indigo-50/50 p-5 hover:bg-indigo-100 hover:border-indigo-200 transition-colors active:scale-[0.99]"
            >
              <h2 className="text-xl font-bold text-indigo-900">{subject.title}</h2>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
