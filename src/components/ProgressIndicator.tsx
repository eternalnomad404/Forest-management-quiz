import { motion } from 'motion/react';

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export default function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5 px-1">
        <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-widest">
          {current} / {total}
        </span>
        <span className="text-[10px] md:text-xs font-black text-white">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
