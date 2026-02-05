import { useEffect, useState, useRef } from 'react';

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find the hero section
    heroRef.current = document.querySelector('.hero');

    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show nav when hero is NOT intersecting (scrolled past)
          setIsVisible(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px 0px 0px',
      }
    );

    observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container-wide h-full flex items-center justify-between">
        {/* Logo */}
        <div className="font-heading font-bold text-xl text-[var(--near-black)]">
          LEX
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="font-body text-sm text-[var(--near-black)] hover:text-[var(--blue-accent)] hover:underline transition-colors"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection('join-launch-crew')}
            className="font-body text-sm text-[var(--near-black)] hover:text-[var(--blue-accent)] hover:underline transition-colors"
          >
            Join Launch Crew
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" aria-label="Menu">
          <svg
            className="w-6 h-6 text-[var(--near-black)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
