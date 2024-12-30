import React from 'react';
import { projectCategories } from '../data/projects';
import { ProjectCategoryCard } from './ProjectCategoryCard';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCategories.map((category) => (
            <ProjectCategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}