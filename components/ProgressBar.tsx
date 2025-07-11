
import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const cappedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
      <div
        className="bg-sky-500 h-2.5 rounded-full transition-all duration-200 ease-linear"
        style={{ width: `${cappedPercentage}%` }}
      ></div>
    </div>
  );
};
