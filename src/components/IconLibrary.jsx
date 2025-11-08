import React from 'react';
import {
  Star,
  Gamepad2,
  Rocket,
  Heart,
  BookOpen,
  Code2,
  Cpu,
  Globe,
  Music,
  Film,
  BadgeCheck,
} from 'lucide-react';

const ICON_MAP = {
  Star,
  Gamepad2,
  Rocket,
  Heart,
  BookOpen,
  Code2,
  Cpu,
  Globe,
  Music,
  Film,
  BadgeCheck,
};

export function getIconByName(name) {
  if (!name) return null;
  const Icon = ICON_MAP[name];
  return Icon || null;
}

export default ICON_MAP;
