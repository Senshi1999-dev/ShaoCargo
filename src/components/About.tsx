import React, { useEffect, useState } from 'react';
import { Award, Users, Truck as Truck2, Globe } from 'lucide-react';

const About = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    routes: 0,
    countries: "СНГ"
  });

  useEffect(() => {
    const targets = {
      years: 5,
      clients: 1000,
      routes: 98,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targets).map(key => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;
      
      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals[Object.keys(targets).indexOf(key)]);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О компании
              <span className="block text-red-600 mt-2">Shao Cargo</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Таджикская, надёжная и безопасная доставка грузов — с гарантией качества и точностью до минуты. Мы берём на себя ответственность за каждый этап логистики.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Благодаря профессиональной команде и современным технологиям, мы предоставляем сервис высокого уровня и подбираем индивидуальные решения под задачи каждого клиента.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{counters.years}</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              
              <div className="text-center">
                <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{counters.clients}+</div>
                <div className="text-sm text-gray-600">клиентов</div>
              </div>
              
              <div className="text-center">
                <Truck2 className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{counters.routes}%</div>
                <div className="text-sm text-gray-600">маршрутов</div>
              </div>
              
              <div className="text-center">
                <Globe className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{counters.countries}</div>
                <div className="text-sm text-gray-600">страны СНГ</div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши преимущества</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Полный спектр логистических услуг</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Отслеживание груза в реальном времени</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Страхование грузов до 100% стоимости</span>
                </li>
                
              
                
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Индивидуальные тарифы для постоянных клиентов</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;