'use client';

import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  CheckCircle2,
  Sliders,
  ChevronDown,
  ChevronUp,
  Maximize2
} from 'lucide-react';

interface ResponsiveInspectorBarProps {
  currentSimulatedWidth: number | null;
  onSelectBreakpoint: (width: number | null) => void;
}

export function ResponsiveInspectorBar({
  currentSimulatedWidth,
  onSelectBreakpoint,
}: ResponsiveInspectorBarProps) {
  const [realWidth, setRealWidth] = useState<number>(1440);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  useEffect(() => {
    const updateSize = () => {
      setRealWidth(window.innerWidth);
    };
    updateSize();
    window.addEventListener('resize', updateSize, { passive: true });
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const activeWidth = currentSimulatedWidth || realWidth;

  // Determine active media query label
  const getBreakpointInfo = (w: number) => {
    if (w <= 375) {
      return {
        label: 'Small Mobile',
        query: '@media (max-width: 375px)',
        icon: Smartphone,
        color: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
        columns: '1 Column · 100% Fluid Width',
      };
    }
    if (w <= 576) {
      return {
        label: 'Mobile',
        query: '@media (max-width: 576px)',
        icon: Smartphone,
        color: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
        columns: '1 Column · Fluid Stacking',
      };
    }
    if (w <= 768) {
      return {
        label: 'Tablet Portrait',
        query: '@media (max-width: 768px)',
        icon: Tablet,
        color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
        columns: '1-2 Columns · Hamburger Navigation',
      };
    }
    if (w <= 992) {
      return {
        label: 'Tablet Landscape',
        query: '@media (max-width: 992px)',
        icon: Tablet,
        color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
        columns: '2 Columns · Collapsible Drawers',
      };
    }
    if (w <= 1200) {
      return {
        label: 'Laptop',
        query: '@media (max-width: 1200px)',
        icon: Laptop,
        color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
        columns: '2-3 Columns · 960px-1140px Container',
      };
    }
    return {
      label: 'Desktop',
      query: '@media (min-width: 1440px)',
      icon: Monitor,
      color: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
      columns: '3-4 Columns · 1380px Wide Container',
    };
  };

  const currentBp = getBreakpointInfo(activeWidth);
  const CurrentIcon = currentBp.icon;

  const presetBreakpoints = [
    { label: '375px', name: 'Small Mobile', width: 375, icon: Smartphone },
    { label: '576px', name: 'Mobile', width: 576, icon: Smartphone },
    { label: '768px', name: 'Tablet Port', width: 768, icon: Tablet },
    { label: '992px', name: 'Tablet Land', width: 992, icon: Tablet },
    { label: '1200px', name: 'Laptop', width: 1200, icon: Laptop },
    { label: '1440px', name: 'Desktop', width: 1440, icon: Monitor },
  ];

  return (
    <div className="bg-slate-900/95 border-b border-slate-800 text-xs text-slate-300 sticky top-16 md:top-20 z-30 backdrop-blur-md transition-all">
      <div className="elevate-container py-2 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
        {/* Left: Real-time Active Breakpoint Status */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex items-center gap-1.5 font-medium text-slate-100">
            <Sliders className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-semibold text-white">ElevateLab Task 4 Inspector:</span>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-mono font-medium ${currentBp.color}`}
          >
            <CurrentIcon className="w-3 h-3 shrink-0" />
            <span>{currentBp.label}</span>
            <span className="text-slate-400">({activeWidth}px)</span>
          </div>

          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
            {currentBp.query}
          </span>
        </div>

        {/* Right: Quick Viewport Simulation Switcher */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-slate-400 font-medium mr-1 hidden lg:inline">
            Test Breakpoint:
          </span>

          {presetBreakpoints.map((preset) => {
            const isSelected = currentSimulatedWidth === preset.width;
            return (
              <button
                key={preset.width}
                type="button"
                onClick={() =>
                  onSelectBreakpoint(isSelected ? null : preset.width)
                }
                className={`px-2 py-1 rounded text-[11px] font-mono transition-all touch-target ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white'
                }`}
                title={`Simulate ${preset.name} (${preset.width}px)`}
              >
                {preset.label}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => onSelectBreakpoint(null)}
            className={`px-2 py-1 rounded text-[11px] font-sans transition-all flex items-center gap-1 touch-target ${
              currentSimulatedWidth === null
                ? 'bg-slate-700 text-white font-medium border border-slate-600'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white'
            }`}
            title="Reset to 100% fluid browser viewport"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Fluid Real</span>
          </button>
        </div>
      </div>
    </div>
  );
}
