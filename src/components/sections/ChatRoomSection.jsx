import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const ChatRoomSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="py-12 md:mt-0 mt-3">
      {/* <SectionHeader title={t('achievements.title')} description={t('achievements.description')} /> */}
      <SectionHeader title={t('chatroom.title')} description={t('chatroom.description')} />
    </div>
  );
};

export default ChatRoomSection;
