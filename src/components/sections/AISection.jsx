import { useRef, useEffect, useContext } from 'react';
import SectionHeader from '../common/SectionHeader';
import { useGoogleAI } from '../../hooks/useGoogleAI';
import { LanguageContext } from '../../contexts/LanguageContext';
import AiChatInterface from './aiassistant/AiChatInterface';

const AISection = () => {
  const { t } = useContext(LanguageContext);
  const { messages, sendMessage, isLoading } = useGoogleAI();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="pt-14 pb-2 lg:pt-8 pb-1 md:mt-0 mt-3" id="ai-assistant">
      <SectionHeader title={'Ask Hailyo'} description={t('aiassistant.description')} />
      <AiChatInterface />
    </div>
  );
};

export default AISection;
