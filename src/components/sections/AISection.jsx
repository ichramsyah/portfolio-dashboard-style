import { useRef, useEffect, useContext } from 'react';
import { useGoogleAI } from '../../hooks/useGoogleAI';
import { LanguageContext } from '../../contexts/LanguageContext';
import AiChatInterface from './aiassistant/AiChatInterface';
import { motion } from 'framer-motion';

const AISection = () => {
  const { t } = useContext(LanguageContext);
  const { messages, isLoading } = useGoogleAI();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="pt-14 pb-2 lg:pt-8 pb-1 md:mt-0 mt-3" id="ai-assistant">
      <style>{`
        @keyframes text-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-flow 3s linear infinite;
        }
      `}</style>
      <div className="pb-8 mb-5 border-b border-gray-3 dark:border-gray-7">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} viewport={{ once: true }} className="text-3xl font-medium text-gray-9 dark:text-gray-1 mb-3">
          Ask
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-6 via-blue-3 to-gray-4 animate-text-gradient"> Hailyo</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }} viewport={{ once: true }} className="text-[17px] text-gray-6 dark:text-gray-4">
          {t('aiassistant.description')}
        </motion.p>
      </div>

      <AiChatInterface />
    </div>
  );
};

export default AISection;
