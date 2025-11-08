import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

// Simple, easily editable list. You can add/remove items by editing the array.
const initialItems = [
  {
    id: 1,
    title: 'Celeste',
    blurb: 'Tight platforming, better feelings.',
    approved: true,
    link: 'https://www.celestegame.com/',
    details: 'Clarity in control and difficulty that respects you. The assist options are design kindness.'
  },
  {
    id: 2,
    title: 'Outer Wilds',
    blurb: 'Curiosity: the game.',
    approved: true,
    link: 'https://www.mobiusdigitalgames.com/outer-wilds.html',
    details: 'A clockwork world that rewards attention. No filler — just wonder.'
  },
  {
    id: 3,
    title: 'A tiny project',
    blurb: 'Maybe one of my experiments.',
    approved: false,
    link: '',
    details: 'Work in progress. Not everything needs a badge yet.'
  }
];

function ApprovalBadge({ approved }) {
  return (
    <span
      className={
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ' +
        (approved
          ? 'bg-black text-white'
          : 'bg-gray-200 text-gray-700')
      }
    >
      <Star className={approved ? 'h-3.5 w-3.5 fill-current' : 'h-3.5 w-3.5'} />
      {approved ? "Fabric's Mark of Approval" : 'Pending'}
    </span>
  );
}

function ReviewItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm p-4 hover:shadow-sm transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
          <p className="mt-1 text-sm text-gray-700">{item.blurb}</p>
          <div className="mt-3"><ApprovalBadge approved={item.approved} /></div>
        </div>
        <button
          onClick={() => setOpen(v => !v)}
          className="shrink-0 inline-flex items-center rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
          aria-expanded={open}
        >
          {open ? <><ChevronUp className="mr-1 h-4 w-4" /> Hide</> : <><ChevronDown className="mr-1 h-4 w-4" /> Review</>}
        </button>
      </div>
      {open && (
        <div className="mt-3 text-sm leading-relaxed text-gray-800">
          <p>{item.details}</p>
          {item.link && (
            <a className="mt-2 inline-flex items-center gap-1 text-gray-900 underline underline-offset-4" href={item.link} target="_blank" rel="noreferrer">
              Visit <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function ReviewsSection() {
  const [items] = useState(initialItems);
  return (
    <section id="reviews" className="relative py-20">
      <div className="mx-auto w-full max-w-3xl px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">List of things I like</h2>
        <p className="mt-2 text-gray-700">A simple list I can edit — games or tiny projects — each can get the mark, and a button reveals notes.</p>
        <div className="mt-8 grid gap-4">
          {items.map(item => (
            <ReviewItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
