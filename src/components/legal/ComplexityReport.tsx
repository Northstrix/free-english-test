"use client";

import React, { useState } from 'react';
import { ALL_COMPLEXITY_DATA } from '@/lib/complexity-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

export default function ComplexityReport() {
  const [viewMode, setViewMode] = useState<'numbers' | 'grades' | 'colors'>('numbers');
  
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const stratums = ["-", "avg", "+"];
  
  const cefrColumns = levels.flatMap(lvl => 
    stratums.map(strat => ({
      key: `${lvl}${strat === 'avg' ? '' : strat}`,
      label: `${lvl}${strat === 'avg' ? '' : strat}`
    }))
  );

  const getTheme = (val: number | undefined) => {
    if (val === undefined) return { color: 'transparent', grade: '' };
    if (val >= 90) return { color: '#30ED11', grade: 'A' };
    if (val >= 80) return { color: '#87ED19', grade: 'B' };
    if (val >= 70) return { color: '#EDCE11', grade: 'C' };
    if (val >= 60) return { color: '#ED6011', grade: 'D' };
    if (val >= 50) return { color: '#ED3921', grade: 'D' };
    return { color: '#ED1130', grade: 'F' };
  };

  return (
    <div className="rounded-[var(--radius)] border border-[var(--border-color)] bg-[var(--card-background)] overflow-hidden w-full">
      {/* Duo-tone header */}
      <div className="bg-[rgba(255,255,255,0.03)] sm:p-[1.2rem_2.2rem] p-[1rem_1.65rem] border-b border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-[var(--theme-color)] text-[20px] font-black tracking-tight">
          Complexity Report
        </h2>
        <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as any)} className="w-auto">
          <TabsList className="bg-[var(--background-adjacent-color)] border border-[var(--border-color)] h-9">
            <TabsTrigger value="numbers" className="text-[10px] uppercase font-black px-4 data-[state=active]:bg-[var(--theme-color)] data-[state=active]:text-white">Numbers</TabsTrigger>
            <TabsTrigger value="grades" className="text-[10px] uppercase font-black px-4 data-[state=active]:bg-[var(--theme-color)] data-[state=active]:text-white">Grades</TabsTrigger>
            <TabsTrigger value="colors" className="text-[10px] uppercase font-black px-4 data-[state=active]:bg-[var(--theme-color)] data-[state=active]:text-white">Colors</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="p-0">
        <ScrollArea className="w-full">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="border-b border-[var(--border-color)] hover:bg-transparent">
                <TableHead 
                  rowSpan={2} 
                  className="text-[11px] font-black text-white uppercase tracking-wider py-4 px-3 border-r border-[var(--border-color)] text-center bg-[rgba(255,255,255,0.01)] min-w-[80px]"
                >
                  Task ID
                </TableHead>
                <TableHead 
                  colSpan={18} 
                  className="text-[11px] font-black text-[var(--theme-color)] uppercase tracking-wider py-3 px-3 border-r border-[var(--border-color)] text-center bg-[rgba(255,255,255,0.01)]"
                >
                  Passing Probability
                </TableHead>
                <TableHead 
                  rowSpan={2} 
                  className="text-[11px] font-black text-white uppercase tracking-wider py-4 px-3 text-center bg-[rgba(255,255,255,0.01)] min-w-[300px]"
                >
                  Note
                </TableHead>
              </TableRow>
              <TableRow className="border-b border-[var(--border-color)] hover:bg-transparent">
                {cefrColumns.map((col) => (
                  <TableHead 
                    key={col.key} 
                    className="text-[10px] font-black text-white uppercase tracking-tighter py-2 px-2 border-r border-[var(--border-color)] text-center bg-[rgba(255,255,255,0.02)] min-w-[40px]"
                  >
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {ALL_COMPLEXITY_DATA.map((row, idx) => (
                <TableRow key={idx} className="border-b border-[var(--border-color)] last:border-b-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                  <TableCell className="text-[12px] py-3 px-3 border-r border-[var(--border-color)] font-mono text-white text-center">
                    {row.id}
                  </TableCell>
                  {cefrColumns.map((col) => {
                    const val = (row as any)[col.key];
                    const theme = getTheme(val);
                    return (
                      <TableCell 
                        key={col.key} 
                        className={cn(
                          "text-[12px] p-0 border-r border-[var(--border-color)] text-center font-mono",
                          viewMode === 'colors' ? "w-10 h-10 min-w-10" : "py-3 px-2"
                        )}
                        style={{ 
                          backgroundColor: viewMode === 'colors' ? theme.color : 'transparent',
                          color: viewMode === 'colors' ? 'transparent' : theme.color
                        }}
                      >
                        {viewMode === 'numbers' && val !== undefined ? `${val}%` : ''}
                        {viewMode === 'grades' && val !== undefined ? theme.grade : ''}
                      </TableCell>
                    );
                  })}
                  <TableCell className={cn(
                    "text-[13px] py-3 px-4 text-[var(--muted-foreground)] leading-relaxed italic",
                    viewMode === 'colors' && "truncate max-w-[300px]"
                  )}>
                    <div className={cn(viewMode === 'colors' && "line-clamp-1")}>
                      {row.note}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="bg-[rgba(255,255,255,0.03)] sm:p-[1.2rem_2.2rem] p-[1rem_1.65rem] border-t border-[var(--border-color)]">
        <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed italic text-center">
          This complexity report has been generated by Perplexity AI. The AI can make mistakes. For reliable data, calculate the probability of passing each task for each proficiency level and its stratum yourself.
        </p>
      </div>
    </div>
  );
}
