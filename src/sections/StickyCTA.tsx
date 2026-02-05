import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past hero (roughly 70vh + some buffer)
      const heroHeight = window.innerHeight * 0.75;
      const scrollY = window.scrollY;
      
      if (scrollY > heroHeight && !isDismissed) {
        setIsVisible(true);
      } else if (scrollY <= heroHeight) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const scrollToPricing = () => {
    const element = document.getElementById('join-launch-crew');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`
        fixed bottom-0 left-0 right-0 z-50 
        bg-white/95 backdrop-blur-md 
        border-t border-[var(--border-gray)]
        shadow-[0_-4px_20px_rgba(0,0,0,0.1)]
        transform transition-all duration-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Left side - Message */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex w-10 h-10 rounded-full bg-[var(--blue-accent)]/10 items-center justify-center">
            <span className="text-[var(--blue-accent)] text-lg">🚀</span>
          </div>
          <div>
            <p className="font-heading font-semibold text-[var(--near-black)] text-sm sm:text-base">
              Join early access now!
            </p>
            <p className="text-xs sm:text-sm text-[var(--medium-gray)] hidden sm:block">
              Limited founding member spots available
            </p>
          </div>
        </div>

        {/* Right side - CTA Button */}
        <div className="flex items-center gap-3">
          <Button
            onClick={scrollToPricing}
            className="btn-primary px-6 animate-pulse hover:animate-none"
          >
            Get Started
          </Button>
          <button
            onClick={handleDismiss}
            className="p-2 rounded-full hover:bg-[var(--light-gray)] transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5 text-[var(--medium-gray)]" />
          </button>
        </div>
      </div>
    </div>
  );
}
