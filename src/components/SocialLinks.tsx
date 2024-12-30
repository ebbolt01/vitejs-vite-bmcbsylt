import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex space-x-6 items-center">
      <a 
        href="https://facebook.com/ebfservicios" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-700 transition-colors"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a 
        href="https://instagram.com/ebfservicios" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-700 transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a 
        href="https://linkedin.com/company/ebfservicios" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-700 transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
}