import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { BriefcaseBusiness } from 'lucide-react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.9,
      duration: 0.9,
      ease: 'easeOut',
    },
  }),
};

const Experience = () => {
  const { t } = useContext(LanguageContext);
  const experienceItems = t('about.experienceItems', { returnObjects: true });

  return (
    <div className="mb-7 pb-7 border-b border-gray-3 dark:border-gray-7">
      <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} viewport={{ once: true }} className="flex items-center text-xl  text-gray-9 dark:text-whitee mb-6">
        <BriefcaseBusiness className="mr-2" /> {t('about.experience')}
      </motion.h3>
      <div className="">
        {experienceItems.map((exp, index) => (
          <div key={index} className="flex space-x-4">
            {/* Left: Timeline (dot + line) */}
            <div className="flex-shrink-0 flex flex-col items-center">
              {/* Dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
                viewport={{ once: true }}
                className={`w-4 h-4 rounded-full ${exp.current ? 'bg-green-5' : 'bg-blue-3 dark:bg-blue-3'}`}
              ></motion.div>

              {/* Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '90%' }}
                transition={{ duration: 1, ease: 'easeOut', delay: index * 0.5 + 0.2 }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-0.5 h-full bg-gray-3 dark:bg-gray-6"
              ></motion.div>
            </div>

            {/* Experience Card */}
            <motion.div custom={index} initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }} className="flex-1 mb-5">
              <div className="bg-gradient-to-t from-gray-1 to-whitee hover:from-gray-2 hover:to-whitee dark:from-gray-8 dark:to-gray-9 dark:hover:from-gray-7 dark:hover:to-gray-9 rounded-lg p-6 border border-gray-2 dark:border-gray-7">
                <div className="flex items-start space-x-4">
                  <img src={exp.logo} className="w-7 object-contain mt-[3px]" alt="" />

                  <div className="flex-1 relative">
                    <span className="absolute top-0 right-0 text-sm text-gray-4 hidden sm:block">{exp.location}</span>

                    <h4 className="text-lg  text-gray-9 dark:text-whitee mb-1">{exp.position}</h4>
                    <p className="text-blue-4 dark:text-blue-3 mb-2">{exp.company}</p>
                    <p className="text-gray-6 dark:text-gray-4 mb-2 block sm:hidden">{exp.location}</p>

                    <div className="flex md:flex-row flex-col md:items-center space-x-2 mb-5">
                      <p className="text-sm text-gray-6 dark:text-gray-4 ">{exp.year}</p>
                      <div className="flex md:flex-row md:pt-0 pt-4 flex-col gap-2">
                        <p className="text-[12px] text-gray-5 dark:text-gray-4">{exp.time}</p>
                        <p className="text-[12px] text-gray-5 dark:text-gray-4">{exp.pos}</p>
                        <p className="text-[12px] text-gray-5 dark:text-gray-4">{exp.workfrom}</p>
                      </div>
                    </div>

                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="text-sm font-medium text-gray-5 dark:text-gray-4 flex items-center gap-1 hover:text-gray-7 dark:hover:text-gray-3 transition-all">
                            {open ? 'Hide responsibilities' : 'Show responsibilities'}
                            <ChevronDownIcon className={`w-4 h-4 mt-[2px] transition-transform duration-200 ${open ? 'rotate-0' : 'rotate-[-90deg]'}`} />
                          </Disclosure.Button>

                          <Transition
                            as={Disclosure.Panel}
                            enter="transition duration-300 ease-out"
                            enterFrom="opacity-0 -translate-y-2"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition duration-200 ease-in"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-2"
                          >
                            <ul className="list-disc ml-5 text-gray-6 dark:text-gray-3 mt-3">
                              {exp.description.split('\n').map((line, i) => (
                                <li key={i} className="mb-2 leading-tight">
                                  {line.replace(/^•\s*/, '')}
                                </li>
                              ))}
                            </ul>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
