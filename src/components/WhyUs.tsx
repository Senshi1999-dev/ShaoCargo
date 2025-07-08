import React from 'react';
import { Clock, Shield, Users, Award, Truck as Truck2, Globe, HeartHandshake, TrendingUp } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: 'Пунктуальность',
      description: 'Гарантируем соблюдение сроков доставки в 99.5% случаев'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Безопасность',
      description: 'Полное страхование грузов и современные системы безопасности'
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: 'Экспертиза',
      description: 'Контролируем каждый шаг — от выбора поставщика до доставки. Проверяем товары лично, чтобы вы были уверены в результате'
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: 'Качество',
      description: 'Сертифицированные процессы и высокие стандарты обслуживания'
    },
    {
      icon: <Truck2 className="h-8 w-8 text-red-600" />,
      title: 'Современный флот',
      description: 'Новые автомобили и современное оборудование'
    },
   
    {
      icon: <HeartHandshake className="h-8 w-8 text-red-600" />,
      title: 'Поддержка 24/7',
      description: 'Круглосуточная техническая поддержка и консультации'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
      title: 'Выгодные тарифы',
      description: 'Оптимальные цены и гибкая система скидок'
    }
  ];
const topFeatures = features.slice(0, 4);
const bottomFeatures = features.slice(4);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Мы предлагаем лучшие решения для вашего бизнеса
          </p>
        </div>
        
        {/* Верхний ряд: 4 карточки */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
  {topFeatures.map((feature, index) => (
    <div
      key={index}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      <div className="mb-4">
        {feature.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
    </div>
  ))}
</div>

{/* Нижний ряд: 3 карточки по центру, с такими же размерами */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
  {bottomFeatures.map((feature, index) => (
    <div
      key={index + 4}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full"
      data-aos="zoom-in"
      data-aos-delay={(index + 4) * 100}
    >
      <div className="mb-4">
        {feature.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default WhyUs;