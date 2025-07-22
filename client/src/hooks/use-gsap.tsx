import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export function useGSAP() {
  const gsap = typeof window !== 'undefined' ? window.gsap : null;
  const ScrollTrigger = typeof window !== 'undefined' ? window.ScrollTrigger : null;

  useEffect(() => {
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, [gsap, ScrollTrigger]);

  return { gsap, ScrollTrigger };
}

export function useFadeIn(trigger?: string) {
  const { gsap, ScrollTrigger } = useGSAP();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsap || !ScrollTrigger || !ref.current) return;

    const element = ref.current;
    
    gsap.set(element, { opacity: 0, y: 30 });
    
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    return () => {
      animation.kill();
    };
  }, [gsap, ScrollTrigger, trigger]);

  return ref;
}

export function useParallax(speed: number = 0.5) {
  const { gsap, ScrollTrigger } = useGSAP();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsap || !ScrollTrigger || !ref.current) return;

    const element = ref.current;
    
    const animation = gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      animation.kill();
    };
  }, [gsap, ScrollTrigger, speed]);

  return ref;
}
