import React from 'react';
import { Box, Calculator, Layers, Users } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: <Box className="w-12 h-12" />,
    title: 'Modelos 3D',
    description: 'Creación de modelos tridimensionales precisos para proyectos de construcción con tecnología BIM.',
    link: '/servicios/modelos-3d',
    viewerUrl: 'https://autodeskviewer.com/embed/your-model-id-1'
  },
  {
    icon: <Calculator className="w-12 h-12" />,
    title: 'Cubicaciones',
    description: 'Cálculos detallados y precisos de materiales y recursos necesarios para tu proyecto.',
    link: '/servicios/cubicaciones',
    viewerUrl: 'https://autodeskviewer.com/embed/your-model-id-2'
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: 'Presupuestos',
    description: 'Elaboración de presupuestos detallados para licitaciones y estimaciones de costos.',
    link: '/servicios/presupuestos',
    viewerUrl: 'https://autodeskviewer.com/embed/your-model-id-3'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Coordinación BIM',
    description: 'Integración y coordinación de especialidades para optimizar el diseño y la construcción.',
    link: '/servicios/coordinacion-bim',
    viewerUrl: 'https://autodeskviewer.com/embed/your-model-id-4'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}