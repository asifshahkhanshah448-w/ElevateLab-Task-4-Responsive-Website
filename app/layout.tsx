import type {Metadata, Viewport} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ElevateLab — Web Development Internship Platform',
  description: 'ElevateLab Web Development Internship Task 4: Responsive website engineered with CSS media queries across 375px, 576px, 768px, 992px, 1200px, and 1440px.',
  openGraph: {
    title: 'ElevateLab — Web Development Internship Platform',
    description: 'ElevateLab Web Development Internship Task 4: Responsive website engineered with CSS media queries across all device viewports.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElevateLab — Web Development Internship Platform',
    description: 'ElevateLab Web Development Internship Task 4: Responsive website engineered with CSS media queries.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
