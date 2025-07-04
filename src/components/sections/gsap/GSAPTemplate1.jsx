import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.scrub-element', {
        scale: 3, // Bigger
        ease: 'none',
        scrollTrigger: {
          trigger: '.scrub-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="scrollytelling-container relative">
      <div className="scrollytelling-content">
        {/* Chapter 1 - Scrubbing */}
        <section className="scrub-container h-[300vh] relative">
          <div className="scrub-element sticky top-1/2 right-1/2 transform -translate-y-1/2 w-32 h-32 bg-yellow-400  flex items-center justify-center text-black font-bold text-xl">Chapter 1</div>
        </section>
      </div>
    </div>
  );
};

export default GsapSection;
