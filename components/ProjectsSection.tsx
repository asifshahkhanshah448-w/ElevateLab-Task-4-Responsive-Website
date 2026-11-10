'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Monitor,
  Smartphone,
  CheckCircle,
  Eye,
  X
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'responsive' | 'fullstack' | 'design';
  categoryLabel: string;
  description: string;
  responsiveHighlights: string[];
  tools: string[];
  liveStatus: string;
  accentGradient: string;
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'responsive' | 'fullstack' | 'design'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'elevate-task-4',
      title: 'ElevateLab Task 4: Responsive Media Queries',
      category: 'responsive',
      categoryLabel: 'CSS Media Queries',
      description:
        'The current flagship assignment: making an existing web application fully responsive across 375px, 576px, 768px, 992px, 1200px, and 1440px with zero horizontal scroll.',
      responsiveHighlights: [
        'Fluid clamp() typography scaling',
        'Mobile hamburger drawer navigation',
        'Touch targets strictly >= 44x44px',
        '6 discrete CSS @media queries',
      ],
      tools: ['Next.js 15', 'CSS3 Media Queries', 'Tailwind CSS', 'TypeScript'],
      liveStatus: 'Active Inspection',
      accentGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
    {
      id: 'nexus-analytics',
      title: 'Nexus Data & Analytics Dashboard',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Application',
      description:
        'A high-density financial metrics dashboard featuring responsive data tables, collapsible sidebars, and adaptive SVG charting for mobile viewports.',
      responsiveHighlights: [
        'Horizontal scrollable data tables on mobile',
        'Collapsible drawer sidebar navigation',
        'Touch-optimized date range pickers',
      ],
      tools: ['React 19', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
      liveStatus: 'Verified Production',
      accentGradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    },
    {
      id: 'aurora-design-system',
      title: 'Aurora Component Library & Tokens',
      category: 'design',
      categoryLabel: 'Design System',
      description:
        'An accessible, headless UI component library engineered with WCAG AA contrast compliance, responsive spacing tokens, and keyboard navigation.',
      responsiveHighlights: [
        'Fluid spacing token scale (clamp-based)',
        'Container queries for reusable micro-layouts',
        'Screen-reader tested ARIA landmarks',
      ],
      tools: ['TypeScript', 'Radix UI', 'CSS Custom Properties', 'Storybook'],
      liveStatus: 'Verified Production',
      accentGradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    },
    {
      id: 'hyperion-commerce',
      title: 'Hyperion Mobile-First Storefront',
      category: 'responsive',
      categoryLabel: 'E-Commerce Responsive',
      description:
        'High-converting mobile-first shopping experience with thumb-zone checkout drawer, multi-column bento product showcase, and adaptive media.',
      responsiveHighlights: [
        'Thumb-friendly sticky bottom checkout bar',
        'Swipeable product gallery with touch gestures',
        'Zero layout shift (CLS < 0.02)',
      ],
      tools: ['Next.js App Router', 'Stripe API', 'Tailwind CSS', 'PWA'],
      liveStatus: 'Verified Production',
      accentGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
    {
      id: 'pulse-realtime',
      title: 'Pulse Collaborative Workspaces',
      category: 'fullstack',
      categoryLabel: 'Real-Time Web',
      description:
        'Multi-user live kanban and document collaboration platform with fluid grid column reordering and mobile-friendly task assignment modals.',
      responsiveHighlights: [
        'Draggable cards with touch gesture fallback',
        'Adaptive multi-column board view',
        'Lightweight mobile payload (< 120KB)',
      ],
      tools: ['WebSocket', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      liveStatus: 'Verified Production',
      accentGradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    },
    {
      id: 'lumina-editorial',
      title: 'Lumina Tech Journalism & Reader',
      category: 'design',
      categoryLabel: 'Typography & Editorial',
      description:
        'Long-form digital publication engineered for maximum reading comfort, featuring responsive typographic measure (65ch), dark mode, and footnotes.',
      responsiveHighlights: [
        'Dynamic 65ch line measure across all widths',
        'Fluid optical sizing on headline typography',
        'Responsive off-canvas footnote drawer on mobile',
      ],
      tools: ['CSS Grid', 'Tailwind Typography', 'MDX', 'Next.js'],
      liveStatus: 'Verified Production',
      accentGradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="showcase" className="py-12 md:py-20 border-b border-slate-900 bg-slate-900/30">
      <div className="elevate-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <span>Student Works & Deliverables</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">ElevateLab Portfolio</span>
            </div>
            <h2 className="text-fluid-section font-bold text-white tracking-tight [text-wrap:balance]">
              Production Showcase Engineered by Interns
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Inspect responsive architectures, mobile layouts, and code implementations delivered by ElevateLab cohort participants.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 self-start md:self-auto flex-wrap">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 touch-target ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('responsive')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 touch-target ${
                filter === 'responsive'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Responsive CSS (Task 4)
            </button>
            <button
              type="button"
              onClick={() => setFilter('fullstack')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 touch-target ${
                filter === 'fullstack'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full-Stack Apps
            </button>
            <button
              type="button"
              onClick={() => setFilter('design')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 touch-target ${
                filter === 'design'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Design Systems
            </button>
          </div>
        </div>

        {/* Responsive Projects Grid: Uses .elevate-grid-projects defined in CSS media queries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 elevate-grid-projects">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-slate-950/80 border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              {/* Card Visual Header / Media Preview */}
              <div
                className={`h-40 w-full bg-gradient-to-br ${project.accentGradient} p-5 border-b border-slate-800/80 flex flex-col justify-between relative`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-cyan-400 font-semibold">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {project.liveStatus}
                  </span>
                </div>

                {/* Styled Domain Graphic representation */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 shadow-sm">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm line-clamp-1">
                      {project.title}
                    </div>
                    <div className="text-[11px] text-slate-400">Tested across 6 Viewports</div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Responsive Highlights */}
                  <div className="mt-3 pt-3 border-t border-slate-800/60 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Responsive Enhancements:
                    </div>
                    {project.responsiveHighlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tools & Details Action */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <div className="text-[11px] text-slate-400 truncate max-w-[180px]">
                    {project.tools.join(' · ')}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="touch-target px-3 py-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:bg-slate-900 rounded-lg transition-colors flex items-center gap-1 shrink-0"
                  >
                    <span>Inspect</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Inspection Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {activeProject.categoryLabel}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="touch-target p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4">
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {activeProject.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Responsive Engineering Highlights
                </h4>
                <div className="space-y-2">
                  {activeProject.responsiveHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2.5"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Tech Stack & Libraries
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tools.map((tool) => (
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

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="touch-target px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg transition-colors"
              >
                Close
              </button>
              <a
                href="#audit-suite"
                onClick={() => setActiveProject(null)}
                className="touch-target px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                View Breakpoints Matrix
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
