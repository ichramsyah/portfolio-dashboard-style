import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { svgIcons } from './svgIcons'; // Pastikan path ini benar

gsap.registerPlugin(ScrollTrigger);

// Data kartu tetap sama
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

      // Atur tumpukan kartu di awal
      gsap.set(cards, {
        // Posisikan semua kartu di tengah
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
          end: `+=${(cardData.length - 1) * 1000}`, // Beri ruang scroll untuk setiap kartu
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animasi untuk membuang kartu dan memajukan kartu berikutnya
      cards.slice(0, -1).forEach((card, index) => {
        const nextCard = cards[index + 1];

        // Atur posisi awal kartu berikutnya (sedikit di bawah dan lebih kecil)
        gsap.set(nextCard, {
          scale: 0.95,
          yPercent: -45, // Sedikit lebih tinggi agar muncul dari balik kartu atas
          zIndex: cardData.length - (index + 1),
        });

        timeline
          // Animasikan kartu saat ini (kartu atas) keluar layar
          .to(
            card,
            {
              yPercent: -150, // Terbang ke atas
              rotation: 15,
              duration: 0.7,
              ease: 'power2.in',
            },
            `card-${index}`
          )
          // Animasikan kartu berikutnya maju ke tengah
          .to(
            nextCard,
            {
              yPercent: -50, // Kembali ke posisi tengah vertikal
              scale: 1,
              duration: 0.7,
              ease: 'power2.out',
            },
            `card-${index}`
          ); // Mulai di waktu yang sama
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Container utama untuk pinning dan background
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden">
           {' '}
      {cardData.map((card, index) => (
        <section
          key={card.id}
          // Tambahkan ${card.bg} di sini:
          className={`card-item absolute grid grid-cols-[2.5fr_1fr] items-center overflow-hidden p-6 bg-gradient-to-b ${card.bg} rounded-2xl border border-white/10 w-11/12 md:w-4/5 lg:w-[700px] h-[70vh] max-h-[450px]`}
          style={{ zIndex: cardData.length - index }}
        >
                    {/* Konten kartu tetap sama */}          <div className={`absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-white/10`}>{card.bgIcon}</div>         {' '}
          <div className={`z-10 flex flex-col gap-y-2 ${card.text}`}>
                        <h4 className="text-lg font-semibold">{card.title}</h4>            <p className="text-xs pb-2">{card.desc}</p>           {' '}
            <a href={card.link} target="_blank" rel="noopener noreferrer" className={`${card.btn} rounded-md px-4 py-2 transition md:w-max`}>
                           {' '}
              <div className="flex items-center gap-x-2 text-black">
                                <p className="text-sm font-medium">Go to {card.label}</p>                {svgIcons.common}             {' '}
              </div>
                         {' '}
            </a>
                     {' '}
          </div>
                   {' '}
          <div className="flex items-end justify-end">
                        <div className={`rounded-2xl border-8 p-2 text-white ${card.border}`}>{card.icon}</div>         {' '}
          </div>
                 {' '}
        </section>
      ))}
         {' '}
    </div>
  );
};

export default SocialCards;
