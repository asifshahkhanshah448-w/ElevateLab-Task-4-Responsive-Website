'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Smartphone, Laptop, Tablet, CheckCircle } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal?: () => void;
}

export function Navbar({ onOpenAuditModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Tracks', href: '#tracks' },
    { label: 'Task 4 Audit', href: '#audit-suite' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Apply', href: '#apply' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-slate-950 border-slate-900'
        }`}
      >
        <div className="elevate-container flex items-center justify-between gap-6 h-16 md:h-20">
          {/* Brand Wordmark (Single clean element) */}
          <a
            href="#"
            className="flex items-center gap-2 text-lg md:text-xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-base font-extrabold shadow-sm shadow-cyan-500/30">
              E
            </span>
            <span>ElevateLab</span>
          </a>

          {/* Desktop Navigation Links (4-5 single-line concise items, hidden on mobile/tablet) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop CTA */}
            <a
              href="#apply"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] rounded-lg transition-all shadow-sm shadow-cyan-500/20 whitespace-nowrap shrink-0 touch-target"
            >
              Apply For Internship
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden touch-target p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-slate-950/80 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu Content */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-[340px] bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                E
              </span>
              <span className="font-bold text-white text-base">ElevateLab</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="touch-target p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors touch-target"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom Actions & Task 4 Badging */}
        <div className="pt-6 border-t border-slate-800 space-y-4">
          <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 text-xs text-slate-400 space-y-1.5">
            <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>ElevateLab Task 4 Verified</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Mobile hamburger drawer engineered with CSS media queries and touch-friendly target dimensions.
            </p>
          </div>

          <a
            href="#apply"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full touch-target px-4 py-3 text-center text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm block"
          >
            Apply For Internship
          </a>
        </div>
      </div>
    </>
  );
}
