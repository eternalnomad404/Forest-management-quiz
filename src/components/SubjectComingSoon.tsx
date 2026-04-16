import { motion } from 'motion/react';

interface SubjectComingSoonProps {
  onBack: () => void;
}

export default function SubjectComingSoon({ onBack }: SubjectComingSoonProps) {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-indigo-100"
      >
        <button
          type="button"
          onClick={onBack}
          className="mb-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
        >
          ← Back to subjects
        </button>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          Human Computer Interactions
        </h1>
        <p className="text-gray-600 mb-6">
          Still building this subject experience. Check back soon for the full quiz flow.
        </p>
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-indigo-900 font-semibold">
          Still building — check back soon!
        </div>
      </motion.div>
    </div>
  );
}
