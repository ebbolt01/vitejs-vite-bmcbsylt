import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  viewerUrl: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group h-[300px] [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-red-600 mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-8 py-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}