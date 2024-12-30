import React from 'react';
import { Building2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Building2 className="w-10 h-10 text-red-600" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
          <span className="text-red-600 text-xs font-bold">3D</span>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white leading-none">EBF</h1>
        <p className="text-sm text-red-600 font-semibold">Servicios</p>
      </div>
    </div>
  );
}