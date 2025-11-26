import React, { useState, useRef, useEffect, useContext } from 'react';
import { useGoogleAI } from '../../../hooks/useGoogleAI';
import { AiOutlineSend } from 'react-icons/ai';
import { BsStars, BsShieldLock } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import remarkGfm from 'remark-gfm';
import { LanguageContext } from '../../../contexts/LanguageContext';

const Typewriter = ({ text, speed = 15, onStatusChange }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (onStatusChange) onStatusChange(true);

    const words = text.split(/(\s+)/);
    let index = 0;
    setDisplayedText('');

    const intervalId = setInterval(() => {
      if (index < words.length) {
        setDisplayedText(words.slice(0, index + 1).join(''));
        index++;
      } else {
        clearInterval(intervalId);
        if (onStatusChange) onStatusChange(false);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
      if (onStatusChange) onStatusChange(false);
    };
  }, [text, speed]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {displayedText}
      </ReactMarkdown>
    </motion.div>
  );
};

const markdownComponents = {
  p: ({ node, ...props }) => <p className="mb-3 last:mb-0 leading-relaxed" {...props} />,
  ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-3 space-y-1" {...props} />,
  ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-3 space-y-1" {...props} />,
  li: ({ node, ...props }) => <li className="pl-1" {...props} />,
  h1: ({ node, ...props }) => <h1 className="text-[17px] font-bold mb-2 mt-4" {...props} />,
  h2: ({ node, ...props }) => <h2 className="text-[17px] font-bold mb-2 mt-3" {...props} />,
  h3: ({ node, ...props }) => <h3 className="text-[17px] font-bold mb-4 mt-4" {...props} />,
  strong: ({ node, ...props }) => <strong className="font-bold text-gray-8 dark:text-gray-2" {...props} />,
  a: ({ node, ...props }) => <a className="text-blue-500 hover:underline break-all" target="_blank" rel="noreferrer" {...props} />,
  table: ({ node, ...props }) => (
    <div className="overflow-x-auto my-4 rounded-lg border border-gray-3 dark:border-gray-6 shadow-sm">
      <table className="min-w-full divide-y divide-gray-3 dark:divide-gray-6 text-sm w-full text-left" {...props} />
    </div>
  ),
  thead: ({ node, ...props }) => <thead className="bg-gray-1 dark:bg-gray-6/10 font-semibold" {...props} />,
  tbody: ({ node, ...props }) => <tbody className="divide-y divide-gray-2 dark:divide-gray-7 bg-whitee dark:bg-transparent" {...props} />,
  tr: ({ node, ...props }) => <tr className="" {...props} />,
  th: ({ node, ...props }) => <th className="px-4 py-3 text-left text-xs font-bold text-gray-5 dark:text-gray-4 uppercase tracking-wider border-b border-gray-2 dark:border-gray-6" {...props} />,
  td: ({ node, ...props }) => <td className="px-4 py-3 text-gray-7 dark:text-gray-3 whitespace-pre-wrap align-top border-b border-gray-1 dark:border-gray-7 last:border-0" {...props} />,
  code: ({ node, inline, className, children, ...props }) => {
    return inline ? (
      <code className="bg-gray-2 dark:bg-gray-7 px-1 py-0.5 rounded text-xs font-mono text-red-500 dark:text-red-400 border border-gray-3 dark:border-gray-6" {...props}>
        {children}
      </code>
    ) : (
      <div className="my-3 overflow-hidden rounded-lg bg-whitee dark:bg-gray-4/10 ">
        <div className="px-4 py-1.5 bg-gray-2 dark:bg-gray-4/10 text-xs font-semibold text-gray-6 dark:text-gray-4   flex items-center gap-2">
          <span>Code</span>
        </div>
        <code className="block p-3 overflow-x-auto text-[14px] font-mono text-gray-8 dark:text-gray-3 leading-relaxed" {...props}>
          {children}
        </code>
      </div>
    );
  },
};

