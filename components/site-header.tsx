"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none transition-all duration-300">
      <div className="pointer-events-auto relative w-full md:w-auto">
        <nav className="flex w-full h-[56px] items-center justify-between gap-6 md:gap-8 rounded-full bg-white/80 backdrop-blur-xl border border-[var(--hairline-strong)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-5 md:px-6">
          <a className="text-[15px] font-semibold text-[var(--ink)] tracking-tight" href="#top">
            preflight-checker
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-[14px] font-medium text-[var(--body)]">
            <a className="transition-colors hover:text-[var(--ink)]" href="#showcase">Showcase</a>
            <a className="transition-colors hover:text-[var(--ink)]" href="#pipeline">Modules</a>
            <a className="transition-colors hover:text-[var(--ink)]" href="#skill">Skill</a>
            <a className="bg-black text-white px-4 py-2 rounded-full hover:bg-[#1a1a1a] transition-colors tracking-tight" href="#skill">
              Install
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[var(--ink)] p-2 -mr-2 rounded-full hover:bg-[var(--surface-strong)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Menu Popover */}
        {isOpen && (
          <div className="absolute top-[calc(100%+12px)] left-0 right-0 md:hidden bg-white/95 backdrop-blur-xl border border-[var(--hairline-strong)] rounded-[24px] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.12)] flex flex-col gap-5">
            <a className="text-[15px] font-medium text-[var(--ink)]" href="#showcase" onClick={() => setIsOpen(false)}>Showcase</a>
            <a className="text-[15px] font-medium text-[var(--ink)]" href="#pipeline" onClick={() => setIsOpen(false)}>Modules</a>
            <a className="text-[15px] font-medium text-[var(--ink)]" href="#skill" onClick={() => setIsOpen(false)}>Skill</a>
            <a className="bg-black text-white text-center py-3 rounded-[12px] font-medium mt-2" href="#skill" onClick={() => setIsOpen(false)}>
              Install
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
