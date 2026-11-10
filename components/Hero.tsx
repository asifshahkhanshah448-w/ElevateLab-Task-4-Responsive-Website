'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Code2, Layers, Cpu, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-900">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="elevate-container">
        {/* Main 2-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & CTAs (Span 7 on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Editorial Lead-in Tagline (clean unboxed text, no pills) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs md:text-sm font-medium text-cyan-400">
              <span className="font-semibold tracking-wide">ElevateLab Web Development Internship</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Task 4: CSS Media Queries</span>
            </div>

            {/* Main Headline with Fluid Clamp Sizing & Balanced Wrap */}
            <h1 className="text-fluid-hero font-extrabold text-white tracking-tight [text-wrap:balance]">
              Engineering High-Performance Responsive Web Experiences
            </h1>

            {/* Subheading / Description */}
            <p className="text-fluid-body text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed [text-wrap:balance]">
              Transforming complex multi-track software architectures into fluid, adaptive interfaces. Engineered with precise CSS media queries across desktop (1440px), laptop (1200px), tablet (992px & 768px), and mobile viewports (576px & 375px).
            </p>

            {/* CTAs Group: Responsive Stacking on Mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2 hero-actions-group">
              <a
                href="#tracks"
                className="touch-target px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] transition-all shadow-md shadow-cyan-500/20 text-center flex items-center justify-center gap-2"
              >
                <span>Explore Internship Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#audit-suite"
                className="touch-target px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Inspect Task 4 Code</span>
                <Code2 className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Subtle Value Bullet Points (Unboxed text with dots) */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-xs text-slate-400 flex-wrap">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Zero Horizontal Overflow</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>6 Breakpoint Media Queries</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Touch Targets &ge; 44px</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Visualizer (Span 5 on desktop) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 md:p-6 shadow-xl shadow-black/40 backdrop-blur-sm relative">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">elevate-media-queries.css</span>
                </div>
                <div className="text-[11px] font-mono text-cyan-400 font-medium">
                  CSS3 Standard
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="font-mono text-xs text-slate-300 space-y-2 overflow-x-auto p-3 bg-slate-950 rounded-lg border border-slate-800/80 leading-relaxed no-scrollbar">
                <p className="text-slate-500">{'/* ElevateLab Responsive Architecture */'}</p>
                <p>
                  <span className="text-purple-400">@media</span>{' '}
                  <span className="text-cyan-300">screen and (max-width: 768px)</span> &#123;
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-sky-300">.elevate-grid-tracks</span> &#123;
                </p>
                <p className="pl-8 text-amber-300">grid-template-columns: 1fr;</p>
                <p className="pl-8 text-amber-300">gap: 1.25rem;</p>
                <p className="pl-4 text-slate-300">&#125;</p>
                <p className="pl-4 text-slate-300">
                  <span className="text-sky-300">.elevate-nav</span> &#123;
                </p>
                <p className="pl-8 text-amber-300">display: none; /* Collapses to Drawer */</p>
                <p className="pl-4 text-slate-300">&#125;</p>
                <p>&#125;</p>

                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-semibold">&#10003; Fluid Typography:</span>{' '}
                  <code className="text-cyan-300">clamp(1.5rem, 3vw, 2.5rem)</code>
                </div>
              </div>

              {/* Interactive Device Badges */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800 text-center">
                <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Mobile</div>
                  <div className="font-mono text-xs font-bold text-cyan-400">375px - 576px</div>
                </div>
                <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Tablet</div>
                  <div className="font-mono text-xs font-bold text-cyan-400">768px - 992px</div>
                </div>
                <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Desktop</div>
                  <div className="font-mono text-xs font-bold text-cyan-400">1200px - 1440px+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Responsive KPI Stats Strip (Stacks fluidly 4 cols -> 2 cols -> 1 col) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-16 pt-8 border-t border-slate-900 elevate-stats-strip">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center sm:text-left">
            <div className="text-2xl md:text-3xl font-bold font-mono text-white tabular-nums">
              12,450+
            </div>
            <div className="text-xs text-slate-400 mt-1">Enrolled Interns Worldwide</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center sm:text-left">
            <div className="text-2xl md:text-3xl font-bold font-mono text-cyan-400 tabular-nums">
              98.2%
            </div>
            <div className="text-xs text-slate-400 mt-1">Responsive Audit Pass Rate</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center sm:text-left">
            <div className="text-2xl md:text-3xl font-bold font-mono text-white tabular-nums">
              6 Breakpoints
            </div>
            <div className="text-xs text-slate-400 mt-1">Strict CSS Media Queries</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center sm:text-left">
            <div className="text-2xl md:text-3xl font-bold font-mono text-emerald-400 tabular-nums">
              100 / 100
            </div>
            <div className="text-xs text-slate-400 mt-1">Mobile Performance Score</div>
          </div>
        </div>
      </div>
    </section>
  );
}
