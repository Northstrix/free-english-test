"use client";
import React from 'react';
import ComplexityReport from '@/components/legal/ComplexityReport';
import { ChevronLeft } from 'lucide-react';

export default function ComplexityReportPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 md:px-6 flex flex-col items-center">
      <div className="w-full">
        <a href="/" className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-white mb-8 transition-colors text-xs font-bold tracking-widest px-4">
          <ChevronLeft size={16} />
          Back to Homepage
        </a>
        <div className="w-full">
          <ComplexityReport />
        </div>
        <div className={"pt-4 text-[13px] text-[var(--slightly-subtle-foreground)] leading-relaxed text-center w-full"} dir="ltr">
          <div className="mb-1">
            Made by{" "}
            <a
              href="https://maxim-bortnikov.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--theme-color)] hover:underline transition-colors"
            >
              Maxim Bortnikov
            </a>
          </div>

          <div className="mb-10">
            using{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--theme-color)] hover:underline transition-colors"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://www.perplexity.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--theme-color)] hover:underline transition-colors"
            >
              Perplexity
            </a>
            ,{" "}
            and{" "}
            <a
              href="https://firebase.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--theme-color)] hover:underline transition-colors"
            >
              Firebase Studio
            </a>.
          </div>
        </div>
      </div>
    </div>
  );
}