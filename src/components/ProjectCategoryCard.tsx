import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProjectCategory } from '../types/projects';
import { Link } from 'react-router-dom';

interface ProjectCategoryCardProps extends ProjectCategory {}

export function ProjectCategoryCard({ id, title, description, projects }: ProjectCategoryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{projects.length} proyectos</span>
          <Link
            to={`/proyectos/${id}`}
            className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <span>Ver proyectos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}