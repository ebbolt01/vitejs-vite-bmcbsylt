import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ProjectCategoryPage } from './pages/ProjectCategoryPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos/:categoryId" element={<ProjectCategoryPage />} />
          <Route path="/proyectos/:categoryId/:projectId" element={<ProjectDetailPage />} />
        </Routes>
        <WhatsAppButton />
        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 EBF Servicios. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}