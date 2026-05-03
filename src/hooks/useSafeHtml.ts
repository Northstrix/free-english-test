"use client";

export function useSafeHtml() {
  const parseHtml = (html: string | undefined) => {
    if (!html) return {};
    return {
      dangerouslySetInnerHTML: { __html: html },
    };
  };

  return { parseHtml };
}
