import React from 'react';
import AbstractLinesBackground from './components/AbstractLinesBackground';
import Hero from './components/Hero';
import MeSection from './components/MeSection';
import ReviewsSection from './components/ReviewsSection';
import DarkLinesSection from './components/DarkLinesSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Light abstract background for the main page */}
      <AbstractLinesBackground />

      {/* Content layers above background with extra contrast for readability */}
      <div className="relative z-10">
        <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
          <div className="mx-auto max-w-5xl px-6 md:px-8 py-3 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight">Fabric</a>
            <nav className="flex items-center gap-5 text-sm">
              <a href="#me" className="hover:underline underline-offset-4">Me</a>
              <a href="#reviews" className="hover:underline underline-offset-4">List</a>
              <a href="#deep" className="hover:underline underline-offset-4">Deep</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">GitHub</a>
            </nav>
          </div>
        </header>

        <main>
          <Hero />
          <MeSection />
          <ReviewsSection />
          <DarkLinesSection />
        </main>

        <footer className="py-10 text-center text-xs text-gray-500">
          Built for Fabric — a simple personal page. No work, just me.
        </footer>
      </div>
    </div>
  );
}
