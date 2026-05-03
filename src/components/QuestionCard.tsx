
"use client";
import React from "react";
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import { useSafeHtml } from "@/hooks/useSafeHtml";
import { prepareOptions, isScorableQuestion } from "@/utils/testUtils";

interface Props {
  question: any;
  globalIndex: number;
  totalQuestions: number;
  answers: Record<string, string[]>;
  isAdvanced: boolean;
  optionsRevealed: boolean;
  onAnswerChange: (id: string, values: string[]) => void;
}

export default function QuestionCard({
  question,
  globalIndex,
  totalQuestions,
  answers,
  isAdvanced,
  optionsRevealed,
  onAnswerChange,
}: Props) {
  const { parseHtml } = useSafeHtml();
  const isScorable = isScorableQuestion(question);
  const showOptions = isScorable && (!isAdvanced || optionsRevealed);
  const shuffledOptions =
    question.shuffledOptions || prepareOptions(question.options, question.type);

  const showNumbering = globalIndex > 0;

  return (
    <div className="rounded-[var(--radius)] border border-[var(--border-color)] bg-[var(--card-background)] sm:p-[2.25rem_2.2rem] p-[1.6875rem_1.65rem] space-y-[22px] relative group">
      <div className="space-y-2">
        <h4
          className="font-bold text-white sm:text-[16px] text-[15px] leading-snug"
          {...parseHtml(question.text)}
        />

        {question.subtext && (
          <p
            className="text-[var(--muted-foreground)] sm:text-[15px] text-[14px] leading-relaxed"
            {...parseHtml(question.subtext)}
          />
        )}

        {question.image && (
          <div
            className="relative w-full rounded-lg overflow-hidden border border-[var(--border-color)] mt-4 flex justify-center items-center"
            style={{
              height: "16rem",
              backgroundColor: question.imageBgColor || "#000",
            }}
          >
            <img
              src={question.image}
              alt="Question context"
              style={{
                height: "82%",
                width: "auto",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
                userSelect: "none",
                pointerEvents: "none",
                WebkitUserDrag: "none",
                KhtmlUserDrag: "none",
                MozUserDrag: "none",
                OUserDrag: "none",
                userDrag: "none"
              }}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        )}

        {question.sectiontext && (
          <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
            <div
              className="sm:text-[15px] text-[14px] leading-[1.7] text-[var(--slightly-subtle-foreground)] prose prose-sm max-w-none"
              style={{ textAlign: "justify", lineHeight: "1.7" }}
              {...parseHtml(question.sectiontext)}
            />
          </div>
        )}
      </div>

      {showOptions && (
        <CustomCheckbox
          groupDirection="column"
          groupGap={12}
          maxSelected={
            (question.correctValues?.length || 0) > 1 ? 99 : 1
          }
          options={shuffledOptions.map((opt: any) => {
            return {
              value: opt.value,
              label: <span {...parseHtml(opt.text)} />,
              checkboxProps: {
                backgroundColor: "var(--checkbox-background)",
                accentColor: "var(--theme-color)",
                borderColor: "var(--checkbox-outline)",
                outlineHoverColor: "var(--checkbox-outline-hover)",
                labelFontSize: "15px",
                borderRadius: "var(--radius)",
                borderWidth: 1.5,
                labelColor: "var(--slightly-subtle-foreground)",
              },
            };
          })}
          values={answers[question.id] || []}
          onGroupChange={(vals) => onAnswerChange(question.id, vals)}
        />
      )}

      {showNumbering && (
        <span className="absolute bottom-4 right-6 text-[var(--subtle-color)] text-[11px] font-mono tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {globalIndex} / {totalQuestions}
        </span>
      )}

      <style jsx>{`
        .italic {
          font-style: italic;
        }
        .bold {
          font-weight: 700;
        }
        .prose p {
          margin-bottom: 1.25rem;
          margin-top: 0;
        }
        .prose p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}
