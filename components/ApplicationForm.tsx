'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, User, Mail, Globe, BookOpen } from 'lucide-react';

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    track: 'web-dev',
    portfolioUrl: '',
    statement: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.fullName.trim()) {
      setError('Please provide your full legal or preferred name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid academic or professional email address.');
      return;
    }
    if (!formData.statement.trim() || formData.statement.length < 10) {
      setError('Please provide a brief statement of intent (at least 10 characters).');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="apply" className="py-12 md:py-20 border-b border-slate-900 bg-slate-950">
      <div className="elevate-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400">
              <span>Cohort 2026 Admissions</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Task 4 Verification</span>
            </div>
            <h2 className="text-fluid-section font-bold text-white tracking-tight [text-wrap:balance]">
              Apply For The ElevateLab Internship Program
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed [text-wrap:balance]">
              Submit your candidate application. This interactive form demonstrates responsive input stacking, touch-friendly tap targets, and accessibility compliance across every breakpoint.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/30">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Application Received!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cyan-400 font-semibold">{formData.fullName}</span>. Your application for the{' '}
                  <span className="text-white font-medium capitalize">{formData.track.replace('-', ' ')}</span> track has been submitted to the admissions committee.
                </p>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 max-w-md mx-auto space-y-1">
                  <div className="font-mono text-cyan-400 font-semibold">ElevateLab Task 4 Verified:</div>
                  <div>Form submission processed without full-page reload or horizontal layout shifting.</div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      track: 'web-dev',
                      portfolioUrl: '',
                      statement: '',
                    });
                  }}
                  className="touch-target px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* 2-Column Responsive Row (Stacks on mobile screens <= 768px) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 form-row-two-col">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-300"
                    >
                      Full Legal Name <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Alex Chen"
                        className="w-full touch-target px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-300"
                    >
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex.chen@university.edu"
                        className="w-full touch-target px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Track Selector & Portfolio URL (Responsive 2-Col Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 form-row-two-col">
                  {/* Track Selection */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="track"
                      className="block text-xs font-semibold text-slate-300"
                    >
                      Target Internship Track <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="track"
                      value={formData.track}
                      onChange={(e) =>
                        setFormData({ ...formData, track: e.target.value })
                      }
                      className="w-full touch-target px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      <option value="web-dev">Full-Stack Web Engineering</option>
                      <option value="frontend-arch">Design Systems & Responsive UI</option>
                      <option value="ai-ml">AI Systems & LLM Engineering</option>
                      <option value="cloud-devops">Cloud Architecture & DevOps</option>
                      <option value="mobile-pwa">Mobile & Progressive Web Apps</option>
                      <option value="cybersecurity">Web Security & Auditing</option>
                    </select>
                  </div>

                  {/* Portfolio or GitHub URL */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="portfolioUrl"
                      className="block text-xs font-semibold text-slate-300"
                    >
                      GitHub or Portfolio URL
                    </label>
                    <input
                      id="portfolioUrl"
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, portfolioUrl: e.target.value })
                      }
                      placeholder="https://github.com/username"
                      className="w-full touch-target px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Statement of Intent / Why ElevateLab */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="statement"
                    className="block text-xs font-semibold text-slate-300"
                  >
                    Statement of Intent & Task Experience <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="statement"
                    rows={4}
                    required
                    value={formData.statement}
                    onChange={(e) =>
                      setFormData({ ...formData, statement: e.target.value })
                    }
                    placeholder="Describe your technical background, interest in responsive design, and goals for the ElevateLab internship cohort..."
                    className="w-full p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors leading-relaxed"
                  />
                </div>

                {/* Submit Action (Touch friendly >= 44px, full width on mobile) */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400 text-center sm:text-left">
                    <span>Applications reviewed on a rolling basis.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto touch-target px-7 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
                  >
                    {submitting ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
