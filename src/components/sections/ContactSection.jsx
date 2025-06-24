import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const { t } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-gray-9 dark:text-whitee mb-4">{t('contact.title')}</h1>
      <p className="text-xl text-gray-6 dark:text-gray-4 mb-12">{t('contact.subtitle')}</p>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder={t('contact.name')}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-3 dark:border-gray-6 rounded-lg bg-whitee dark:bg-gray-8 text-gray-9 dark:text-whitee focus:ring-2 focus:ring-blue-5 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder={t('contact.email')}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-3 dark:border-gray-6 rounded-lg bg-whitee dark:bg-gray-8 text-gray-9 dark:text-whitee focus:ring-2 focus:ring-blue-5 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder={t('contact.subject')}
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-3 dark:border-gray-6 rounded-lg bg-whitee dark:bg-gray-8 text-gray-9 dark:text-whitee focus:ring-2 focus:ring-blue-5 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder={t('contact.message')}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-3 dark:border-gray-6 rounded-lg bg-whitee dark:bg-gray-8 text-gray-9 dark:text-whitee focus:ring-2 focus:ring-blue-5 focus:border-transparent resize-none"
              />
            </div>
            <button onClick={handleSubmit} className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-6 text-whitee rounded-lg hover:bg-blue-7 transition-colors">
              <Send size={20} />
              <span>{t('contact.send')}</span>
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-1 dark:bg-blue-9 rounded-lg">
              <MapPin size={24} className="text-blue-6 dark:text-blue-4" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-9 dark:text-whitee mb-1">{t('contact.location')}</h3>
              <p className="text-gray-6 dark:text-gray-4">Jakarta, Indonesia</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-1 dark:bg-blue-9 rounded-lg">
              <Phone size={24} className="text-blue-6 dark:text-blue-4" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-9 dark:text-whitee mb-1">{t('contact.phone')}</h3>
              <p className="text-gray-6 dark:text-gray-4">+62 812 3456 7890</p>
            </div>
          </div>

          <div className="p-4 bg-blue-1 dark:bg-blue-9/20 rounded-lg">
            <p className="text-blue-8 dark:text-blue-2 text-sm">{t('contact.responseTime')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
