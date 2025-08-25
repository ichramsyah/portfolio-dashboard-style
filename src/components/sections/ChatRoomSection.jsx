// src/components/ChatRoomSection.jsx

import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import SectionHeader from '../common/SectionHeader';
import ChatInterface from './chatroom/ChatInterface';
const ChatRoomSection = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="py-12 md:mt-0 mt-3">
      <SectionHeader title={t('chatroom.title')} description={t('chatroom.description')} />

      {/* Cukup letakkan komponen chat di sini */}
      <div className="mt-8">
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatRoomSection;
