'use client';
import React, { useState } from 'react';
import { Home, Gamepad2, BookOpen, Shield, Scale, FileText } from 'lucide-react';
import { useResponsiveCardSize } from '@/hooks/useResponsiveCardSize';
import { useIsMobileFooter3rdColumn } from '@/hooks/use-mobile-footer-3rd-column';
import HolographicCard from '@/components/HolographicCard';
import NamerUiBadge from '@/components/NamerUiBadge';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AcknowledgementsSection from './AcknowledgementsSection';

interface FooterProps {
  onCardClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onNavigate: (target: string) => void;
}

export default function AppFooter({ onCardClick, onNavigate }: FooterProps) {
  const [isCreditOpen, setIsCreditOpen] = useState(false);
  const { width: responsiveWidth, height: responsiveHeight } = useResponsiveCardSize(320, 480);
  const isMobileFooter3rdColumn = useIsMobileFooter3rdColumn();

  const navItems = [
    { label: 'Home', icon: <Home size={17} />, onClick: () => onNavigate('hero') },
    { label: 'Start Test', icon: <Gamepad2 size={17} />, onClick: () => onNavigate('level-selector') },
    { label: 'Terms of Service', icon: <Scale size={17} />, href: '/terms' },
    { label: 'Privacy Policy', icon: <Shield size={17} />, href: '/privacy' },
    { label: 'Complexity Report', icon: <FileText size={17} />, href: '/complexity-report' },
    { label: 'Credit', icon: <BookOpen size={17} />, onClick: () => setIsCreditOpen(true) },
  ];

  const renderNavLink = (item: any) => (
    <li key={item.label} className="text-[1rem] py-1">
      {item.href ? (
        <a href={item.href} className="w-full hover:no-underline group">
          <span className="text-[hsl(var(--foreground)/0.9)] group-hover:text-[hsl(var(--primary))] group-hover:underline transition-colors inline-flex items-center gap-1.5 justify-center w-full" style={{ lineHeight: 1.75 }}>
            {item.icon}
            <span>{item.label}</span>
          </span>
        </a>
      ) : (
        <button onClick={item.onClick} className="w-full hover:no-underline group">
          <span className="text-[hsl(var(--foreground)/0.9)] group-hover:text-[hsl(var(--primary))] group-hover:underline transition-colors inline-flex items-center gap-1.5 justify-center w-full" style={{ lineHeight: 1.75 }}>
            {item.icon}
            <span>{item.label}</span>
          </span>
        </button>
      )}
    </li>
  );

  const CreditSection = ({ className }: { className?: string }) => (
    <div className={cn("pb-8 text-[13px] text-[var(--slightly-subtle-foreground)] leading-relaxed", className)} dir="ltr">
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
  );

  return (
    <section className="w-full relative bg-[#0a0a0a] border-t border-[var(--border-color)]">
      <div className="w-full overflow-hidden max-w-[1296px] mx-auto px-6 md:px-10 flex flex-col items-center lg:grid lg:grid-cols-3 lg:items-stretch gap-8 lg:gap-12 xl:gap-16">
        {/* Column 1: App Info & Badges */}
        <div className="flex flex-col lg:pt-20 items-center lg:items-start text-center lg:text-left space-y-6 w-full lg:max-w-md mx-auto lg:mx-0">
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <a href="/" className="group block hover:no-underline focus:no-underline">
              <div
                className="flex items-center space-x-[10px] p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer mt-12 lg:mt-0"
                style={{ display: 'inline-flex', lineHeight: 1.2 }}
              >
                <img
                  src="/logo.webp"
                  alt="Logo"
                  width={36}
                  height={36}
                  className="object-contain border border-[var(--border-color)] rounded-[var(--radius)] select-none flex-shrink-0"
                />
                <span className="inline-block">
                  <span className="font-headline text-[16px] max-sm:text-[14px] font-bold select-none whitespace-nowrap text-[hsl(var(--foreground))] transition-colors duration-300 ease-in-out group-hover:text-[var(--theme-color)]">
                    100% Free English Level Test (A1-C2)
                  </span>
                </span>
              </div>
            </a>
          </div>
          <p className="text-sm text-[var(--slightly-subtle-foreground)] max-w-md mb-8 lg:mb-12 mx-auto lg:mx-0 leading-relaxed lg:text-left">
            Assess your English proficiency level (A1-C2) for free — no sign-up, payment, or email required.
          </p>
          
          <div className="grid grid-cols-1 w-max gap-4 mx-auto lg:mx-0 mb-8">
            <NamerUiBadge 
              href="https://namer-ui.vercel.app/" 
              poweredByText="Powered by" 
              namerUIName="Namer UI" 
              iconSrc="/namer-ui-logo.png"
            />
            <NamerUiBadge 
              href="https://blueberry-loom.netlify.app/" 
              poweredByText="Contains code from" 
              namerUIName="Blueberry Loom" 
              iconSrc="/blueberry-loom-logo.webp"
              isWHiteLogoBackground
            />
          </div>
          
          <CreditSection className="hidden lg:block text-left" />
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col lg:pt-20 items-center lg:items-center w-full lg:w-auto text-center mx-auto lg:mx-0">
          <h3 className="font-headline text-base lg:text-lg font-semibold text-[hsl(var(--foreground))] tracking-wide mb-6 lg:mb-8"> Navigation </h3>
          <ul className="flex flex-col items-center gap-2 w-full lg:w-72">
            {navItems.map(renderNavLink)}
          </ul>
        </div>

        {/* Column 3: Card & Mobile Credits */}
        <div className="flex flex-col lg:pt-20 items-center lg:items-end w-full lg:w-auto mx-auto lg:mx-0">
          <div className="my-6 lg:my-[30px] w-full lg:w-[320px] transform lg:-translate-y-5 flex justify-center lg:justify-end">
            <div className="max-sm:hidden sm:mb-10 cursor-pointer w-full max-w-[320px]" onClick={onCardClick}>
              <HolographicCard imageSrc="card-image.webp" electricColor="#119EED" borderRadius={12} width={responsiveWidth} height={responsiveHeight} onClick={onCardClick} enableDrag={false} />
            </div>
          </div>
          <CreditSection className="lg:hidden text-center w-full px-4" />
        </div>
      </div>

      <Dialog open={isCreditOpen} onOpenChange={setIsCreditOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#0a0a0a] border-[var(--border-color)] text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black uppercase text-center mb-6">Credit</DialogTitle>
          </DialogHeader>
          <AcknowledgementsSection />
        </DialogContent>
      </Dialog>
    </section>
  );
}
