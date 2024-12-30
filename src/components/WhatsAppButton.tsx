import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-72 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right">
          <div className="bg-green-500 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-6 h-6 text-white" />
              <span className="text-white font-medium">WhatsApp Chat</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-gray-600 mb-4">¡Hola! ¿En qué podemos ayudarte?</p>
            <a
              href="https://wa.me/56968010204"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Iniciar Chat
            </a>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center ${isOpen ? 'rotate-180' : ''}`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}