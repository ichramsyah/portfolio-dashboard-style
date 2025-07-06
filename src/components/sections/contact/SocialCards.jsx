import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { svgIcons } from './svgIcons';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 'gmail',
    title: 'Stay in Touch',
    desc: 'Reach out via email for any inquiries or collaborations.',
    bg: 'from-red-700 to-red-900',
    text: 'text-red-300',
    icon: svgIcons.gmail.iconGmail,
    bgIcon: svgIcons.gmail.bgGmail,
    btn: 'bg-red-300/80 hover:bg-red-300',
    border: 'border-red-300/20',
    link: 'mailto:ichramsyahabdurrachman@gmail.com',
    label: 'Gmail',
  },
  {
    id: 'instagram',
    title: 'Follow My Journey',
    desc: 'Stay updated with my latest posts and stories on Instagram.',
    bg: 'from-purple-700 via-pink-500 to-orange-500',
    text: 'text-purple-200',
    icon: svgIcons.instagram.iconInstagram,
    bgIcon: svgIcons.instagram.bgInstagram,
    btn: 'bg-purple-200/80 hover:bg-purple-200',
    border: 'border-purple-200/20',
    link: 'https://www.instagram.com/ichramabdr/',
    label: 'Instagram',
  },
  {
    id: 'linkedin',
    title: "Let's Connect",
    desc: 'Connect for collaboration or explore my professional experience.',
    bg: 'from-sky-700 to-sky-900',
    text: 'text-sky-300',
    icon: svgIcons.linkedIn.iconLinkedIn,
    bgIcon: svgIcons.linkedIn.bgLinkedin,
    btn: 'bg-sky-300/80 hover:bg-sky-300',
    border: 'border-sky-300/20',
    link: 'https://www.linkedin.com/in/ichramsyah-abdurrachman-49a131280/',
    label: 'LinkedIn',
  },
  {
    id: 'tiktok',
    title: 'Join the Fun',
    desc: 'Follow me on TikTok for entertaining and engaging content.',
    bg: 'from-neutral-700 to-neutral-900',
    text: 'text-neutral-400',
    icon: svgIcons.tiktok.iconTiktok,
    bgIcon: svgIcons.tiktok.bgTiktok,
    btn: 'bg-neutral-400/80 hover:bg-neutral-400',
    border: 'border-neutral-400/20',
    link: 'https://www.tiktok.com/@diakuaku/',
    label: 'TikTok',
  },
  {
    id: 'github',
    title: 'Explore the Code',
    desc: 'Explore the source code for all my projects on GitHub.',
    bg: 'from-slate-900 to-slate-950',
    text: 'text-slate-400',
    icon: svgIcons.github.iconGithub,
    bgIcon: svgIcons.github.bgGithub,
    btn: 'bg-slate-400/80 hover:bg-slate-400',
    border: 'border-slate-400/20',
    link: 'https://github.com/ichramsyah',
    label: 'GitHub',
  },
];

const SocialCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.card-item');
      const firstCard = cards[0];

      gsap.set(cards, {
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
      });

      gsap.set(firstCard, {
        zIndex: cardData.length,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${(cardData.length - 1) * 1000}`,
          scrub: 2,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.slice(0, -1).forEach((card, index) => {
        const nextCard = cards[index + 1];

        gsap.set(nextCard, {
          scale: 0.5,
          yPercent: -45,
          zIndex: cardData.length - (index + 1),
        });

        timeline

          .to(
            card,
            {
              yPercent: -145,
              scale: 0.9,
              rotation: 17,
              duration: 0.9,
              ease: 'power2.in',
            },
            `card-${index}`
          )

          .to(
            nextCard,
            {
              yPercent: -40,
              scale: 1,
              duration: 0.7,
              ease: 'power2.out',
            },
            `card-${index}`
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      viewport={{ once: true }}
      ref={containerRef}
      className="h-screen w-full relative overflow-hidden mt-[-180px]"
    >
      {cardData.map((card, index) => (
        <section
          key={card.id}
          className={`card-item absolute grid grid-cols-[2.5fr_1fr] items-center overflow-hidden p-6 bg-gradient-to-b ${card.bg} shadow-md rounded-2xl border border-white/10 w-full h-[40vh] max-h-[450px]`}
          style={{ zIndex: cardData.length - index }}
        >
          <div className={`absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-white/10 bg-icon`}>{card.bgIcon}</div>
          <div className={`z-1 flex flex-col gap-y-2 ${card.text}`}>
            <h4 className="text-xl font-semibold">{card.title}</h4> <p className="text-xs pb-2">{card.desc}</p>
            <a href={card.link} target="_blank" rel="noopener noreferrer" className={`${card.btn} rounded-md px-4 py-2 transition md:w-max`}>
              <div className="flex items-center gap-x-2 text-black">
                <p className="text-sm font-medium">Go to {card.label}</p> {svgIcons.common}
              </div>
            </a>
          </div>
          <div className="flex items-end justify-end">
            <div className={`rounded-2xl border-8 p-2 text-white ${card.border}`}>{card.icon}</div>
          </div>
        </section>
      ))}
    </motion.div>
  );
};

export default SocialCards;
