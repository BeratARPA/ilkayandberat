import React from 'react';

interface TimeUnitProps {
  value: number;
  label: string;
}

export function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-red-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 min-w-[140px] shadow-xl relative">
        <div className="text-5xl font-bold text-red-600 mb-2">{value}</div>
        <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
}