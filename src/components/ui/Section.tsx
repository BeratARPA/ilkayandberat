import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <section className="my-24 px-4 max-w-7xl mx-auto relative">
      {children}
    </section>
  );
}