import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero w-full bg-white">
      {/* Video Container */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/video-poster.png"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--blue-accent)]/10 flex items-center justify-center">
              <svg className="w-10 h-10 text-[var(--blue-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-[var(--medium-gray)] font-body">Lex Launch Crew</p>
          </div>
        </div>
      </video>

      {/* 
        NOTE: Video Poster Frame
        ------------------------
        The poster image (/video-poster.jpg) should be replaced before launch.
        Recommended specs:
        - Resolution: 1920x1080 or 1280x720
        - Format: JPG or WebP
        - Content: First frame of video or branded still with Lex logo
        - File size: < 200KB for fast loading
        
        TODO: Replace /video-poster.jpg with final branded poster image
      */}
    </div>

    {/* Tagline */}
    <div className="text-center px-6 mt-12 md:mt-12">
      <h1 className="hero-tagline max-w-4xl mx-auto">
        From zero to one, together. You build. Lex handles business.
      </h1>
    </div>

    {/* Scroll Indicator */}
    <div className="scroll-indicator flex justify-center mt-8 mb-8">
      <ChevronDown className="w-6 h-6 text-[var(--medium-gray)] animate-bounce" />
    </div>
  </section>
  );
}
