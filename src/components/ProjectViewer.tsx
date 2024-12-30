import React from 'react';

interface ProjectViewerProps {
  modelId: string;
  title: string;
  description: string;
  client: string;
  date: string;
  location: string;
}

export function ProjectViewer({ modelId, title, description, client, date, location }: ProjectViewerProps) {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video">
              <iframe
                src={`https://viewer.autodesk.com/viewing/viewer?viewableid=${modelId}`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="fullscreen"
              ></iframe>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Descripción</h2>
                <p className="text-gray-600">{description}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Cliente</h2>
                <p className="text-gray-600">{client}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Fecha</h2>
                <p className="text-gray-600">{date}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Ubicación</h2>
                <p className="text-gray-600">{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}