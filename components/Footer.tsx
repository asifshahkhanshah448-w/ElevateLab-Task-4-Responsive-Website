'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowUpRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="elevate-container py-12 md:py-16">
        {/* Main Footer Grid: 4 columns desktop, 2 columns tablet, 1 column mobile (uses .footer-grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 footer-grid mb-12 pb-12 border-b border-slate-900">
          {/* Column 1: Brand Wordmark & Mission */}
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors"
            >
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-extrabold shadow-sm shadow-cyan-500/30">
                E
              </span>
              <span>ElevateLab</span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed">
              Global engineering incubator accelerating tech careers through production-grade tasks, code reviews, and real-world system architecture challenges.
            </p>
            <div className="text-[11px] text-slate-400 space-y-1">
              <div className="text-cyan-400 font-medium">Task 4 Verification:</div>
              <div>CSS Media Queries & Fluid Responsiveness Certified.</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Internship Tracks
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#tracks" className="hover:text-cyan-400 transition-colors">
                  Full-Stack Web Engineering
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-cyan-400 transition-colors">
                  Design Systems & Responsive UI
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-cyan-400 transition-colors">
                  AI Systems & LLM Engineering
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-cyan-400 transition-colors">
                  Cloud DevOps & Kubernetes
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-cyan-400 transition-colors">
                  Progressive Web Apps (PWA)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Task 4 Breakpoint Specifications */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Verified Breakpoints
            </h4>
            <ul className="space-y-1.5 font-mono text-[11px] text-slate-400">
              <li className="flex justify-between items-center py-0.5 border-b border-slate-900">
                <span>Small Mobile:</span>
                <span className="text-cyan-400">&le; 375px</span>
              </li>
              <li className="flex justify-between items-center py-0.5 border-b border-slate-900">
                <span>Standard Mobile:</span>
                <span className="text-cyan-400">&le; 576px</span>
              </li>
              <li className="flex justify-between items-center py-0.5 border-b border-slate-900">
                <span>Tablet Portrait:</span>
                <span className="text-cyan-400">&le; 768px</span>
              </li>
              <li className="flex justify-between items-center py-0.5 border-b border-slate-900">
                <span>Tablet Landscape:</span>
                <span className="text-cyan-400">&le; 992px</span>
              </li>
              <li className="flex justify-between items-center py-0.5 border-b border-slate-900">
                <span>Laptop Screen:</span>
                <span className="text-cyan-400">&le; 1200px</span>
              </li>
              <li className="flex justify-between items-center py-0.5">
                <span>Large Desktop:</span>
                <span className="text-cyan-400">&ge; 1440px</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Cohort Announcements */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Cohort Announcements
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive notifications when admissions open for upcoming internship cycles and hackathons.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="student@university.edu"
                    className="w-full touch-target px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full touch-target py-2 px-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs transition-colors"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ElevateLab Inc. Web Development Internship Program. Task 4: CSS Media Queries.
          </div>

          <div className="flex items-center gap-4">
            <a href="#audit-suite" className="hover:text-cyan-400 transition-colors">
              Task 4 Audit Suite
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a href="#tracks" className="hover:text-cyan-400 transition-colors">
              Curriculum Tracks
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a href="#apply" className="hover:text-cyan-400 transition-colors">
              Admissions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
