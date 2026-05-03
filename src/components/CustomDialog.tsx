"use client";

import React, { useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChronicleButton from "@/components/ui/RefinedChronicleButton";
import { ModalOverlay } from "@/components/modal-overlay";
import { cn } from "@/lib/utils";

interface CustomDialogProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  descriptionLine2?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  showLegal?: boolean;
}

const ANIMATION_DURATION = 0.3;

export const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onOpenChange,
  title = "100% Free English Level Test (A1-C2)",
  description = "",
  descriptionLine2 = "",
  confirmText = "",
  cancelText = "",
  onConfirm,
  onCancel,
  showLegal = false,
}) => {
  const handleCancel = useCallback(() => {
    onOpenChange?.(false);
    onCancel?.();
  }, [onOpenChange, onCancel]);

  const handleConfirm = useCallback(() => {
    onOpenChange?.(false);
    onConfirm?.();
  }, [onOpenChange, onConfirm]);

  const isEndTest = !showLegal;

  return (
    <AnimatePresence>
      {open && (
        <ModalOverlay onClose={handleCancel}>
          <motion.div
            key="custom-dialog"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative w-full max-w-[520px] rounded-[var(--radius)] border p-4 sm:p-6 shadow-xl outline-none",
              "flex flex-col items-center gap-4",
              "text-center"
            )}
            style={{
              backgroundColor: "var(--card-background)",
              borderColor: "var(--border-color)",
              color: "var(--foreground)",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.45), 0 4px 6px -2px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h2 className="w-full pt-1 text-center text-[18px] font-bold tracking-tight">
              {title}
            </h2>

            <div className="flex w-full flex-col gap-3">
              <div className="flex w-full flex-col gap-[6px] max-sm:gap-[1px] text-center">
                {description && (
                  <p className="text-[14.75px] leading-relaxed text-[var(--muted-foreground)] max-sm:text-[13px]">
                    {description}
                  </p>
                )}
                {descriptionLine2 && (
                  <p className="text-[14.75px] leading-relaxed text-[var(--muted-foreground)] max-sm:text-[13px]">
                    {descriptionLine2}
                  </p>
                )}
              </div>

              {showLegal && (
                <div className="w-full space-y-4 pt-2 text-center sm:text-left">
                  <p className="border-t border-[var(--border-color)] pt-4 text-[10px] leading-relaxed text-[var(--subtle-color)] text-justify">
                    This test is a mere assessment independently created and is not affiliated with,
                    endorsed by, authorized by, or certified by the Common European Framework of Reference
                    for Languages (CEFR). Any CEFR level shown is a mere estimate based on internal scoring
                    method and should not be treated as an official certification or the CEFR-certified
                    exam score prediction.
                  </p>

                  <p className="text-[11px] text-[var(--muted-foreground)]">
                    By taking this test, you're accepting the{" "}
                    <a
                      href="/terms"
                      target="_blank"
                      className="text-[var(--theme-color)] hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      className="text-[var(--theme-color)] hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>

            <div className="flex w-full flex-col gap-3 pt-4 sm:flex-row">
              {isEndTest ? (
                <>
                  <ChronicleButton
                    onClick={handleCancel}
                    className="w-full sm:flex-1"
                    backgroundColor="var(--foreground)"
                    textColor="var(--background)"
                    hoverBackgroundColor="var(--theme-color)"
                    hoverTextColor="var(--foreground)"
                  >
                    {cancelText}
                  </ChronicleButton>

                  <ChronicleButton
                    onClick={handleConfirm}
                    className="w-full sm:flex-1"
                    backgroundColor="var(--background)"
                    textColor="var(--foreground)"
                    borderColor="var(--border-color)"
                    borderVisible={true}
                    hoverBorderVisible={false}
                    hoverBackgroundColor="var(--theme-red)"
                  >
                    {confirmText}
                  </ChronicleButton>
                </>
              ) : (
                <>
                  <ChronicleButton
                    onClick={handleConfirm}
                    className="order-1 w-full sm:order-1 sm:flex-1"
                    backgroundColor="var(--background)"
                    textColor="var(--foreground)"
                    borderColor="var(--border-color)"
                    borderVisible={true}
                    hoverBorderVisible={false}
                    hoverBackgroundColor="var(--theme-color)"
                  >
                    {confirmText}
                  </ChronicleButton>

                  <ChronicleButton
                    onClick={handleCancel}
                    className="order-2 w-full sm:order-2 sm:flex-1"
                    backgroundColor="var(--foreground)"
                    textColor="var(--background)"
                    hoverBackgroundColor="var(--theme-red)"
                    hoverTextColor="var(--foreground)"
                  >
                    {cancelText}
                  </ChronicleButton>
                </>
              )}
            </div>
          </motion.div>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};