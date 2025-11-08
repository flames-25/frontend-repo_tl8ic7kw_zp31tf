import React from 'react';
import { Github, ArrowDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-white/70 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">Fabric</h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-700">
          Just a me page. No hustle talk, no resume lore. I like games, tinkering,
          and making tiny things that feel good.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-900 px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>

        
          <a href="#me" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
            <ArrowDown className="h-4 w-4" />
            About me
          </a>
        </div>
      </div>
    </section>
  );
}
