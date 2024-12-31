import React from 'react';

interface QuoteProps {
  text: string;
  author: string;
}

export function Quote({ text, author }: QuoteProps) {
  return (
    <div className="italic text-gray-600 text-center my-8 max-w-2xl mx-auto">
      <p className="text-xl leading-relaxed before:content-[\u0022] after:content-[\u0022] before:mr-1 after:ml-1">
        {text}
      </p>
      <p className="text-right mt-2 text-red-500">- {author}</p>
    </div>
  );
}