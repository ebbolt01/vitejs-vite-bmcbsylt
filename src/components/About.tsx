import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Equipo Especializado',
    description: 'Profesionales con amplia experiencia en BIM y construcción'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Calidad Garantizada',
    description: 'Compromiso con la excelencia en cada proyecto'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Enfoque Innovador',
    description: 'Soluciones personalizadas y efectivas'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Mejora Continua',
    description: 'Comunicación constante y retroalimentación'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre Nosotros</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              En <span className="font-bold">Ebf Servicios E.I.R.L.</span>, reunimos una amplia experiencia en la gestión y desarrollo de proyectos de construcción, destacándonos por nuestra capacidad de adaptarnos y responder a los desafíos del sector.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nuestro enfoque se centra en la colaboración estrecha con nuestros clientes, entendiendo sus necesidades y objetivos para ofrecer soluciones personalizadas y efectivas. Edgard Esteban Bascuñán, con más de once años de trayectoria, lidera un equipo comprometido que se enfrenta a los cambios y plazos ajustados con agilidad y determinación.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-red-600">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
              alt="Equipo de trabajo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}