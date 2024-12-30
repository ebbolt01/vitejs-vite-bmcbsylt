import React, { useState } from 'react';
import type { Project } from '../types/projects';

export default function ProjectCard(props: Project) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isDefaultModel = props.a360Link === 'default';

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group h-[400px] relative [perspective:1000px]">
      <div 
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <div className="relative h-full">
            <img
              src={props.imageUrl}
              alt={props.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40">
              <div className="p-6 absolute bottom-0 left-0">
                <h3 className="text-xl font-bold text-white mb-2">{props.title}</h3>
              </div>
            </div>
            <button
              onClick={handleFlip}
              className={`absolute bottom-4 right-4 ${
                isDefaultModel ? 'bg-black' : 'bg-red-600'
              } text-white px-6 py-3 rounded-lg transition-colors`}
            >
              {isDefaultModel ? 'Ver Servicio' : 'Ver Modelo 3D'}
            </button>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white">
          {isDefaultModel ? (
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">{props.title}</h3>
              <p className="text-gray-600 flex-grow">{props.description}</p>
            </div>
          ) : (
            <iframe
              src={props.a360Link}
              className="w-full h-full border-0"
              allowFullScreen
            />
          )}
          <button
            onClick={handleFlip}
            className={`absolute bottom-4 right-4 ${
              isDefaultModel ? 'bg-black' : 'bg-red-600'
            } text-white px-6 py-3 rounded-lg transition-colors`}
          >
            Ver Descripción
          </button>
        </div>
      </div>
    </div>
  );
}