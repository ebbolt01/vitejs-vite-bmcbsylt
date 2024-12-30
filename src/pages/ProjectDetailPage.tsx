import React from 'react';
import { useParams } from 'react-router-dom';
import { projectCategories } from '../data/projects';
import { ProjectViewer } from '../components/ProjectViewer';

export function ProjectDetailPage() {
  const { categoryId, projectId } = useParams();
  
  const project = projectCategories
    .find(cat => cat.id === categoryId)
    ?.projects.find(proj => proj.id === projectId);
  
  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return <ProjectViewer {...project} />;
}