const AiChatInterface = () => {
  const { t } = useContext(LanguageContext);
  const { messages, sendMessage, isLoading } = useGoogleAI();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <section className="overflow-hidden bg-whitee dark:bg-background-dark">
      <main className="h-[450px] overflow-y-auto overflow-x-hidden lg:p-4 p-1.5 md:pr-10 pr-1 space-y-6 bg-whitee dark:bg-background-dark scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 transition-all duration-300">
        <AnimatePresence>
          {messages.map((msg, idx) => {
            const isAI = msg.role === 'model';
            const isLastMessage = idx === messages.length - 1;
            const shouldAnimate = isAI && isLastMessage && !isLoading;

            const isActiveAvatar = isAI && isLastMessage && isTyping;

            return (
              <motion.div layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} key={idx} className={`flex items-start gap-3 ${isAI ? 'justify-start' : 'justify-end'}`}>
                {isAI && (
                  <div className="relative w-8 h-8 flex-shrink-0 mt-1 flex items-center justify-center">
                    {isActiveAvatar && <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-spin blur-[1px] opacity-70"></div>}

                    {/* Avatar Utama */}
                    <div
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center shadow-sm z-10 transition-all duration-300 
                      ${isActiveAvatar ? 'bg-gray-9 dark:bg-gray-8 scale-105' : 'bg-gradient-to-br from-blue-4 to-gray-3'}`}
                    >
                      <BsStars className={`text-white text-xl ${isActiveAvatar ? 'animate-pulse' : ''}`} />
                    </div>
                  </div>
                )}

                {/* Bubble Chat */}
                <div
                  className={`relative max-w-[85%] md:max-w-[75%] px-5 py-3.5 pb-4 text-sm md:text-[16px] leading-relaxed ${
                    isAI
                      ? 'bg-gray-2/50 dark:bg-gray-4/10 text-gray-8 dark:text-gray-3 rounded-2xl rounded-tl-none border border-gray-2 dark:border-transparent'
                      : 'bg-blue-2/40 dark:bg-gray-4/20 text-gray-8 dark:text-gray-1 rounded-2xl rounded-tr-none'
                  }`}
                >
                  {isAI ? (
                    shouldAnimate ? (
                      <Typewriter text={msg.text} speed={10} onStatusChange={setIsTyping} />
                    ) : (
                      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                        {msg.text}
                      </ReactMarkdown>
                    )
                  ) : (
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-2 dark:bg-gray-7 flex items-center justify-center">
              <BsStars className="text-gray-4 dark:text-gray-5 text-sm animate-pulse" />
            </div>

            <div className="bg-gray-1 dark:bg-gray-4/10 px-4 py-3 rounded-2xl rounded-tl-none border border-gray-2 dark:border-gray-4/10 flex gap-1 items-center h-[46px]">
              <span className="w-1.5 h-1.5 bg-gray-4 dark:bg-gray-4 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-4 dark:bg-gray-4 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-4 dark:bg-gray-4 rounded-full animate-bounce"></span>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </main>

      <div className="py-4 px-4 bg-whitee dark:bg-background-dark border-t border-gray-3 dark:border-gray-6 transition-colors duration-300">
        <form onSubmit={handleSend} className="flex items-center gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('aiassistant.input')}
            className="text-gray-8 dark:text-gray-2 bg-gray-1 dark:bg-gray-5/20 flex-grow px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/10 transition-all duration-300 placeholder:text-gray-4 dark:placeholder:text-gray-6 text-sm border border-transparent focus:border-gray-5/30"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`p-3.5 rounded-xl transition-all duration-300 flex-shrink-0 flex items-center justify-center ${
              !input.trim() || isLoading
                ? 'cursor-not-allowed bg-gradient-to-br from-gray-2 to-gray-2 dark:bg-gradient-to-br dark:from-gray-5/20 dark:to-gray-5/20 text-gray-4'
                : 'bg-gradient-to-br from-blue-4 to-gray-2 dark:bg-gradient-to-br dark:from-blue-4 dark:to-gray-2 text-white dark:text-gray-9 hover:scale-105 hover:shadow-lg cursor-pointer'
            }`}
          >
            <AiOutlineSend size={18} />
          </button>
        </form>
        {/* Footer Aman */}
        <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-gray-4 dark:text-gray-5 opacity-80">
          <BsShieldLock size={12} className="text-green-500" />
          <p className="font-medium text-center">{t('aiassistant.footer') || 'Privasi terjaga. Chat hilang saat reload.'}</p>
        </div>
      </div>
    </section>
  );
};

export default AiChatInterface;
