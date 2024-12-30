import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { projectCategories } from '../data/projects';

export function ProjectCategoryPage() {
  const { categoryId } = useParams();
  const category = projectCategories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-red-600">Categoría no encontrada</h1>
          <Link to="/" className="text-blue-600 hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/" className="text-red-600 hover:text-red-700 transition-colors">
            Inicio
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{category.title}</span>
        </div>

        <h1 className="text-4xl font-bold mb-8">{category.title}</h1>
        <p className="text-xl text-gray-600 mb-12">{category.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {category.projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}