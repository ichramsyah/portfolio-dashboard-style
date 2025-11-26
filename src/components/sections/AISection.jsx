import React, { useState, useRef, useEffect, useContext } from 'react';
import SectionHeader from '../common/SectionHeader';
import { useGoogleAI } from '../../hooks/useGoogleAI';
import { AiOutlineSend } from 'react-icons/ai';
import { FaRobot, FaUser } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext';
import remarkGfm from 'remark-gfm';

const AISection = () => {
  const { t } = useContext(LanguageContext);
  const { messages, sendMessage, isLoading } = useGoogleAI();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

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
    <div className="py-14 lg:py-8 md:mt-0 mt-3" id="ai-assistant">
      <SectionHeader title={'Ask Hailyo'} description={'Asisten AI pribadi yang siap menjawab pertanyaan seputar skill dan pengalaman Ichram.'} />

      <div className="mt-8">
        <section className="overflow-hidden bg-whitee dark:bg-background-dark">
          {/* Header Chat AI */}
          {/* <div className="p-4 border-b border-gray-3 dark:border-gray-6/10 flex items-center gap-3 bg-gray-1 dark:bg-gray-8/50">
            <div className="p-2 bg-gradient-to-br from-blue-400 to-gray-300 rounded-full shadow-md">
              <BsStars className="text-white text-xl animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-gray-9 dark:text-gray-1 text-sm md:text-base flex items-center gap-2">
                HelloChram <span className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20">Beta</span>
              </h3>
              <p className="text-xs text-gray-5 dark:text-gray-4 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online • Powered by Gemini
              </p>
            </div>
          </div> */}

          {/* Area Chat */}
          <main className="h-100 overflow-y-auto overflow-x-hidden md:pr-3 pr-0 space-y-10 bg-whitee dark:bg-background-dark transition-colors duration-300">
            {messages.map((msg, idx) => {
              const isAI = msg.role === 'model';
              return (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={idx} className={`flex items-start gap-3 ${isAI ? 'justify-start' : 'justify-end'}`}>
                  {/* Avatar AI */}
                  {isAI && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-gray-300 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <BsStars className="text-white text-xl animate-pulse" />
                    </div>
                  )}

                  {/* Bubble Chat */}
                  <div
                    className={`relative max-w-[85%] md:max-w-[75%] px-5 py-3.5 pb-4 text-sm md:text-[16px] leading-relaxed ${
                      isAI ? 'bg-gray-2/50 dark:bg-gray-4/10 text-gray-8 dark:text-gray-2 rounded-2xl rounded-tl-none ' : 'bg-gray-3/50 dark:bg-gray-4/10 text-gray-9 dark:text-gray-1 rounded-2xl rounded-tr-none'
                    }`}
                  >
                    {isAI ? (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ node, ...props }) => <p className="mb-3 last:mb-0 leading-relaxed" {...props} />,

                          ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-3 space-y-1" {...props} />,
                          ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-3 space-y-1" {...props} />,
                          li: ({ node, ...props }) => <li className="pl-1" {...props} />,

                          h1: ({ node, ...props }) => <h1 className="text-lg font-bold mb-2 mt-4" {...props} />,
                          h2: ({ node, ...props }) => <h2 className="text-base font-bold mb-2 mt-3" {...props} />,
                          h3: ({ node, ...props }) => <h3 className="text-sm font-bold mb-1 mt-2" {...props} />,

                          strong: ({ node, ...props }) => <strong className="font-bold text-gray-9 dark:text-whitee" {...props} />,
                          a: ({ node, ...props }) => <a className="text-blue-4 dark:text-blue-3 hover:underline hover:text-blue-300 break-all" target="_blank" rel="noreferrer" {...props} />,

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
                              <code className="bg-gray-2 dark:bg-gray-7 px-1 py-0.5 rounded text-xs font-mono text-red-500 dark:text-red-400" {...props}>
                                {children}
                              </code>
                            ) : (
                              <div className="my-3 overflow-hidden rounded-lg bg-whitee dark:bg-gray-6/10 border border-gray-5 dark:border-gray-7">
                                <div className="px-4 py-1 bg-whitee dark:bg-gray-6/10 text-xs font-semibold text-gray-8 dark:text-gray-3 border-b border-gray-5 dark:border-gray-7">Code</div>
                                <code className="block p-3 overflow-x-auto text-xs font-mono text-gray-9 dark:text-gray-3" {...props}>
                                  {children}
                                </code>
                              </div>
                            );
                          },
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    ) : (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    )}
                  </div>

                  {/* Avatar User */}
                  {/* {!isAI && (
                    <div className="w-8 h-8 rounded-full bg-gray-2 dark:bg-gray-8 flex items-center justify-center flex-shrink-0 border border-gray-3 dark:border-gray-5">
                      <FaUser className="text-gray-5 dark:text-gray-3 text-sm" />
                    </div>
                  )} */}
                </motion.div>
              );
            })}

            {/* Loading Typing Indicator */}
            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                {/* <div className="w-8 h-8 rounded-full bg-whitee dark:bg-gray-7 border border-gray-2 dark:border-gray-6 flex items-center justify-center shadow-sm">
                  <FaRobot className="text-blue-500 text-sm" />
                </div> */}
                <div className="bg-gray-1 dark:bg-gray-6/30 px-4 py-3 rounded-2xl rounded-tl-none border border-gray-2 dark:border-gray-6/50 flex gap-1 items-center h-[46px]">
                  <span className="w-1.5 h-1.5 bg-gray-4 dark:bg-gray-4 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-4 dark:bg-gray-4 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-4 dark:bg-gray-4 rounded-full animate-bounce"></span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </main>

          {/* Input Form */}
          <div className="py-6 px-1 bg-whitee dark:bg-background-dark border-t border-gray-3 dark:border-gray-6 transition-colors duration-300">
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Mulai ketik pertanyaanmu..."
                className="text-gray-8 dark:text-gray-2 bg-gray-1 dark:bg-gray-5/20 flex-grow px-3 py-4 pl-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-3 dark:focus:ring-gray-5 transition-all duration-300 placeholder:text-gray-4 dark:placeholder:text-gray-5 text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`p-4 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  !input.trim() || isLoading ? 'cursor-not-allowed bg-gray-2 dark:bg-gray-5/20 text-gray-4' : 'bg-gray-9 dark:bg-gray-3/20 text-whitee dark:text-whitee hover:scale-105 shadow-lg cursor-pointer'
                }`}
              >
                <AiOutlineSend size={20} />
              </button>
            </form>
            <p className="text-center text-[12px] text-gray-4 dark:text-gray-5 mt-2">AI dapat membuat kesalahan. Silakan verifikasi informasi penting.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AISection;
