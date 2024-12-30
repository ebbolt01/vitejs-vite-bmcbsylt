import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: keyof typeof LucideIcons;
  className?: string;
}

export default function Icon({ name, className = "" }: IconProps) {
  const LucideIcon = LucideIcons[name];
  return <LucideIcon className={className} />;
}