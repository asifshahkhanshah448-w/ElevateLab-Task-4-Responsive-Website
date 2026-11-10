'use client';

import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maya Patel',
      role: 'Frontend Engineer',
      organization: 'Fintech Solutions (Ex-ElevateLab Intern)',
      quote:
        'Task 4 was a turning point for me. Learning how to mathematically calculate typography with clamp() and rigorously test media queries across real viewports prepared me directly for my current engineering role.',
      outcome: 'Hired as Full-Time Software Engineer',
    },
    {
      name: 'David Kim',
      role: 'Full-Stack Developer',
      organization: 'CloudScale Inc (Ex-ElevateLab Intern)',
      quote:
        'The feedback from mentors on my pull requests was unmatched. They taught me to eliminate rigid pixel widths, budget horizontal paddings, and ensure every tap target complies with WCAG AA accessibility.',
      outcome: 'Promoted to Lead UI Architect',
    },
    {
      name: 'Elena Rostova',
      role: 'Design Technologist',
      organization: 'Aero Labs (Ex-ElevateLab Intern)',
      quote:
        'ElevateLab taught me how to treat responsiveness as a first-class architectural concern rather than an afterthought. The breakpoint simulation workflow is something our team still uses today.',
      outcome: 'Secured Tier-1 Tech Offer',
    },
  ];

  return (
    <section className="py-12 md:py-20 border-b border-slate-900 bg-slate-900/20">
      <div className="elevate-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400">
            <span>Verified Alumni Outcomes</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Internship Graduate Proof</span>
          </div>
          <h2 className="text-fluid-section font-bold text-white tracking-tight [text-wrap:balance]">
            From Production Tasks to Industry Careers
          </h2>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed [text-wrap:balance]">
            Read how past ElevateLab interns mastered responsive web engineering, passed rigorous code reviews, and stepped directly into software development roles.
          </p>
        </div>

        {/* 3-Column to 1-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-cyan-400/50" />
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2">
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                  <div className="text-[11px] text-slate-500">{t.organization}</div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
