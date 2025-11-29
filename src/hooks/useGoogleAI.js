// src/hooks/useGoogleAI.js
import { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export const useGoogleAI = () => {
  const { t } = useContext(LanguageContext);

  const [messages, setMessages] = useState([
    {
      role: 'model',
      text: t('aiassistant.greeting'),
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (messages.length === 1 && messages[0].role === 'model') {
    }
  }, [t]);

  const sendMessage = async (userMessage) => {
    if (!userMessage.trim()) return;

    const newMessages = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const historyToSend = messages.filter((_, index) => index !== 0);
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: userMessage,
          history: historyToSend,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'model', text: data.result }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages((prev) => [...prev, { role: 'model', text: 'Waduh, koneksi ke otak Hailyo terputus sebentar. Coba lagi ya! 😅' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
};
