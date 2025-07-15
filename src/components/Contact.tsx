import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import InputMask from 'react-input-mask';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    setErrorMessage('');

    try {
      const { name, email, phone, message } = formData;

      if (!name.trim()) throw new Error('Пожалуйста, введите ваше имя');
      if (!email.trim()) throw new Error('Пожалуйста, введите email');
      if (!message.trim()) throw new Error('Пожалуйста, введите сообщение');
      if (!phone.trim()) throw new Error('Пожалуйста, введите номер телефона');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) throw new Error('Пожалуйста, введите корректный email');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORM_ACCESS_KEY,
          name,
          email,
          phone,
          message,
          from_name: 'ShaoCargo',
          subject: 'Новая заявка с сайта ShaoCargo'
        })
      });

      if (!response.ok) throw new Error('Ошибка при отправке формы. Попробуйте позже.');

      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err: any) {
      setErrorMessage(err.message || 'Произошла ошибка. Попробуйте позже.');
      setShowError(true);
      setTimeout(() => setShowError(false), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Готовы помочь с вашими логистическими задачами
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                    placeholder="ваш@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон (WhatsApp)*</label>
                <InputMask
                  mask="+7 (999) 999-99-99"
                  maskChar="_"
                  value={formData.phone}
                  onChange={(e) => {
                    let input = e.target.value;
                    if (input.startsWith('8')) input = '+7' + input.slice(1);
                    setFormData({ ...formData, phone: input });
                  }}
                >
                  {(inputProps: any) => (
                    <input
                      {...inputProps}
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                      placeholder="+7 (___) ___-__-__"
                    />
                  )}
                </InputMask>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                  placeholder="Укажите вид груза, его вес, откуда и куда доставить.&#10;Это поможет нам сразу приступить к работе :)"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Оставить заявку
                  </>
                )}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Телефон</h4>
                    <p className="text-gray-700">+7 (962) 022-60-95</p>
                    
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">shaocargo@yandex.com</p>
        
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Адрес</h4>
                    <p className="text-gray-700">
                      г. Пятигорск, ул. Октябрьская, 46<br />
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Часы работы</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between"><span>Пн-Пт:</span><span>08:00 - 20:00</span></div>
                  <div className="flex justify-between"><span>Сб:</span><span>09:00 - 18:00</span></div>
                  <div className="flex justify-between"><span>Вс:</span><span>Выходной</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Уведомления */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-slide-in max-w-md">
          <CheckCircle size={20} />
          <span>Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.</span>
        </div>
      )}
      {showError && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-start gap-2 animate-slide-in max-w-md">
          <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />
          <span className="text-sm">{errorMessage}</span>
        </div>
      )}
    </section>
  );
};

export default Contact;
