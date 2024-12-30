import React from 'react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Servicios BIM y Proyectos de Construcción
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Modelos 3D, Cubicaciones, Presupuestos y Coordinación de Especialidades
        </p>
        <a 
          href="#contact"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg transition-colors inline-block"
        >
          Solicitar Cotización
        </a>
      </div>
    </section>
  );
}