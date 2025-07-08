import React from 'react';
import { Truck, Ship, Plane, Package, Shield, Clock, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-red-600" />,
      title: 'Автомобильные перевозки',
      description: 'Доставка грузов автотранспортом по России и СНГ. Полные и сборные грузы.',
      features: ['Грузоподъемность от 25 кг', 'Сроки: быстрая доставка — 14–20 дней, стандартная — 14–30 дней'],
      note: 'Если груз весит менее 25 кг, он будет отправлен как сборный — консолидирован с другими отправками.'
    },
    {
      icon: <Ship className="h-12 w-12 text-red-600" />,
      title: 'Морские перевозки',
      description: 'Контейнерные и навалочные перевозки морем. Оптимальные маршруты и тарифы.',
      features: ['Контейнеры 20/40 футов', 'Навалочные грузы', 'Мультимодальные перевозки']
    },
    {
      icon: <Plane className="h-12 w-12 text-red-600" />,
      title: 'Авиаперевозки',
      description: 'Срочная доставка грузов авиатранспортом. Экспресс-доставка по всему миру.',
      features: ['Доставка от 3-7 дней']
    },
    {
      icon: <Package className="h-12 w-12 text-red-600" />,
      title: 'Складские услуги',
      description: 'Современные складские комплексы с системой управления складом (WMS).',
      features: ['Площадь до 10000 м²', 'Упаковка и маркировка']
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: 'Страхование грузов',
      description: 'Полное страхование грузов от всех видов рисков. Выплаты в течение 30 дней.',
      features: ['Страхование до 100%', 'Все виды рисков', 'Быстрые выплаты']
    },
    {
  icon: <Search className="h-12 w-12 text-red-600" />,
  title: 'Поиск поставщиков',
  description: 'Мы помогаем найти надёжных поставщиков, выкупаем товар и производим обмен валют для международных сделок.',
  features: ['Поиск и проверка поставщиков', 'Выкуп и логистика товаров', 'Обмен валют и оплата']
}


  ];

const topServices = services.slice(0, 3);
const bottomServices = services.slice(3);

return (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
          Наши услуги
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Полный спектр логистических услуг для вашего бизнеса
        </p>
      </div>

      {/* ВЕРХНИЕ 3 КАРТОЧКИ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {topServices.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="mb-6">
              {service.icon}
              {service.note && (
                <div className="absolute top-4 right-4 group cursor-pointer animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10A8 8 0 112 10a8 8 0 0116 0zM9 7a1 1 0 112 0v4a1 1 0 11-2 0V7zm1 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                  </svg>
                  <div className="absolute z-10 w-64 -left-56 top-6 hidden group-hover:block bg-gray-800 text-white text-sm p-3 rounded-md shadow-md">
                    {service.note}
                  </div>
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* НИЖНИЕ 2 КАРТОЧКИ ПО ЦЕНТРУ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {bottomServices.map((service, index) => (
          <div
            key={index + 3}
            className="relative bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={(index + 3) * 100}
          >
            <div className="mb-6">
              {service.icon}
              {service.note && (
                <div className="absolute top-4 right-4 group cursor-pointer animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10A8 8 0 112 10a8 8 0 0116 0zM9 7a1 1 0 112 0v4a1 1 0 11-2 0V7zm1 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                  </svg>
                  <div className="absolute z-10 w-64 -left-56 top-6 hidden group-hover:block bg-gray-800 text-white text-sm p-3 rounded-md shadow-md">
                    {service.note}
                  </div>
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

};

export default Services;