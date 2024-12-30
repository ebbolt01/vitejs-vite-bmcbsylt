import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { submitForm } from '../utils/contactForm';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm(formData);
    if (success) {
      alert('Mensaje enviado con éxito');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Error al enviar el mensaje');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <span>Doctor Lucas Sierra 2807, dpto 420, Quinta Normal</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-red-600" />
                  <span>+56 9 6801 0204</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-red-600" />
                  <span>contacto@ebfservicios.cl</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Síguenos</h3>
              <SocialLinks />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ubicación</h3>
              <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/place/Dr.+Lucas+Sierra+3807,+8530107+Santiago,+Quinta+Normal,+Regi%C3%B3n+Metropolitana/@-33.4276022,-70.6871017,17z/data=!4m15!1m8!3m7!1s0x9662c5c9ce0afbb7:0x3655b406323a5c01!2sDr.+Lucas+Sierra+3807,+8530107+Santiago,+Quinta+Normal,+Regi%C3%B3n+Metropolitana!3b1!8m2!3d-33.4276022!4d-70.6871017!16s%2Fg%2F11h8628421!3m5!1s0x9662c5c9ce0afbb7:0x3655b406323a5c01!8m2!3d-33.4276022!4d-70.6871017!16s%2Fg%2F11h8628421?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}