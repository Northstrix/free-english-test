"use client";

import React from 'react';
import { PRIVACY_POLICY } from '@/lib/policy-text';
import { ChevronLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const renderPolicyContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      const isHeader = /^\d+\.\s/.test(line.trim());
      if (isHeader) {
        return (
          <h3 key={i} className="text-[18px] font-black text-white mt-8 mb-4 tracking-tight leading-tight uppercase border-b border-[var(--border-color)] pb-2">
            {line}
          </h3>
        );
      }
      return (
        <p key={i} className="text-[var(--slightly-subtle-foreground)] text-[15px] leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-white mb-8 transition-colors text-xs font-bold tracking-widest">
          <ChevronLeft size={16} />
          Back to Homepage
        </a>

        <div className="rounded-[var(--radius)] border border-[var(--border-color)] bg-[var(--card-background)] overflow-hidden">
          <div className="bg-[rgba(255,255,255,0.03)] sm:p-[1.2rem_2.2rem] p-[1rem_1.65rem] border-b border-[var(--border-color)]">
            <h1 className="text-[var(--theme-color)] text-[24px] font-black tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <div className="sm:p-[2.25rem_2.2rem] p-[1.6875rem_1.65rem] prose prose-invert max-w-none">
            {renderPolicyContent(PRIVACY_POLICY)}
          </div>
        </div>
        <div className={"pt-10 text-[13px] text-[var(--slightly-subtle-foreground)] leading-relaxed text-center w-full"} dir="ltr">
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
