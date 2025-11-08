import React from 'react';

export default function MeSection() {
  return (
    <section id="me" className="relative py-20">
      <div className="mx-auto w-full max-w-3xl px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About me</h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-800">
          I'm Fabric. This space is mostly for me: notes, vibes, and a log of what I'm into.
          I enjoy games, exploring weird mechanics, and giving things my quick personal rating — the Fabric's Mark of Approval.
        </p>

        <div className="mt-8 grid gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Social</h3>
            <ul className="mt-3 space-y-2 text-gray-800">
              <li>
                <a className="underline decoration-gray-400 underline-offset-4 hover:text-black" href="https://github.com/" target="_blank" rel="noreferrer">
                  github.com/fabric
                </a>
              </li>
              {/* Add more socials if you like, keep it minimal */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
