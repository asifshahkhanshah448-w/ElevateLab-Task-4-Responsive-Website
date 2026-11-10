'use client';

import React, { useState } from 'react';
import {
  Code,
  Users,
  Award,
  Terminal,
  Laptop,
  CheckCircle2,
  GitBranch,
  FileCode,
  ShieldCheck
} from 'lucide-react';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      title: 'Production Tasks, Not Toy Exercises',
      subtitle: 'Real Engineering Standards',
      description:
        'ElevateLab rejects mock tutorials. Every assignment, like Task 4 (Mobile-Friendly Responsive CSS Media Queries), mirrors the exact code review rigor, breakpoint matrices, and QA checks of Tier-1 software engineering teams.',
      bullets: [
        'Strict breakpoint coverage: 375px, 576px, 768px, 992px, 1200px, 1440px',
        'Mandatory accessibility: minimum 44x44px touch targets',
        'Fluid typography mathematically bound with clamp()',
      ],
      icon: Terminal,
    },
    {
      title: '1-on-1 Senior Staff Code Reviews',
      subtitle: 'Line-by-Line Mentorship',
      description:
        'Interns receive detailed Pull Request feedback from senior staff engineers. We audit DOM depth, paint times, CSS specificity, and layout stability across actual physical devices.',
      bullets: [
        'Lighthouse audits targeting 95+ performance & accessibility',
        'Automated CI/CD linting and TypeScript strict type-checking',
        'Live device lab testing on iOS, Android, and Desktop browsers',
      ],
      icon: Users,
    },
    {
      title: 'Career Acceleration & Placement',
      subtitle: 'Direct Pipeline to Hiring Partners',
      description:
        'Our top-performing interns are directly introduced to partner technology companies, venture-backed startups, and remote development teams worldwide upon completing all tasks.',
      bullets: [
        'Verified internship completion credential & transcript',
        'Showcase portfolio ready for live recruiter inspection',
        'Technical interview prep with mock system architecture rounds',
      ],
      icon: Award,
    },
  ];

  return (
    <section id="curriculum" className="py-12 md:py-20 border-b border-slate-900 bg-slate-950">
      <div className="elevate-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
            <span>The ElevateLab Standard</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Internship Philosophy</span>
          </div>
          <h2 className="text-fluid-section font-bold text-white tracking-tight [text-wrap:balance]">
            Bridging the Gap Between Academic Code and Production Software
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-2 leading-relaxed">
            Founded by veteran engineers, ElevateLab simulates a modern engineering team environment where tasks are solved with clean architecture and strict quality standards.
          </p>
        </div>

        {/* 2-Column Responsive Split Layout (Grid stacks on tablet & mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start elevate-about-grid">
          {/* Left Column: Interactive Pillar Selectors (Span 5 on desktop) */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all touch-target ${
                    isActive
                      ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/5'
                      : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                        {pillar.subtitle}
                      </div>
                      <div
                        className={`text-sm md:text-base font-semibold ${
                          isActive ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {pillar.title}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Pillar Details & Interactive Preview (Span 7 on desktop) */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-cyan-400">
                Pillar 0{activeTab + 1}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white">
                {pillars[activeTab].title}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed pt-1">
                {pillars[activeTab].description}
              </p>
            </div>

            {/* Bullets List */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Key Deliverables & Standards
              </h4>
              {pillars[activeTab].bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Responsive Inspection Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-500">Live Architecture Review</span>
                <span className="text-emerald-400 font-mono text-[11px]">100% Pass Rate</span>
              </div>
              <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[98%]" />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 font-mono pt-1">
                <span>Task 1-3: Foundations</span>
                <span className="text-cyan-400 font-bold">Task 4: CSS Media Queries</span>
                <span>Task 5: Final Capstone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
