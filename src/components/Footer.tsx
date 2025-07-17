import React from 'react';
import {Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo.png" alt="Shao Cargo" className="h-10 w-auto" />
              <span className="text-xl font-bold">Shao Cargo</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Надежный партнер в сфере логистики. Доставляем грузы по всему миру.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock size={16} />
              <span className="text-sm">Поддержка 24/7</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Автомобильные перевозки</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Морские перевозки</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Авиаперевозки</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Складские услуги</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Страхование грузов</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Услуги</a></li>
    
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <p className="text-gray-400">+7 (962) 022-60-95</p>
                  
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <p className="text-gray-400">shaocargo@yande.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <p className="text-gray-400">г. Пятигорск, ул. Октябрьская, 46</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Shao Cargo. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;