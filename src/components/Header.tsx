import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-black/80'
      }`}
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Левый блок: Логотип + навигация */}
          <div className="flex items-center gap-10">
            {/* Логотип */}
            <img
              src="/logo.png"
              alt="Shao Cargo"
              className="h-16 w-auto sm:h-20 md:h-24"
            />

            {/* Название компании (мобилка) */}
            <span className="block text-white text-base font-medium md:hidden leading-tight mt-1">
              Логистическая<br />компания ShaoCargo
            </span>

            {/* Навигация (десктоп) */}
            <ul className="hidden md:flex gap-8 text-2xl font-bold text-white">
              {[
                { name: 'Главная', id: 'hero' },
                { name: 'О нас', id: 'about' },
                { name: 'Услуги', id: 'services' },
                { name: 'Контакты', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-yellow-500 transition-all duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Бургер-меню (только мобилка) */}
          <button
            className="md:hidden text-white hover:text-yellow-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Мобильное меню */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="pt-4 pb-2 space-y-2">
            {[
              { name: 'Главная', id: 'hero' },
              { name: 'О нас', id: 'about' },
              { name: 'Услуги', id: 'services' },
              { name: 'Цены', id: 'pricing' },
              { name: 'Контакты', id: 'contact' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-white hover:text-yellow-500 hover:bg-gray-800/50 transition-all duration-300 rounded-md"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
