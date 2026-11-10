'use client';

import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Cloud,
  Smartphone,
  Shield,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle,
  X
} from 'lucide-react';

interface Track {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  icon: React.ElementType;
  syllabus: string[];
  keyTools: string[];
}

export function TracksSection() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const tracks: Track[] = [
    {
      id: 'web-dev',
      title: 'Full-Stack Web Engineering',
      category: 'Software Engineering',
      duration: '12 Weeks',
      level: 'Intermediate to Advanced',
      description:
        'Master responsive web architecture, Next.js App Router, CSS media queries, state management, and real-time backend API integration.',
      icon: Code2,
      syllabus: [
        'Module 1: Responsive Layouts & CSS Media Queries',
        'Module 2: Modern JavaScript (ES2024) & TypeScript Rigor',
        'Module 3: Next.js App Router & Server Components Architecture',
        'Module 4: Relational Databases, REST & GraphQL APIs',
        'Module 5: Production CI/CD, Lighthouse Audits & Deployment',
      ],
      keyTools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    },
    {
      id: 'frontend-arch',
      title: 'Design Systems & Responsive UI',
      category: 'UI/UX Engineering',
      duration: '10 Weeks',
      level: 'All Levels',
      description:
        'Build scalable accessible component libraries, fluid typography engines, and mobile-first touch interfaces with zero layout shift.',
      icon: Layers,
      syllabus: [
        'Module 1: CSS Box Model, Fluid clamp() & Viewport Units',
        'Module 2: Micro-Interactions & Hardware-Accelerated Motion',
        'Module 3: WCAG AA Accessibility, ARIA & Touch Target Math',
        'Module 4: Headless Component Engineering & Tokens',
        'Module 5: Cross-Browser Mobile Emulation & Device Testing',
      ],
      keyTools: ['CSS3 Grid/Flexbox', 'Tailwind v4', 'Framer Motion', 'Radix UI', 'Storybook'],
    },
    {
      id: 'ai-ml',
      title: 'AI Systems & LLM Engineering',
      category: 'Artificial Intelligence',
      duration: '12 Weeks',
      level: 'Advanced',
      description:
        'Develop real-world AI applications using Gemini SDK, retrieval-augmented generation (RAG), vector embeddings, and streaming interfaces.',
      icon: Cpu,
      syllabus: [
        'Module 1: Multimodal LLM Foundations & Prompt Engineering',
        'Module 2: Embeddings, Vector Stores & Hybrid Search',
        'Module 3: Streaming Tokens & Responsive AI Chat Interfaces',
        'Module 4: Agent Workflows, Tool Calling & Structured Outputs',
        'Module 5: Production Guardrails, Latency Budgets & Caching',
      ],
      keyTools: ['Google GenAI SDK', 'Python/TypeScript', 'Pinecone', 'LangChain', 'FastAPI'],
    },
    {
      id: 'cloud-devops',
      title: 'Cloud Architecture & DevOps',
      category: 'Infrastructure',
      duration: '10 Weeks',
      level: 'Intermediate',
      description:
        'Deploy scalable containerized web workloads using Kubernetes, automated CI/CD pipelines, Cloud Run, and infrastructure as code.',
      icon: Cloud,
      syllabus: [
        'Module 1: Linux Containers, Dockerfile Optimization & Multi-stage Builds',
        'Module 2: Kubernetes Orchestration & Cluster Management',
        'Module 3: CI/CD Pipelines with GitHub Actions & Automated Testing',
        'Module 4: Cloud Run, Autoscaling & Edge Caching',
        'Module 5: Observability, Sentry & Prometheus Monitoring',
      ],
      keyTools: ['Docker', 'Kubernetes', 'GCP / Cloud Run', 'GitHub Actions', 'Terraform'],
    },
    {
      id: 'mobile-pwa',
      title: 'Mobile & Progressive Web Apps',
      category: 'Mobile Engineering',
      duration: '8 Weeks',
      level: 'Intermediate',
      description:
        'Create high-performance offline-first PWAs and touch-optimized applications with service workers, web push, and native feel.',
      icon: Smartphone,
      syllabus: [
        'Module 1: Mobile Viewports, Touch Gestures & Safe Area Insets',
        'Module 2: Service Workers, Cache Storage & Offline Fallbacks',
        'Module 3: Web App Manifest, Install Prompts & App Badging',
        'Module 4: Hardware APIs: Geolocation, Camera & Share',
        'Module 5: Performance Profiling: 60fps Scroll & Low-End Devices',
      ],
      keyTools: ['PWA Standard', 'Service Workers', 'IndexedDB', 'Workbox', 'Lighthouse'],
    },
    {
      id: 'cybersecurity',
      title: 'Web Security & Vulnerability Auditing',
      category: 'Cybersecurity',
      duration: '10 Weeks',
      level: 'Intermediate to Advanced',
      description:
        'Identify and remediate critical web vulnerabilities, OWASP Top 10 risks, secure authentication flows, and data encryption standards.',
      icon: Shield,
      syllabus: [
        'Module 1: OWASP Top 10: XSS, CSRF, Injection & Broken Auth',
        'Module 2: Content Security Policy (CSP) & Strict HTTP Headers',
        'Module 3: Cryptography, JWTs, OAuth 2.0 & Session Security',
        'Module 4: Automated SAST/DAST Vulnerability Scanning',
        'Module 5: Secure Code Audits & Bug Bounty Methodologies',
      ],
      keyTools: ['OWASP ZAP', 'Burp Suite', 'OAuth 2.0', 'CSP Evaluator', 'Node Security'],
    },
  ];

  return (
    <section id="tracks" className="py-12 md:py-20 border-b border-slate-900">
      <div className="elevate-container">
        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400">
            <span>Production Internship Tracks</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Batch 2026</span>
          </div>
          <h2 className="text-fluid-section font-bold text-white tracking-tight [text-wrap:balance]">
            Rigorous Curriculum Built for Modern Engineering Standards
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed [text-wrap:balance]">
            Every track combines rigorous foundational theory with production tasks like Task 4, ensuring you graduate ready for elite software teams.
          </p>
        </div>

        {/* Responsive Grid: Uses .elevate-grid-tracks defined in CSS media queries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 elevate-grid-tracks">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.id}
                className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  {/* Card Header: Icon + Metadata (Clean unboxed text, no pills) */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right text-xs text-slate-400 space-y-0.5">
                      <div>{track.category}</div>
                      <div className="text-slate-500 font-mono text-[11px]">{track.duration}</div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400 mt-2 leading-relaxed">
                      {track.description}
                    </p>
                  </div>

                  {/* Skills / Tools list */}
                  <div className="pt-2">
                    <div className="text-[11px] text-slate-500 mb-1.5 font-medium">Tools & Technologies:</div>
                    <div className="flex flex-wrap gap-1 text-[11px] text-slate-300">
                      {track.keyTools.map((tool, idx) => (
                        <span key={tool} className="text-slate-400">
                          {tool}
                          {idx < track.keyTools.length - 1 && (
                            <span className="text-slate-600 ml-1">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button: Touch Target >= 44px */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">{track.level}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedTrack(track)}
                    className="touch-target px-3.5 py-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Track Syllabus Modal Dialog (Responsive modal <= 95vw on mobile) */}
      {selectedTrack && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setSelectedTrack(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-cyan-400">
                  {selectedTrack.category} · {selectedTrack.duration}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {selectedTrack.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTrack(null)}
                className="touch-target p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-4 space-y-4">
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {selectedTrack.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">
                  Curriculum Breakdown
                </h4>
                <div className="space-y-2">
                  {selectedTrack.syllabus.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Core Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                  {selectedTrack.keyTools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700 text-slate-200 text-xs font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedTrack(null)}
                className="touch-target px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg transition-colors"
              >
                Close
              </button>
              <a
                href="#apply"
                onClick={() => setSelectedTrack(null)}
                className="touch-target px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                Apply for this Track
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
