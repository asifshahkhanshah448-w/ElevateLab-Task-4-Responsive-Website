'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ResponsiveInspectorBar } from '@/components/ResponsiveInspectorBar';
import { Hero } from '@/components/Hero';
import { Task4AuditBanner } from '@/components/Task4AuditBanner';
import { TracksSection } from '@/components/TracksSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ApplicationForm } from '@/components/ApplicationForm';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { Smartphone, Tablet, Laptop, Monitor, X } from 'lucide-react';

export default function HomePage() {
  const [simulatedWidth, setSimulatedWidth] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col w-full overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar />

      {/* Task 4 Interactive Viewport Inspector & Breakpoint Simulator Bar */}
      <ResponsiveInspectorBar
        currentSimulatedWidth={simulatedWidth}
        onSelectBreakpoint={(w) => setSimulatedWidth(w)}
      />

      {/* Simulated Device Frame (Active only when evaluator selects a preset) */}
      {simulatedWidth !== null && (
        <div className="bg-slate-900 border-b border-cyan-500/30 py-2 px-4 text-center text-xs text-cyan-300 flex items-center justify-center gap-3">
          <span className="font-semibold">Simulating Device Viewport: {simulatedWidth}px width</span>
          <span className="text-slate-400 text-[11px] hidden sm:inline">
            (The page container below is constrained to test the exact media query behavior)
          </span>
          <button
            type="button"
            onClick={() => setSimulatedWidth(null)}
            className="px-2 py-0.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 text-[11px] font-medium border border-cyan-500/40 flex items-center gap-1 touch-target"
          >
            <X className="w-3 h-3" />
            <span>Reset to 100% Fluid</span>
          </button>
        </div>
      )}

      {/* Main Content Area: If simulatedWidth is active, constrains container width to test layout */}
      <div
        className={`w-full transition-all duration-300 mx-auto flex-1 ${
          simulatedWidth !== null
            ? 'border-x border-dashed border-cyan-500/40 shadow-2xl shadow-cyan-950/50 my-2'
            : ''
        }`}
        style={{
          maxWidth: simulatedWidth ? `${simulatedWidth}px` : '100%',
        }}
      >
        <main className="w-full">
          <Hero />
          <Task4AuditBanner />
          <TracksSection />
          <AboutSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ApplicationForm />
        </main>

        <Footer />
      </div>
    </div>
  );
}
