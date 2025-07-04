import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Observer, TextPlugin);

const SocialCards = () => {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);
  const textRef = useRef(null);
  const stackingRef = useRef(null);
  const scrollytellingRef = useRef(null);

  // SVG Icons (simplified versions)
  const svgIcons = {
    gmail: {
      iconGmail: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819L12 8.773l6.545-4.952h3.819c.904 0 1.636.732 1.636 1.636z" />
        </svg>
      ),
      bgGmail: (
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819L12 8.773l6.545-4.952h3.819c.904 0 1.636.732 1.636 1.636z" />
        </svg>
      ),
    },
    instagram: {
      iconInstagram: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      bgInstagram: (
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    linkedin: {
      iconLinkedIn: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      bgLinkedin: (
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    github: {
      iconGithub: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      bgGithub: (
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    common: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
        <path d="M5 5v14h14v-7l-2 2v3H7V7h3l2-2H5z" />
      </svg>
    ),
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. ScrollTrigger - Basic entrance animations
      gsap.from('.social-card', {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.social-cards-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // 2. Observer - Detect scroll interactions
      Observer.create({
        target: window,
        type: 'scroll',
        onUp: () => {
          gsap.to('.scroll-indicator', {
            rotation: 0,
            duration: 0.3,
          });
        },
        onDown: () => {
          gsap.to('.scroll-indicator', {
            rotation: 180,
            duration: 0.3,
          });
        },
      });

      // 3. Parallax Effect
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // 4. Text Animation per letter
      const textElements = document.querySelectorAll('.animate-text');
      textElements.forEach((element) => {
        const text = element.textContent;
        element.innerHTML = text
          .split('')
          .map((char) => (char === ' ' ? '<span>&nbsp;</span>' : `<span>${char}</span>`))
          .join('');

        gsap.from(element.querySelectorAll('span'), {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // 5. Scrubbing - Animation tied to scroll progress
      gsap.to('.scrub-element', {
        rotation: 360,
        scale: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.scrub-container',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });

      // 6. Sticky Stacking Cards
      const stackCards = document.querySelectorAll('.stack-card');
      stackCards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 20%',
          end: 'bottom 20%',
          onEnter: () => {
            gsap.to(card, {
              scale: 1,
              opacity: 1,
              rotationY: 0,
              duration: 0.8,
              ease: 'power2.out',
            });
          },
          onLeave: () => {
            gsap.to(card, {
              scale: 0.8,
              opacity: 0.7,
              rotationY: -15,
              duration: 0.5,
              ease: 'power2.in',
            });
          },
          onEnterBack: () => {
            gsap.to(card, {
              scale: 1,
              opacity: 1,
              rotationY: 0,
              duration: 0.8,
              ease: 'power2.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              scale: 0.8,
              opacity: 0.7,
              rotationY: 15,
              duration: 0.5,
              ease: 'power2.in',
            });
          },
        });
      });

      // 7. Scrollytelling - Different animations for each section
      const scrollytellingSections = [
        {
          trigger: '.story-section-1',
          animation: () => {
            gsap.from('.story-section-1 .content', {
              opacity: 0,
              x: -100,
              duration: 1,
              ease: 'power2.out',
            });
            gsap.from('.story-section-1 .icon', {
              opacity: 0,
              scale: 0,
              rotation: 180,
              duration: 1.2,
              delay: 0.3,
              ease: 'back.out(1.7)',
            });
          },
        },
        {
          trigger: '.story-section-2',
          animation: () => {
            gsap.from('.story-section-2 .content', {
              opacity: 0,
              y: 100,
              duration: 1,
              ease: 'power2.out',
            });
            gsap.from('.story-section-2 .background', {
              opacity: 0,
              scale: 1.5,
              duration: 1.5,
              ease: 'power2.out',
            });
          },
        },
        {
          trigger: '.story-section-3',
          animation: () => {
            gsap.from('.story-section-3 .content', {
              opacity: 0,
              rotationY: 90,
              duration: 1,
              ease: 'power2.out',
            });
            gsap.from('.story-section-3 .particles', {
              opacity: 0,
              scale: 0,
              duration: 1,
              stagger: 0.1,
              ease: 'back.out(1.7)',
            });
          },
        },
      ];

      scrollytellingSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section.trigger,
          start: 'top 70%',
          onEnter: section.animation,
          onEnterBack: section.animation,
        });
      });

      // Pin sections for scrollytelling
      ScrollTrigger.create({
        trigger: '.scrollytelling-container',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.scrollytelling-content',
        pinSpacing: false,
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-900 text-white">
      {/* Scroll Indicator */}
      <div className="fixed top-4 right-4 z-50 scroll-indicator">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>

      {/* Hero Section with Parallax */}
      <div className="parallax-container relative h-screen flex items-center justify-center overflow-hidden">
        <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4 animate-text">Social Connect</h1>
          <p className="text-xl animate-text">Discover amazing animations with GSAP</p>
        </div>
      </div>

      {/* Main Social Cards Section */}
      <div className="social-cards-container p-8">
        <h2 className="text-4xl font-bold text-center mb-12 animate-text">Connect With Me</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Gmail Card */}
          <div className="social-card relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md p-6 md:col-span-2 bg-gradient-to-b from-red-700 to-red-900">
            <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/10">{svgIcons.gmail.bgGmail}</div>
            <div className="text-red-300 z-10 flex flex-col justify-between gap-y-2">
              <h4 className="text-lg font-semibold tracking-wide">Stay in Touch</h4>
              <p className="pb-2 text-xs">Reach out via email for any inquiries or collaborations.</p>
              <a href="mailto:ichramsyahabdurrachman@gmail.com" className="bg-red-300/80 hover:bg-red-300 rounded-md px-4 py-2 transition duration-100 md:w-max">
                <div className="flex items-center justify-center gap-x-2 text-black">
                  <p className="text-sm font-medium">Go to gmail</p>
                  {svgIcons.common}
                </div>
              </a>
            </div>
            <div className="flex items-end justify-end">
              <div className="rounded-2xl border-8 p-2 text-neutral-50 bg-transparent border-red-300/20">{svgIcons.gmail.iconGmail}</div>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="social-card relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md p-6 bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500">
            <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/10">{svgIcons.instagram.bgInstagram}</div>
            <div className="text-purple-200 z-10 flex flex-col justify-between gap-y-2">
              <h4 className="text-lg font-semibold tracking-wide">Follow My Journey</h4>
              <p className="pb-2 text-xs">Stay updated with my latest posts and stories on Instagram.</p>
              <a href="https://www.instagram.com/ichramabdr/" className="bg-purple-200/80 hover:bg-purple-200 rounded-md px-4 py-2 transition duration-200 md:w-max">
                <div className="flex items-center justify-center gap-x-2 text-black">
                  <p className="text-sm font-medium">Go to instagram</p>
                  {svgIcons.common}
                </div>
              </a>
            </div>
            <div className="flex items-end justify-end">
              <div className="rounded-2xl border-8 p-2 text-neutral-50 bg-transparent border-purple-200/20">{svgIcons.instagram.iconInstagram}</div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="social-card relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md p-6 bg-gradient-to-b from-sky-700 to-sky-900">
            <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/10">{svgIcons.linkedin.bgLinkedin}</div>
            <div className="text-sky-300 z-10 flex flex-col justify-between gap-y-2">
              <h4 className="text-lg font-semibold tracking-wide">Let's Connect</h4>
              <p className="pb-2 text-xs">Connect for collaboration or explore my professional experience.</p>
              <a href="https://www.linkedin.com/in/ichramsyah-abdurrachman-49a131280/" className="bg-sky-300/80 hover:bg-sky-300 rounded-md px-4 py-2 transition duration-200 md:w-max">
                <div className="flex items-center justify-center gap-x-2 text-black">
                  <p className="text-sm font-medium">Go to linkedin</p>
                  {svgIcons.common}
                </div>
              </a>
            </div>
            <div className="flex items-end justify-end">
              <div className="rounded-2xl border-8 p-2 text-neutral-50 bg-transparent border-sky-300/20">{svgIcons.linkedin.iconLinkedIn}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrubbing Animation Section */}
      <div className="scrub-container h-screen flex items-center justify-center bg-gradient-to-r from-green-900 to-blue-900">
        <div className="scrub-element w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">{svgIcons.github.iconGithub}</div>
      </div>

      {/* Sticky Stacking Cards */}
      <div className="py-20 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 animate-text">Sticky Stack Demo</h2>

        <div className="space-y-4 max-w-4xl mx-auto px-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="stack-card sticky top-20 h-96 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg p-8 flex items-center justify-center transform scale-90 opacity-70" style={{ zIndex: 10 - num }}>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Card {num}</h3>
                <p className="text-lg opacity-90">This is a sticky stacking card with GSAP animations</p>
                <div className="mt-6 w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold">{num}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollytelling Section */}
      <div className="scrollytelling-container bg-black">
        <div className="scrollytelling-content min-h-screen">
          {/* Story Section 1 */}
          <div className="story-section-1 h-screen flex items-center justify-center p-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="content">
                <h2 className="text-5xl font-bold mb-6 text-blue-400">Chapter 1</h2>
                <p className="text-xl leading-relaxed">The journey begins with a simple idea. Every great social platform started with connecting people in meaningful ways.</p>
              </div>
              <div className="icon flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">{svgIcons.common}</div>
              </div>
            </div>
          </div>

          {/* Story Section 2 */}
          <div className="story-section-2 h-screen flex items-center justify-center p-8 relative">
            <div className="background absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg"></div>
            <div className="content relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-6 text-pink-400">Chapter 2</h2>
              <p className="text-xl leading-relaxed mb-8">Through innovation and creativity, we build bridges between communities, fostering connections that span the globe.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="particles w-16 h-16 bg-pink-500/30 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{num}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story Section 3 */}
          <div className="story-section-3 h-screen flex items-center justify-center p-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="content">
                <h2 className="text-5xl font-bold mb-6 text-green-400">Chapter 3</h2>
                <p className="text-xl leading-relaxed mb-8">The future of social connection is here. Join us in creating a more connected world.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="particles h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold">Step {num}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final GitHub Section */}
      <div className="social-card relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md p-6 m-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/10">{svgIcons.github.bgGithub}</div>
        <div className="text-slate-400 z-10 flex flex-col justify-between gap-y-2">
          <h4 className="text-lg font-semibold tracking-wide animate-text">Explore the Code</h4>
          <p className="pb-2 text-xs">Explore the source code for all my projects on GitHub.</p>
          <a href="https://github.com/ichramsyah" className="bg-slate-400/80 hover:bg-slate-400 rounded-md px-4 py-2 transition duration-100 md:w-max">
            <div className="flex items-center justify-center gap-x-2 text-black">
              <p className="text-sm font-medium">Go to github</p>
              {svgIcons.common}
            </div>
          </a>
        </div>
        <div className="flex items-end justify-end">
          <div className="rounded-2xl border-8 p-2 text-neutral-50 bg-transparent border-slate-400/20">{svgIcons.github.iconGithub}</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-center">
        <div className="animate-text">
          <h3 className="text-2xl font-bold mb-4">Thanks for Scrolling!</h3>
          <p className="text-gray-400">Built with React, GSAP, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default SocialCards;
